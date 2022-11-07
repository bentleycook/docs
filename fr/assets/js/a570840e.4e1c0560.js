"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"BambooHR"},i=void 0,p={unversionedId:"apps/bamboohr",id:"apps/bamboohr",title:"BambooHR",description:"Aper\xe7u",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/bamboohr.md",sourceDirName:"apps",slug:"/apps/bamboohr",permalink:"/fr/documentation/apps/bamboohr",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/bamboohr.md",tags:[],version:"current",frontMatter:{title:"BambooHR"}},l={},s=[{value:"Aper\xe7u",id:"aper\xe7u",level:2},{value:"Cas d&#39;utilisation d&#39;int\xe9gration",id:"cas-dutilisation-dint\xe9gration",level:3},{value:"Compl\xe9ment d&#39;informations\xa0:",id:"compl\xe9ment-dinformations",level:3},{value:"Options d&#39;int\xe9gration",id:"options-dint\xe9gration",level:2},{value:"Adaptateur OpenFn",id:"adaptateur-openfn",level:2},{value:"Exemples d&#39;int\xe9gration",id:"exemples-dint\xe9gration",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,o.kt)("p",null,"BambooHR est..."),(0,o.kt)("h3",{id:"cas-dutilisation-dint\xe9gration"},"Cas d'utilisation d'int\xe9gration"),(0,o.kt)("p",null,"Exemple de r\xe9cits d'utilisateur..."),(0,o.kt)("h3",{id:"compl\xe9ment-dinformations"},"Compl\xe9ment d'informations\xa0:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Liens...")),(0,o.kt)("h2",{id:"options-dint\xe9gration"},"Options d'int\xe9gration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Int\xe9gration des donn\xe9es via l'API Web de BambooHR\xa0-\xa0lien\xa0: ....")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Service webhook pour transf\xe9rer des donn\xe9es vers le point de terminaison OpenFn\xa0-\xa0lien\xa0: ... Notes \xe0 propos de la configuration de webhook..."))),(0,o.kt)("h2",{id:"adaptateur-openfn"},"Adaptateur OpenFn"),(0,o.kt)("p",null,"Actuellement, il n'y a pas d'adaptateur sp\xe9cifique \xe0 un outil, donc ",(0,o.kt)("inlineCode",{parentName:"p"},"language-http")," peut \xeatre impl\xe9ment\xe9 pour s'int\xe9grer via des requ\xeates HTTP \xe0 l'API web."),(0,o.kt)("h2",{id:"exemples-dint\xe9gration"},"Exemples d'int\xe9gration"),(0,o.kt)("p",null,"Liens vers des exemples de t\xe2ches ou extraits de code..."))}c.isMDXComponent=!0}}]);