"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),b=a,d=m["".concat(p,".").concat(b)]||m[b]||u[b]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"commcare reports api",sidebar_label:"commcare reports api",id:"commcare-reports-api-2016-08-29",keywords:["library","job","expression","http","get","post","Promise"]},i=void 0,s={unversionedId:"jobs/auto/commcare-reports-api-2016-08-29",id:"jobs/auto/commcare-reports-api-2016-08-29",title:"commcare reports api",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/commcare-reports-api-2016-08-29.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/commcare-reports-api-2016-08-29",permalink:"/library/jobs/auto/commcare-reports-api-2016-08-29",draft:!1,tags:[],version:"current",frontMatter:{title:"commcare reports api",sidebar_label:"commcare reports api",id:"commcare-reports-api-2016-08-29",keywords:["library","job","expression","http","get","post","Promise"]},sidebar:"library",previous:{title:"\ud83d\udcdc Chaining synchronous http requests",permalink:"/library/jobs/auto/synchronous-http-request"},next:{title:"\ud83d\udcdc Extract Kobo data from API to send to OpenFn Inbox",permalink:"/library/jobs/auto/getKoboData"}},p={},l=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: commcare reports api"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v0.0.9"},(0,a.kt)("inlineCode",{parentName:"a"},"v0.0.9"))),(0,a.kt)("li",{parentName:"ul"},"Created about 6 years ago"),(0,a.kt)("li",{parentName:"ul"},"Updated about 6 years ago"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"0")," (an ",(0,a.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'get("api/v0.5/configurablereportdata/daily_form_stats", {\n    query: function(state) {\n      return { date: state.lastSubmissionDate || "Aug 29, 2016 4:44:26 PM" }\n    },\n    callback: function(state) {\n      // Pick submissions out in order to avoid `post` overwriting `response`.\n      var submissions = state.response.body;\n      // Use .slice to limit how much you send to the server for testing\n      // return submissions\n      return submissions.reduce(function(acc, item) {\n        return acc.then(\n          post(\n            "http://localhost:4000/inbox/8ad63a29-5c25-4d8d-ba2c-fe6274dcfbab",\n            { body: item }\n          )\n        )\n      }, Promise.resolve(state))\n      .then(function(state) {\n        console.log(submissions.length)\n        if (submissions.length) {\n          state.lastSubmissionDate = submissions[submissions.length-1].SubmissionDate\n        }\n        return state;\n      })\n      .then(function(state) {\n        delete state.response\n        return state;\n      })\n    }\n  })\n')))}u.isMDXComponent=!0}}]);