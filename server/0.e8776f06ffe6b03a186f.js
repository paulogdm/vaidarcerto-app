exports.ids = [0,14,17];
exports.modules = {

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


/***/ }),

/***/ "JwJg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCustomerStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);


const useCustomerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  spacing: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(0.5),
    maxWidth: '100%',
    width: '100%'
  },
  bgPaper: {
    backgroundColor: theme.palette.background.default
  },
  announcementHeader: {
    padding: 10,
    width: '100%'
  },
  headerLink: {
    color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["grey"][800],
    '&:hover': {
      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["grey"][700],
      cursor: 'pointer'
    }
  },
  itemContent: {
    padding: theme.spacing(0.5),
    width: '100%',
    border: `solid 1px ${_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["grey"][200]}`
  }
}));

/***/ }),

/***/ "lRx9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_utils_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYz/");
/* harmony import */ var _modules_utils_objects__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_utils_objects__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_styles_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("JwJg");
/* harmony import */ var _components_customer_CustomerItemBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("qcUB");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const CustomersListCallback = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "vQ8M")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("vQ8M")],
    modules: ['~/components/callbacks/CustomersListCallback']
  }
});

const ItemGrid = props => {
  const {
    itemProps,
    handleCustomerProps,
    handleLinkClickProps
  } = props,
        rest = _objectWithoutProperties(props, ["itemProps", "handleCustomerProps", "handleLinkClickProps"]);

  const classes = Object(_assets_styles_customer__WEBPACK_IMPORTED_MODULE_4__[/* useCustomerStyles */ "a"])();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    key: rest.key,
    container: true,
    item: true,
    className: classes.paper
  }, __jsx(_components_customer_CustomerItemBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    noAvatar: rest.noAvatar,
    dataObj: itemProps,
    onHandleClick: event => {
      handleCustomerProps(itemProps);
      handleLinkClickProps(event, '/b/[slug]', `/b/${itemProps.slug}`);
    }
  }));
};

const CustomersList = props => {
  const {
    sectionTitle,
    filterProps
  } = props,
        restProps = _objectWithoutProperties(props, ["sectionTitle", "filterProps"]);

  const classes = Object(_assets_styles_customer__WEBPACK_IMPORTED_MODULE_4__[/* useCustomerStyles */ "a"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CustomersListCallback, {
    filterBy: filterProps
  }, (_ref) => {
    let {
      dataProps
    } = _ref,
        callbackRest = _objectWithoutProperties(_ref, ["dataProps"]);

    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      direction: "column",
      item: true,
      xs: 12
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: true
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "subtitle2",
      color: "secondary"
    }, sectionTitle)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      item: true,
      xs: 12
    }, Object.keys(dataProps.status === 'fetching' ? Object(_modules_utils_objects__WEBPACK_IMPORTED_MODULE_3__["mockArrayData"])(5) : dataProps.data).map((k, i) => __jsx(ItemGrid, _extends({
      key: k
    }, restProps, {
      itemProps: dataProps.data[k]
    }, callbackRest)))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: true,
      className: classes.spacing
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
      variant: "fullWidth"
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      pt: 1
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "outlined",
      color: "primary",
      size: "small",
      fullWidth: true
    }, "Ver mais servi\xE7os"))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomersList);

/***/ }),

/***/ "qcUB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./assets/styles/customer.js
var customer = __webpack_require__("JwJg");

// EXTERNAL MODULE: ./modules/utils/objects.js
var objects = __webpack_require__("dYz/");

// EXTERNAL MODULE: ./components/customer/AvatarBox.jsx
var AvatarBox = __webpack_require__("HQKR");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/lab"
var lab_ = __webpack_require__("RnCP");

// CONCATENATED MODULE: ./components/customer/TitleBox.jsx

var __jsx = external_react_default.a.createElement;



const useStyles = Object(styles_["makeStyles"])(theme => ({
  titleRoot: {
    marginTop: theme.spacing(0.5),
    fontWeight: 600,
    lineHeight: 1.5
  }
}));
const TitleIndicator = () => __jsx(lab_["Skeleton"], {
  width: "100%"
});

const WithTitle = ({
  title,
  hasPrimaryText,
  styleProps
}) => {
  const classes = useStyles();
  return __jsx(Typography_default.a, {
    variant: hasPrimaryText ? 'overline' : 'h5',
    className: classes.titleRoot,
    style: styleProps
  }, title);
};

/* harmony default export */ var TitleBox = (WithTitle);
// CONCATENATED MODULE: ./components/customer/PrimaryTextBox.jsx

var PrimaryTextBox_jsx = external_react_default.a.createElement;


const PrimaryTextIndicator = () => PrimaryTextBox_jsx(lab_["Skeleton"], {
  animation: "wave",
  width: "80%",
  height: 10
});

const WithPrimaryText = ({
  primaryText
}) => PrimaryTextBox_jsx(Typography_default.a, {
  variant: "body2",
  color: "textSecondary",
  gutterBottom: true
}, primaryText);

/* harmony default export */ var PrimaryTextBox = (WithPrimaryText);
// CONCATENATED MODULE: ./components/customer/CustomerItemBox.jsx

var CustomerItemBox_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const CustomerItemBox = props => {
  const {
    dataObj,
    thumbProps,
    onHandleClick
  } = props,
        rest = _objectWithoutProperties(props, ["dataObj", "thumbProps", "onHandleClick"]);

  const classes = Object(customer["a" /* useCustomerStyles */])();
  return CustomerItemBox_jsx(external_react_default.a.Fragment, null, !Object(objects["itHasLength"])(dataObj) ? CustomerItemBox_jsx(core_["Box"], {
    display: "flex",
    width: "100%",
    className: classes.itemContent
  }, !rest.noAvatar && CustomerItemBox_jsx(AvatarBox["a" /* AvatarIndicator */], {
    dimensions: thumbProps
  }), CustomerItemBox_jsx(core_["Box"], {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }, CustomerItemBox_jsx(TitleIndicator, null), !rest.noPrimaryText && CustomerItemBox_jsx(PrimaryTextIndicator, null))) : CustomerItemBox_jsx(core_["Box"], {
    display: "flex",
    alignItems: "flex-start",
    component: core_["Link"],
    underline: "none",
    onClick: event => onHandleClick(event, dataObj),
    className: external_clsx_default()(classes.headerLink, classes.itemContent)
  }, !rest.noAvatar && CustomerItemBox_jsx(core_["Box"], {
    mr: 1
  }, CustomerItemBox_jsx(AvatarBox["b" /* WithAvatar */], _extends({}, dataObj, {
    dimensions: thumbProps
  }))), CustomerItemBox_jsx(core_["Box"], null, CustomerItemBox_jsx(TitleBox, {
    styleProps: rest.titleProps,
    title: dataObj.title,
    hasPrimaryText: !rest.noPrimaryText
  }), !rest.noPrimaryText && CustomerItemBox_jsx(PrimaryTextBox, {
    primaryText: dataObj.primaryText
  }))));
};

/* harmony default export */ var customer_CustomerItemBox = __webpack_exports__["default"] = (CustomerItemBox);

/***/ })

};;