"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[92755],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>m});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),k=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},i=function(t){var e=k(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),d=k(a),c=l,m=d["".concat(u,".").concat(c)]||d[c]||s[c]||r;return a?n.createElement(m,p(p({ref:e},i),{},{components:a})):n.createElement(m,p({ref:e},i))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[d]="string"==typeof t?t:l,p[1]=o;for(var k=2;k<r;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14522:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>k});var n=a(87462),l=(a(67294),a(3905));const r={title:"salesforce@4.0.8",id:"salesforce-docs",keywords:["adaptor","salesforce","bulk","bulkQuery","create","createIf","describe","describeAll","destroy","query","reference","relationship","retrieve","update","upsert","upsertIf"]},p=void 0,o={unversionedId:"packages/salesforce-docs",id:"packages/salesforce-docs",title:"salesforce@4.0.8",description:"Functions",source:"@site/adaptors/packages/salesforce-docs.md",sourceDirName:"packages",slug:"/packages/salesforce-docs",permalink:"/adaptors/packages/salesforce-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"salesforce@4.0.8",id:"salesforce-docs",keywords:["adaptor","salesforce","bulk","bulkQuery","create","createIf","describe","describeAll","destroy","query","reference","relationship","retrieve","update","upsert","upsertIf"]},sidebar:"adaptors",previous:{title:"Salesforce",permalink:"/adaptors/salesforce"},next:{title:"Config for salesforce",permalink:"/adaptors/packages/salesforce-configuration-schema"}},u={},k=[{value:"Functions",id:"functions",level:2},{value:"bulk",id:"bulk",level:2},{value:"bulkQuery",id:"bulkquery",level:2},{value:"cleanupState",id:"cleanupstate",level:2},{value:"create",id:"create",level:2},{value:"createConnection",id:"createconnection",level:2},{value:"createIf",id:"createif",level:2},{value:"describe",id:"describe",level:2},{value:"describeAll",id:"describeall",level:2},{value:"destroy",id:"destroy",level:2},{value:"execute",id:"execute",level:2},{value:"login",id:"login",level:2},{value:"query",id:"query",level:2},{value:"reference",id:"reference",level:2},{value:"relationship",id:"relationship",level:2},{value:"retrieve",id:"retrieve",level:2},{value:"steps",id:"steps",level:2},{value:"update",id:"update",level:2},{value:"upsert",id:"upsert",level:2},{value:"upsertIf",id:"upsertif",level:2}],i={toc:k},d="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(d,(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#bulk"},"bulk(sObject, operation, options, fun)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#bulkQuery"},"bulkQuery(qs, callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#cleanupState"},"cleanupState(state)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#create"},"create(sObject, attrs)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#createConnection"},"createConnection(state)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#createIf"},"createIf(logical, sObject, attrs)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#describe"},"describe(sObject)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#describeAll"},"describeAll()")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#destroy"},"destroy(sObject, attrs, options)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#execute"},"execute(operations)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#login"},"login(state)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#query"},"query(qs)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#reference"},"reference(position)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#relationship"},"relationship(relationshipName, externalId, dataSource)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#retrieve"},"retrieve(sObject, id, callback)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#steps"},"steps()")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#update"},"update(sObject, attrs)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsert"},"upsert(sObject, externalId, attrs)")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertIf"},"upsertIf(logical, sObject, externalId, attrs)"))),(0,l.kt)("h2",{id:"bulk"},"bulk"),(0,l.kt)("p",null,"bulk(sObject, operation, options, fun) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nCreate and execute a bulk job."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sObject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"The bulk operation to be performed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Options passed to the bulk api.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fun"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"A function which takes state and returns an array.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"bulk('Patient__c', 'insert', { failOnError: true, pollInterval: 3000, pollTimeout: 240000 }, state => {\n  return state.data.someArray.map(x => {\n    return { 'Age__c': x.age, 'Name': x.name }\n  })\n});\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"bulkquery"},"bulkQuery"),(0,l.kt)("p",null,"bulkQuery(qs, callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nExecute an SOQL Bulk Query.\nNote that in an event of a query error,\nerror logs will be printed but the operation will not throw the error."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A query string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"A callback to execute once the record is retrieved")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"bulkQuery(state=> `SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`);\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"cleanupstate"},"cleanupState"),(0,l.kt)("p",null,"cleanupState(state) \u21d2 ",(0,l.kt)("code",null,"State"),"\nRemoves unserializable keys from the state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cleanupState(state)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"create"},"create"),(0,l.kt)("p",null,"create(sObject, attrs) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nCreate a new object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sObject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"attrs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'create(\'obj_name\', {\n  attr1: "foo",\n  attr2: "bar"\n})\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"createconnection"},"createConnection"),(0,l.kt)("p",null,"createConnection(state) \u21d2 ",(0,l.kt)("code",null,"State"),"\nCreates a connection."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State")),(0,l.kt)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"createConnection(state)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"createif"},"createIf"),(0,l.kt)("p",null,"createIf(logical, sObject, attrs) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nCreate a new object if conditions are met."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logical"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"a logical statement that will be evaluated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sObject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"attrs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'createIf(true, \'obj_name\', {\n  attr1: "foo",\n  attr2: "bar"\n})\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"describe"},"describe"),(0,l.kt)("p",null,"describe(sObject) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nOutputs basic information about an sObject to ",(0,l.kt)("inlineCode",{parentName:"p"},"STDOUT"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sObject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"API name of the sObject.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"describe('obj_name')\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"describeall"},"describeAll"),(0,l.kt)("p",null,"describeAll() \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nOutputs basic information about available sObjects."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"describeAll()\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"destroy"},"destroy"),(0,l.kt)("p",null,"destroy(sObject, attrs, options) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nDelete records of an object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sObject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"attrs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Array of IDs of records to delete.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Options for the destroy delete operation.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"destroy('obj_name', [\n '0060n00000JQWHYAA5',\n '0090n00000JQEWHYAA5\n], { failOnError: true })\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"execute"},"execute"),(0,l.kt)("p",null,"execute(operations) \u21d2 ",(0,l.kt)("code",null,"State"),"\nExecutes an operation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Operation")),(0,l.kt)("td",{parentName:"tr",align:null},"Operations")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"login"},"login"),(0,l.kt)("p",null,"login(state) \u21d2 ",(0,l.kt)("code",null,"State"),"\nPerforms a login."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State")),(0,l.kt)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"login(state)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"query"},"query"),(0,l.kt)("p",null,"query(qs) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nExecute an SOQL query.\nNote that in an event of a query error,\nerror logs will be printed but the operation will not throw the error."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"qs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"A query string.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"query(`SELECT Id FROM Patient__c WHERE Health_ID__c = '${state.data.field1}'`);\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"reference"),(0,l.kt)("p",null,"reference(position) \u21d2 ",(0,l.kt)("code",null,"State"),"\nGet a reference ID by an index."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Position for references array.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"reference(0)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"relationship"},"relationship"),(0,l.kt)("p",null,"relationship(relationshipName, externalId, dataSource) \u21d2 ",(0,l.kt)("code",null,"object"),"\nAdds a lookup relation or 'dome insert' to a record."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"relationshipName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"__r")," relationship field on the record.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Salesforce ExternalID field.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"resolvable source.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Data Sourced Value:\n relationship("relationship_name__r", "externalID on related object", dataSource("path"))\nFixed Value:\n relationship("relationship_name__r", "externalID on related object", "hello world")\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"retrieve"},"retrieve"),(0,l.kt)("p",null,"retrieve(sObject, id, callback) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nRetrieves a Salesforce sObject(s)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sObject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"The sObject to retrieve")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"The id of the record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"A callback to execute once the record is retrieved")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"retrieve('ContentVersion', '0684K0000020Au7QAE/VersionData');\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"steps"},"steps"),(0,l.kt)("p",null,"steps() \u21d2 ",(0,l.kt)("code",null,"Array"),"\nFlattens an array of operations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"steps(\n  createIf(params),\n  update(params)\n)\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"update"},"update"),(0,l.kt)("p",null,"update(sObject, attrs) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nUpdate an object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sObject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"attrs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'update(\'obj_name\', {\n  attr1: "foo",\n  attr2: "bar"\n})\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"upsert"},"upsert"),(0,l.kt)("p",null,"upsert(sObject, externalId, attrs) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nUpsert an object."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Magic"),": sObject - $.children","[?(!@.meta.system)]",".name",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Magic"),": externalId - $.children",'[?(@.name=="{{args.sObject}}")]',".children","[?(@.meta.externalId)]",".name",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Magic"),": attrs - $.children",'[?(@.name=="{{args.sObject}}")]',".children","[?(!@.meta.externalId)]","  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sObject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"attrs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsert('obj_name', 'ext_id', {\n  attr1: \"foo\",\n  attr2: \"bar\"\n})\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"upsertif"},"upsertIf"),(0,l.kt)("p",null,"upsertIf(logical, sObject, externalId, attrs) \u21d2 ",(0,l.kt)("code",null,"Operation"),"\nUpsert if conditions are met."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logical"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"a logical statement that will be evaluated.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sObject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"API name of the sObject.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"externalId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"String")),(0,l.kt)("td",{parentName:"tr",align:null},"ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"attrs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"Field attributes for the new object.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"upsertIf(true, 'obj_name', 'ext_id', {\n  attr1: \"foo\",\n  attr2: \"bar\"\n})\n")),(0,l.kt)("hr",null))}s.isMDXComponent=!0}}]);