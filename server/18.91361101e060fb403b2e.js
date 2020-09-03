exports.ids = [18];
exports.modules = {

/***/ "Fgb9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("RpH3");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2kat");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("RnCP");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("obyI");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const DynamicMarkdown = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "id0+", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("id0+")],
    modules: ['react-markdown']
  }
});
const DynamicTagsBox = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, "yTNJ")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("yTNJ")],
    modules: ['./TagsBox']
  }
});
const DynamicCardActions = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "vgBV")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("vgBV")],
    modules: ['./CustomCardActions']
  }
});
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    width: '100%'
  },
  media: {
    height: 0,
    paddingTop: '45%',
    // 1:9
    backgroundSize: 'contain',
    [theme.breakpoints.down('xs')]: {
      height: 180
    }
  },
  avatar: {
    backgroundColor: _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_3___default.a[500]
  },
  content: {},
  mTop: {
    marginTop: 10
  },
  mBottom: {
    marginBottom: 10
  },
  pTop: {
    paddingTop: 10
  },
  pBottom: {
    paddingBottom: 10
  },
  bold: {
    fontWeight: 'bold'
  },
  spaceRight: {
    marginRight: 2
  },
  smallSpacer: {
    margin: 2
  }
}));

const Alert = props => __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["Alert"], _extends({
  elevation: 6,
  variant: "filled"
}, props));

const configLabels = {
  phone: 'Telefone:',
  copyLink: 'Copiar link',
  commercialText: 'Gostaria de mais informações sobre '
};

const hasValue = address => address !== undefined && address !== null && address.length > 0;

const BusinessCardItem = props => {
  const {
    item,
    router
  } = props;
  const globalSettings = _config__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].globalSettings;
  const {
    0: isAlertOpened,
    1: setAlertOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const classes = useStyles();

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpened(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    className: classes.root
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardHeader"], {
    avatar: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
      "aria-label": "recipe",
      className: classes.avatar
    }, item.title.charAt(0)),
    title: item.title,
    subheader: item.primaryText
  }), Boolean(item.hasLogo) && String(item.image) !== null && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardMedia"], {
    className: classes.media,
    image: item.image,
    title: item.title
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CardContent"], {
    className: classes.content
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.mBottom,
    variant: "body2",
    color: "textSecondary",
    component: "div"
  }, __jsx(DynamicMarkdown, {
    source: item.secondaryText
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], null), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    mt: 1
  }, hasValue(item.address) && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    display: "flex"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    display: "inline",
    className: classes.spaceRight
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Place"], {
    color: "action",
    fontSize: "small"
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "span"
  }, item.address)), typeof item.phone !== 'undefined' && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    display: "flex",
    className: classes.mBottom
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    display: "inline",
    className: classes.spaceRight
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["Phone"], {
    color: "action",
    fontSize: "small"
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classes.bold,
    variant: "body2",
    color: "textSecondary",
    component: "span"
  }, configLabels.phone), __jsx("div", {
    className: classes.smallSpacer
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "span"
  }, item.phone))), __jsx(DynamicTagsBox, {
    dataObj: item,
    route: {
      pathname: '/tag/[slug]',
      href: '/tag/{param}'
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Snackbar"], {
    open: isAlertOpened,
    autoHideDuration: 3000,
    onClose: handleAlertClose
  }, __jsx(Alert, {
    onClose: handleAlertClose,
    severity: "success"
  }, "Link copied"))), Boolean(globalSettings !== null) && __jsx(DynamicCardActions, {
    globalSettings: globalSettings,
    routerProps: router,
    itemProps: item,
    commercialText: configLabels.commercialText + item.category.join(', '),
    handleAlertOpened: setAlertOpened,
    labels: configLabels
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BusinessCardItem);

/***/ })

};;