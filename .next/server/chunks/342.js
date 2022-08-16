"use strict";
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 4150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8073);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const TextStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(grommet__WEBPACK_IMPORTED_MODULE_0__.Text).withConfig({
  displayName: "FormLabel__TextStyled",
  componentId: "sc-fqmd0f-0"
})(["text-transform:uppercase;"]);

const FormLabel = ({
  children,
  color = 'input'
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(grommet__WEBPACK_IMPORTED_MODULE_0__.Box, {
  gridArea: "label",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TextStyled, {
    color: color,
    children: children
  })
});

FormLabel.defaultProps = {
  color: 'brand'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLabel);

/***/ }),

/***/ 4137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8073);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4150);
/* harmony import */ var _ux_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7300);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const LabelValue = ({
  label,
  children
}) => {
  const size = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(grommet__WEBPACK_IMPORTED_MODULE_1__.ResponsiveContext);
  const LV = size === 'small' ? _ux_constants__WEBPACK_IMPORTED_MODULE_3__/* .LV_GRID_S */ .dh : _ux_constants__WEBPACK_IMPORTED_MODULE_3__/* .LV_GRID_L */ .IT;
  let info = children;

  if (Array.isArray(children) && children.length === 1) {
    // eslint-disable-next-line prefer-destructuring
    info = children[0];
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_1__.Grid, _objectSpread(_objectSpread({}, LV), {}, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(grommet__WEBPACK_IMPORTED_MODULE_1__.Box, {
      gridArea: "label",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_FormLabel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: label
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(grommet__WEBPACK_IMPORTED_MODULE_1__.Box, {
      gridArea: "info",
      children: ['string', 'number'].includes(typeof info) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(grommet__WEBPACK_IMPORTED_MODULE_1__.Text, {
        children: info
      }) : info
    })]
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelValue);

/***/ }),

/***/ 7300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$S": () => (/* binding */ getCell),
/* harmony export */   "BG": () => (/* binding */ ROW_BOX),
/* harmony export */   "I1": () => (/* binding */ TABLE_BOX),
/* harmony export */   "IT": () => (/* binding */ LV_GRID_L),
/* harmony export */   "JK": () => (/* binding */ getTaskTypeGrid),
/* harmony export */   "dh": () => (/* binding */ LV_GRID_S)
/* harmony export */ });
/* unused harmony exports CELL_B, CELL_B_S, TASK_TYPE_ROW_GRID_L, TASK_TYPE_ROW_GRID_M, TASK_TYPE_ROW_GRID_S */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ROW_BOX = {
  align: 'center',
  direction: 'row',
  fill: 'horizontal',
  justify: 'stretch',
  gap: 'medium',
  pad: 'small'
};
const CELL_B = {
  direction: 'row',
  gap: 'small',
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal'
};
const CELL_B_S = _objectSpread(_objectSpread({}, CELL_B), {}, {
  pad: {
    top: '0.5rem',
    right: '2px',
    left: '2px',
    bottom: '0.5rem'
  }
});
const LV_GRID_L = {
  columns: ['6rem', '1fr'],
  rows: ['auto'],
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal',
  areas: [{
    name: 'label',
    start: [0, 0],
    end: [0, 0]
  }, {
    name: 'info',
    start: [1, 0],
    end: [1, 0]
  }]
};
const LV_GRID_S = {
  rows: ['auto', 'auto'],
  columns: ['auto'],
  justify: 'stretch',
  align: 'center',
  fill: 'horizontal',
  areas: [{
    name: 'label',
    start: [0, 0],
    end: [0, 0]
  }, {
    name: 'info',
    start: [0, 1],
    end: [0, 1]
  }]
};
const TASK_TYPE_ROW_GRID_L = {
  rows: ['auto', 'auto'],
  columns: ['2fr', '2fr', '1fr', '`1fr', '3fr', '20rem'],
  gap: 'small',
  fill: 'horizontal',
  areas: [{
    name: 'id',
    start: [0, 0],
    end: [0, 0]
  }, {
    name: 'name',
    start: [1, 0],
    end: [1, 0]
  }, {
    name: 'order',
    start: [2, 0],
    end: [2, 0]
  }, {
    name: 'interval',
    start: [3, 0],
    end: [3, 0]
  }, {
    name: 'control',
    start: [4, 0],
    end: [4, 1]
  }, {
    name: 'notes',
    start: [0, 1],
    end: [3, 1]
  }]
};
const TASK_TYPE_ROW_GRID_M = {
  rows: ['auto', 'auto', 'auto'],
  columns: ['1fr', '1fr', '1fr', '1fr', '1fr', '1fr', '20rem'],
  gap: 'small',
  fill: 'horizontal',
  areas: [{
    name: 'id',
    start: [0, 0],
    end: [2, 0]
  }, {
    name: 'name',
    start: [3, 0],
    end: [5, 0]
  }, {
    name: 'order',
    start: [0, 1],
    end: [1, 1]
  }, {
    name: 'interval',
    start: [2, 1],
    end: [3, 1]
  }, {
    name: 'control',
    start: [6, 0],
    end: [6, 1]
  }, {
    name: 'notes',
    start: [0, 2],
    end: [5, 2]
  }]
};
const TASK_TYPE_ROW_GRID_S = {
  rows: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
  columns: ['1fr'],
  justify: 'stretch',
  align: 'stretch',
  fill: 'horizontal',
  areas: [{
    name: 'id',
    start: [0, 0],
    end: [0, 0]
  }, {
    name: 'name',
    start: [0, 1],
    end: [0, 1]
  }, {
    name: 'order',
    start: [0, 2],
    end: [0, 2]
  }, {
    name: 'interval',
    start: [0, 3],
    end: [0, 3]
  }, {
    name: 'notes',
    start: [0, 4],
    end: [0, 4]
  }, {
    name: 'control',
    start: [0, 5],
    end: [0, 5]
  }]
};
const TABLE_BOX = {
  align: 'center',
  direction: 'column',
  fill: 'horizontal',
  justify: 'stretch',
  gap: '0'
};
const TASK_TYPE_GRID_SIZES = {
  large: TASK_TYPE_ROW_GRID_L,
  medium: TASK_TYPE_ROW_GRID_M,
  small: TASK_TYPE_ROW_GRID_S
};
const getTaskTypeGrid = size => TASK_TYPE_GRID_SIZES[size] || TASK_TYPE_ROW_GRID_M;
const getCell = size => size === 'small' ? CELL_B_S : CELL_B;

/***/ }),

/***/ 9342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ taskTypes_Ticket)
});

// EXTERNAL MODULE: external "grommet"
var external_grommet_ = __webpack_require__(8073);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/ux-constants.js
var ux_constants = __webpack_require__(7300);
// EXTERNAL MODULE: ./src/components/LabelValue.js
var LabelValue = __webpack_require__(4137);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/TicketCell.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function TicketCell({
  name,
  item,
  children
}) {
  const size = (0,external_react_.useContext)(external_grommet_.ResponsiveContext);
  const CELL = (0,external_react_.useMemo)(() => (0,ux_constants/* getCell */.$S)(size), [size]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_grommet_.Box, _objectSpread(_objectSpread({
    gridArea: name
  }, CELL), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(LabelValue/* default */.Z, {
      label: name,
      children: external_react_default().Children.toArray(children).length ? children : item[name]
    })
  }));
}
;// CONCATENATED MODULE: ./src/pages/taskTypes/Ticket.jsx
function Ticket_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Ticket_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Ticket_ownKeys(Object(source), !0).forEach(function (key) { Ticket_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Ticket_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Ticket_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Ticket = ({
  current,
  children
}) => {
  const size = (0,external_react_.useContext)(external_grommet_.ResponsiveContext);
  const GRID = (0,external_react_.useMemo)(() => (0,ux_constants/* getTaskTypeGrid */.JK)(size), [size]);
  const CELL = (0,external_react_.useMemo)(() => (0,ux_constants/* getCell */.$S)(size), [size]);

  if (!current) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_grommet_.Box, Ticket_objectSpread(Ticket_objectSpread({}, ux_constants/* ROW_BOX */.BG), {}, {
    background: "ticket-bg",
    border: {
      color: 'ticket',
      size: '1px'
    },
    margin: {
      bottom: '1rem',
      top: '1rem'
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_grommet_.Grid, Ticket_objectSpread(Ticket_objectSpread({}, GRID), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TicketCell, {
        name: "id",
        item: current
      }), /*#__PURE__*/jsx_runtime_.jsx(TicketCell, {
        name: "name",
        item: current
      }), /*#__PURE__*/jsx_runtime_.jsx(TicketCell, {
        name: "order",
        item: current
      }), /*#__PURE__*/jsx_runtime_.jsx(TicketCell, {
        name: "interval",
        item: current
      }), /*#__PURE__*/jsx_runtime_.jsx(TicketCell, {
        name: "notes",
        item: current
      }), /*#__PURE__*/jsx_runtime_.jsx(external_grommet_.Box, Ticket_objectSpread(Ticket_objectSpread({
        gridArea: "control"
      }, CELL), {}, {
        direction: "row-reverse",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_grommet_.Box, {
          direction: "row",
          children: children
        })
      }))]
    }))
  }));
};

/* harmony default export */ const taskTypes_Ticket = (Ticket);

/***/ })

};
;