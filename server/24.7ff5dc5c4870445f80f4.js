exports.ids = [24];
exports.modules = {

/***/ "ZkRK":
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

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// CONCATENATED MODULE: ./components/SocialButtons/FacebookShareButton.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const FacebookShareButton = (_ref) => {
  let {
    children,
    appId,
    url
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "appId", "url"]);

  const encodedUrl = encodeURIComponent(url);
  return __jsx("a", _extends({}, rest, {
    href: `https://www.facebook.com/dialog/share?app_id=${appId}&display=popup&href=${encodedUrl}`,
    target: "_blank"
  }), children);
};

/* harmony default export */ var SocialButtons_FacebookShareButton = (FacebookShareButton);
// CONCATENATED MODULE: ./components/SocialButtons/TwitterShareButton.js
var TwitterShareButton_jsx = external_react_default.a.createElement;

function TwitterShareButton_extends() { TwitterShareButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TwitterShareButton_extends.apply(this, arguments); }

function TwitterShareButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TwitterShareButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TwitterShareButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const TwitterShareButton = props => {
  const {
    children,
    title,
    hashtags,
    site,
    handle,
    url
  } = props,
        rest = TwitterShareButton_objectWithoutProperties(props, ["children", "title", "hashtags", "site", "handle", "url"]);

  const encodedText = encodeURIComponent(title);
  const urlString = 'https://twitter.com/intent/tweet?';
  const urlParams = [`text=${encodedText}`, `via=${handle}`, `url=${url}`, `hashtags=${hashtags}`];
  const uri = urlString + urlParams.join('&');
  return TwitterShareButton_jsx("a", TwitterShareButton_extends({}, rest, {
    href: uri,
    target: "_blank"
  }), children);
};

/* harmony default export */ var SocialButtons_TwitterShareButton = (TwitterShareButton);
// CONCATENATED MODULE: ./components/SocialButtons/WhatsAppShareButton.js
var WhatsAppShareButton_jsx = external_react_default.a.createElement;

function WhatsAppShareButton_extends() { WhatsAppShareButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return WhatsAppShareButton_extends.apply(this, arguments); }

function WhatsAppShareButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = WhatsAppShareButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function WhatsAppShareButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const WhatsAppShareButton = props => {
  const {
    children,
    title,
    excerpt,
    siteName,
    url
  } = props,
        rest = WhatsAppShareButton_objectWithoutProperties(props, ["children", "title", "excerpt", "siteName", "url"]);

  const encodedText = encodeURIComponent(`*${title}*`) + ", " + encodeURIComponent(excerpt) + " - " + encodeURIComponent(`via *${siteName}*`) + " " + encodeURIComponent(`${url}`);
  return WhatsAppShareButton_jsx("a", WhatsAppShareButton_extends({}, rest, {
    href: `https://api.whatsapp.com/send?text=${encodedText}`,
    target: "_blank"
  }), children);
};

/* harmony default export */ var SocialButtons_WhatsAppShareButton = (WhatsAppShareButton);
// CONCATENATED MODULE: ./components/SocialButtons/TelegramShareButton.js
var TelegramShareButton_jsx = external_react_default.a.createElement;

function TelegramShareButton_extends() { TelegramShareButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TelegramShareButton_extends.apply(this, arguments); }

function TelegramShareButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TelegramShareButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TelegramShareButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const TelegramShareButton = props => {
  const {
    children,
    title,
    excerpt,
    siteName,
    url
  } = props,
        rest = TelegramShareButton_objectWithoutProperties(props, ["children", "title", "excerpt", "siteName", "url"]);

  const encodedText = encodeURIComponent(`**${title}**`) + ", " + encodeURIComponent(excerpt) + " - " + encodeURIComponent(`__via__ **${siteName}**`);
  return TelegramShareButton_jsx("a", TelegramShareButton_extends({}, rest, {
    href: `tg://msg_url?url=${url}&text=${encodedText}`,
    target: "_blank"
  }), children);
};

/* harmony default export */ var SocialButtons_TelegramShareButton = (TelegramShareButton);
// CONCATENATED MODULE: ./components/buttons/CopyToClipboardButton.js
var CopyToClipboardButton_jsx = external_react_default.a.createElement;

function CopyToClipboardButton_extends() { CopyToClipboardButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CopyToClipboardButton_extends.apply(this, arguments); }

function CopyToClipboardButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CopyToClipboardButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CopyToClipboardButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const CopyToClipboardButton = props => {
  const {
    children,
    url,
    setAlertOpened
  } = props,
        rest = CopyToClipboardButton_objectWithoutProperties(props, ["children", "url", "setAlertOpened"]);

  const handleCopy = ({
    event,
    url
  }) => {
    event.preventDefault();
    navigator.clipboard.writeText(url).then(() => {
      setAlertOpened(true);
    });
  };

  return CopyToClipboardButton_jsx("div", CopyToClipboardButton_extends({}, rest, {
    onClick: event => handleCopy({
      event,
      url
    })
  }), children);
};

/* harmony default export */ var buttons_CopyToClipboardButton = (CopyToClipboardButton);
// CONCATENATED MODULE: ./components/SocialButtons/index.jsx

var SocialButtons_jsx = external_react_default.a.createElement;

function SocialButtons_extends() { SocialButtons_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SocialButtons_extends.apply(this, arguments); }











const useStyles = Object(styles_["makeStyles"])(theme => ({
  shareButton: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.dark
    }
  },
  itemIcon: {
    minWidth: 30
  },
  facebookIcon: {
    color: "#fff",
    backgroundColor: colors_["blue"][800],
    '&:hover': {
      backgroundColor: colors_["blue"][900]
    }
  },
  twitterIcon: {
    color: "#fff",
    backgroundColor: colors_["blue"][300],
    '&:hover': {
      backgroundColor: colors_["blue"][500]
    }
  },
  whatsAppLink: {
    color: colors_["green"][500],
    '&:hover': {
      color: colors_["green"][700]
    }
  },
  whatsAppIcon: {
    color: "#fff",
    backgroundColor: colors_["green"][500],
    '&:hover': {
      backgroundColor: colors_["green"][700]
    }
  },
  telegramIcon: {
    color: "#fff",
    backgroundColor: colors_["blue"][500],
    '&:hover': {
      backgroundColor: colors_["blue"][700]
    }
  },
  linkIcon: {
    color: "#fff",
    backgroundColor: colors_["blue"][500],
    '&:hover': {
      backgroundColor: colors_["blue"][700]
    }
  }
}));

const SocialButtonsList = props => {
  const {
    title,
    primaryText,
    category,
    siteName,
    twitterUsername,
    domainUri,
    router,
    onAlertOpened,
    facebook,
    labels
  } = props;
  const facebookAppId = facebook ? facebook.appId : null;
  const twitterTitle = `${title}, ${primaryText}`;
  const twitterHashtags = category.join(',');
  const twitter = {
    title: twitterTitle,
    hashtags: twitterHashtags,
    handle: twitterUsername || undefined,
    site: domainUri || undefined
  };
  const whatsApp = {
    title,
    excerpt: primaryText,
    siteName
  };
  const telegram = {
    title,
    excerpt: primaryText,
    siteName
  };
  const currentUri = domainUri + router.asPath;
  const classes = useStyles();
  return SocialButtons_jsx(core_["List"], {
    component: "nav",
    "aria-label": "social buttons list"
  }, SocialButtons_jsx(core_["ListItem"], {
    button: true
  }, SocialButtons_jsx(SocialButtons_FacebookShareButton, {
    className: classes.shareButton,
    appId: facebookAppId,
    url: currentUri
  }, SocialButtons_jsx(core_["ListItemIcon"], {
    className: classes.itemIcon
  }, SocialButtons_jsx(icons_["Facebook"], {
    className: classes.facebookIcon
  })), SocialButtons_jsx(core_["ListItemText"], {
    primary: "Facebook"
  }))), SocialButtons_jsx(core_["ListItem"], {
    button: true
  }, SocialButtons_jsx(SocialButtons_TwitterShareButton, SocialButtons_extends({
    className: classes.shareButton
  }, twitter, {
    url: currentUri
  }), SocialButtons_jsx(core_["ListItemIcon"], {
    className: classes.itemIcon
  }, SocialButtons_jsx(icons_["Twitter"], {
    className: classes.twitterIcon
  })), SocialButtons_jsx(core_["ListItemText"], {
    primary: "Twitter"
  }))), SocialButtons_jsx(core_["ListItem"], {
    button: true
  }, SocialButtons_jsx(SocialButtons_WhatsAppShareButton, SocialButtons_extends({
    className: external_clsx_default()(classes.shareButton, classes.whatsAppLink)
  }, whatsApp, {
    url: currentUri
  }), SocialButtons_jsx(core_["ListItemIcon"], {
    className: classes.itemIcon
  }, SocialButtons_jsx(icons_["WhatsApp"], {
    className: classes.whatsAppIcon
  })), SocialButtons_jsx(core_["ListItemText"], {
    primary: "WhatsApp"
  }))), SocialButtons_jsx(core_["ListItem"], {
    button: true
  }, SocialButtons_jsx(SocialButtons_TelegramShareButton, SocialButtons_extends({
    className: classes.shareButton
  }, telegram, {
    url: currentUri
  }), SocialButtons_jsx(core_["ListItemIcon"], {
    className: classes.itemIcon
  }, SocialButtons_jsx(icons_["Telegram"], {
    className: classes.telegramIcon
  })), SocialButtons_jsx(core_["ListItemText"], {
    primary: "Telegram"
  }))), SocialButtons_jsx(core_["ListItem"], {
    button: true
  }, SocialButtons_jsx(buttons_CopyToClipboardButton, {
    className: classes.shareButton,
    setAlertOpened: onAlertOpened,
    url: currentUri
  }, SocialButtons_jsx(core_["ListItemIcon"], {
    className: classes.itemIcon
  }, SocialButtons_jsx(icons_["Link"], {
    className: classes.linkIcon
  })), SocialButtons_jsx(core_["ListItemText"], {
    primary: labels.copyLink
  }))));
};

/* harmony default export */ var SocialButtons = __webpack_exports__["default"] = (SocialButtonsList);

/***/ })

};;