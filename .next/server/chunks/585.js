"use strict";
exports.id = 585;
exports.ids = [585];
exports.modules = {

/***/ 585:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_model__WEBPACK_IMPORTED_MODULE_1__]);
_model__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext((0,_model__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ BLACK),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wonderlandlabs_carpenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6439);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wonderlandlabs_collect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(715);
/* harmony import */ var h3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4688);
/* harmony import */ var h3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(h3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var colorjs_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3549);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wonderlandlabs_carpenter__WEBPACK_IMPORTED_MODULE_0__, _wonderlandlabs_collect__WEBPACK_IMPORTED_MODULE_2__, colorjs_io__WEBPACK_IMPORTED_MODULE_5__]);
([_wonderlandlabs_carpenter__WEBPACK_IMPORTED_MODULE_0__, _wonderlandlabs_collect__WEBPACK_IMPORTED_MODULE_2__, colorjs_io__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  TypeEnum
} = _wonderlandlabs_collect__WEBPACK_IMPORTED_MODULE_2__.enums;
const {
  binaryOperator,
  joinFreq
} = _wonderlandlabs_carpenter__WEBPACK_IMPORTED_MODULE_0__.constants;
const PIVOT_DATE_FORMAT = 'DD/MM/YYYY';
const BLACK = new colorjs_io__WEBPACK_IMPORTED_MODULE_5__["default"]('p3', [0.05, 0, 0.01]);
const THOUSANDCOLOR = new colorjs_io__WEBPACK_IMPORTED_MODULE_5__["default"]('p3', [0, 0, 0.25]);
const TENTHOUSANDCOLOR = new colorjs_io__WEBPACK_IMPORTED_MODULE_5__["default"]('p3', [0, 0.333, 0.2]);
const HUNDREDTHOUSANDCOLOR = new colorjs_io__WEBPACK_IMPORTED_MODULE_5__["default"]('p3', [0.5, 0.5, 0]);
const BILLIONCOLOR = new colorjs_io__WEBPACK_IMPORTED_MODULE_5__["default"]('p3', [0.75, 0.125, 0.125]);
const TENBILLIONCOLOR = new colorjs_io__WEBPACK_IMPORTED_MODULE_5__["default"]('p3', [0.8, 0.8, 1]);
const WHITE = new colorjs_io__WEBPACK_IMPORTED_MODULE_5__["default"]('p3', [1, 1, 1]);
const SPACE = {
  outputSpace: 'srgb'
};
const range1000 = BLACK.range(THOUSANDCOLOR, SPACE);
const range10k = THOUSANDCOLOR.range(TENTHOUSANDCOLOR, SPACE);
const range100k = TENTHOUSANDCOLOR.range(HUNDREDTHOUSANDCOLOR, SPACE);
const range1b = HUNDREDTHOUSANDCOLOR.range(BILLIONCOLOR, SPACE);
const range10b = BILLIONCOLOR.range(TENBILLIONCOLOR, SPACE);

class FieldSummary {
  constructor(table1, info) {
    const {
      iso3,
      data,
      date,
      field,
      st,
      offset
    } = info;
    this.iso3 = iso3;
    this.date = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(date, PIVOT_DATE_FORMAT);
    this.st = dayjs__WEBPACK_IMPORTED_MODULE_4___default()(st, PIVOT_DATE_FORMAT);
    this.data = data;
    this.field = field;
    this.offset = offset;
  }

}

const colors = (0,_wonderlandlabs_collect__WEBPACK_IMPORTED_MODULE_2__.create)(new Map([[11, "rgb(6.2553% 0% 17.313%)"], [12, "rgb(5.8438% 0% 18.589%)"], [13, "rgb(5.2941% 0% 19.877%)"], [14, "rgb(4.5689% 0% 21.179%)"], [15, "rgb(3.6096% 0% 22.493%)"], [16, "rgb(2.4614% 0% 23.82%)"], [17, "rgb(1.1477% 0% 25.159%)"], [18, "rgb(0.0002% 0.0039% 26.214%)"], [19, "rgb(0.0009% 0.0219% 26.213%)"], [20, "rgb(0.0017% 0.0399% 26.211%)"], [110, "rgb(0.068% 1.6612% 26.065%)"], [120, "rgb(0.0753% 1.8413% 26.049%)"], [130, "rgb(0.0826% 2.0215% 26.032%)"], [140, "rgb(0.09% 2.2016% 26.016%)"], [150, "rgb(0.0979% 2.3815% 26%)"], [160, "rgb(0.1065% 2.5612% 25.983%)"], [170, "rgb(0.1157% 2.7408% 25.967%)"], [180, "rgb(0.1257% 2.9201% 25.951%)"], [190, "rgb(0.1363% 3.0992% 25.934%)"], [200, "rgb(0.1475% 3.278% 25.918%)"], [1100, "rgb(1.9544% 13.446% 24.382%)"], [1200, "rgb(1.8364% 14.417% 24.191%)"], [1300, "rgb(1.6165% 15.387% 23.993%)"], [1400, "rgb(1.2905% 16.359% 23.789%)"], [1500, "rgb(0.8543% 17.333% 23.579%)"], [1600, "rgb(0.3036% 18.309% 23.362%)"], [1700, "rgb(0% 19.287% 23.137%)"], [1800, "rgb(0% 20.268% 22.905%)"], [1900, "rgb(0% 21.252% 22.665%)"], [2000, "rgb(0% 22.238% 22.417%)"], [11000, "rgb(12.857% 38.588% 12.38%)"], [12000, "rgb(15.552% 39.166% 11.368%)"], [13000, "rgb(17.954% 39.741% 10.273%)"], [14000, "rgb(20.162% 40.313% 9.0723%)"], [15000, "rgb(22.231% 40.884% 7.7268%)"], [16000, "rgb(24.197% 41.451% 6.1708%)"], [17000, "rgb(26.083% 42.016% 4.2697%)"], [18000, "rgb(27.907% 42.579% 2.0199%)"], [19000, "rgb(29.679% 43.139% 0%)"], [20000, "rgb(31.41% 43.697% 0%)"], [110000, "rgb(59.684% 43.058% 0%)"], [120000, "rgb(60.828% 42.074% 0%)"], [130000, "rgb(61.971% 41.052% 0%)"], [140000, "rgb(63.119% 39.984% 0%)"], [150000, "rgb(64.276% 38.864% 0%)"], [160000, "rgb(65.445% 37.684% 0%)"], [170000, "rgb(66.629% 36.433% 0%)"], [180000, "rgb(67.835% 35.099% 0%)"], [190000, "rgb(69.065% 33.666% 0%)"], [200000, "rgb(70.328% 32.111% 0%)"], [1100000, "rgb(83.467% 13.29% 13.426%)"], [1200000, "rgb(83.651% 14.779% 14.368%)"], [1300000, "rgb(83.832% 16.153% 15.303%)"], [1400000, "rgb(84.009% 17.439% 16.233%)"], [1500000, "rgb(84.182% 18.653% 17.159%)"], [1600000, "rgb(84.353% 19.807% 18.082%)"], [1700000, "rgb(84.519% 20.912% 19.003%)"], [1800000, "rgb(84.682% 21.975% 19.922%)"], [1900000, "rgb(84.842% 23.001% 20.841%)"], [2000000, "rgb(84.998% 23.995% 21.759%)"], [11000000, "white"]]));

const makeModel = () => (0,_wonderlandlabs_carpenter__WEBPACK_IMPORTED_MODULE_0__.createBase)([{
  name: 'task_types',
  key: 'id'
}, {
  name: 'tasks',
  data: [],
  key: 'id'
}, {
  name: 'locations',
  key: 'uid',
  dataCreator: (table, location) => {
    if (!((0,_wonderlandlabs_collect__WEBPACK_IMPORTED_MODULE_2__.create)(location.latitude).type === TypeEnum.number && (0,_wonderlandlabs_collect__WEBPACK_IMPORTED_MODULE_2__.create)(location.longitude).type === TypeEnum.number)) {
      location.hindex = null;
    } else {
      location.hindex = (0,h3_js__WEBPACK_IMPORTED_MODULE_3__.geoToH3)(location.latitude, location.longitude, 2);
    }

    return location;
  }
}, {
  name: 'tasks-info',
  key: 'id'
}, {
  name: 'geojson'
}, {
  name: 'pivots',

  dataCreator(table, info) {
    return new FieldSummary('table', info);
  },

  keyProvider: record => {
    return `${record.iso3}-${record.field}`;
  }
}, {
  name: 'hexes',
  key: 'hindex',
  dataCreator: (table, input) => _objectSpread(_objectSpread({}, input), {}, {
    countryShares: new Map()
  })
}, {
  name: 'countries',
  key: 'iso3'
}], {
  joins: [{
    from: {
      tableName: 'hexes',
      frequency: joinFreq.noneOrOne
    },
    to: {
      tableName: 'locations',
      key: 'hindex',
      frequency: joinFreq.noneOrMore
    },
    name: 'locHexes'
  }]
});

const API_ROOT = 'https://54.149.3.112'; // : 'http://localhost:3000';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const base = makeModel();
  const hexTable = base.table('hexes');
  hexTable.data.forEach(hex => {
    const childIndexes = (0,h3_js__WEBPACK_IMPORTED_MODULE_3__.h3ToChildren)(hex.hindex, 2);
    childIndexes.forEach(hindex => {
      hexTable.add({
        hindex,
        level: 2
      });
    });
  });
  const TASK_TYPE_ROOT = `${API_ROOT}/task-types`;
  const TASK_ROOT = `${API_ROOT}/tasks`;

  const hexesUrl = (...args) => [API_ROOT, 'hexes', ...args].join('/');

  const taskTypeUrl = (...args) => [TASK_TYPE_ROOT, ...args].join('/');

  const taskUrl = (...args) => [TASK_ROOT, ...args].join('/');

  const countryUrl = (...args) => [API_ROOT, 'countries', ...args].join('/');

  const pivotUrl = (...args) => [API_ROOT, 'pivot-summary/summary', ...args].join('/');

  const ranges = [{
    max: 10 ** 1.25,
    range: range1000
  }, {
    max: 10 ** 3.5,
    range: range10k
  }, {
    max: 10 ** 4.5,
    range: range100k
  }, {
    max: 10 ** 5.5,
    range: range1b
  }, {
    max: 10 ** 7,
    range: range10b
  }];
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
          against: id
        }
      });
    },

    valueColor(n) {
      return colors.reduce((memo, color, index, _c, stopper) => {
        if (index < n) {
          return color;
        }

        stopper.stopAfterThis();
        return memo;
      }, 'black');
    },

    valueToColor(n) {
      for (let index = 0; index < ranges.length; ++index) {
        let {
          max,
          range
        } = ranges[index];

        if (n <= max) {
          let min = index ? ranges[index - 1].max : 0;
          const color = range((n - min) / (max - min));
          return color;
        }
      }

      return WHITE;
    },

    valueColorSet() {
      let map = new Map();

      for (let po10 = 1; po10 < 10; ++po10) {
        const base = 10 ** po10;

        for (let i = 1; i <= 10; i += 1) {
          const num = base + base * (i / 10);
          map.set(num, model.valueToColor(num).toString({
            format: 'rgb'
          }));
        }
      }

      return map;
    },

    sendCurrentHexShare(iso3, hindex, share, max) {
      if (share) {
        axios__WEBPACK_IMPORTED_MODULE_1___default().patch(hexesUrl(hindex), {
          iso3,
          strength: share / max
        });
      }
    },

    nearBounds(center, bounds) {
      const west = bounds[0].ln - 2;
      const east = bounds[1].ln + 2;
      const south = bounds[1].lt - 2;
      const north = bounds[0].lt + 2;
      const {
        lt,
        ln
      } = center;
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
        where: record => {
          if (record.data.level !== 3) {
            return false;
          }

          return this.nearBounds({
            ln: record.data.longitude,
            lt: record.data.latitude
          }, countryData.boundary);
        }
      });
    },

    getField(field) {
      return axios__WEBPACK_IMPORTED_MODULE_1___default().get(pivotUrl(field)).then(result => {
        const records = result.data.map(p => {
          return _objectSpread(_objectSpread({}, p), {}, {
            field
          });
        });
        base.table('pivots').addMany(records);
        return base.table('pivots').query({
          tableName: 'pivots',
          where: {
            field: 'field',
            test: binaryOperator.eq,
            against: field
          }
        });
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
          against: id
        }
      });
    },

    promoteTaskType(id) {
      return axios__WEBPACK_IMPORTED_MODULE_1___default().put(taskTypeUrl(id, 'promote')).then(() => model.pollTaskTypes());
    },

    demoteTaskType(id) {
      return axios__WEBPACK_IMPORTED_MODULE_1___default().put(`${TASK_TYPE_ROOT}/${id}/demote`).then(() => model.pollTaskTypes());
    },

    hasTaskType(name) {
      if (!(name && typeof name === 'string')) {
        return false;
      }

      const target = name.toLowerCase();
      return !!base.table('task_types').data.items.find(data => data.name.toLowerCase() === target);
    },

    deleteTaskType: id => axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"](taskTypeUrl(id)).then(() => model.pollTaskTypes()),

    saveTaskType(data, id) {
      const url = id ? taskTypeUrl(id) : taskTypeUrl();
      return (id ? axios__WEBPACK_IMPORTED_MODULE_1___default().patch(url, data) : axios__WEBPACK_IMPORTED_MODULE_1___default().post(url, data)).then(() => model.pollTaskTypes());
    },

    getTaskType: id => axios__WEBPACK_IMPORTED_MODULE_1___default().get(taskTypeUrl(id)).then(response => {
      const {
        data
      } = response;

      if (data && !data.deleted) {
        return base.table('task_types').add(data);
      }

      return false;
    }),
    pollTaskTypes: () => axios__WEBPACK_IMPORTED_MODULE_1___default().get(TASK_TYPE_ROOT).then(response => {
      base.table('task_types').addMany(response.data);
    }),
    pollHexes: () => axios__WEBPACK_IMPORTED_MODULE_1___default().get(hexesUrl('level', 3)).then(response => {
      base.table('hexes').addMany(response.data);
    }),
    // -------- TASKS
    pollTasks: () => axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${model.apiRoot}/tasks`).then(response => {
      base.table('tasks').addMany(response.data);
    }),

    patchTask(data) {
      if (!data.id) {
        throw new Error('cannot patch data without id');
      }

      delete model.newTaskTypeKey;
      return axios__WEBPACK_IMPORTED_MODULE_1___default().patch(taskUrl(data.id), data).then(() => model.pollTasks());
    },

    repeatTask(id) {
      axios__WEBPACK_IMPORTED_MODULE_1___default().post(taskUrl(id)).then(() => this.pollTasks());
    },

    saveTask(data, id) {
      const url = id ? taskUrl(id) : taskUrl();
      return (id ? axios__WEBPACK_IMPORTED_MODULE_1___default().patch(url) : axios__WEBPACK_IMPORTED_MODULE_1___default().post(url, data)).then(() => model.pollTasks());
    },

    base,

    pollLocations() {
      return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${model.apiRoot}/locations`).then(response => {
        base.table('locations').addMany(response.data);
      });
    },

    pollCountries() {
      return axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${model.apiRoot}/countries`).then(response => {
        base.table('countries').addMany(response.data);
      });
    },

    getGeoJson() {
      return axios__WEBPACK_IMPORTED_MODULE_1___default().get(countryUrl('geojson')).then(({
        data
      }) => {
        base.table('geojson').addMany(data.features);
        console.log('--- geojson saved:', base.table('geojson').data);
        const q = base.table('geojson').query({
          tableName: 'geojson'
        });
        return q.map(({
          data
        }) => data);
      });
    }

  };
  return model;
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;