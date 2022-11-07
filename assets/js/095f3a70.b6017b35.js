"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Microsoft Azure"},i=void 0,p={unversionedId:"apps/azure",id:"apps/azure",title:"Microsoft Azure",description:"Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate",source:"@site/docs/apps/azure.md",sourceDirName:"apps",slug:"/apps/azure",permalink:"/documentation/apps/azure",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/azure.md",tags:[],version:"current",frontMatter:{title:"Microsoft Azure"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"OpenFn Adaptor",id:"openfn-adaptor",level:2},{value:"Integration Examples",id:"integration-examples",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Tool docs are (1) to ensure all OpenFn can more quickly and easily integrate\nwith common tools, and (2) to educate any OpenFn user/the wider sector.")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Azure is..."),(0,o.kt)("p",null,"Active Directory is...."),(0,o.kt)("p",null,"Further Reading:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Links..")),(0,o.kt)("h2",{id:"integration-options"},"Integration Options"),(0,o.kt)("p",null,"Data integration via Microsoph Web API..."),(0,o.kt)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,o.kt)("p",null,"Currently there is no tool-specific adaptor, so ",(0,o.kt)("inlineCode",{parentName:"p"},"language-http")," has been\nimplemented to integrate via HTTP requests to the web API."),(0,o.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,o.kt)("p",null,"Links to sample jobs/ code snippets"))}u.isMDXComponent=!0}}]);