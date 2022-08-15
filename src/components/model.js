import { createBase, constants } from '@wonderlandlabs/carpenter';
import axios from 'axios';
import { create, enums } from '@wonderlandlabs/collect';
import { geoToH3, getRes0Indexes, h3ToChildren } from 'h3-js';
import dayjs from 'dayjs';
import Color from 'colorjs.io';

const { TypeEnum } = enums;
const { binaryOperator, joinFreq } = constants;
const PIVOT_DATE_FORMAT = 'DD/MM/YYYY';

export const BLACK = new Color('p3', [0, 0.2, 0]);
const THOUSANDCOLOR = new Color('p3', [0, 0, 0.333])
const TENTHOUSANDCOLOR = new Color('p3', [0, 0.5, 0.333])
const HUNDREDTHOUSANDCOLOR = new Color('p3', [0.75, 0.75, 0]);
const BILLIONCOLOR = new Color('p3', [1, 0.5, 0]);
const WHITE = new Color('p3', [1, 1, 1]);
const SPACE = { space: 'lch', outputSpace: 'srgb' };

const range1000 = BLACK.range(THOUSANDCOLOR, SPACE);
const range10k = THOUSANDCOLOR.range(TENTHOUSANDCOLOR, SPACE);
const range100k = TENTHOUSANDCOLOR.range(HUNDREDTHOUSANDCOLOR, SPACE);
const range1b = HUNDREDTHOUSANDCOLOR.range(BILLIONCOLOR, SPACE);

class FieldSummary {
  constructor(table1, info) {
    const { iso3, data, date, field, st, offset } = info;
    this.iso3 = iso3;
    this.date = dayjs(date, PIVOT_DATE_FORMAT);
    this.st = dayjs(st, PIVOT_DATE_FORMAT);
    this.data = data;
    this.field = field;
    this.offset = offset;
  }
}

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
    name: 'geojson',
  },
  {
    name: 'pivots', dataCreator(table, info) {
      return new FieldSummary('table', info);
    },
    keyProvider: (record) => {
      return `${record.iso3}-${record.field}`
    }
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

const API_ROOT = 'http://54.149.3.112/' // : 'http://localhost:3000';

export default () => {
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
  const countryUrl = (...args) => [API_ROOT, 'countries', ...args].join('/');
  const pivotUrl = (...args) => [API_ROOT, 'pivot-summary/summary', ...args].join('/');

  const ranges = [
    { max: 10 ** 2, range: range1000 },
    { max: 10 ** 4, range: range10k },
    { max: 10 ** 5, range: range100k },
    { max: 10 ** 6, range: range1b },
  ]

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

    valueToColor(n) {
      for (let index = 0; index < ranges.length; ++index) {
        let { max, range } = ranges[index]
        if (n <= max) {
          let min = index ? ranges[index - 1].max  : 0;
          const color = range((n - min) / (max - min));

          return color;
        }
      }
      return WHITE
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

    getField(field) {
      return axios.get(pivotUrl(field))
        .then((result) => {
          const records = result.data.map(p => {
            return { ...p, field };
          });
          base.table('pivots').addMany(records);
          return base.table('pivots').query({
            tableName: 'pivots',
            where: {
              field: 'field',
              test: binaryOperator.eq,
              against: field
            }
          })
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
      return axios.get(`${model.apiRoot}/locations`)
        .then((response) => {
          base.table('locations').addMany(response.data);
        });
    },
    pollCountries() {
      return axios.get(`${model.apiRoot}/countries`)
        .then((response) => {
          base.table('countries').addMany(response.data);
        });
    },
    getGeoJson() {
      return axios.get(countryUrl('geojson'))
        .then(({ data }) => {
          base.table('geojson').addMany(data.features);
          console.log('--- geojson saved:', base.table('geojson').data);
          const q = base.table('geojson').query({ tableName: 'geojson' });
          return q.map(({ data }) => data);
        });
    },
  };

  return model;
};
