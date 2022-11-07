"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(l,".").concat(b)]||d[b]||c[b]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Load / Upsert Data into PostgreSQL",sidebar_label:"Load / Upsert Data into PostgreSQL",id:"Load-Upsert-Data-into-PostgreSQL-2022-03-22",keywords:["library","job","expression","postgresql"]},i=void 0,s={unversionedId:"jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",id:"jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",title:"Load / Upsert Data into PostgreSQL",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",permalink:"/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",draft:!1,tags:[],version:"current",frontMatter:{title:"Load / Upsert Data into PostgreSQL",sidebar_label:"Load / Upsert Data into PostgreSQL",id:"Load-Upsert-Data-into-PostgreSQL-2022-03-22",keywords:["library","job","expression","postgresql"]},sidebar:"library",previous:{title:"Create Person in OpenMRS",permalink:"/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12"},next:{title:"Load to DB",permalink:"/library/jobs/auto/Load-to-DB-2022-05-16"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: Load / Upsert Data into PostgreSQL"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-postgresql"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql/releases/tag/v3.3.3"},(0,n.kt)("inlineCode",{parentName:"a"},"v3.3.3"))),(0,n.kt)("li",{parentName:"ul"},"Created 8 months ago"),(0,n.kt)("li",{parentName:"ul"},"Updated 8 months ago"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"0")," (an ",(0,n.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// Your job goes here.\n")))}c.isMDXComponent=!0}}]);