exports.ids = [35];
exports.modules = {

/***/ "y879":
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
  }
}));

const ChartCard = props => {
  const {
    confirmed = {},
    deaths = {},
    labels
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.chartCard, classes.noBorder)
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
    data: {
      labels,
      datasets: [{
        label: deaths.legend,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(250, 184, 34, 1)',
        borderColor: 'rgb(250, 184, 34, 0.4)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(250, 184, 34, 0.4)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(250, 184, 34, 0.4)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: deaths.data
      }, {
        label: confirmed.legend,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(93, 120, 255, 1)',
        borderColor: 'rgb(93, 120, 255, 0.4)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(93, 120, 255, 0.4)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(93, 120, 255, 0.4)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: confirmed.data
      }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            callback(value, index, values) {
              return Number(value).toLocaleString(navigator.language, {
                notation: "compact"
              });
            }

          }
        }]
      },
      legend: {
        position: 'bottom'
      }
    },
    height: 250
  }));
};

const WeeklyResults = props => {
  const {
    data = [],
    labels
  } = props;
  const {
    0: _labels,
    1: _setLabels
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: _qtdConfirmed,
    1: _setQtdConfirmed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: _qtdDeaths,
    1: _setQtdDeaths
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object.values(data).map(item => {
      _setLabels(prev => [...prev, item.label]);

      _setQtdConfirmed(prev => [...prev, item.qtd_confirmado]);

      _setQtdDeaths(prev => [...prev, item.qtd_obito]);

      return item;
    });
  }, [data]);
  const classes = useStyles();
  return __jsx("div", null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.lbTitle, classes.size_18, classes.bdrBottom),
    component: "p"
  }, labels.weeklyCases), __jsx(ChartCard, {
    labels: _labels,
    confirmed: {
      legend: labels.confirmed,
      data: _qtdConfirmed
    },
    deaths: {
      legend: labels.deaths,
      data: _qtdDeaths
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WeeklyResults);

/***/ })

};;