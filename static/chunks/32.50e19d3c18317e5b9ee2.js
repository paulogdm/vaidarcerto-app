(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{YglP:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("mXGw"),c=r.n(n).a.createElement,o=Object(n.createContext)({customers:[],customer:{}}),u=function(e){var t=e.children,r=Object(n.useState)([]),u=r[0],s=r[1],a=Object(n.useState)({}),i=a[0],f=a[1],l={customers:u,customer:i,handleCustomers:function(e){s(e)},handleCustomer:function(e){f(e)}};return c(o.Provider,{value:l},t)};t.b=o},gOFx:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("bBV7"),c=r.n(n),o=function(e,t,r){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return e.preventDefault(),c.a.push(t,r,{shallow:n})}},vQ8M:function(e,t,r){"use strict";r.r(t);var n=r("mK0O"),c=r("mXGw"),o=r.n(c),u=r("bJWG"),s=r("JwJg"),a=r("gOFx"),i=r("NthX"),f=r.n(i),l=r("eijD"),b=r("yVSl"),p=r("dYz/"),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=b.a.collection("customers"),r=t.where("status","==","published"),n={customersQuery:r};Object(p.itHasValue)(e.category)&&(n.customersQuery=r.where("category","array-contains",e.category));var c=n.customersQuery.orderBy("title");return c},m=function(){var e=Object(l.a)(f.a.mark((function e(t){var r,n,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={customers:[]},n=O(t),e.next=4,n.get();case 4:if(c=e.sent,!(Boolean(c.size)&&c.size>0)){e.next=10;break}return e.next=8,Object(b.c)(c);case 8:o=e.sent,r.customers=o;case 10:return e.abrupt("return",r.customers);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=r("YglP"),h=o.a.createElement;function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.filterBy,r=e.children,n=Object(c.useContext)(d.b),i=n.customers,f=n.handleCustomers,l=n.handleCustomer,b=Object(c.useState)({data:i,status:"fetching",error:null}),p=b[0],O=b[1],j=Object(s.a)(),y=function(e){O((function(t){return v(v({},t),e)}))};return Object(c.useEffect)((function(){var e=m(t).then((function(e){f(e),y({data:e})})).catch((function(e){var t="Error getting documents for customers.";f({error:t}),console.error(t,e)})).finally((function(){return y({status:"finished"})}));return function(){return e}}),[t]),h(o.a.Fragment,null,h(u.a,{className:j.paper},h(r,{dataProps:p,handleCustomerProps:l,handleLinkClickProps:a.a})))}}}]);