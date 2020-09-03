exports.ids = [34];
exports.modules = {

/***/ "2Jht":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("t3hY");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZkBw");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  lbTitle: {
    padding: '18px 16px',
    fontWeight: 700,
    letterSpacing: -0.84
  },
  bdrBottom: {
    borderBottom: 'solid 1px rgba(219, 233, 245, 0.6)'
  },
  size_18: {
    fontSize: 18,
    lineHeight: '24px'
  },
  chartCard: {
    margin: '32px 16px 22px',
    marginBottom: 50,
    width: 'calc(100% - 32px)'
  },
  noBorder: {
    border: 'none',
    boxShadow: 'none'
  },
  grafLegends: {
    alignItems: 'center',
    padding: '0 16px',
    margin: '8px 0',
    [theme.breakpoints.down('xl')]: {
      padding: '0 10px'
    }
  },
  ctLegend: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  legColor: {
    width: 14,
    height: 14,
    marginRight: 10,
    borderRadius: 3
  },
  legValue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: '#4b5b65'
  },
  legAdjusts: {
    width: 50,
    textAlign: 'right'
  },
  legFont: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: -.28
  },
  legPercent: {
    marginLeft: 2,
    color: '#5d78ff'
  }
}));

const ChartCard = props => {
  const {
    labels,
    data,
    backgroundColor,
    hoverBackgroundColor
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.chartCard, classes.noBorder)
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Doughnut"], {
    width: 200,
    legend: {
      display: false
    },
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor,
        hoverBackgroundColor
      }]
    }
  }));
};

const GrafLegends = props => {
  const {
    data
  } = props;
  const classes = useStyles();
  return __jsx("div", null, Object.values(data).map((item, kI) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: kI
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.root, classes.grafLegends)
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.ctLegend, classes.alignStart)
  }, __jsx("div", {
    className: classes.legColor,
    style: {
      background: `${item.color}`
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body2",
    color: "textPrimary",
    className: classes.legFont
  }, item.nome)), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.legValue
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.legQtd, classes.legAdjusts, classes.legFont),
    variant: "subtitle2"
  }, item.qtd), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.legPercent, classes.legAdjusts, classes.legFont),
    variant: "subtitle2"
  }, item.percent))))));
};

const RegionalData = props => {
  const {
    data = [],
    labels
  } = props;
  const {
    0: _labels,
    1: _setLabels
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: _qtd,
    1: _setQtd
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: _bgColors,
    1: _setBgColors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object.values(data).map(item => {
      _setLabels(prev => [...prev, item.nome]);

      _setQtd(prev => [...prev, item.qtd]);

      _setBgColors(prev => [...prev, item.color]);

      return item;
    });
  }, [data]);
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.lbTitle, classes.size_18, classes.bdrBottom),
    component: "p"
  }, labels.regionCases), __jsx(ChartCard, {
    labels: _labels,
    data: _qtd,
    backgroundColor: _bgColors,
    hoverBackgroundColor: _bgColors
  }), __jsx(GrafLegends, {
    data: data
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RegionalData);

/***/ })

};;