import { createBase, constants } from '@wonderlandlabs/carpenter';
import axios from 'axios';
import { create, enums } from '@wonderlandlabs/collect';
import { geoToH3, getRes0Indexes, h3ToChildren } from 'h3-js';
import Hex from './Hex';

const { TypeEnum  } = enums;
const { binaryOperator, joinFreq  } = constants;

const hexes = getRes0Indexes().map((hIndex) => ({
    hIndex, level: 0,
  }));


const makeModel = () => createBase([
  {
    name: 'task_types',
    key: 'id',
  },
  {
    name: 'tasks', data: [], key: 'id',
  },
  {
    name: 'locations',
    key: 'uid',
    dataCreator: (table, location) => {
      if (!(create(location.latitude).type === TypeEnum.number && create(location.longitude).type === TypeEnum.number)) {
        location.hIndex = null;
      } else {
        location.hIndex = geoToH3(location.latitude , location.longitude, 2);
      }

      return location;
    },
  },
  {
    name: 'tasks-info', key: 'id',
  },
  {
    name: 'hexes', key: 'hIndex', data: hexes, dataCreator: (table, input) => new Hex(input),
  },
  { name: 'countries', key: 'iso3' },
], {
  joins: [
    {
      from: {
        tableName: 'hexes',
        frequency: joinFreq.noneOrOne,
      },
      to: {
        tableName: 'locations',
        key: 'hIndex',
        frequency: joinFreq.noneOrMore,
      },
      name: 'locHexes',
    },
  ],
});

export default (apiRoot = 'http://localhost:3000') => {
  const base = makeModel();
  const hexTable = base.table('hexes');
  hexTable.data.forEach((hex) => {
    const childIndexes = h3ToChildren(hex.hIndex, 2);
    childIndexes.forEach(hIndex => {
      hexTable.add({ hIndex, level: 2 });
    });
  });

  const TASK_TYPE_ROOT = `${apiRoot}/task-types`;
  const TASK_ROOT = `${apiRoot}/tasks`;

  const taskTypeUrl = (...args) => [TASK_TYPE_ROOT, ...args].join('/');
  const taskUrl = (...args) => [TASK_ROOT, ...args].join('/');

  const model = {
    apiRoot,
    newTypeId: null,
    newTaskTypeKey: null,
    ttChildrenFor(id) {
      return base.query({
        tableName: 'task_types',
        where: {
          field: 'parent_id',
          test: binaryOperator.eq,
          against: id,
        },
      });
    },

    taskChildrenCount(id) {
      const children = this.taskChildrenFor(id);
      return children.reduce((count, child) => count + 1 + this.taskChildrenCount(child.key), 0);
    },

    taskChildrenFor(id) {
      return base.query({
        tableName: 'tasks',
        where: {
          field: 'parent_task_id',
          test: binaryOperator.eq,
          against: id,
        },
      });
    },
    promoteTaskType(id) {
      return axios.put(taskTypeUrl(id, 'promote'))
        .then(() => model.pollTaskTypes());
    },
    demoteTaskType(id) {
      return axios.put(`${TASK_TYPE_ROOT}/${id}/demote`)
        .then(() => model.pollTaskTypes());
    },
    hasTaskType(name) {
      if (!(name && typeof name === 'string')) {
        return false;
      }
      const target = name.toLowerCase();
      return !!(base.table('task_types').data.items
        .find((data) => data.name.toLowerCase() === target));
    },
    deleteTaskType: (id) => axios.delete(taskTypeUrl(id))
      .then(() => model.pollTaskTypes()),
    saveTaskType(data, id) {
      const url = id ? taskTypeUrl(id) : taskTypeUrl();
      return (id ? axios.patch(url, data) : axios.post(url, data))
        .then(() => model.pollTaskTypes());
    },
    getTaskType: (id) => axios.get(taskTypeUrl(id))
      .then((response) => {
        const { data } = response;
        if (data && !data.deleted) {
          return base.table('task_types').add(data);
        }
        return false;
      }),
    pollTaskTypes: () => axios.get(TASK_TYPE_ROOT)
      .then((response) => {

        base.table('task_types').addMany(response.data);
      }),
    // -------- TASKS
    pollTasks: () => axios.get(`${model.apiRoot}/tasks`)
      .then((response) => {
        base.table('tasks').addMany(response.data);
      }),
    patchTask(data) {
      if (!data.id) {
        throw new Error('cannot patch data without id');
      }

      delete model.newTaskTypeKey;
      return axios.patch(taskUrl(data.id), data)
        .then(() => model.pollTasks());
    },
    repeatTask(id) {
      console.log('repeating', id);
      axios.post(taskUrl(id))
        .then(() => this.pollTasks());
    },
    saveTask(data, id) {
      const url = id ? taskUrl(id) : taskUrl();
      return (id ? axios.patch(url) : axios.post(url, data))
        .then(() => model.pollTasks());
    },
    base,
    pollLocations() {
      axios.get(`${model.apiRoot}/locations`)
        .then((response) => {
          base.table('locations').addMany(response.data);
        });
    },
    pollHexes() {
      axios.get(`${model.apiRoot}/hexes`)
        .then((response) => {
          base.table('hexes').addMany(response.data);
        });
    },
    pollCountries() {
      axios.get(`${model.apiRoot}/countries`)
        .then((response) => {
          base.table('countries').addMany(response.data);
        });
    },
  };

  return model;
};
