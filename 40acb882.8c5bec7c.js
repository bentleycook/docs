(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(172)),i={title:"Troubleshooting"},s={unversionedId:"trouble-shooting",id:"trouble-shooting",isDocsHomePage:!1,title:"Troubleshooting",description:"What happens if my survey data from ODK needs to link to existing records in",source:"@site/docs/trouble-shooting.md",slug:"/trouble-shooting",permalink:"/documentation/trouble-shooting",editUrl:"https://github.com/openfn/docs/edit/main/docs/trouble-shooting.md",version:"current",sidebar:"docs",previous:{title:"Project Management",permalink:"/documentation/manage/platform-mgmt"},next:{title:"Exit Codes & Errors",permalink:"/documentation/jobs/errors"}},c=[{value:"Common Error Messages",id:"common-error-messages",children:[]},{value:"Common errors and how to handle them",id:"common-errors-and-how-to-handle-them",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"What happens if my survey data from ODK needs to link to existing records in\nmy Salesforce system but a respondent enters or selects an invalid\n",Object(o.b)("inlineCode",{parentName:"p"},"external ID"),"?")),Object(o.b)("p",null,"Great question, and don't worry, it happens all the time. Assuming you've\nalready taken all possible measures to either pre-load external IDs in your ODK\nform or use more human-proof IDs (like barcodes and fingerprints) here's the\nflow of work:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Read the email, and inspect the reason for failure.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"99% of failed runs on OpenFn are due to ",Object(o.b)("inlineCode",{parentName:"p"},"value mismatches"),". The ",Object(o.b)("em",{parentName:"p"},"collected"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"id")," in ODK doesn't match the ",Object(o.b)("em",{parentName:"p"},"expected")," ",Object(o.b)("inlineCode",{parentName:"p"},"id")," in Salesforce. You must now\nchose to either:"),Object(o.b)("p",{parentName:"li"},"A. Edit the source ",Object(o.b)("inlineCode",{parentName:"p"},"id")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"receipt")," & retry the attempt."),Object(o.b)("p",{parentName:"li"},"B. Edit the related ",Object(o.b)("inlineCode",{parentName:"p"},"id")," in your destination system & retry the attempt."),Object(o.b)("p",{parentName:"li"},'C. Ignore the attempt\u2014this source data will never reach your destination\nsystem. (There have been reports of ODK Aggregate\'s JSON publisher sending\ndupliate values. If that happens and your run fails due to "duplicate values"\non a particular unique field you can safely ignore the run in OpenFn.)'))),Object(o.b)("p",null,"Editing data in your destination system can be done through that system's\ninterface. Many tools that act as ",Object(o.b)("inlineCode",{parentName:"p"},"sources")," (like ODK) do not allow for easy\nediting and re-submission of data. You can use OpenFn to edit the source data\nbefore retrying the attempt."),Object(o.b)("h3",{id:"common-error-messages"},"Common Error Messages"),Object(o.b)("p",null,"The most common error messages with English explanations are:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0\nThe insert is blocked because you are attempting to create a new record with a\nunique field with the same value as an existing record.\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"Required value missing\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"ExternalId not found\n")),Object(o.b)("h3",{id:"common-errors-and-how-to-handle-them"},"Common errors and how to handle them"),Object(o.b)("h4",{id:"are-master-detail-relationships-in-salesforce-reparentable"},"Are Master-detail relationships in Salesforce reparentable?"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"{ INVALID_FIELD_FOR_INSERT_UPDATE: Unable to create/update fields: Contact__c.\nPlease check the security settings of this field and verify that it is\nread/write for your profile or permission set. }\n")),Object(o.b)("p",null,"This error may arise if a master-detail relationship in Salesforce is not set as\nreparentable and the user attempts to run an upsert."))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);