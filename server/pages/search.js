module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		11: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"20":"76b5371612ac991fed84","36":"e5f680095296d2e0ada4","37":"b72d9dfee3455ecf88a1"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _interopRequireDefault = __webpack_require__("mYab");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("bBV7");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, _extends({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "2oa2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_firebase_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yVSl");


const globalSettings = async () => {
  const globalRef = _modules_firebase_services__WEBPACK_IMPORTED_MODULE_0__[/* database */ "a"].collection('global-settings');
  const querySnapshot = await globalRef.get();
  const props = {};
  const newObject = await Object(_modules_firebase_services__WEBPACK_IMPORTED_MODULE_0__[/* parseQuerySnapshot */ "d"])(querySnapshot);

  if (Boolean(newObject.length) && newObject.length > 0) {
    await newObject.map(item => {
      if (item.type === 'banner-header') {
        props.bannerHeader = item.bannerHeader;
      } else if (item.type === 'logo') {
        props.logoObj = item.logoObj;
      } else if (item.type === 'menu-header') {
        props.menuHeader = item.menuHeader;
      } else if (item.type === 'menu-footer') {
        props.menuFooter = {
          menuRoutes: item.menuFooter,
          socials: item.socials
        };
      }

      return item;
    });
  }

  return props;
};

/* harmony default export */ __webpack_exports__["a"] = (globalSettings);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// CONCATENATED MODULE: ./next-seo.config.js
// Next.js seo configuration

const {
  domainUri,
  siteName,
  twitterUsername
} = config["a" /* default */].globalSettings;
/* harmony default export */ var next_seo_config = ({
  openGraph: {
    type: 'website',
    // it could be: article, website
    locale: 'en',
    url: domainUri,
    // canonical
    site_name: siteName.replace(" ", ''),
    title: siteName,
    description: null,
    image: null
  },
  twitter: {
    handle: `@${twitterUsername}`,
    // @handle
    site: domainUri.replace(/(^\w+:|^)\/\//, ''),
    // @site
    cardType: 'summary'
  },
  facebook: {
    appId: config["a" /* default */].facebook.appId
  }
});
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__("YNhk");

// CONCATENATED MODULE: ./components/PrimarySearchAppBar.jsx
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const useStyles = Object(styles_["makeStyles"])(theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: colors_["blueGrey"][600]
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {},
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  menuItem: {
    '&:hover': {
      opacity: 0.6
    }
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: colors_["grey"][100],
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

const SearchIconLink = () => {
  const classes = useStyles();
  return __jsx(Link["a" /* default */], {
    href: "/search",
    "aria-label": "Search page",
    className: classes.link
  }, __jsx(core_["IconButton"], {
    "aria-label": "Search",
    color: "inherit"
  }, __jsx(icons_["Search"], null)));
};

const PrimarySearchAppBar = props => {
  const {
    appTitle,
    menuHeader = {}
  } = props,
        rest = _objectWithoutProperties(props, ["appTitle", "menuHeader"]);

  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = external_react_default.a.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = __jsx(core_["Menu"], {
    anchorEl: mobileMoreAnchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    id: mobileMenuId,
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: isMobileMenuOpen,
    onClose: handleMobileMenuClose
  }, Object.values(menuHeader).map((item, kI) => __jsx(core_["MenuItem"], {
    key: kI
  }, __jsx(Link["a" /* default */], {
    href: item.pathname,
    as: item.asPath,
    classes: {
      root: classes.link
    }
  }, __jsx(core_["IconButton"], {
    key: kI,
    "aria-label": item.title,
    "aria-controls": mobileMenuId
  }, __jsx(core_["Icon"], {
    color: "inherit",
    fontSize: "small"
  }, item.itemIcon)), __jsx(core_["Typography"], {
    variant: "subtitle1",
    color: "textPrimary"
  }, item.title)))));

  return __jsx(external_react_default.a.Fragment, null, __jsx(core_["AppBar"], {
    position: "sticky"
  }, __jsx(core_["Toolbar"], {
    className: classes.appBar
  }, __jsx(Link["a" /* default */], {
    href: "/",
    "aria-label": "Link to Home page",
    classes: {
      root: classes.link
    }
  }, __jsx(core_["Typography"], {
    className: classes.title,
    variant: "h6",
    noWrap: true
  }, appTitle, " ", __jsx("code", null, "DIGITAL"))), __jsx("div", {
    className: classes.grow
  }), __jsx("div", {
    className: classes.sectionDesktop
  }, __jsx(SearchIconLink, null), Object.values(menuHeader).map((item, kI) => __jsx(core_["MenuItem"], {
    key: kI,
    className: classes.menuItem
  }, __jsx(Link["a" /* default */], {
    href: item.pathname,
    as: item.asPath,
    "aria-label": item.title,
    classes: {
      root: classes.link
    }
  }, __jsx(core_["Typography"], {
    variant: "subtitle1"
  }, item.title))))), __jsx("div", {
    className: classes.sectionMobile
  }, __jsx(SearchIconLink, null), __jsx(core_["IconButton"], {
    "aria-label": "Menu",
    "aria-controls": mobileMenuId,
    "aria-haspopup": "true",
    onClick: handleMobileMenuOpen,
    color: "inherit"
  }, __jsx(icons_["Menu"], null))))), renderMobileMenu);
};

/* harmony default export */ var components_PrimarySearchAppBar = (PrimarySearchAppBar);
// CONCATENATED MODULE: ./components/Layout.js
var Layout_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Layout_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Layout_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Layout_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Layout_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    backgroundColor: colors_["indigo"][50]
  },
  appContainer: {
    maxWidth: 960
  }
}));

const Layout = props => {
  const {
    children,
    seoProps,
    routerProps
  } = props,
        restProps = Layout_objectWithoutProperties(props, ["children", "seoProps", "routerProps"]);

  const {
    hasLayoutAdjusts
  } = restProps;
  const routerAsPath = routerProps.asPath;
  const {
    openGraph,
    twitter
  } = next_seo_config;
  const classes = Layout_useStyles();
  seoProps.title = seoProps.title || openGraph.title;
  seoProps.description = seoProps.description || openGraph.description;
  const imageGraph = seoProps.imageGraph ? {
    url: seoProps.imageGraph,
    width: 720,
    height: 320
  } : {
    url: restProps && restProps.logoObj ? restProps.logoObj.url + `&w=${300}&h=${200}` : '',
    width: 300,
    height: 200
  };
  seoProps.openGraph = {
    title: `${seoProps.title} | ${openGraph.title}`,
    images: [_objectSpread({}, imageGraph)]
  };
  const cardType = seoProps.twitterCardType || twitter.cardType;
  seoProps.twitter = {
    cardType
  };
  seoProps.titleTemplate = seoProps.title ? `%s | ${openGraph.site_name}` : `${openGraph.site_name} | ${openGraph.title}`;
  openGraph.type = seoProps.openGraph && seoProps.openGraph.type ? seoProps.openGraph.type : openGraph.type;
  openGraph.description = seoProps.description || openGraph.description;
  const canonical = openGraph.url + routerAsPath;

  const defaultSEO = _objectSpread(_objectSpread(_objectSpread({}, next_seo_config), seoProps), {}, {
    openGraph: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, next_seo_config.openGraph), openGraph), seoProps.openGraph), {}, {
      url: canonical
    }),
    twitter: _objectSpread(_objectSpread(_objectSpread({}, next_seo_config.twitter), openGraph.twitter), seoProps.twitter)
  });

  return Layout_jsx("div", {
    className: classes.root
  }, Layout_jsx(head_default.a, null, Layout_jsx("meta", {
    charSet: "utf-8"
  }), Layout_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), Layout_jsx(external_next_seo_["DefaultSeo"], defaultSEO), Layout_jsx(core_["Container"], {
    className: classes.appContainer
  }, Layout_jsx(components_PrimarySearchAppBar, _extends({}, props, {
    appTitle: openGraph.site_name
  })), Layout_jsx(core_["Box"], {
    display: "flex",
    flexDirection: "column",
    minHeight: '100vh'
  }, children)));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "5pUN":
/***/ (function(module, exports) {

module.exports = require("algoliasearch/lite");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("eOhz");


/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// CONCATENATED MODULE: ./components/Copyright.js
var __jsx = external_react_default.a.createElement;



const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2)
  }
}));

const Copyright = props => {
  const {
    globalSettings
  } = props;
  const classes = useStyles();
  return __jsx(core_["Box"], {
    className: classes.root
  }, __jsx(core_["Typography"], {
    variant: "body2",
    color: "textPrimary"
  }, 'Copyright © ', __jsx(core_["Link"], {
    color: "inherit",
    href: globalSettings.domainUri
  }, globalSettings.siteName), ' ', new Date().getFullYear(), '.'));
};

/* harmony default export */ var components_Copyright = (Copyright);
// CONCATENATED MODULE: ./components/Footer.js
var Footer_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const Footer_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: '100%'
  },
  footerMenu: {
    display: 'flex',
    backgroundColor: colors_["blueGrey"][600]
  },
  listFooter: {
    display: 'flex',
    flexDirection: 'row'
  },
  itemTextPrimary: {
    marginTop: theme.spacing(0.5),
    textTransform: 'uppercase'
  },
  link: {
    color: colors_["grey"][100]
  },
  noLeftPadding: {
    paddingLeft: 5
  }
}));

const ListItemGroup = props => Footer_jsx(core_["ListItem"], _extends({
  button: true
}, props));

const CustomListItem = props => {
  const {
    item,
    activeRoute
  } = props;
  const classes = Footer_useStyles();
  return Footer_jsx(core_["ListItem"], {
    style: {
      padding: 0,
      width: 'auto'
    },
    dense: true,
    selected: activeRoute === item.route ? true : false
  }, Footer_jsx(ListItemGroup, {
    component: "div"
  }, Footer_jsx(link_default.a, {
    href: item.pathname,
    as: item.asPath,
    passHref: true,
    prefetch: false
  }, Footer_jsx(core_["Link"], {
    classes: {
      root: classes.link
    }
  }, Footer_jsx(core_["ListItemText"], {
    primary: item.title,
    primaryTypographyProps: {
      variant: 'subtitle2'
    },
    classes: {
      primary: classes.itemTextPrimary
    }
  })))));
};

const getSocialIcon = {
  'twitter': props => Footer_jsx(icons_["Twitter"], props),
  'facebook': props => Footer_jsx(icons_["Facebook"], props),
  'instagram': props => Footer_jsx(icons_["Instagram"], props),
  'linkedin': props => Footer_jsx(icons_["LinkedIn"], props),
  'youtube': props => Footer_jsx(icons_["YouTube"], props)
};

const CustomSocialItem = props => {
  const {
    itemKey,
    itemValue
  } = props;
  const classes = Footer_useStyles();
  return Footer_jsx(core_["ListItem"], {
    style: {
      padding: 5,
      width: 'auto'
    }
  }, Footer_jsx(core_["Link"], {
    color: "inherit",
    className: classes.link,
    href: itemValue,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": itemKey
  }, getSocialIcon[itemKey]({
    fontSize: 'small'
  })));
};

const MenuFooter = props => {
  const {
    router,
    menuRoutes,
    socials
  } = props;
  const classes = Footer_useStyles();
  return Footer_jsx(core_["Box"], {
    className: classes.footerMenu
  }, Footer_jsx(core_["List"], {
    className: classes.listFooter,
    style: {
      width: '70%'
    }
  }, Object.values(menuRoutes).filter(item => item.status === 'active').map((itemArr, kI) => Footer_jsx(external_react_default.a.Fragment, {
    key: kI
  }, Footer_jsx(CustomListItem, {
    item: itemArr,
    activeRoute: router.asPath
  })))), Footer_jsx(core_["List"], {
    className: classes.listFooter,
    style: {
      flexWrap: 'wrap',
      width: '30%',
      justifyContent: 'flex-end',
      paddingRight: 10
    }
  }, Object.keys(socials).filter(kI => socials[kI] !== "").map((itemArr, kI) => Footer_jsx(external_react_default.a.Fragment, {
    key: kI
  }, Footer_jsx(CustomSocialItem, {
    itemKey: itemArr,
    itemValue: socials[itemArr]
  })))));
};

const Footer = props => {
  const {
    router,
    menuFooter
  } = props;
  const menuFooterLoaded = typeof menuFooter === "object";
  const classes = Footer_useStyles();
  return Footer_jsx(core_["Box"], {
    className: classes.root
  }, menuFooterLoaded && Footer_jsx(MenuFooter, _extends({
    router: router
  }, menuFooter)), Footer_jsx(components_Copyright, props));
};

/* harmony default export */ var components_Footer = __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("HIQq");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

var _router = __webpack_require__("bBV7");

var _router2 = __webpack_require__("a4i1");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(router.pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(router.pathname, props.as) : resolvedHref
    };
  }, [router.pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "B7Y8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ server_["findResultsState"]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ searchClient; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ instantsearch_translations; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ utils["createURL"]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ utils["pathToSearchState"]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ utils["searchStateToURL"]; });

// UNUSED EXPORTS: SearchApp, ConnectedSearchBox, LoadingIndicator, ConnectedCategoriesList, ConnectedHits, ConnectedResults, ConnectedWhatsAppFilter, ConnectedPoweredBy, ConnectedPagination

// EXTERNAL MODULE: external "react-instantsearch-dom/server"
var server_ = __webpack_require__("QiDx");

// EXTERNAL MODULE: external "algoliasearch/lite"
var lite_ = __webpack_require__("5pUN");
var lite_default = /*#__PURE__*/__webpack_require__.n(lite_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// CONCATENATED MODULE: ./modules/instantsearch/services.js


const fullTextSearch = config["a" /* default */].fullTextSearch.algolia; // `notes`, `users`, `customers`, etc.

const indexName = fullTextSearch.indexName;
const searchKey = fullTextSearch.searchKey;
const searchClient = lite_default()(fullTextSearch.appId, fullTextSearch.searchApiKey); // Detecting if query is empty (""), then mock an empty response.

const searchClientSearch = searchClient.search;

searchClient.search = function search(requests) {
  if (requests.every(({
    params
  }) => !params.query)) {
    return Promise.resolve({
      results: requests.map(() => ({
        hits: [],
        nbHits: 0,
        nbPages: 0,
        processingtimeMS: 0
      }))
    });
  }

  return searchClientSearch(requests);
};


/* harmony default export */ var services = (searchClient);
// EXTERNAL MODULE: ./modules/instantsearch/SearchApp.js
var SearchApp = __webpack_require__("xV55");

// CONCATENATED MODULE: ./modules/instantsearch/translations.js
const translations = {
  ptBR: () => ({
    searchBox: {
      label: 'Nome',
      placeholder: 'Busque pelo que você deseja...',
      button: 'Buscar'
    },
    categoriesFilter: {
      label: 'Categorias'
    },
    whatsAppFilter: {
      label: 'Possui WhatsApp'
    },
    results: {
      query: 'Pesquisando por:',
      noResults: 'Nenhum resultado foi encontrado.',
      legend: 'Registros encontrados para esta consulta:',
      errorMessage: 'Ocorreu um erro enquanto você pesquisava. Tente novamente mais tarde.'
    }
  })
};
/* harmony default export */ var instantsearch_translations = (translations);
// EXTERNAL MODULE: ./modules/instantsearch/ConnectedSearchBox.js
var ConnectedSearchBox = __webpack_require__("rM+N");

// EXTERNAL MODULE: ./modules/instantsearch/LoadingIndicator.js
var LoadingIndicator = __webpack_require__("EqjX");

// EXTERNAL MODULE: ./modules/instantsearch/ConnectedCategoriesList.js
var ConnectedCategoriesList = __webpack_require__("zjux");

// EXTERNAL MODULE: ./modules/instantsearch/ConnectedHits.js
var ConnectedHits = __webpack_require__("uVVg");

// EXTERNAL MODULE: ./modules/instantsearch/ConnectedResults.js
var ConnectedResults = __webpack_require__("rvvz");

// EXTERNAL MODULE: ./modules/instantsearch/ConnectedWhatsAppFilter.js
var ConnectedWhatsAppFilter = __webpack_require__("XAyj");

// EXTERNAL MODULE: ./modules/instantsearch/ConnectedPoweredBy.js
var ConnectedPoweredBy = __webpack_require__("TJka");

// EXTERNAL MODULE: ./modules/instantsearch/ConnectedPagination.js
var ConnectedPagination = __webpack_require__("XYdX");

// EXTERNAL MODULE: ./modules/instantsearch/utils.js
var utils = __webpack_require__("yzB5");

// CONCATENATED MODULE: ./modules/instantsearch/index.js














/***/ }),

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "C3xT":
/***/ (function(module, exports) {

module.exports = require("react-instantsearch-dom");

/***/ }),

/***/ "EqjX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("C3xT");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("RnCP");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LoadingIndicator = ({
  isSearchStalled
}) => isSearchStalled ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
  width: "100%"
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], null, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], null), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
  animation: false
}), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
  animation: "wave"
}))) : null;

const ConnectedLoading = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectStateResults"])(LoadingIndicator);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedLoading);

/***/ }),

/***/ "Eyu4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "HASU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_firebase_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yVSl");


const getPost = async query => {
  const customerQuery = _modules_firebase_services__WEBPACK_IMPORTED_MODULE_0__[/* database */ "a"].collection('pages').where(query.label, '==', query.value).limit(1);
  const querySnapshot = await customerQuery.get();
  const props = {
    postItem: {}
  };

  if (Boolean(querySnapshot.size) && querySnapshot.size > 0) {
    const newObject = await Object(_modules_firebase_services__WEBPACK_IMPORTED_MODULE_0__[/* parseQuerySnapshot */ "d"])(querySnapshot);
    const item = newObject[0];
    props.postItem = item;
  }

  return props.postItem;
};

/* harmony default export */ __webpack_exports__["a"] = (getPost);

/***/ }),

/***/ "HIQq":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("pSYS");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "Jtos":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Pagination");

/***/ }),

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "M7zN":
/***/ (function(module, exports) {

module.exports = require("firebase/analytics");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Plc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "QiDx":
/***/ (function(module, exports) {

module.exports = require("react-instantsearch-dom/server");

/***/ }),

/***/ "RnCP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab");

/***/ }),

/***/ "TJka":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("C3xT");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  poweredBy: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1, 0),
    width: '100%',
    fontSize: 12,
    '& .ais-PoweredBy': {
      display: 'flex',
      alignItems: 'center',
      '& .ais-PoweredBy-text': {
        paddingRight: 5,
        paddingBottom: 5
      },
      '& .ais-PoweredBy-logo': {
        width: 60
      }
    }
  }
}));

const CustomPoweredBy = () => {
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.poweredBy
  }, __jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["PoweredBy"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomPoweredBy);

/***/ }),

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "Wecs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__("8xkj"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "XAyj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("C3xT");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  textField: {
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const CustomWhatsAppFilter = props => {
  const {
    currentRefinement,
    attribute,
    label,
    refine,
    translations = {}
  } = props;
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.textField,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "caption"
  }, translations.label || label), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    checked: currentRefinement,
    name: attribute,
    onChange: event => refine(!currentRefinement)
  }));
};

const ConnectedWhatsAppFilter = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectToggleRefinement"])(CustomWhatsAppFilter);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedWhatsAppFilter);

/***/ }),

/***/ "XYdX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("C3xT");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Jtos");
/* harmony import */ var _material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CustomPagination = ({
  currentRefinement,
  nbPages,
  refine
}) => __jsx(_material_ui_lab_Pagination__WEBPACK_IMPORTED_MODULE_2___default.a, {
  count: nbPages,
  variant: "outlined",
  shape: "rounded",
  size: "small",
  page: currentRefinement,
  disabled: nbPages <= 1,
  onChange: (event, value) => refine(value)
});

const ConnectedPagination = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectPagination"])(CustomPagination);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedPagination);

/***/ }),

/***/ "YNhk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MCme");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/anchor-has-content */





const NextComposed = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const {
    as,
    href
  } = props,
        other = _objectWithoutProperties(props, ["as", "href"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    as: as
  }, __jsx("a", _extends({
    ref: ref
  }, other)));
});

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = props => {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked
  } = props,
        other = _objectWithoutProperties(props, ["href", "activeClassName", "className", "innerRef", "naked"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx__WEBPACK_IMPORTED_MODULE_3___default()(classNameProps, router.pathname === pathname && activeClassName);

  if (naked) {
    return __jsx(NextComposed, _extends({
      className: className,
      ref: innerRef,
      href: href
    }, other));
  }

  return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    component: NextComposed,
    className: className,
    ref: innerRef,
    href: href
  }, other));
};

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => __jsx(Link, _extends({}, props, {
  innerRef: ref
}))));

/***/ }),

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("Jxiz"));

var _utils = __webpack_require__("z4BS");

var _isDynamic = __webpack_require__("BCwt");

var _routeMatcher = __webpack_require__("VOyh");

var _routeRegex = __webpack_require__("BukW");

var _searchParamsToUrlQuery = __webpack_require__("Eyu4");

var _parseRelativeUrl = __webpack_require__("eU9b");

var _normalizeTrailingSlash = __webpack_require__("Plc0");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return _extends(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (false) {}

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _extends({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        _extends(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    width: '100%'
  }
}));
const DynamicSmallBanner = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "6vkJ")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("6vkJ")],
    modules: ['./SmallBanner']
  }
});

const FullLogo = props => {
  const {
    title,
    url
  } = props,
        restProps = _objectWithoutProperties(props, ["title", "url"]);

  const urlParams = Object.keys(restProps).map(item => `${item}=${restProps[item]}`).join('&');
  const fullUrl = url + '&' + urlParams;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
    elevation: 0
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardMedia"], {
    image: fullUrl,
    title: title,
    style: {
      height: 100
    }
  }));
};

const Header = props => {
  const {
    router,
    logoObj,
    bannerHeader,
    menuHeader
  } = props;
  const hasRoute = router && router.route ? true : false;
  const bannerLoaded = typeof bannerHeader === "object";
  const isSameRouter = hasRoute && bannerLoaded && router.route === bannerHeader.pageSlug;
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.root
  }, __jsx(FullLogo, logoObj), bannerLoaded && Boolean(!isSameRouter) && bannerHeader.size === 'small' && __jsx(DynamicSmallBanner, bannerHeader));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _interopRequireWildcard = __webpack_require__("HIQq");

var _interopRequireDefault = __webpack_require__("mYab");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = _extends({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dYz/":
/***/ (function(module, exports) {

const itHasLength = arr => typeof arr === "object" && Object.keys(arr).length > 0;

const itHasValue = (value, len = 1, type = 'string') => !['', 'undefined', undefined].includes(value) && typeof value === type && value.length >= len;

const isSearchFullfiled = obj => {
  return itHasValue(obj.title, 3) && /\S/.test(obj.title) || itHasValue(obj.categories, 3) && /\S/.test(obj.categories);
};

const mockArrayData = (number = 6) => {
  const newMockArray = Array.from(new Array(number));
  const mockedArray = newMockArray.map((item, k) => ({
    pos: 0
  }));
  return mockedArray;
};

module.exports = {
  itHasLength,
  itHasValue,
  isSearchFullfiled,
  mockArrayData
};

/***/ }),

/***/ "eCvN":
/***/ (function(module, exports) {

module.exports = require("xhr2");

/***/ }),

/***/ "eOhz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api_global_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2oa2");
/* harmony import */ var _services_api_get_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("HASU");
/* harmony import */ var _modules_instantsearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("B7Y8");
/* harmony import */ var _modules_utils_objects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dYz/");
/* harmony import */ var _modules_utils_objects__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_utils_objects__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("5Yp1");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("b0oO");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8lYe");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const debounceTime = 700;
const DynamicSearchApp = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "xV55")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xV55")],
    modules: ['~/modules/instantsearch/SearchApp']
  }
});

const Search = props => {
  const {
    page,
    seoProps
  } = props,
        restProps = _objectWithoutProperties(props, ["page", "seoProps"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const setStateId = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const {
    0: searchState,
    1: setSearchState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_modules_instantsearch__WEBPACK_IMPORTED_MODULE_5__[/* pathToSearchState */ "c"])(router.asPath));

  const onSearchStateChange = nextSearchState => {
    clearTimeout(setStateId);
    setStateId.current = setTimeout(() => {
      const href = Object(_modules_instantsearch__WEBPACK_IMPORTED_MODULE_5__[/* searchStateToURL */ "e"])(router, nextSearchState);
      router.push(href, href, {
        shallow: true
      });
      setSearchState(nextSearchState);
    }, debounceTime);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], _extends({}, restProps, {
    routerProps: router,
    seoProps: seoProps
  }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _extends({
    router: router
  }, props)), __jsx(DynamicSearchApp, {
    hasFilters: true,
    searchState: searchState,
    resultsState: restProps.resultsState,
    onSearchStateChange: onSearchStateChange,
    createURL: _modules_instantsearch__WEBPACK_IMPORTED_MODULE_5__[/* createURL */ "a"]
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _extends({
    router: router
  }, props)));
};

const getServerSideProps = async (_ref) => {
  let {
    req,
    res,
    query
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["req", "res", "query"]);

  const searchState = Object(_modules_instantsearch__WEBPACK_IMPORTED_MODULE_5__[/* pathToSearchState */ "c"])(req.url);
  const stateFounded = await Object(_modules_instantsearch__WEBPACK_IMPORTED_MODULE_5__[/* findResultsState */ "b"])(DynamicSearchApp, {
    searchClient: _modules_instantsearch__WEBPACK_IMPORTED_MODULE_5__[/* searchClient */ "d"],
    indexName: 'customers',
    searchState
  });
  const resultsState = JSON.parse(JSON.stringify(stateFounded));
  const globalsResponse = await Object(_services_api_global_settings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  const dataProps = {
    isNotFound: false
  };
  const slugQuery = '/search';
  const queryOptions = {
    label: 'slug',
    value: slugQuery
  };
  const page = await Object(_services_api_get_post__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(queryOptions);

  if (!Object(_modules_utils_objects__WEBPACK_IMPORTED_MODULE_6__["itHasLength"])(page)) {
    dataProps.isNotFound = true;
  } else {
    // @TODO build the SEO based in the informed URL params.
    /// -----
    const seoProps = {
      title: page.title,
      description: page.description
    };
    dataProps.seoProps = seoProps;
  }

  return {
    props: _objectSpread(_objectSpread(_objectSpread({}, globalsResponse), dataProps), {}, {
      page,
      resultsState,
      searchState
    })
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "eU9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "ha8t":
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "jSDL":
/***/ (function(module) {

module.exports = JSON.parse("{\"apiKey\":\"AIzaSyA6bxVMfHLtPu74AHdd-xwhmRMWqvaM35Q\",\"authDomain\":\"vaidarcerto-28531.firebaseapp.com\",\"databaseURL\":\"https://vaidarcerto-28531.firebaseio.com\",\"projectId\":\"vaidarcerto-28531\",\"storageBucket\":\"vaidarcerto-28531.appspot.com\",\"messagingSenderId\":\"79457128791\",\"appId\":\"1:79457128791:web:74b8292d8019dd56176e12\",\"measurementId\":\"G-D4Y7C4S8CN\"}");

/***/ }),

/***/ "k5D7":
/***/ (function(module, exports, __webpack_require__) {

const getFirestore = (firebaseInstance, runningAt) => {
  const firebaseConfig = __webpack_require__("jSDL");

  const settingsObj = {}; // Initialize Firebase instance.

  if (!firebaseInstance.apps.length) {
    const firebaseServices = firebaseInstance.initializeApp(firebaseConfig);
    settingsObj.app = firebaseServices;

    if (false) {}
  }

  const emulatorsStart = () => {
    const db = firebaseInstance.firestore(settingsObj.app);
    db.settings({
      host: 'localhost:8080',
      ssl: false
    });
    return db;
  };

  if (runningAt === 'localhost') {
    const emulatedFirestore = emulatorsStart();
    settingsObj.firestore = emulatedFirestore;
  } else {
    settingsObj.firestore = firebaseInstance.firestore(settingsObj.app);
  }

  const database = settingsObj.firestore;
  return database;
};

module.exports = getFirestore;

/***/ }),

/***/ "kEOu":
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mYab":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const env = "production" || false;
const configs = {
  all: {
    env,
    root: path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '..'),
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',
    facebook: {"appId":"2377017779256913"},
    globalSettings: {"siteName":"VaiDarCerto","twitterUsername":"twitter-username","domainUri":"https://francisrod01-vaidarcerto-app.glitch.me","localApi":"https://francisrod01-vaidarcerto-app.glitch.me/api"},
    covid19: {"regionsAroundUs":"'[\"alzUcJAbsL\",\"LlLUQQW7em\",\"2v59GBInrd\",\"SgfpOQHx9r\",\"AIzthCzqdx\"]'","govBRuri":"https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod","govBRappId":"unAFkcaNDeXajurGB7LChj8SgQYS2ptm"},
    fullTextSearch: {"algolia":{"appId":"algolia-id","searchApiKey":"algolia-api-key"}}
  },
  development: () => ({
    ip: process.env.IP || '127.0.0.1'
  }),
  production: () => ({//
  })
};

const config = _extends(configs.all, configs[env]);

/* harmony default export */ __webpack_exports__["a"] = (config);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pSYS":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "rM+N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("C3xT");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  textField: {
    paddingTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  content: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  },
  button: {
    marginTop: 23,
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: 5
    }
  }
}));
const CustomSearchBox = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, myRef) => {
  const classes = useStyles();
  const {
    refinementCategory,
    refinementWhatsApp,
    currentRefinement,
    refine,
    translations = {}
  } = props;
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: currentRefinement
  });
  const {
    0: showChild,
    1: setShowChild
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Wait until after client-side hydration shows it.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setShowChild(true);
  }, []);

  const handleChange = evt => {
    const target = evt.target;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }));
  };

  const handleSubmit = objValues => {
    refine(objValues.title);
  };

  if (!showChild) {
    // You can show some kind of placeholder UI here..
    return __jsx("p", null, "Loading ", props.attribute, "...");
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: classes.content
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    ref: myRef,
    id: "title",
    name: "title",
    label: translations.label || 'Name',
    placeholder: translations.placeholder || 'Search for what you desire...',
    defaultValue: currentRefinement,
    onChange: handleChange,
    className: classes.textField,
    variant: "outlined",
    margin: "normal",
    size: "small",
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  }), refinementCategory !== undefined && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, refinementCategory), refinementWhatsApp !== undefined && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, refinementWhatsApp), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: () => handleSubmit(state)
  }, translations.button || 'Search'));
});
const ConnectedSearchBox = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectSearchBox"])(CustomSearchBox);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedSearchBox);

/***/ }),

/***/ "rvvz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("C3xT");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("RnCP");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CustomResults = ({
  allSearchResults = null,
  searchState,
  searchResults = null,
  children,
  isSearchStalled,
  error,
  translations = {}
}) => {
  const _queryLabel = 'Searching for query:';
  const _noResultsLabel = 'No records have been found.';
  const _legendLabel = 'Records found for this query:';
  const _errorMessage = 'An error has occurred while you were searching. Try it again later';

  if (error) {
    const errorMsg = _errorMessage; // @TODO send `error` to sentry.io

    console.log(errorMsg);
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    flexDirection: "column"
  }, searchState && searchState.query && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    flexDirection: "column"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "overline"
  }, translations.query || _queryLabel, " ", __jsx("strong", null, searchState.query)), searchResults !== null && searchResults.nbHits > 0 && children, searchResults !== null && searchResults.nbHits < 1 && !isSearchStalled && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1",
    gutterBottom: true
  }, translations.noResults || _noResultsLabel)), allSearchResults !== null && allSearchResults.nbHits > 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle2",
    style: {
      marginTop: 10
    },
    gutterBottom: true
  }, translations.legend || _legendLabel, " ", allSearchResults.nbHits), error && __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    severity: "error"
  }, translations.errorMessage || _errorMessage));
};

const ConnectedResults = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectStateResults"])(CustomResults);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedResults);

/***/ }),

/***/ "uVVg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("C3xT");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DynamicCustomListItem = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 36).then(__webpack_require__.bind(null, "bMkr")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("bMkr")],
    modules: ['./components/CustomListItem']
  }
});

const CustomHits = ({
  hits
}) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
  style: {
    width: '100%'
  }
}, Object.values(hits).map((hit, kI) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  key: kI
}, kI > 0 && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
  variant: "inset",
  component: "li"
}), __jsx(DynamicCustomListItem, hit))));

const ConnectedHits = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["connectHits"])(CustomHits);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedHits);

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "xV55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("C3xT");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RnCP");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _instantsearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("B7Y8");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  paper: {
    width: '100%',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3)
  }
}));
const DynamicConnectedSearchBox = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "rM+N")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("rM+N")],
    modules: ['./ConnectedSearchBox']
  }
});
const DynamicLoadingIndicator = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "EqjX")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("EqjX")],
    modules: ['./LoadingIndicator']
  }
});
const DynamicConnectedCategoriesList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "zjux")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("zjux")],
    modules: ['./ConnectedCategoriesList']
  }
});
const DynamicConnectedHits = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "uVVg")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("uVVg")],
    modules: ['./ConnectedHits']
  }
});
const DynamicConnectedResults = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "rvvz")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("rvvz")],
    modules: ['./ConnectedResults']
  }
});
const DynamicConnectedWhatsAppFilter = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "XAyj")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("XAyj")],
    modules: ['./ConnectedWhatsAppFilter']
  }
});
const DynamicConnectedPoweredBy = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "TJka")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("TJka")],
    modules: ['./ConnectedPoweredBy']
  }
});
const DynamicConnectedPagination = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "XYdX")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("XYdX")],
    modules: ['./ConnectedPagination']
  }
});

const ShowInstantApp = props => {
  const {
    hasFilters,
    hitsPerPage,
    onSearchStateChange,
    createURL
  } = props,
        restProps = _objectWithoutProperties(props, ["hasFilters", "hitsPerPage", "onSearchStateChange", "createURL"]);

  const _t = _instantsearch__WEBPACK_IMPORTED_MODULE_6__[/* translations */ "f"]['ptBR']();

  return __jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["InstantSearch"], _extends({
    indexName: 'customers',
    searchClient: _instantsearch__WEBPACK_IMPORTED_MODULE_6__[/* searchClient */ "d"],
    searchState: restProps.searchState,
    resultsState: restProps.resultsState,
    onSearchStateChange: onSearchStateChange,
    onSearchParameters: restProps.onSearchParameters,
    createURL: createURL
  }, restProps), __jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["Configure"], {
    hitsPerPage: hitsPerPage || 12
  }), __jsx(DynamicConnectedSearchBox, {
    translations: _t.searchBox,
    refinementCategory: hasFilters && __jsx(DynamicConnectedCategoriesList, {
      attribute: "category",
      translations: _t.categoriesFilter
    }),
    refinementWhatsApp: hasFilters && __jsx(DynamicConnectedWhatsAppFilter, {
      attribute: "hasWhatsApp",
      label: 'has WhatsApp',
      value: true // value to apply when it's checked
      ,
      defaultRefinement: false,
      translations: _t.whatsAppFilter
    })
  }), __jsx(DynamicConnectedPoweredBy, null), __jsx(DynamicConnectedResults, {
    translations: _t.results
  }, __jsx(DynamicConnectedHits, null), __jsx(DynamicConnectedPagination, null)), __jsx(DynamicLoadingIndicator, null));
};

const SearchApp = props => {
  const {
    0: showChild,
    1: setShowChild
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const _t = _instantsearch__WEBPACK_IMPORTED_MODULE_6__[/* translations */ "f"]['ptBR']();

  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setShowChild(true);
  }, []);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
    elevation: 3,
    className: classes.paper
  }, !showChild ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    width: "100%"
  }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["Skeleton"], {
    variant: "rect",
    height: 150
  })) : __jsx(ShowInstantApp, props));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchApp);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yVSl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return database; });
/* unused harmony export storageRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getServerTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getStorageMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parseQuerySnapshot; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bnmT");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("M7zN");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_analytics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ha8t");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k5D7");
/* harmony import */ var _firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_firestore__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// fix: `ReferenceError: XMLHttpRequest is not defined`
global.WebSocket = __webpack_require__("kEOu");
global.XMLHttpRequest = __webpack_require__("eCvN"); // Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

 // Add the Firebase services that you want to use





const database = _firestore__WEBPACK_IMPORTED_MODULE_4___default()(firebase_app__WEBPACK_IMPORTED_MODULE_0__, "server");
const storage = firebase_app__WEBPACK_IMPORTED_MODULE_0__["storage"]();
const storageRef = storage.ref();

const getServerTimestamp = () => firebase_app__WEBPACK_IMPORTED_MODULE_0__["firestore"].Timestamp.now().seconds * 1000;

const getStorageMedia = (folder, filename) => {
  const assetsRef = storageRef.child(`${folder}/${filename}`);
  return assetsRef.getDownloadURL();
};

const parseQuerySnapshot = querySnapshot => {
  const newObject = [];
  querySnapshot.forEach(doc => {
    const id = doc.id;
    const data = doc.data();
    newObject.push(_objectSpread({
      id
    }, data));
  });
  return newObject;
};


/* unused harmony default export */ var _unused_webpack_default_export = (firebase_app__WEBPACK_IMPORTED_MODULE_0__);

/***/ }),

/***/ "yzB5":
/***/ (function(module, exports, __webpack_require__) {

const qs = __webpack_require__("eW3l");

const createURL = state => `?${qs.stringify(state)}`;

const pathToSearchState = path => path.includes('?') ? qs.parse(path.substring(path.indexOf('?') + 1)) : {};

const searchStateToURL = (location, searchState) => searchState ? `${location.pathname}?${qs.stringify(searchState)}` : '';

module.exports = {
  createURL,
  pathToSearchState,
  searchStateToURL
};

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("Wecs");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "zjux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("C3xT");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
    maxWidth: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100%'
    }
  },
  textField: {
    paddingTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  checkItem: {
    padding: 0
  },
  itemText: {
    marginLeft: theme.spacing(0.5)
  }
}));

const CustomCategoriesList = ({
  items,
  refine,
  translations = {}
}) => {
  const _filterLabel = 'Categories';
  const classes = useStyles();
  const {
    0: attributeNames,
    1: setAttributeNames
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const names = items.filter(item => item.isRefined).map(name => name.label);
    setAttributeNames(names);
    return () => names;
  }, [items]);
  const itemHeight = 48;
  const itemPaddingTop = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: itemHeight * 4.5 + itemPaddingTop,
        width: 250
      }
    }
  };

  const handleChange = event => {
    const target = event.target;
    setAttributeNames(target.value);
    refine(target.value);
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: classes.formControl
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
    id: "mutiple-checkbox-label"
  }, translations.label || _filterLabel), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    labelId: "mutiple-checkbox-label",
    id: "mutiple-checkbox",
    multiple: true,
    value: attributeNames,
    onChange: handleChange,
    input: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], null),
    renderValue: selected => selected.join(', '),
    MenuProps: MenuProps,
    className: classes.textField
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: ""
  }, __jsx("em", null, "-- ", translations.label || _filterLabel, " --")), items.map((item, i) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    key: i,
    value: item.label
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
    className: classes.checkItem,
    checked: item.isRefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
    className: classes.itemText,
    primary: item.label
  })))));
};

const ConnectedCategoriesList = Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectRefinementList"])(CustomCategoriesList);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedCategoriesList);

/***/ })

/******/ });