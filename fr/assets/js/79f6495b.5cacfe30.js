"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9637],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={title:"Get CommCare Forms (Bulk Extract)",sidebar_label:"Get CommCare Forms (Bulk Extract)",id:"Get-CommCare-Forms-Bulk-Extract-2022-05-16",keywords:["library","job","expression","http","each","get","post"]},s=void 0,i={unversionedId:"jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16",id:"jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16",title:"Get CommCare Forms (Bulk Extract)",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16",permalink:"/fr/library/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16",draft:!1,tags:[],version:"current",frontMatter:{title:"Get CommCare Forms (Bulk Extract)",sidebar_label:"Get CommCare Forms (Bulk Extract)",id:"Get-CommCare-Forms-Bulk-Extract-2022-05-16",keywords:["library","job","expression","http","each","get","post"]},sidebar:"library",previous:{title:"Failed Payment Notification",permalink:"/fr/library/jobs/auto/Failed-Payment-Notification-2021-04-23"},next:{title:"\ud83d\udcdc Promises and nested requests",permalink:"/fr/library/jobs/auto/promise-all-nested-requests"}},l={},m=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Get CommCare Forms (Bulk Extract)"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v3.1.7"},(0,a.kt)("inlineCode",{parentName:"a"},"v3.1.7"))),(0,a.kt)("li",{parentName:"ul"},"Created 6 months ago"),(0,a.kt)("li",{parentName:"ul"},"Updated 6 months ago"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"0")," (an ",(0,a.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"post")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Your job goes here.\nget(\n  'https://www.commcarehq.org/a/commcare-demo-2035/api/v0.5/form/',\n  {\n    query: {\n      limit: 1000, //max limit: 1000\n      offset: state.meta && state.meta.next ? state.meta.limit + state.meta.offset : 0,\n      received_on_start: '2022-05-16',\n      received_on_end: '2022-05-18',\n      xmlns: 'http://openrosa.org/formdesigner/C87A7E2A-D98D-4E2C-9F0B-997E0AE635C6',\n    },\n  },\n  state => {\n    const { meta, objects } = state.data;\n    const { openfnInboxUrl } = state.configuration;\n    const xmlnsList = [\n      'http://openrosa.org/formdesigner/C87A7E2A-D98D-4E2C-9F0B-997E0AE635C6'\n\n    ];\n\n    // const forms = objects.filter(obj => xmlnsList.includes(obj.form['@xmlns']));\n    const forms = objects;\n\n    state.configuration = { baseUrl: 'https://www.openfn.org' };\n    console.log('Posting form submissions to OpenFn Inbox...');\n\n    return each(forms, state => {\n      return post(`/inbox/${openfnInboxUrl}`, { body: state.data }, state => ({\n        ...state,\n        data: {},\n        references: [],\n      }))(state);\n    })(state);\n  }\n);\n")))}p.isMDXComponent=!0}}]);