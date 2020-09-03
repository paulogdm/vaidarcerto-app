exports.ids = [26];
exports.modules = {

/***/ "yTNJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("RnCP");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_utils_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYz/");
/* harmony import */ var _modules_utils_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_utils_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YNhk");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  chipItem: {
    borderRadius: 5
  }
}));

const TagsBox = props => {
  const {
    dataObj,
    route
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], null, !Object(_modules_utils_objects__WEBPACK_IMPORTED_MODULE_4__["itHasLength"])(dataObj) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    animation: "wave",
    height: 10,
    style: {
      marginBottom: 6
    }
  }), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    animation: "wave",
    width: "80%",
    height: 20
  })) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: classes.chips
  }, Object(_modules_utils_objects__WEBPACK_IMPORTED_MODULE_4__["itHasLength"])(dataObj.category) && Object.values(dataObj.category).map((categ, kC) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: kC
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Chip"], {
    variant: "outlined",
    color: "primary",
    size: "small",
    classes: {
      root: classes.chipItem
    },
    clickable: true,
    component: _Link__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    href: route.pathname,
    as: route.href.replace('{param}', categ),
    label: categ
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TagsBox);

/***/ })

};;