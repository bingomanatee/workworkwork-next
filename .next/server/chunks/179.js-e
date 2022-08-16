"use strict";
exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 3179:
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
/* harmony import */ var _FormCloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(789);
/* harmony import */ var _OptionBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7403);
/* harmony import */ var _SaveButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6018);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ModelContext__WEBPACK_IMPORTED_MODULE_3__]);
_ModelContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const EditTask = ({
  id,
  update
}) => {
  const model = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_ModelContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
  const table = model.base.table('tasks');
  const {
    0: taskTypes,
    1: setTaskTypes
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: task,
    1: setTask
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(table.createData({}));
  const {
    0: validation,
    1: setValidation
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    valid: false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (id) {
      model.getTask(id).then(record => {
        console.log('retrieved record for id', record);

        if (!record) {
          return update(false);
        }

        console.log('record is ', record);
        const t2 = model.base.table('task_types');
        return setTask(t2.createData(record.data));
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
    pad: "large",
    fill: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
      direction: "row",
      align: "between",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        level: 2,
        children: "Create a new Task"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_FormCloseButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        onClick: () => update(false)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_0__.Form, {
      style: {
        minWidth: '80vw',
        minHeight: '80vh'
      },
      value: task,
      onValidate: setValidation,
      validate: "change",
      onChange: setTask,
      onSubmit: ({
        value
      }) => {
        model.saveTask(value, id).then(() => update(true));
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.FormField, {
        name: "task_type_id",
        htmlFor: "task_type-input-id",
        label: "Type",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Select, {
          id: "task_type-input-id",
          options: taskTypes,
          labelKey: "name",
          valueKey: {
            key: 'id',
            reduce: true
          },
          name: "task_type_id",
          children: (option, _, __, {
            selected
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_OptionBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            selected: selected,
            label: option.name
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.FormField, {
        name: "notes",
        htmlFor: "notes-input-id",
        label: "Notes",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.TextArea, {
          id: "notes-input-id",
          name: "notes"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
        direction: "row",
        gap: "medium",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_SaveButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
          id: id,
          valid: validation.valid
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditTask);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8073);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8682);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const CloseButton = ({
  onClick
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Button, {
  plain: true,
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_1__.Close, {}),
  onClick: onClick
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseButton);

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