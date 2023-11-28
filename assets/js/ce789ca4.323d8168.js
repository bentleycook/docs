"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[27864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Limits"},i=void 0,l={unversionedId:"jobs/limits",id:"jobs/limits",title:"Limits",description:"OpenFn has a number of configurable limits that help ensure smooth operation.",source:"@site/docs/jobs/limits.md",sourceDirName:"jobs",slug:"/jobs/limits",permalink:"/documentation/next/jobs/limits",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/limits.md",tags:[],version:"current",frontMatter:{title:"Limits"},sidebar:"docs",previous:{title:"Exit Codes & Errors",permalink:"/documentation/next/jobs/errors"},next:{title:"Release Notes",permalink:"/documentation/next/release-notes"}},s={},p=[{value:"Workflow execution duration (1 hour)",id:"workflow-execution-duration-1-hour",level:2},{value:"Memory Usage (1GB)",id:"memory-usage-1gb",level:2},{value:"Dataclip Size (10MB)",id:"dataclip-size-10mb",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OpenFn has a number of configurable limits that help ensure smooth operation.\nThis page details what those limits are and how they can be adjusted."),(0,r.kt)("admonition",{title:"Increasing limits",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")," to increase limits on standard plans, configure\ncustom limits on dedicated deployments, or get help adjusting limits on your\nlocally deployment instance.")),(0,r.kt)("h2",{id:"workflow-execution-duration-1-hour"},"Workflow execution duration (1 hour)"),(0,r.kt)("p",null,"Each workflow attempt needs to complete in less than ",(0,r.kt)("inlineCode",{parentName:"p"},"1 hour"),". You can view the\nduration of each attempt by clicking on the attempt ID. If an attempt exceeds\nthis limit, it will be killed by the worker and you'll see a ",(0,r.kt)("inlineCode",{parentName:"p"},"Killed:Timeout"),"\nbadge as your attempt state."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Instance superusers can control this limit the ",(0,r.kt)("inlineCode",{parentName:"em"},"MAX_RUN_DURATION")," environment\nvariable."))),(0,r.kt)("h2",{id:"memory-usage-1gb"},"Memory Usage (1GB)"),(0,r.kt)("p",null,"Each workflow attempt may not use more than ",(0,r.kt)("inlineCode",{parentName:"p"},"1GB")," of memory. You can view the\nmaximum memory usage of each attempt by clicking on the attempt ID. If an\nattempt exceeds this limit, it will be killed by the worker and you'll see a\n",(0,r.kt)("inlineCode",{parentName:"p"},"Killed:OOM")," badge as your attempt state."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Instance superusers can control this limit via the ",(0,r.kt)("inlineCode",{parentName:"em"},"MAX_RUN_MEMORY"),"\nenvironment variable."))),(0,r.kt)("h2",{id:"dataclip-size-10mb"},"Dataclip Size (10MB)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Each ",(0,r.kt)("strong",{parentName:"li"},"webhook request")," to a trigger URL cannot exceed ",(0,r.kt)("inlineCode",{parentName:"li"},"10MB"),"."),(0,r.kt)("li",{parentName:"ol"},"If you are persisting the final state of each ",(0,r.kt)("strong",{parentName:"li"},"run")," as a dataclip, each\ndataclip may not exceed ",(0,r.kt)("inlineCode",{parentName:"li"},"10MB"),"."),(0,r.kt)("li",{parentName:"ol"},"If you are persisting the final state of an ",(0,r.kt)("strong",{parentName:"li"},"attempt")," as a dataclip, it may\nnot exceed ",(0,r.kt)("inlineCode",{parentName:"li"},"10MB"),".")),(0,r.kt)("p",null,"If you send a payload to a webhook trigger URL which breaches this limit, the\nserver will respond with a ",(0,r.kt)("inlineCode",{parentName:"p"},"413")," error with a ",(0,r.kt)("inlineCode",{parentName:"p"},":request_entity_too_large"),"\nmessage. If the dataclips produced by the final state of runs and attempts are\ntoo large, you will no be able to access them and instead see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "__lightning": "Run result too large to save" }\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Instance superusers can control this limit via the ",(0,r.kt)("inlineCode",{parentName:"em"},"MAX_DATACLIP_SIZE"),"\nenvironment variable."))))}u.isMDXComponent=!0}}]);