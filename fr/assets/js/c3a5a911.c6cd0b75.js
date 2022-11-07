"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),h=a,f=g["".concat(l,".").concat(h)]||g[h]||u[h]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},91602:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={layout:"post",title:"Testing a React app, the blurred line between Unit, integration and E2E",author:"Chaiwa Berian",author_url:"https://github.com/chaiwa-berian",author_image_url:"https://avatars.githubusercontent.com/u/7937584?v=4",tags:["how-to","tips","testing","browser-testing","react","elixir"],featured:!0},o=void 0,s={permalink:"/fr/articles/2021/10/22/testing-react-app-with-jest-hound",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-10-22-testing-react-app-with-jest-hound.md",source:"@site/articles/2021-10-22-testing-react-app-with-jest-hound.md",title:"Testing a React app, the blurred line between Unit, integration and E2E",description:"Have you ever struggled to layout the strategy for testing your React App? Well,",date:"2021-10-22T00:00:00.000Z",formattedDate:"22 octobre 2021",tags:[{label:"how-to",permalink:"/fr/articles/tags/how-to"},{label:"tips",permalink:"/fr/articles/tags/tips"},{label:"testing",permalink:"/fr/articles/tags/testing"},{label:"browser-testing",permalink:"/fr/articles/tags/browser-testing"},{label:"react",permalink:"/fr/articles/tags/react"},{label:"elixir",permalink:"/fr/articles/tags/elixir"}],readingTime:7.89,hasTruncateMarker:!0,authors:[{name:"Chaiwa Berian",url:"https://github.com/chaiwa-berian",imageURL:"https://avatars.githubusercontent.com/u/7937584?v=4"}],frontMatter:{layout:"post",title:"Testing a React app, the blurred line between Unit, integration and E2E",author:"Chaiwa Berian",author_url:"https://github.com/chaiwa-berian",author_image_url:"https://avatars.githubusercontent.com/u/7937584?v=4",tags:["how-to","tips","testing","browser-testing","react","elixir"],featured:!0},prevItem:{title:"How learning JavaScript helps me better understand OpenFn jobs",permalink:"/fr/articles/2021/10/29/how-learning-javascript-helped-me-better-understand-jobs"},nextItem:{title:"Moving from Webpack to esbuild on Phoenix",permalink:"/fr/articles/2021/10/15/webpack-to-esbuild-part1"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Have you ever struggled to layout the strategy for testing your React App? Well,\nyou are not alone! Here a few hints from the lessons I learned during my\nexperience testing a\n",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),"/",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," app with a\n",(0,a.kt)("a",{parentName:"p",href:"https://www.phoenixframework.org/"},"Phoenix"),"/",(0,a.kt)("a",{parentName:"p",href:"https://elixir-lang.org/"},"Elixir"),"\nbackend."))}u.isMDXComponent=!0}}]);