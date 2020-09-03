exports.ids = [32];
exports.modules = {

/***/ "t4zD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZkBw");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YeXC");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 640px)': {
      display: 'block'
    }
  },
  total: props => ({
    position: 'relative',
    overflow: 'inherit',
    width: 'calc(33% - 20px)',
    maxWidth: 'calc(33% - 20px)',
    // minWidth: 'calc(33% - 20px)',
    margin: '0 10px 10px',
    padding: 16,
    border: 'solid 1px #dbe9f5',
    borderRadius: 10,
    boxShadow: '0 4px 6px 0 rgba(31, 70, 88, .04)',
    '&:after': {
      content: '""',
      height: '40px',
      width: '6px',
      borderRadius: 4,
      boxShadow: '0 3px 8px 0 rgba(93,120,255,.28)',
      position: 'absolute',
      top: '26px',
      left: '-3px'
    },
    '@media (max-width: 640px)': !props.hasLayoutAdjusts ? {
      margin: '0 5px 10px',
      width: '90%',
      maxWidth: '90%',
      minWidth: '90%'
    } : {
      minWidth: 'calc(98% - 10px)'
    },
    '@media (max-width: 480px)': !props.hasLayoutAdjusts ? {
      margin: '0 5px 10px',
      width: 'calc(90% - 10px)',
      maxWidth: 'calc(90% - 10px)',
      minWidth: 'calc(90% - 10px)'
    } : {
      width: 'calc(98% - 10px)',
      maxWidth: 'calc(98% - 10px)',
      minWidth: 'calc(98% - 10px)'
    }
  }),
  contentInfo: {
    width: '100%'
  },
  totalConfirmedCases: {
    '&:after': {
      background: '#5d78ff'
    }
  },
  totalDeaths: {
    '&:after': {
      background: '#fab822'
    }
  },
  totalLethality: {
    '&:after': {
      background: '#fb397a'
    }
  },
  labelTotal: {
    marginRight: 12,
    fontWeight: 700,
    fontSize: 40,
    lineHeight: '48px',
    letterSpacing: -1.29
  },
  labelTitle: {
    color: '#172b3e',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: -.54
  }
}));

const GeneralDataCard = props => {
  const {
    total_confirmado,
    total_obitos,
    total_letalidade
  } = props,
        propsRest = _objectWithoutProperties(props, ["total_confirmado", "total_obitos", "total_letalidade"]);

  const labels = propsRest.labels;
  const classes = useStyles(propsRest);
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.total, classes.totalConfirmedCases)
  }, __jsx("div", {
    className: classes.contentInfo
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.labelTotal,
    style: {
      color: '#5d78ff'
    }
  }, total_confirmado), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.labelTitle
  }, labels.confirmedCases))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.total, classes.totalDeaths)
  }, __jsx("div", {
    className: classes.contentInfo
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.labelTotal,
    style: {
      color: '#fab822'
    }
  }, total_obitos), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.labelTitle
  }, labels.deaths))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.total, classes.totalLethality)
  }, __jsx("div", {
    className: classes.contentInfo
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.labelTotal,
    style: {
      color: '#fb397a'
    }
  }, total_letalidade), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.labelTitle
  }, labels.lethality))));
};

/* harmony default export */ __webpack_exports__["default"] = (GeneralDataCard);

/***/ })

};;