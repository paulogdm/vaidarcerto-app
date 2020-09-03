exports.ids = [13];
exports.modules = {

/***/ "YglP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AppContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  customers: [],
  customer: {}
});

const AppProvider = ({
  children
}) => {
  const {
    0: customers,
    1: setCustomers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: customer,
    1: setCustomer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const handleCustomers = items => {
    setCustomers(items);
  };

  const handleCustomer = item => {
    setCustomer(item);
  };

  const appValues = {
    customers,
    customer,
    handleCustomers,
    handleCustomer
  };
  return __jsx(AppContext.Provider, {
    value: appValues
  }, children);
};


/* harmony default export */ __webpack_exports__["b"] = (AppContext);

/***/ }),

/***/ "gOFx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleLinkClick; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const handleLinkClick = (event, route, slug, shallow = true) => {
  event.preventDefault();
  return next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(route, slug, {
    shallow
  });
};

/***/ }),

/***/ "vQ8M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: ./assets/styles/customer.js
var customer = __webpack_require__("JwJg");

// EXTERNAL MODULE: ./modules/utils/utils-nextjs.js
var utils_nextjs = __webpack_require__("gOFx");

// EXTERNAL MODULE: ./modules/firebase/services.js
var services = __webpack_require__("yVSl");

// EXTERNAL MODULE: ./modules/utils/objects.js
var objects = __webpack_require__("dYz/");

// CONCATENATED MODULE: ./services/api/get-customers.js



const composeQuery = (query = {}) => {
  const customersRef = services["a" /* database */].collection('customers'); // fetch ONLY published records.

  const customersQuery = customersRef.where('status', '==', 'published');
  const props = {
    customersQuery
  };

  if (Object(objects["itHasValue"])(query.category)) {
    props.customersQuery = customersQuery.where('category', 'array-contains', query.category);
  }

  const orderedQuery = props.customersQuery.orderBy('title');
  return orderedQuery;
};

const getCustomers = async query => {
  const props = {
    customers: []
  };
  const customersQuery = composeQuery(query);
  const querySnapshot = await customersQuery.get();

  if (Boolean(querySnapshot.size) && querySnapshot.size > 0) {
    const customersArray = await Object(services["d" /* parseQuerySnapshot */])(querySnapshot);
    props.customers = customersArray;
  }

  return props.customers;
};

/* harmony default export */ var get_customers = (getCustomers);
// EXTERNAL MODULE: ./AppContext.js
var AppContext = __webpack_require__("YglP");

// CONCATENATED MODULE: ./components/callbacks/CustomersListCallback.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const CustomersListCallback = props => {
  const {
    filterBy,
    children: Component
  } = props;
  const {
    customers,
    handleCustomers,
    handleCustomer
  } = Object(external_react_["useContext"])(AppContext["b" /* default */]);
  const {
    0: itemsData,
    1: setItemsData
  } = Object(external_react_["useState"])({
    data: customers,
    status: 'fetching',
    error: null
  });
  const classes = Object(customer["a" /* useCustomerStyles */])();

  const onHandleCustomers = newState => {
    setItemsData(prevState => _objectSpread(_objectSpread({}, prevState), newState));
  };

  Object(external_react_["useEffect"])(() => {
    const customersRef = get_customers(filterBy).then(data => {
      handleCustomers(data);
      onHandleCustomers({
        data
      });
    }).catch(err => {
      const errorMsg = 'Error getting documents for customers.';
      handleCustomers({
        error: errorMsg
      }); // @TODO send `err` to sentry.io

      console.error(errorMsg, err);
    }).finally(() => onHandleCustomers({
      status: 'finished'
    }));
    return () => customersRef;
  }, [filterBy]);
  return __jsx(external_react_default.a.Fragment, null, __jsx(Paper_default.a, {
    className: classes.paper
  }, __jsx(Component, {
    dataProps: itemsData,
    handleCustomerProps: handleCustomer,
    handleLinkClickProps: utils_nextjs["a" /* handleLinkClick */]
  })));
};

/* harmony default export */ var callbacks_CustomersListCallback = __webpack_exports__["default"] = (CustomersListCallback);

/***/ })

};;