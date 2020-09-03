exports.ids = [27];
exports.modules = {

/***/ "cHu1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_PhoneInTalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bsnw");
/* harmony import */ var _material_ui_icons_PhoneInTalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhoneInTalk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("td7P");
/* harmony import */ var _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  link: {
    cursor: 'pointer'
  },
  phoneIcon: {
    padding: theme.spacing(0, 0.5),
    color: '#fff',
    fontSize: 30,
    backgroundColor: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_3___default.a[500],
    '&:hover': {
      backgroundColor: _material_ui_core_colors_blue__WEBPACK_IMPORTED_MODULE_3___default.a[700]
    }
  }
}));

const handlePhoneCall = number => window.location.href = `tel:${number}`;

const PhoneCallButton = props => {
  const {
    phone
  } = props;
  const classes = useStyles();
  return __jsx("a", {
    className: classes.link,
    onClick: () => handlePhoneCall(phone),
    "aria-label": "phone call button"
  }, __jsx(_material_ui_icons_PhoneInTalk__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.phoneIcon
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PhoneCallButton);

/***/ })

};;