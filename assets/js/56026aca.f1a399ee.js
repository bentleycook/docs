"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=n,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Create/update records if...",sidebar_label:"\ud83d\udcdc Create/update records if...",id:"create-if-proposal",keywords:["library","job","expression","salesforce","createIf","dataValue","field","fields","relationship","upsertIf"]},i=void 0,l={unversionedId:"jobs/auto/create-if-proposal",id:"jobs/auto/create-if-proposal",title:"Create/update records if...",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/create-if-proposal.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/create-if-proposal",permalink:"/library/jobs/auto/create-if-proposal",draft:!1,tags:[],version:"current",frontMatter:{title:"Create/update records if...",sidebar_label:"\ud83d\udcdc Create/update records if...",id:"create-if-proposal",keywords:["library","job","expression","salesforce","createIf","dataValue","field","fields","relationship","upsertIf"]},sidebar:"library",previous:{title:"\ud83d\udcdc Create SMS linked to contact",permalink:"/library/jobs/auto/Create-SMS-Linked-to-Contact-in-SF"},next:{title:"\ud83d\udcdc Handling multiple ODK repeat groups",permalink:"/library/jobs/auto/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud83d\udcdc ",(0,n.kt)("em",null,"This job is an official example from OpenFn.")),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: Create/update records if..."),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.1.0"},(0,n.kt)("inlineCode",{parentName:"a"},"v2.1.0"))),(0,n.kt)("li",{parentName:"ul"},"Created date unknown"),(0,n.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"100")," (an ",(0,n.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"createIf"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"upsertIf")),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Using upsertIf and createIf we can conditionally create or update records if\n// some condition in the source data is met.\n\nupsertIf(\n  // a path which resolves to true/false\n  dataValue('form.legal.allowedToSync'), \n  'Patient__c',\n  'Patient_ID__c',\n  fields(\n    field('Name__c', dataValue('form.name')),\n    field('Patient_ID__c', dataValue('form.identification.govId'))\n  )\n);\n\ncreateIf(\n  // or a function which returns true/false\n  state => state.data.form.completedVisit === 'yes',\n  'Visit__c',\n  fields(\n    field('Date__c', dataValue('form.visit.visit_date')),\n    field('Type__c', 'checkup'),\n    relationship(\n      'Patient__r',\n      'Patient_ID__c',\n      dataValue('form.identification.govId')\n    )\n  )\n);\n\n")))}u.isMDXComponent=!0}}]);