"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[55889],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),h=r,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return o?n.createElement(f,i(i({ref:t},u),{},{components:o})):n.createElement(f,i({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},48085:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={title:"Generic Data Sources",sidebar_label:"Generic Sources"},i=void 0,s={unversionedId:"source-apps",id:"source-apps",title:"Generic Data Sources",description:"Standard webhook configuration",source:"@site/docs/source-apps.md",sourceDirName:".",slug:"/source-apps",permalink:"/fr/documentation/source-apps",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/source-apps.md",tags:[],version:"current",frontMatter:{title:"Generic Data Sources",sidebar_label:"Generic Sources"},sidebar:"docs",previous:{title:"Your Inbox",permalink:"/fr/documentation/build/inbox"},next:{title:"CLI",permalink:"/fr/documentation/cli"}},c={},l=[{value:"Standard webhook configuration",id:"standard-webhook-configuration",level:2},{value:"How webhooks enable real time integration",id:"how-webhooks-enable-real-time-integration",level:2},{value:"Providing a UI for your webhook?",id:"providing-a-ui-for-your-webhook",level:2},{value:"When to send?",id:"when-to-send",level:2},{value:"What to send?",id:"what-to-send",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"standard-webhook-configuration"},"Standard webhook configuration"),(0,r.kt)("p",null,"This section describes how to enable push notifications from selected source\napplications or how to configure pull jobs to fetch data from those sources. If\nyou don't see yours in the alphabetical list below feel free to add it with a\npull request."),(0,r.kt)("p",null,"Every OpenFn project has a unique ",(0,r.kt)("strong",{parentName:"p"},"Inbox URL")," address that can be used as an\nendpoint for any JSON webhook. To set up a data source, configure that source to\nmake a POST over HTTPS to your Inbox URL. See ",(0,r.kt)("a",{parentName:"p",href:"/fr/documentation/build/inbox"},"Your Inbox"),"."),(0,r.kt)("p",null,'To connect an application with standard JSON webhooks, copy your inbox URL from\nthe "Inbox" page or your "Project Settings" screen and use it as the destination\nURL on your source application. Unless you have specifically configured it on\nthe "Access & Security" page, no authentication is required.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"N.B.: This is by no means an exhaustive list."))," It is merely a list of\ncommon sources that external contributors have added. Remember that anything\nwith a REST api or a JSON-based notification service can be used with OpenFn."),(0,r.kt)("h2",{id:"how-webhooks-enable-real-time-integration"},"How webhooks enable real time integration"),(0,r.kt)("p",null,"Webhooks services (sometimes called \u201cREST Services\u201d) are services that your\nusers can configure on your application which make posts to other REST\nendpoints. The most common example we\u2019ll come across is a form, submission, or\ncase forwarding service that will send a copy of a submission to an external\nAPI."),(0,r.kt)("h2",{id:"providing-a-ui-for-your-webhook"},"Providing a UI for your webhook?"),(0,r.kt)("p",null,"This is likely the most end-user interactive part of your API, and you\u2019ll\nprobably want a feature in your user-interface that allows them to turn on and\noff these various services. See the below example from Kobo Toolbox (left) and\nCommCare (right)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kobo_to_commcare",src:o(14460).Z,width:"1576",height:"810"})),(0,r.kt)("h2",{id:"when-to-send"},"When to send?"),(0,r.kt)("p",null,"Consider whether to set up watches or triggers at the DB level (this seems like\noverkill but is provided by some databases relatively inexpensively) or at\nseveral key interfaces in your application. What types of\nupdates/submissions/changes in your application might other applications need to\nbe notified of in real time? A new submission is the most common, but updates to\na \u201ccase\u201d, changes to UAM, or any other events could be valuable."),(0,r.kt)("h2",{id:"what-to-send"},"What to send?"),(0,r.kt)("p",null,"The whole resource, please. This anticipates our thoughts on sector-wide data\nstandards slightly, but (within reason) it makes sense to expose everything your\nend-user will need to run the next step in their logic. Some interfaces allow\nthe user to control which fields (and even which related resources) are sent in\na given payload, but often the default is to send everything and let them pick\nand choose what they want to use."))}d.isMDXComponent=!0},14460:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/webhooks1-087e20afb50003fac925a9e7318b8cfd.png"}}]);