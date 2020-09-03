exports.ids = [16];
exports.modules = {

/***/ "Foo/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_styles_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JwJg");
/* harmony import */ var _modules_utils_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dYz/");
/* harmony import */ var _modules_utils_objects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_utils_objects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_customer_AvatarBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("HQKR");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const BannerItem = props => {
  const {
    dataObj,
    thumbProps
  } = props,
        restProps = _objectWithoutProperties(props, ["dataObj", "thumbProps"]);

  const classes = Object(_assets_styles_customer__WEBPACK_IMPORTED_MODULE_3__[/* useCustomerStyles */ "a"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.paper, classes.bgPaper)
  }, !Object(_modules_utils_objects__WEBPACK_IMPORTED_MODULE_4__["itHasLength"])(dataObj) ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: classes.spacing
  }, __jsx(_components_customer_AvatarBox__WEBPACK_IMPORTED_MODULE_5__[/* AvatarIndicator */ "a"], {
    dimensions: thumbProps
  })) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    justifyContent: "center",
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.spacing, classes.headerLink)
  }, __jsx(_components_customer_AvatarBox__WEBPACK_IMPORTED_MODULE_5__[/* WithAvatar */ "b"], _extends({}, restProps, {
    title: dataObj.title,
    imageSrc: dataObj.image,
    dimensions: thumbProps,
    imgProps: {
      // @TODO Send it to sentry.io
      onError: ({
        target
      }) => console.error('Avatar fetching error.', target)
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BannerItem);

/***/ }),

/***/ "HQKR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WithAvatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4ZJ9");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RnCP");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const AvatarIndicator = ({
  dimensions,
  square
}) => __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
  variant: !square ? 'circle' : 'square',
  width: dimensions.width,
  height: dimensions.height
});

AvatarIndicator.defaultProps = {
  dimensions: {
    width: 40,
    height: 40
  },
  square: false
};

const WithAvatar = (_ref) => {
  let {
    title,
    imageSrc,
    dimensions,
    square
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "imageSrc", "dimensions", "square"]);

  return __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    alt: title,
    src: imageSrc,
    variant: !square ? 'circle' : 'square',
    style: {
      width: dimensions.width,
      height: dimensions.height
    },
    imgProps: rest.imgProps
  });
};

WithAvatar.defaultProps = {
  src: '',
  dimensions: {
    width: 40,
    height: 40
  },
  square: false
};


/***/ })

};;