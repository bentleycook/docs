"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3054],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=l(r),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,i(i({ref:e},s),{},{components:r})):n.createElement(g,i({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85001:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={layout:"post",title:"Improving Multistage Docker Builds using Buildx",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","docker","ci/cd"],featured:!0},i=void 0,u={permalink:"/articles/2021/10/08/improving-multistage-docker-builds-using-buildx",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-10-08-improving-multistage-docker-builds-using-buildx.md",source:"@site/articles/2021-10-08-improving-multistage-docker-builds-using-buildx.md",title:"Improving Multistage Docker Builds using Buildx",description:"So you're using docker's multi-stage builds and noticed that your build times",date:"2021-10-08T00:00:00.000Z",formattedDate:"October 8, 2021",tags:[{label:"how-to",permalink:"/articles/tags/how-to"},{label:"docker",permalink:"/articles/tags/docker"},{label:"ci/cd",permalink:"/articles/tags/ci-cd"}],readingTime:5.985,hasTruncateMarker:!0,authors:[{name:"Stuart Corbishley",url:"https://github.com/stuartc",imageURL:"https://avatars.githubusercontent.com/stuartc"}],frontMatter:{layout:"post",title:"Improving Multistage Docker Builds using Buildx",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","docker","ci/cd"],featured:!0},prevItem:{title:"Moving from Webpack to esbuild on Phoenix",permalink:"/articles/2021/10/15/webpack-to-esbuild-part1"},nextItem:{title:"Wrapping my head around jobs",permalink:"/articles/2021/07/05/wrapping-my-head-around-jobs"}},c={authorsImageUrls:[void 0]},l=[],s={toc:l};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So you're using docker's multi-stage builds and noticed that your build times\naren't nearly as quick as you expected?"))}p.isMDXComponent=!0}}]);