"use strict";
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8073);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8682);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModelContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(585);
/* harmony import */ var _OptionBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7403);
/* harmony import */ var _SaveButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6018);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModelContext__WEBPACK_IMPORTED_MODULE_3__]);
_ModelContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const NONE = {
  id: 0,
  name: '(no parent)'
};

const EditTaskType = ({
  update,
  id,
  parent_id = null
}) => {
  const model = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ModelContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  const table = model.base.table('task_types');
  const {
    0: validation,
    1: setValidation
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    valid: false
  });
  const {
    0: taskType,
    1: setTaskType
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(table.createData({
    parent_id,
    unit: 'seconds'
  }));
  const {
    0: taskTypes,
    1: setTaskTypes
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // create a "temp" record - even if updating, clone the data temporarily

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (id) {
      model.getTaskType(id).then(record => {
        if (!record) {
          return update(false);
        }

        console.log('record is ', record);
        const t2 = model.base.table('task_types');
        return setTaskType(t2.createData(_objectSpread(_objectSpread({}, record.data), {}, {
          unit: 'seconds'
        })));
      });
    }

    const sub = model.base.stream({
      tableName: 'task_types'
    }, records => {
      setTaskTypes(records.map(r => r.data));
    });
    model.pollTaskTypes();
    return () => {
      sub.unsubscribe();
    };
  }, [model, id]);
  const parentOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [NONE, ...taskTypes].filter(item => !!item), [taskTypes]);

  if (!(parentOptions && taskType)) {
    return '';
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
    pad: "large",
    fill: true,
    overflow: "scroll",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Heading, {
      level: 2,
      children: [id ? 'Edit Task Type' : 'Create a new TaskType', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        style: {
          float: 'right'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Button, {
          plain: true,
          icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__.Close, {}),
          onClick: () => update(false)
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Form, {
      style: {
        minWidth: '80vw',
        minHeight: '80vh'
      },
      value: taskType,
      onValidate: setValidation,
      onChange: setTaskType,
      validate: "change",
      onSubmit: ({
        value
      }) => {
        // eslint-disable-next-line no-param-reassign
        let {
          interval,
          unit
        } = value;
        interval = Number.parseInt(value.interval, 10);

        switch (unit) {
          case 'minutes':
            // eslint-disable-next-line no-param-reassign
            interval *= 60;
            break;

          case 'hours':
            // eslint-disable-next-line no-param-reassign
            interval *= 60 ** 2;
            break;
        } // eslint-disable-next-line no-param-reassign


        delete value.unit;
        model.saveTaskType(_objectSpread(_objectSpread({}, value), {}, {
          interval
        }), id).then(() => update(true));
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.FormField, {
        validate: name => !id && name && model.hasTaskType(name) ? {
          property: 'name',
          message: 'Name must be unique.',
          status: 'error'
        } : false,
        name: "name",
        htmlFor: "name-input-id",
        label: "Name",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.TextInput, {
          id: "name-input-id",
          name: "name"
        })
      }), parentOptions.length > 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.FormField, {
        label: "Parent",
        name: "parent_id",
        htmlFor: "parent-id-input",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Select, {
          id: "parent-id-input",
          name: "parent_id",
          labelKey: "name",
          value: taskType.parent_id || 0,
          valueKey: {
            key: 'id',
            reduce: true
          },
          onChange: ({
            value
          }) => {
            setTaskType(_objectSpread(_objectSpread({}, taskType), {}, {
              parent_id: value
            }));
          },
          options: parentOptions,
          children: (option, _, __, {
            selected
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_OptionBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            selected: selected,
            label: option.name
          })
        })
      }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
        direction: "row",
        fill: "horizontal",
        gap: "medium",
        align: "stretch",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
          width: "50%",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.FormField, {
            name: "interval",
            htmlFor: "interval-input-id",
            label: "Interval",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.TextArea, {
              type: "number",
              id: "interval-input-id",
              name: "interval"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
          width: "50%",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.FormField, {
            name: "unit",
            htmlFor: "interval-units-input-id",
            label: "Unit",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Select, {
              defaultValue: "seconds",
              name: "unit",
              options: ['seconds', 'minutes', 'hours'],
              id: "interval-units-input-id"
            })
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.FormField, {
        name: "notes",
        htmlFor: "notes-input-id",
        label: "Notes",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.TextArea, {
          id: "notes-input-id",
          name: "notes"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
        direction: "row",
        gap: "medium",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_SaveButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
          id: id,
          valid: validation.valid
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditTaskType);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8073);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const OptionBox = ({
  selected,
  label
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
  pad: "2px",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Text, {
    weight: selected ? 'bold' : 'normal',
    children: label
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionBox);

/***/ }),

/***/ 6018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export SaveButton */
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8682);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8073);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const SaveButton = ({
  id,
  valid,
  saving
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet__WEBPACK_IMPORTED_MODULE_1__.Button, {
  disabled: saving || !valid,
  type: "submit",
  icon: id ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_0__.Save, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_0__.Add, {}),
  primary: true,
  label: "Submit"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveButton);

/***/ })

};
;