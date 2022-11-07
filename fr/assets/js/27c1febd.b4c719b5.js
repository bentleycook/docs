"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"03/ Update Payment Status",sidebar_label:"03/ Update Payment Status",id:"03-Update-Payment-Status-2019-11-19",keywords:["library","job","expression","mysql","alterState"]},s=void 0,i={unversionedId:"jobs/auto/03-Update-Payment-Status-2019-11-19",id:"jobs/auto/03-Update-Payment-Status-2019-11-19",title:"03/ Update Payment Status",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/03-Update-Payment-Status-2019-11-19.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/03-Update-Payment-Status-2019-11-19",permalink:"/fr/library/jobs/auto/03-Update-Payment-Status-2019-11-19",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"03/ Update Payment Status",sidebar_label:"03/ Update Payment Status",id:"03-Update-Payment-Status-2019-11-19",keywords:["library","job","expression","mysql","alterState"]},sidebar:"library",previous:{title:"02a/ Query DB for people to pay",permalink:"/fr/library/jobs/auto/02a-Query-DB-for-people-to-pay-2019-12-11"},next:{title:"04a/Query for job changes",permalink:"/fr/library/jobs/auto/04a-Query-for-job-changes-2019-12-12"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: 03/ Update Payment Status"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mysql"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-mysql"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mysql"},(0,n.kt)("inlineCode",{parentName:"a"},"latest"))),(0,n.kt)("li",{parentName:"ul"},"Created almost 3 years ago"),(0,n.kt)("li",{parentName:"ul"},"Updated over 2 years ago"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"0")," (an ",(0,n.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"alterState")),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"sqlString(state => {\n  console.log(state.data.transactionCode);\n  return `SELECT record FROM entry WHERE string_value='${state.data.transactionCode}'`;\n});\n\nalterState(state => {\n  // Note: we pluck out on the 'RowDataResponses' from the SQL server.\n  const recordData = state.response.body.filter(x => x.record !== undefined);\n  // Get the first record\n  state.data.record = recordData[0] && recordData[0].record;\n  return state;\n});\n\nsqlString(state => {\n  return `UPDATE entry SET string_value='completed' where record=${state.data.record} and string_value='initiated'`;\n});\n\nsqlString(state => {\n  return `UPDATE last_entry SET string_value='completed' where record=${state.data.record} and string_value='initiated'`;\n});\n\nsqlString(state => {\n  return `UPDATE hippo_person_payments SET status='completed' where id='person_payments|${state.data.record}'`;\n});\n")))}c.isMDXComponent=!0}}]);