(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{pQpD:function(t,e,o){"use strict";o.r(e);var a=o("6CzD"),n=o("mXGw"),r=o.n(n),i=o("PDtE"),c=o("a3eZ"),d=o("R82R"),l=o("BQn0"),b=o("/ZiB"),s=r.a.createElement,p=Object(d.a)((function(t){return{root:{display:"flex",justifyContent:"space-between"},lbTitle:{padding:"18px 16px",fontWeight:700,letterSpacing:-.84},bdrBottom:{borderBottom:"solid 1px rgba(219, 233, 245, 0.6)"},size_18:{fontSize:18,lineHeight:"24px"},chartCard:{margin:"32px 16px 22px",marginBottom:50,width:"calc(100% - 32px)"},noBorder:{border:"none",boxShadow:"none"}}})),u=function(t){var e=t.data,o=void 0===e?[]:e,a=t.labels,n=t.legend,r=p();return s(l.a,{className:Object(i.a)(r.chartCard,r.noBorder)},s(c.c,{data:{labels:a,datasets:[{label:n,fill:!1,lineTension:.1,backgroundColor:"#4bc0c0",borderColor:"#4bc0c0",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#4bc0c0",pointBackgroundColor:"#4bc0c0",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#4bc0c0",pointHoverBorderColor:"#4bc0c0",pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10,data:o}]},options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{callback:function(t,e,o){return Number(t).toLocaleString(navigator.language,{notation:"compact"})}}}]},legend:{display:!1}},height:250}))};e.default=function(t){var e=t.data,o=void 0===e?[]:e,c=t.labels,d=Object(n.useState)([]),l=d[0],f=d[1],g=Object(n.useState)([]),m=g[0],B=g[1];Object(n.useEffect)((function(){Object.values(o).map((function(t){return f((function(e){return[].concat(Object(a.a)(e),[t.label])})),B((function(e){return[].concat(Object(a.a)(e),[t.qtd_confirmado])})),t}))}),[o]);var h=p();return s(r.a.Fragment,null,s(b.a,{className:Object(i.a)(h.lbTitle,h.size_18,h.bdrBottom),component:"p"},c.newCasesByDay),s(u,{labels:l,legend:c.confirmed,data:m}))}}}]);