"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[64867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_label:"Design Process Overview",title:"Design Process Overview"},i=void 0,s={unversionedId:"design/design-overview",id:"design/design-overview",title:"Design Process Overview",description:"This article outlines the high-level steps to design  automated workflows, inspired by the OpenFn core team\u2019s standard implementation process.",source:"@site/docs/design/design-overview.md",sourceDirName:"design",slug:"/design/design-overview",permalink:"/documentation/next/design/design-overview",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/design/design-overview.md",tags:[],version:"current",frontMatter:{sidebar_label:"Design Process Overview",title:"Design Process Overview"},sidebar:"docs",previous:{title:"What is OpenFn?",permalink:"/documentation/next/"},next:{title:"Discovery & Scoping",permalink:"/documentation/next/design/discovery"}},l={},c=[{value:"Key Terms",id:"key-terms",level:2},{value:"Workflow",id:"workflow",level:3},{value:"Workflow Automation",id:"workflow-automation",level:3},{value:"Data Integration",id:"data-integration",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Example Use Case",id:"example-use-case",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article outlines the high-level steps to design  automated workflows, inspired by the OpenFn core team\u2019s standard implementation process. "),(0,r.kt)("p",null,"Typically the design process happens outside of OpenFn, in conversation and collaboration with relevant business/program and technical stakeholders. Then, once the design is finalized, the workflow configuration, testing, monitoring, and management is handled in OpenFn. "),(0,r.kt)("h2",{id:"key-terms"},"Key Terms"),(0,r.kt)("p",null,"Before you dive in, make sure you have a clear understanding of these key terms we\u2019ll reference throughout this documentation: "),(0,r.kt)("h3",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"The set of instructions that determine how to solve a problem or accomplish a task. They are often broken down into smaller, independent tasks. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Workflow",src:n(8206).Z,width:"2334",height:"570"})),(0,r.kt)("h3",{id:"workflow-automation"},"Workflow Automation"),(0,r.kt)("p",null,"The use of software to perform these tasks independently, in accordance with predefined business rules, and without the need for human input. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Workflow Automation",src:n(26965).Z,width:"1552",height:"506"})),(0,r.kt)("h3",{id:"data-integration"},"Data Integration"),(0,r.kt)("p",null,"The process of combining data from different sources into a centralized view. Data integration is a means of achieving workflow automation. Its tasks may be streamlined, automated, and managed by a workflow automation tool."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data Integration",src:n(40585).Z,width:"1452",height:"262"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Workflow automation design features 5 main steps that are covered in depth in other articles:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/documentation/next/design/discovery"},"Discovery & Scoping")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/documentation/next/design/design-workflow"},"Workflow Design")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/documentation/next/design/api-discovery"},"API Discovery and Technical Design")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/documentation/next/design/mapping-specs"},"Data Element Mapping Specifications")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/documentation/next/design/workflow-specs"},"Workflow Specifications"))),(0,r.kt)("h3",{id:"example-use-case"},"Example Use Case"),(0,r.kt)("p",null,"Throughout the design documentation we will reference the fictional data collection & workflow automation scenario below:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"PatientCare is a health NGO that runs a network of community health workers who provide care to patients in remote areas in Guinea. PatientCare workers collect patient data in ",(0,r.kt)("a",{parentName:"em",href:"https://www.kobotoolbox.org/"},"KoboToolBox"),". The Guinean government uses ",(0,r.kt)("a",{parentName:"em",href:"http://dhis2.org"},"DHIS2")," as its national health information system (HIS) and requires PatientCare to register all patient data in the HIS.")))}u.isMDXComponent=!0},40585:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/data_integration-744ddf63e773e05ffe5d916a296e08bd.png"},8206:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/workflow-d115e43a9c376e8c37ca71ddf874e35d.png"},26965:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/workflow_automation-77c2559120b2a02dd6be47d1ab6be15d.png"}}]);