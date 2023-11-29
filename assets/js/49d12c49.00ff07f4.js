"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[62541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,m=u["".concat(s,".").concat(c)]||u[c]||f[c]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Initial and final state for runs"},o=void 0,l={unversionedId:"build-for-developers/state",id:"build-for-developers/state",title:"Initial and final state for runs",description:"Initial state",source:"@site/docs/build-for-developers/state.md",sourceDirName:"build-for-developers",slug:"/build-for-developers/state",permalink:"/documentation/next/build-for-developers/state",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build-for-developers/state.md",tags:[],version:"current",frontMatter:{title:"Initial and final state for runs"}},s={},p=[{value:"Initial state",id:"initial-state",level:2},{value:"Final state",id:"final-state",level:2},{value:"Final state after an error",id:"final-state-after-an-error",level:3},{value:"States by job trigger type",id:"states-by-job-trigger-type",level:2}],d={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"initial-state"},"Initial state"),(0,a.kt)("p",null,"Depending on what tools you're using and what triggered a given run, the initial\n",(0,a.kt)("inlineCode",{parentName:"p"},"state")," for a job run might be generated in a number of different ways, and you\nmight even build ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," by hand. For ",(0,a.kt)("inlineCode",{parentName:"p"},"microservice"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"engine"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"platform"),"\nhowever, there are strict rules around how ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," gets created and provided to\na runtime for execution of your operations. See the table below for details."),(0,a.kt)("h2",{id:"final-state"},"Final state"),(0,a.kt)("p",null,"The final state of a job run is determined by ",(0,a.kt)("em",{parentName:"p"},"you"),". Job expressions are a\nseries of ",(0,a.kt)("inlineCode",{parentName:"p"},"operations"),"\u2014they each take ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," and return ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),", after creating\nany number of side effects."),(0,a.kt)("h3",{id:"final-state-after-an-error"},"Final state after an error"),(0,a.kt)("p",null,"If a job run fails, it will not produce a final state. The run itself will have\n",(0,a.kt)("inlineCode",{parentName:"p"},"log")," information attached to it, along with its exit code, but there's not\nnecessarily a clean final ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," which can be serialized to ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you're making use of a ",(0,a.kt)("inlineCode",{parentName:"p"},"failure")," triggered job, that job run will not get the\nfinal state of the previous job run, as it failed and has no final state. It\nwill instead receive the initial state of the previous (failed) run, plus a new\n",(0,a.kt)("inlineCode",{parentName:"p"},"error")," key that contains the stringified logs from the previous run. See below\nfor details.")),(0,a.kt)("h2",{id:"states-by-job-trigger-type"},"States by job trigger type"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Triggering Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Initial State"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"http request"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ data: httpRequest.body, configuration: job.credential.body }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cron"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ ...finalStateOfLastSuccessfulRun, configuration: job.credential.body }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flow: success"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ ...finalStateOfTriggeringRun, configuration: job.credential.body }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"flow: failure"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{ ...initialStateOfTriggeringRun, error: logsFromTriggeringRun, configuration: job.credential.body }"))))))}f.isMDXComponent=!0}}]);