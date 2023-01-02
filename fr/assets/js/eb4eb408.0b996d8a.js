"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[82863],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),m=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=m(e.components);return o.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(t),u=a,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||n;return t?o.createElement(f,i(i({ref:r},s),{},{components:t})):o.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var m=2;m<n;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19024:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>m});var o=t(87462),a=(t(67294),t(3905));const n={title:"primero developer readme",id:"primero-readme",keywords:["adaptor","readme","primero"]},i="Developer README for the primero adaptor",p={unversionedId:"packages/primero-readme",id:"packages/primero-readme",title:"primero developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/primero",source:"@site/adaptors/packages/primero-readme.md",sourceDirName:"packages",slug:"/packages/primero-readme",permalink:"/fr/adaptors/packages/primero-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"primero developer readme",id:"primero-readme",keywords:["adaptor","readme","primero"]},sidebar:"adaptors",previous:{title:"primero changelog",permalink:"/fr/adaptors/packages/primero-changelog"},next:{title:"progres@1.2.0",permalink:"/fr/adaptors/packages/progres-docs"}},l={},m=[{value:"Primero API Versions",id:"primero-api-versions",level:2},{value:"Adaptor for Primero v2.0",id:"adaptor-for-primero-v20",level:3},{value:"Adaptor for Primero v1.0 still available on the <code>v1</code> branch.",id:"adaptor-for-primero-v10-still-available-on-the-v1-branch",level:3},{value:"Primero Authentication Strategies",id:"primero-authentication-strategies",level:4},{value:"Development",id:"development",level:2}],s={toc:m};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-primero-adaptor"},"Developer README for the primero adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/primero"},"https://github.com/OpenFn/adaptors/tree/main/packages/primero")),(0,a.kt)("h1",{id:"language-primero"},"language-primero"),(0,a.kt)("p",null,"An OpenFn ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with UNICEF's\nPrimero API."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See Update Docs Site: ",(0,a.kt)("a",{parentName:"strong",href:"https://docs.openfn.org/adaptors/packages/primero-docs"},"https://docs.openfn.org/adaptors/packages/primero-docs"))),(0,a.kt)("h2",{id:"primero-api-versions"},"Primero API Versions"),(0,a.kt)("h3",{id:"adaptor-for-primero-v20"},"Adaptor for Primero v2.0"),(0,a.kt)("p",null,"This documentation outlines the functions available for Primero ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.0")," in the\nmain branch. The API documentation is available at:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/primeroIMS/primero/tree/development_v2/app/controllers/api"},"https://github.com/primeroIMS/primero/tree/development_v2/app/controllers/api")),(0,a.kt)("h3",{id:"adaptor-for-primero-v10-still-available-on-the-v1-branch"},"Adaptor for Primero v1.0 still available on the ",(0,a.kt)("inlineCode",{parentName:"h3"},"v1")," branch."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"v1.0.7")," of this adaptor was built for the Primero ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.1")," API:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-primero/blob/v1/README.md"},"https://github.com/OpenFn/language-primero/blob/v1/README.md")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1jpaT2_UBBnc3PxPYlLMBEzNUkyfuxRZiksywG5MKM0Q/edit"},"Primero API v1.1 Documentation")),(0,a.kt)("h4",{id:"primero-authentication-strategies"},"Primero Authentication Strategies"),(0,a.kt)("p",null,"The Primero team is considering a shift to Microsoft Azure Active Directory B2C\nfor auth. We can likely accommodate this with a similar pattern as has been used\nin our Microsoft Dynamics, Github, or Google Sheets adaptors, but we'll need to\nawait final doucmentation for Primero's ",(0,a.kt)("inlineCode",{parentName:"p"},"v2")," API before making changes."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory-b2c/"},"Azure Active Directory B2C")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}c.isMDXComponent=!0}}]);