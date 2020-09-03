exports.ids = [23];
exports.modules = {

/***/ "Y5+t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gc93");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Zo8Y");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    padding: theme.spacing(0, 0.5),
    color: '#fff',
    fontSize: 30,
    backgroundColor: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_3___default.a[500],
    '&:hover': {
      backgroundColor: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_3___default.a[700]
    }
  }
}));

const WhatsAppChatButton = props => {
  const {
    number,
    commercialText
  } = props,
        rest = _objectWithoutProperties(props, ["number", "commercialText"]);

  const encodedText = encodeURIComponent(commercialText) + " - " + encodeURIComponent(`via *${rest.siteName}*`) + " " + encodeURIComponent(`${rest.url}`);
  const numberParam = number !== undefined && number !== null ? number : '';
  const classes = useStyles();
  return __jsx("a", {
    "aria-label": "WhatsApp button",
    href: `https://wa.me/${numberParam}?text=${encodedText}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, __jsx(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (WhatsAppChatButton);

/***/ })

};;