exports.ids = [33];
exports.modules = {

/***/ "jw9m":
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
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("MCme");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("KtZM");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    marginBottom: 22,
    padding: '10px 12px 0',
    backgroundColor: '#fff',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  cardTotal: {
    margin: '10px 0',
    padding: '16px 0',
    borderRadius: 0,
    [theme.breakpoints.down('md')]: {
      padding: 0,
      margin: '0 5px 10px',
      width: '90%',
      maxWidth: '90%',
      textAlign: 'left',
      justifyContent: 'flex-start'
    }
  },
  noShadow: {
    boxShadow: 'none',
    borderWidth: 'initial',
    borderStyle: 'none',
    borderColor: 'initial',
    borderImage: 'initial'
  },
  labelCovid: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 900,
    color: '#0297ff'
  },
  labelTitle: {
    fontSize: 28,
    fontWeight: 400,
    lineHeight: '34px'
  },
  labelGrey: {
    position: 'relative',
    lineHeight: '19px',
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: -0.23,
    color: '#8498AE'
  }
}));

const PanelInfo = props => {
  const {
    dt_atualizacao,
    labels,
    settings
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardTotal, classes.colLeft, classes.noShadow),
    display: "flex"
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.labelCovid
  }, "Covid19"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.labelTitle
  }, __jsx("strong", null, labels.panel), ' ', labels.covid19), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.labelGrey,
    component: "div"
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, null, labels.lastUpdated, ': ', __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "span"
  }, dt_atualizacao)))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.cardTotal, classes.colRight, classes.noShadow, classes.justifyEnd),
    display: "flex",
    width: "100%"
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "subtitle2"
  }, labels.sourceTitle, ':'), __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: settings.sourceLink
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body2",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, settings.sourceTitle, "\xA0", __jsx(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PanelInfo);

/***/ })

};;