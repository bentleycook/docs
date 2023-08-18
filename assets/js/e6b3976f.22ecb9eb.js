"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[69159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),r=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=r(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=r(a),k=n,u=m["".concat(c,".").concat(k)]||m[k]||d[k]||s;return a?i.createElement(u,l(l({ref:t},p),{},{components:a})):i.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var r=2;r<s;r++)l[r]=a[r];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},15059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var i=a(87462),n=(a(67294),a(3905));const s={sidebar_label:"Implementation Checklist",title:"Implementation Checklist for planning your next integration project"},l="Implementation Checklist",o={unversionedId:"getting-started/implementation-checklist",id:"getting-started/implementation-checklist",title:"Implementation Checklist for planning your next integration project",description:"This checklist draws from experience of implementing interoperability projects",source:"@site/docs/getting-started/implementation-checklist.md",sourceDirName:"getting-started",slug:"/getting-started/implementation-checklist",permalink:"/documentation/getting-started/implementation-checklist",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/implementation-checklist.md",tags:[],version:"current",frontMatter:{sidebar_label:"Implementation Checklist",title:"Implementation Checklist for planning your next integration project"},sidebar:"docs",previous:{title:"OpenFn Concepts",permalink:"/documentation/getting-started/terminology"},next:{title:"Security",permalink:"/documentation/getting-started/security"}},c={},r=[{value:"(1) Preparing for the Implementation",id:"1-preparing-for-the-implementation",level:2},{value:"(2) Discovery &amp; Design - Functional Workflow Requirements",id:"2-discovery--design---functional-workflow-requirements",level:2},{value:"(3) Discovery &amp; Design - Technical Specifications",id:"3-discovery--design---technical-specifications",level:2},{value:"(4) Build",id:"4-build",level:2},{value:"(5) Testing",id:"5-testing",level:2},{value:"(6) Training &amp; Prep for Go-Live",id:"6-training--prep-for-go-live",level:2},{value:"Rollout &amp; Support",id:"rollout--support",level:3},{value:"Questions or feedback?",id:"questions-or-feedback",level:2}],p={toc:r},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"implementation-checklist"},"Implementation Checklist"),(0,n.kt)("p",null,"This checklist draws from experience of implementing interoperability projects\nwith in-country government agencies (incl. UNICEF country offices, Ministry of\nSocial Services Cambodia, MoH Thailand) to offer an implementation & planning\nguide covering key milestones in most interoperability and integration projects."),(0,n.kt)("p",null,"While this checklist should be tailored for each implementation, the tasks\noutlined here provide a template workplan that can help any organization prepare\nfor their upcoming implementation. "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Check out a real-world example See the UNICEF Cambodia repository for documented\noutputs from this checklist from an interoperability project implemented for the\nCambodia Ministry of Social Affairs, Veterans, and Youth Rehabilitation and\npartner NGOs:\n",(0,n.kt)("a",{parentName:"p",href:"https://openfn.github.io/unicef-cambodia/"},"openfn.github.io/unicef-cambodia/"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The XLS version of this template can be found ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1_XY0nx0OLNUsogrIHnRaSTyZ-KdcSXks-tqwm3ZfMc4/edit#gid=72612093"},"here"),".")),(0,n.kt)("h2",{id:"1-preparing-for-the-implementation"},"(1) Preparing for the Implementation"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Point of contacts identified for each target system (incl. system administrators, folks who can speak to the functional and technical requirements)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data sharing agreement finalized (if required; common for cross-organization workflows)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Business value assessed & documented"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","High-level workflow requirements gathered & documented (in diagram)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Technical feasibility assessment completed to verify integration approach, available connection points, and OpenFn deployment option and adaptors"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Capacity assessment completed")),(0,n.kt)("h2",{id:"2-discovery--design---functional-workflow-requirements"},"(2) Discovery & Design - Functional Workflow Requirements"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","User stories documented to capture business value & desired outcomes\nLearn more about user stories ",(0,n.kt)("a",{parentName:"li",href:"https://docs.openfn.org/documentation/design/design-quickstart#1-capture-requirements-as-user-stories"},"here.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Workflow BPMN diagram capturing functional steps of the business process finalized\nLearn more about diagrams & BPMN notation ",(0,n.kt)("a",{parentName:"li",href:"https://docs.openfn.org/documentation/design/design-quickstart#2-diagram-the-business-process"},"here.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Request list of data elements from administrators of target systems\nRead about mapping specs ",(0,n.kt)("a",{parentName:"li",href:"https://docs.openfn.org/documentation/design/design-quickstart#3-map-data-elements-to-be-exchanged"},"here."),"."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data element mapping specifications finalized (functional/business-friendly version)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Client sign-offs on workflow diagram & mapping specs"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Workflow assumptions documented (e.g., what human, manual steps does the workflow rely on; what are the unique identifiers) "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing scenarios drafted ")),(0,n.kt)("h2",{id:"3-discovery--design---technical-specifications"},"(3) Discovery & Design - Technical Specifications"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Documentation on APIs or target connection points secured"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Connection points & authentication methods confirmed"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Access secured to developer/sandbox environments for testing"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Authentication and authorization methods & credentials tested"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Target API endpoints determined based on functional specifications & review of API docs"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Target API endpoints tested to validate the functional data element specifications can be delivered"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Workflow BPMN diagram capturing the technical steps of the workflow finalized "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Technical version of data element mapping specifications created "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Workflow assumptions updated to include any technical considerations "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test scenarios updated to include any technical considerations"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Project Security Configuration Checklist drafted to capture data security & compliance considerations"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Github repository created"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Job specifications written for developers ")),(0,n.kt)("h2",{id:"4-build"},"(4) Build"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","OpenFn platform: project space created & relevant users invited"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","OpenFn platform: Jobs, triggers, and credentials configured "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","OpenFn platform: Version control configured to connect Github repo"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jobs written & pushed to branch on Github"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Job code review complete and merged to main branch on Github"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","OpenFn platform: Github paths updated on each job to link to source file"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test data created (if needed)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Engineer updates mapping specifications (if needed)")),(0,n.kt)("h2",{id:"5-testing"},"(5) Testing"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing Round 1: Developers run jobs locally with sample data provided"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing Round 2: Analysts complete Test Scenarios & run jobs on platform"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Iteration: Analysts submit feedback to developers & re-test"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","UAT Round 1: Client completes Test Scenarios"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Iteration: Analysts submit feedback to developers & re-test"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","UAT Round 2 (if needed): Client completes Test Scenarios"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Iteration: Analysts submit feedback to developers & re-test")),(0,n.kt)("h2",{id:"6-training--prep-for-go-live"},"(6) Training & Prep for Go-Live"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Training materials drafted for client administrators"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Documentation drafted, and all project artefacts/docs linked"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Project Security Configuration Checklist reviewed to determine if any configuration changes or settings need to be implemented post-testing"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Confirm that production system(s) have been configured"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Production credentials secured & tested (authentication & authorization)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'OpenFn platform: "production" project created (cloned from "staging" project), job configuration migrated, & jobs connected to production credentials'),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","OpenFn administrator users & access levels confirmed and granted?"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Support POCs identified for each target system?"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Establish support structures & governance model for change management "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Training session delivered to designated OpenFn and target system administrators and any other ToTs")),(0,n.kt)("h3",{id:"rollout--support"},"Rollout & Support"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Go Live: Turn "on" OpenFn jobs in production platform project so that the workflow is now live in production systems'),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Confirm administrators have OpenFn notifications turned on to "Each Time" so that they will receive failure notifications (see OpenFn Account Settings)'),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Communicate to end users as needed about the go-live and its implications")),(0,n.kt)("h2",{id:"questions-or-feedback"},"Questions or feedback?"),(0,n.kt)("p",null,"If you have any inputs, comments, or questions\u2013please contribute! Submit a pull\nrequest to this documentation page or leave a comment in\n",(0,n.kt)("a",{parentName:"p",href:"https://community.openfn.org/"},"OpenFn Community"),"."))}d.isMDXComponent=!0}}]);