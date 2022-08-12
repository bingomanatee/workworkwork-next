import { createBase, constants } from '@wonderlandlabs/carpenter';
import axios from 'axios';
import { create, enums } from '@wonderlandlabs/collect';
import { geoToH3, getRes0Indexes, h3ToChildren } from 'h3-js';

const { TypeEnum } = enums;
const { binaryOperator, joinFreq } = constants;


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
        location.hindex = null;
      } else {
        location.hindex = geoToH3(location.latitude, location.longitude, 2);
      }

      return location;
    },
  },
  {
    name: 'tasks-info', key: 'id',
  },
  {
    name: 'hexes', key: 'hindex', dataCreator: (table, input) => ({
      ...input,
      countryShares: new Map(),
    }),
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
        key: 'hindex',
        frequency: joinFreq.noneOrMore,
      },
      name: 'locHexes',
    },
  ],
});

export default (API_ROOT = 'http://localhost:3000') => {
  const base = makeModel();
  const hexTable = base.table('hexes');
  hexTable.data.forEach((hex) => {
    const childIndexes = h3ToChildren(hex.hindex, 2);
    childIndexes.forEach(hindex => {
      hexTable.add({ hindex, level: 2 });
    });
  });

  const TASK_TYPE_ROOT = `${API_ROOT}/task-types`;
  const TASK_ROOT = `${API_ROOT}/tasks`;

  const hexesUrl = (...args) => [API_ROOT, 'hexes', ...args].join('/');
  const taskTypeUrl = (...args) => [TASK_TYPE_ROOT, ...args].join('/');
  const taskUrl = (...args) => [TASK_ROOT, ...args].join('/');

  const model = {
    apiRoot: API_ROOT,
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

    sendCurrentHexShare(iso3, hindex, share, max) {
      if (share) {
        axios.patch(hexesUrl(hindex), {
          iso3,
          strength: share / max,
        });
      }
    },

    nearBounds(center, bounds) {
      const west = bounds[0].ln - 2;
      const east = bounds[1].ln + 2;
      const south = bounds[1].lt - 2;
      const north = bounds[0].lt + 2;
      const { lt, ln } = center;
      const match = ln >= west && ln <= east && lt >= south && lt <= north;
      return match;
    },

    hexStrength(hex, iso3) {
      const hexBase = hex.data.countryShares.get('_BASE_') || 1;
      const share = hex.data.countryShares.get(iso3) || 0;

      if (hexBase <= 0 || share <= 0) {
        return 0;
      }
      return share / hexBase;
    },

    findHexesAround(countryData) {
      return base.table('hexes').query({
        tableName: 'hexes',
        where: (record) => {
          if (record.data.level !== 3) {
            return false;
          }
          return this.nearBounds({ ln: record.data.longitude, lt: record.data.latitude }, countryData.boundary);
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
    pollHexes: () => axios.get(hexesUrl('level', 3))
      .then((response) => {

        base.table('hexes').addMany(response.data);
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
    pollCountries() {
      axios.get(`${model.apiRoot}/countries`)
        .then((response) => {
          base.table('countries').addMany(response.data);
        });
    },
  };

  return model;
};
