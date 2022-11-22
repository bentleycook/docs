"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,b=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return n?a.createElement(b,i(i({ref:t},m),{},{components:n})):a.createElement(b,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"01 send mailgun email",sidebar_label:"01 send mailgun email",id:"01-send-mailgun-email-2018-12-04",keywords:["library","job","expression","mailgun","dataValue","field","fields","send"]},i=void 0,l={unversionedId:"jobs/auto/01-send-mailgun-email-2018-12-04",id:"jobs/auto/01-send-mailgun-email-2018-12-04",title:"01 send mailgun email",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/01-send-mailgun-email-2018-12-04.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/01-send-mailgun-email-2018-12-04",permalink:"/fr/library/jobs/auto/01-send-mailgun-email-2018-12-04",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"01 send mailgun email",sidebar_label:"01 send mailgun email",id:"01-send-mailgun-email-2018-12-04",keywords:["library","job","expression","mailgun","dataValue","field","fields","send"]},sidebar:"library",previous:{title:"GET Data From KoboToolbox",permalink:"/fr/library/jobs/auto/GET-Data-From-KoboToolbox-2022-03-22"},next:{title:"\ud83d\udcdc send email",permalink:"/fr/library/jobs/auto/send-mail-in-mailgun"}},s={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: 01 send mailgun email"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mailgun"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-mailgun"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mailgun"},(0,r.kt)("inlineCode",{parentName:"a"},"latest"))),(0,r.kt)("li",{parentName:"ul"},"Created almost 4 years ago"),(0,r.kt)("li",{parentName:"ul"},"Updated almost 4 years ago"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"0")," (an ",(0,r.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"send")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"send(\n  fields(\n    field('from', 'aleksa@openfn.org'),\n    field('to', 'aleksa@openfn.org, aleksa@verasolutions.org'),\n    field('subject', 'Kobo: New Form Submitted'),\n      //You can write your own custom, anonymous functions to do whatever you desire - see function(state)\n    field('text', function(state) {\n      const msgText = \"A form was submitted by \"+ dataValue(\"_submitted_by\")(state) + \". Please login to review!\"\n      return msgText\n       //result will be an email with body text \"A form was submitted by [Kobo Submitted By User]. Please login to review!\" \n\n    })\n  ) \n )\n")))}d.isMDXComponent=!0}}]);