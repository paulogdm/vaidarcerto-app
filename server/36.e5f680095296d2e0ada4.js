exports.ids = [36];
exports.modules = {

/***/ "bMkr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYz/");
/* harmony import */ var _utils_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YNhk");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  listItemLink: {
    display: 'flex',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.text.primary
    }
  }
}));
const DynamicCustomItemAvatar = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 37).then(__webpack_require__.bind(null, "vbSW")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("vbSW")],
    modules: ['./CustomListItemAvatar']
  }
});

const CustomListItem = props => {
  const {
    title,
    slug,
    primaryText,
    category
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
    alignItems: "flex-start",
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, myRef) => __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], _extends({}, props, {
      ref: myRef,
      href: "/b/[slug]",
      as: `/b/${slug}`,
      color: "inherit",
      className: classes.listItemLink
    })))
  }, __jsx(DynamicCustomItemAvatar, {
    title: title.charAt(0)
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
    primary: title,
    secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "body2",
      color: "textSecondary"
    }, primaryText), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, Object(_utils_objects__WEBPACK_IMPORTED_MODULE_4__["itHasLength"])(category) && Object.values(category).map((categ, kC) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: kC
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Chip"], {
      size: "small",
      className: classes.chip,
      component: "span",
      label: categ
    }))))),
    secondaryTypographyProps: {
      component: "div"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomListItem);

/***/ })

};;