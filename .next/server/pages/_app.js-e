"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baselineFontSizes = [18, // text,
30, // l1,
24, // l2,
21, // l3,
18];
const sizeScales = new Map([['small', 0.9], ['medium', 1], ['large', 1.2], ['xlarge', 1.333]]);

function fontSize(level, size) {
  return {
    size: `${baselineFontSizes[level] * sizeScales.get(size)}px`,
    height: '125%',
    maxWidth: '100%'
  };
}

const headingFonts = new Map([[1, {
  family: '"San Francisco Display Black", "Helvetica Neue", "Helvetica", sans-serif'
}]]);
const theme = {
  name: 'my theme',
  rounding: 4,
  spacing: 24,
  defaultMode: 'light',
  global: {
    colors: {
      stripe: {
        dark: 'rgba(0,48,204,5%)',
        light: 'rgba(18,83,220, 5%)'
      },
      brand: {
        dark: '#0030cc',
        light: '#1253dc'
      },
      link: {
        dark: '#002291',
        light: '#1c5eff'
      },
      'button-danger': {
        dark: '#990000',
        light: '#ff0000'
      },
      'ticket': {
        dark: '#0f8000',
        light: '#10a100'
      },
      'ticket-bg': {
        dark: 'rgba(15,128,0,0.1)',
        light: 'rgba(16,161,0,0.1)'
      },
      background: {
        dark: '#111111',
        light: '#FFFFFF'
      },
      'background-back': {
        dark: '#111111',
        light: '#EEEEEE'
      },
      'background-front': {
        dark: '#222222',
        light: '#FFFFFF'
      },
      'background-contrast': {
        dark: '#FFFFFF11',
        light: '#11111111'
      },
      text: {
        dark: '#EEEEEE',
        light: '#333333'
      },
      'text-strong': {
        dark: '#FFFFFF',
        light: '#000000'
      },
      'text-weak': {
        dark: '#CCCCCC',
        light: '#444444'
      },
      'text-xweak': {
        dark: '#999999',
        light: '#666666'
      },
      border: {
        dark: '#444444',
        light: '#CCCCCC'
      },
      control: 'brand',
      'active-background': 'background-contrast',
      'active-text': 'text-strong',
      'selected-background': 'brand',
      'selected-text': 'text-strong',
      'status-critical': '#a82c2c',
      'status-warning': '#FFAA15',
      'status-ok': '#008658',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'graph-0': 'brand',
      'graph-1': 'status-warning',
      'section-head': '#44000c'
    },
    font: {
      family: '"San Francisco" ,"Helvetica Neue", Helvetica, sans-serif'
    },
    active: {
      background: 'active-background',
      color: 'active-text'
    },
    hover: {
      background: 'active-background',
      color: 'active-text'
    },
    selected: {
      background: 'selected-background',
      color: 'selected-text'
    }
  },
  chart: {},
  diagram: {
    line: {}
  },
  meter: {},
  tip: {
    content: {
      background: {
        color: 'background'
      },
      elevation: 'none',
      round: false
    }
  },
  layer: {
    background: {
      dark: '#111111',
      light: '#FFFFFF'
    }
  },
  heading: {
    font: {
      family: 'San Francisco Display',
      height: '120%'
    },
    level: [1, 2, 3, 4, 5].reduce((memo, level) => _objectSpread(_objectSpread({}, memo), {}, {
      [level]: {
        font: headingFonts.has(level) ? headingFonts.get(level) : {},
        small: fontSize(level, 'small'),
        medium: fontSize(level, 'medium'),
        large: fontSize(level, 'large'),
        xlarge: fontSize(level, 'xlarge')
      }
    }), {})
  },
  paragraph: 'small,medium,large,xlarge'.split(',').reduce((memo, size) => _objectSpread(_objectSpread({}, memo), {}, {
    [size]: fontSize(0, size)
  }), {}),
  text: 'small,medium,large,xlarge'.split(',').reduce((memo, size) => _objectSpread(_objectSpread({}, memo), {}, {
    [size]: fontSize(0, size)
  }), {}),
  breakpoints: {
    small: {
      value: 768,
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: '4px',
        large: '6px',
        xlarge: '12px'
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        xxsmall: '2px',
        xsmall: '3px',
        small: '6px',
        medium: '12px',
        large: '24px',
        xlarge: '48px'
      },
      size: {
        xxsmall: '24px',
        xsmall: '48px',
        small: '96px',
        medium: '192px',
        large: '384px',
        xlarge: '768px',
        full: '100%'
      }
    },
    medium: {
      value: 1024,
      size: {
        xxsmall: '24px',
        xsmall: '48px',
        small: '96px',
        medium: '192px',
        large: '384px',
        xlarge: '768px',
        full: '100%'
      }
    },
    large: {
      value: 1200,
      size: {
        xxsmall: '24px',
        xsmall: '48px',
        small: '96px',
        medium: '192px',
        large: '384px',
        xlarge: '768px',
        full: '100%'
      }
    },
    xlarge: {
      value: 1536
    }
  },
  button: {
    border: {
      radius: '3px',
      width: '1px'
    },
    size: {
      small: {
        border: {
          radius: '0px'
        }
      },
      medium: {
        border: {
          radius: '2px'
        }
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ 7394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8073);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8682);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(grommet_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grommet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(991);
/* harmony import */ var _components_ModelContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(585);
/* harmony import */ var _components_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2642);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ModelContext__WEBPACK_IMPORTED_MODULE_5__, _components_model__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ModelContext__WEBPACK_IMPORTED_MODULE_5__, _components_model__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ModelContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Provider */ .Z.Provider, {
    value: (0,_components_model__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet__WEBPACK_IMPORTED_MODULE_1__.Grommet, {
      theme: _grommet_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
      full: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet__WEBPACK_IMPORTED_MODULE_1__.Page, {
        kind: "full",
        margin: "0",
        id: "page",
        background: "black",
        height: "100vh",
        overflow: "auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_1__.PageContent, {
          margin: "0",
          pad: "0",
          id: "page-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(grommet__WEBPACK_IMPORTED_MODULE_1__.Nav, {
            background: "brand",
            size: "small",
            direction: "row",
            pad: "small",
            gap: "large",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_2__.Home, {
                color: "white"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(grommet__WEBPACK_IMPORTED_MODULE_1__.Heading, {
              size: "small",
              pad: "0",
              margin: "0",
              children: "COVID 19 Deaths "
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Component, _objectSpread({}, pageProps))]
        })
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 8073:
/***/ ((module) => {

module.exports = require("grommet");

/***/ }),

/***/ 8682:
/***/ ((module) => {

module.exports = require("grommet-icons");

/***/ }),

/***/ 4688:
/***/ ((module) => {

module.exports = require("h3-js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6439:
/***/ ((module) => {

module.exports = import("@wonderlandlabs/carpenter");;

/***/ }),

/***/ 715:
/***/ ((module) => {

module.exports = import("@wonderlandlabs/collect");;

/***/ }),

/***/ 3549:
/***/ ((module) => {

module.exports = import("colorjs.io");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [383,664,585], () => (__webpack_exec__(7394)));
module.exports = __webpack_exports__;

})();