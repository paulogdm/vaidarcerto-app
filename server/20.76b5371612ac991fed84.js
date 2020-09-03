exports.ids = [20];
exports.modules = {

/***/ "6vkJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YNhk");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
}));

const SmallBanner = props => {
  const {
    title,
    caption,
    url,
    type,
    pageSlug,
    linkLabel
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    elevation: 3
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: classes.root,
    my: 1,
    p: 1
  }, __jsx("img", {
    src: url,
    title: caption,
    style: {
      height: 80
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    ml: 1
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, title), type === 'news' && __jsx(_Link__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    href: pageSlug,
    variant: "subtitle2"
  }, "\xBB ", linkLabel))));
};

/* harmony default export */ __webpack_exports__["default"] = (SmallBanner);

/***/ })

};;