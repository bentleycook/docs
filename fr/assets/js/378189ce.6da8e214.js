"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||o;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},30751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Pre-processing data",sidebar_label:"\ud83d\udcdc Pre-processing data",id:"alter-state-before-operations",keywords:["library","job","expression","salesforce","alterState","dataPath","dataValue","each","field","fields","merge","relationship","upsert","Array"]},i=void 0,l={unversionedId:"jobs/auto/alter-state-before-operations",id:"jobs/auto/alter-state-before-operations",title:"Pre-processing data",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/alter-state-before-operations.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/alter-state-before-operations",permalink:"/fr/library/jobs/auto/alter-state-before-operations",draft:!1,tags:[],version:"current",frontMatter:{title:"Pre-processing data",sidebar_label:"\ud83d\udcdc Pre-processing data",id:"alter-state-before-operations",keywords:["library","job","expression","salesforce","alterState","dataPath","dataValue","each","field","fields","merge","relationship","upsert","Array"]},sidebar:"library",previous:{title:"PHQ9",permalink:"/fr/library/jobs/auto/PHQ9-2021-05-03"},next:{title:"\u2728 Q3 2022] Create Distribution & Referral in SF",permalink:"/fr/library/jobs/auto/Q3-2022-Create-Distribution-Referral-in-SF-2020-06-19"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud83d\udcdc ",(0,n.kt)("em",null,"This job is an official example from OpenFn.")),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: Pre-processing data"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.kt)("inlineCode",{parentName:"a"},"latest"))),(0,n.kt)("li",{parentName:"ul"},"Created date unknown"),(0,n.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"100")," (an ",(0,n.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"merge"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"upsert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Array")),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Here, we make sure CommCare gives us an array to use in each(merge(...), ...)\nalterState(state => {\n  const idCards = state.data.form.ID_cards_given_to_vendor;\n  if (!Array.isArray(idCards)) {\n    state.data.form.ID_cards_given_to_vendor = [idCards];\n  }\n  return state;\n});\n\n// Now state has been changed, and we carry on...\neach(\n  merge(\n    dataPath('form.ID_cards_given_to_vendor[*]'),\n    fields(\n      field('Vendor_Id', dataValue('form.ID_vendor')),\n      field('form_finished_time', dataValue('form.meta.timeEnd'))\n    )\n  ),\n  upsert(\n    'Small_Packet__c',\n    'sp_id__c',\n    fields(\n      field('sp_id__c', dataValue('ID_cards_given_to_vendor')),\n      relationship('Vendor__r', 'Badge_Code__c', dataValue('Vendor_Id')),\n      field(\n        'Small_Packet_Distribution_Date__c',\n        dataValue('form_finished_time')\n      )\n    )\n  )\n);\n\n")))}c.isMDXComponent=!0}}]);