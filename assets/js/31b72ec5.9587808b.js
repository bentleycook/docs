"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[34737],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>d});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),g=c(t),s=l,d=g["".concat(p,".").concat(s)]||g[s]||u[s]||r;return t?n.createElement(d,i(i({ref:a},h),{},{components:t})):n.createElement(d,i({ref:a},h))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[g]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},6970:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(87462),l=(t(67294),t(3905));const r={title:"progres changelog",id:"progres-changelog",keywords:["adaptor","changelog","progres"]},i="Changelog for the progres adaptor",o={unversionedId:"packages/progres-changelog",id:"packages/progres-changelog",title:"progres changelog",description:"1.3.8",source:"@site/adaptors/packages/progres-changelog.md",sourceDirName:"packages",slug:"/packages/progres-changelog",permalink:"/adaptors/packages/progres-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"progres changelog",id:"progres-changelog",keywords:["adaptor","changelog","progres"]},sidebar:"adaptors",previous:{title:"Config for progres",permalink:"/adaptors/packages/progres-configuration-schema"},next:{title:"progres developer readme",permalink:"/adaptors/packages/progres-readme"}},p={},c=[{value:"1.3.8",id:"138",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.3.7",id:"137",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.3.6",id:"136",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"1.3.5",id:"135",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"1.3.4",id:"134",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"1.3.3",id:"133",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"1.3.2",id:"132",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"1.3.1",id:"131",level:2},{value:"Patch Changes",id:"patch-changes-7",level:3},{value:"1.3.0",id:"130",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-8",level:3},{value:"1.2.5",id:"125",level:2},{value:"Patch Changes",id:"patch-changes-9",level:3},{value:"1.2.4",id:"124",level:2},{value:"Patch Changes",id:"patch-changes-10",level:3},{value:"1.2.3",id:"123",level:2},{value:"Patch Changes",id:"patch-changes-11",level:3},{value:"1.2.2",id:"122",level:2},{value:"Patch Changes",id:"patch-changes-12",level:3},{value:"1.2.1",id:"121",level:2},{value:"Patch Changes",id:"patch-changes-13",level:3},{value:"1.2.0",id:"120",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"Patch Changes",id:"patch-changes-14",level:3}],h={toc:c},g="wrapper";function u(e){let{components:a,...t}=e;return(0,l.kt)(g,(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"changelog-for-the-progres-adaptor"},"Changelog for the progres adaptor"),(0,l.kt)("h1",{id:"openfnlanguage-progres"},"@openfn/language-progres"),(0,l.kt)("h2",{id:"138"},"1.3.8"),(0,l.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[c19efbe]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.11.1"},"language-common@1.11.1"))))),(0,l.kt)("h2",{id:"137"},"1.3.7"),(0,l.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[85c35b8]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.11.0"},"language-common@1.11.0"))))),(0,l.kt)("h2",{id:"136"},"1.3.6"),(0,l.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[df09270]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.10.3"},"language-common@1.10.3"))))),(0,l.kt)("h2",{id:"135"},"1.3.5"),(0,l.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[26a303e]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.10.2"},"language-common@1.10.2"))))),(0,l.kt)("h2",{id:"134"},"1.3.4"),(0,l.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[8c32eb3]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.10.1"},"language-common@1.10.1"))))),(0,l.kt)("h2",{id:"133"},"1.3.3"),(0,l.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[aad9549]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.10.0"},"language-common@1.10.0"))))),(0,l.kt)("h2",{id:"132"},"1.3.2"),(0,l.kt)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[111807f]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.9.0"},"language-common@1.9.0"))))),(0,l.kt)("h2",{id:"131"},"1.3.1"),(0,l.kt)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update lock files"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,l.kt)("h2",{id:"130"},"1.3.0"),(0,l.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,l.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,l.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,l.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,l.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,l.kt)("p",{parentName:"li"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,l.kt)("h3",{id:"patch-changes-8"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,l.kt)("h2",{id:"125"},"1.2.5"),(0,l.kt)("h3",{id:"patch-changes-9"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[929bca6]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.7"},"language-common@1.7.7"))))),(0,l.kt)("h2",{id:"124"},"1.2.4"),(0,l.kt)("h3",{id:"patch-changes-10"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ef828e7: update old urls in readme"),(0,l.kt)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,l.kt)("h2",{id:"123"},"1.2.3"),(0,l.kt)("h3",{id:"patch-changes-11"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,l.kt)("h2",{id:"122"},"1.2.2"),(0,l.kt)("h3",{id:"patch-changes-12"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,l.kt)("h2",{id:"121"},"1.2.1"),(0,l.kt)("h3",{id:"patch-changes-13"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,l.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,l.kt)("h2",{id:"120"},"1.2.0"),(0,l.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"039ca0b: Migrate Progres")),(0,l.kt)("h3",{id:"patch-changes-14"},"Patch Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"@openfn/",(0,l.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))))}u.isMDXComponent=!0}}]);