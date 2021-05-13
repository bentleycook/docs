(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{300:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return n?o.a.createElement(m,p(p({ref:t},u),{},{components:n})):o.a.createElement(m,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(300)),i={title:"Magpi"},p={unversionedId:"apps/magpi",id:"apps/magpi",isDocsHomePage:!1,title:"Magpi",description:"Magpi is not able to push data to external URLs. In order to fetch data from",source:"@site/docs/apps/magpi.md",sourceDirName:"apps",slug:"/apps/magpi",permalink:"/documentation/apps/magpi",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/magpi.md",version:"current",frontMatter:{title:"Magpi"},sidebar:"docs",previous:{title:"Kobo Toolbox",permalink:"/documentation/apps/kobo-toolbox"},next:{title:"Moodle",permalink:"/documentation/apps/moodle"}},c=[],u={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Magpi is not able to push data to external URLs. In order to fetch data from\nMagpi, you must run a scheduled job with a cron trigger using ",Object(a.b)("inlineCode",{parentName:"p"},"language-magpi"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"fetchSurveyData({\n  surveyId: 37479, // the survey id\n  afterDate: '2016-05-31', // the initial \"after\" date\n  // after the first run, OpenFn will only fetch new submissions\n  postUrl: 'https://www.openfn.org/inbox/secret-5c25-inbox-ba2c-url', // the inbox to post form data to.\n});\n")),Object(a.b)("p",null,"Every time this job runs it will only fetch new data, by default."))}l.isMDXComponent=!0}}]);