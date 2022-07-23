import createBase, { constants } from '@wonderlandlabs/carpenter';
import axios from 'axios';

const { binaryOperator } = constants;

const infoTemplate = { childTasks: 0, childEvents: 0, totalChildTasks: 0, totalChildEvents: 0 };
const makeModel = () => createBase([
  {
    name: 'task_types',
    data: [],
    key: 'id',
  },
  {
    name: 'tasks', data: [], key: 'id',
  },
  {
    name: 'tasks-info', key: 'id', data: [], dataCreator: (table, data) => ({ ...infoTemplate, ...data }),
  },
]);

export default (apiRoot = 'http://localhost:3000') => {
  const base = makeModel();

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
      let children = this.taskChildrenFor(id);
      return children.reduce((count, child) => {
        return count + 1 + this.taskChildrenCount(child.key);
      }, 0);
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
    saveTask(data, id) {
      const url = id ? taskUrl(id) : taskUrl();
      return (id ? axios.patch(url) : axios.post(url, data))
        .then(() => model.pollTasks());
    },
    base,
  };

  return model;
};
