exports.ids = [19];
exports.modules = {

/***/ "vgBV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Fm7H");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const DynamicPhoneCallButton = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, "cHu1")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("cHu1")],
    modules: ['~/components/buttons/PhoneCallButton']
  }
});
const DynamicWhatsAppChatButton = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "Y5+t")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Y5+t")],
    modules: ['~/components/SocialButtons/WhatsAppChatButton']
  }
});
const DynamicTelegramChatButton = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, "50ZY")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("50ZY")],
    modules: ['~/components/SocialButtons/TelegramChatButton']
  }
});
const DynamicPlaceMapButton = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 28).then(__webpack_require__.bind(null, "0oYF")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("0oYF")],
    modules: ['~/components/buttons/PlaceMapButton']
  }
});
const DynamicSocialShareButton = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, "gKnt")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("gKnt")],
    modules: ['./SocialShareButton']
  }
});
const DynamicSocialButtons = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "ZkRK")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("ZkRK")],
    modules: ['./SocialButtons']
  }
});

const CustomCardActions = props => {
  const {
    routerProps,
    itemProps,
    commercialText,
    globalSettings,
    handleAlertOpened
  } = props,
        rest = _objectWithoutProperties(props, ["routerProps", "itemProps", "commercialText", "globalSettings", "handleAlertOpened"]);

  const currentUri = globalSettings.domainUri + routerProps.asPath;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
    disableSpacing: true,
    style: {
      justifyContent: 'space-evenly'
    }
  }, typeof itemProps.phone !== 'undefined' && __jsx(DynamicPhoneCallButton, {
    phone: itemProps.phone
  }), typeof itemProps.whatsApp !== 'undefined' && __jsx(DynamicWhatsAppChatButton, {
    number: itemProps.whatsApp,
    commercialText: commercialText,
    siteName: globalSettings.siteName,
    url: currentUri
  }), typeof itemProps.telegram !== 'undefined' && __jsx(DynamicTelegramChatButton, {
    username: itemProps.telegram,
    siteName: globalSettings.siteName,
    url: currentUri
  }), typeof itemProps.placeLink !== 'undefined' && __jsx(DynamicPlaceMapButton, {
    pLink: itemProps.placeLink
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    orientation: "vertical",
    variant: "middle",
    flexItem: true
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    "aria-label": "favourites"
  }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_3___default.a, null)), __jsx(DynamicSocialShareButton, null, __jsx(DynamicSocialButtons, _extends({}, rest, itemProps, globalSettings, {
    router: routerProps,
    onAlertOpened: handleAlertOpened
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomCardActions);

/***/ })

};;