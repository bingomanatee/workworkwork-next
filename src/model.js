import createBase, { constants } from '@wonderlandlabs/carpenter';
import * as carpParts from '@wonderlandlabs/carpenter';
import axios from 'axios';
import { create } from '@wonderlandlabs/collect';

console.log('--- constants:', constants);
const { binaryOperator } = constants;

const makeModel = () => createBase([
  { name: 'task_types', data: [], key: 'id' },
  { name: 'task_types--new', data: [] },
  { name: 'task_types---children', data: [] },
  { name: 'tasks', data: [], key: 'id' },
  { name: 'tasks--new', data: [] },
]);

export default (apiRoot = 'http://localhost:3000') => {
  const base = makeModel();

  const TASK_TYPE_ROOT = `${apiRoot}/task-types`;

  const model = {
    apiRoot,
    newTypeId: null,
    newTaskTypeKey: null,
    taskTypes() {
      return base.table('task_types').data.items;
    },
    makeNewTaskType: () => base.table('task_types---new')
      .addData({ name: '', notes: '' }),
    initNewTaskType() {
      base.table('task_types--children').updateData(create([]));
      const record = model.makeNewTaskType();
      model.newTaskTypeKey = record.key;
      return record;
    },
    getNewTaskType() {
      return model.newTaskTypeKey ?
        base.table('tasks--new')
          .recordForKey(model.newTaskTypeKey)
        : null;
    },
    updateNewTaskType(data) {
      if (model.newTaskTypeKey) {
        base.table('tasks--new')
          .addData({ ...data }, { key: model.newTaskTypeKey });
      }
    },
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
    promoteTaskType(id) {
      return axios.patch(TASK_TYPE_ROOT, {
        id,
        action: 'promote',
      })
        .then(() => model.pollTaskTypes());
    },
    demoteTaskType(id) {
      return axios.patch(TASK_TYPE_ROOT, {
        id,
        action: 'demote',
      })
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
    addChildTaskType(id, name, notes) {
      axios.post(TASK_TYPE_ROOT,
        {
          name,
          notes,
          parent_id: id,
        });
    },
    createTaskType: (data) => {
      if (model.hasTaskType(data.name)) {
        throw new Error('already exists');
      }

      if (data.parent_id) {
        const peers = model.ttChildrenFor(data.parent_id);
        if (peers && peers.length) {
          console.log('--- peers:', peers);
          const maxOrder = Math.max(...peers.map((r) => r.data.order));
          if (Number.isNaN(maxOrder)) {
            data.order = 1;
          } else {
            data.order = maxOrder + 1;
          }
          console.log('order set:', data);
        }
      }

      return axios.post(TASK_TYPE_ROOT, data)
        .then(() => {
          model.pollTaskTypes();
        });
      delete model.newTaskTypeKey;
      // todo: remove from table
    },
    pollTaskTypes: () => axios.get(TASK_TYPE_ROOT)
      .then((response) => {
        console.log('got task types: ', response.data);
        base.table('task_types').updateData(create(response.data));
      }),
    // -------- TASKS
    newTaskKey: null,
    makeNewTask: () => base.table('tasks---new').addData({ notes: '' }),
    initNewTask() {
      const record = model.makeNewTask();
      model.newTaskKey = record.key;
      console.log('new task key: ', model.newTaskKey);
      return record;
    },
    getNewTask() {
      return model.newTaskKey ?
        base.table('tasks--new')
          .recordForKey(model.newTaskKey)
        : null;
    },
    updateNewTask(data) {
      if (model.newTaskKey) {
        base.table('tasks--new')
          .addData({ ...data }, { key: model.newTaskKey });
      }
    },
    createTask: (data) => {
      if (typeof data.task_type_id === 'object') {
        data.task_type_id = data.task_type_id.id;
      }
      axios.post(`${model.apiRoot}/tasks`, data)
        .then(() => {
          model.pollTasks();
        });
    },
    pollTasks: () => axios.get(`${model.apiRoot}/tasks`)
      .then((response) => {
        base.table('tasks').updateData(create(response.data));
      }),
    base,
  };

  return model;
};
