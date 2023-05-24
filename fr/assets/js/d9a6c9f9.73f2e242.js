"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[26090],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),s=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(a),k=r,m=c["".concat(i,".").concat(k)]||c[k]||d[k]||l;return a?n.createElement(m,p(p({ref:e},u),{},{components:a})):n.createElement(m,p({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[c]="string"==typeof t?t:r,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},58799:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"sftp@0.7.3",id:"sftp-docs",keywords:["adaptor","sftp","getCSV","getJSON","list","normalizeCSVarray","putCSV"]},p=void 0,o={unversionedId:"packages/sftp-docs",id:"packages/sftp-docs",title:"sftp@0.7.3",description:"Functions",source:"@site/adaptors/packages/sftp-docs.md",sourceDirName:"packages",slug:"/packages/sftp-docs",permalink:"/fr/adaptors/packages/sftp-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"sftp@0.7.3",id:"sftp-docs",keywords:["adaptor","sftp","getCSV","getJSON","list","normalizeCSVarray","putCSV"]},sidebar:"adaptors",previous:{title:"salesforce developer readme",permalink:"/fr/adaptors/packages/salesforce-readme"},next:{title:"Config for sftp",permalink:"/fr/adaptors/packages/sftp-configuration-schema"}},i={},s=[{value:"Functions",id:"functions",level:2},{value:"getCSV",id:"getcsv",level:2},{value:"getJSON",id:"getjson",level:2},{value:"list",id:"list",level:2},{value:"normalizeCSVarray",id:"normalizecsvarray",level:2},{value:"putCSV",id:"putcsv",level:2}],u={toc:s},c="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getCSV"},"getCSV(filePath, [parsingOptions])")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getJSON"},"getJSON(filePath, encoding)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#list"},"list(dirPath)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#normalizeCSVarray"},"normalizeCSVarray(options, callback)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#putCSV"},"putCSV(localFilePath, remoteFilePath, parsingOptions)"))),(0,r.kt)("h2",{id:"getcsv"},"getCSV"),(0,r.kt)("p",null,"getCSV(filePath, ","[parsingOptions]",") \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nGet a CSV and return a JSON array of strings for each item separated by the delimiter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[parsingOptions]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional. ",(0,r.kt)("inlineCode",{parentName:"td"},"parsingOptions")," Parsing options which can be passed to convert csv to json See more ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/Keyang/node-csvtojson#parameters"},"on csvtojson docs"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getCSV(\n  '/some/path/to_file.csv',\n  {delimiter: \";\", flatKeys: true }\n);\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getjson"},"getJSON"),(0,r.kt)("p",null,"getJSON(filePath, encoding) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nFetch a json file from an FTP server"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encoding"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Character encoding for the json")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getJSON(\n  '/path/To/File',\n  'utf8',\n);\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"list"},"list"),(0,r.kt)("p",null,"list(dirPath) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nList files present in a directory"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dirPath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"list('/some/path/')\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"normalizecsvarray"},"normalizeCSVarray"),(0,r.kt)("p",null,"normalizeCSVarray(options, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nConvert JSON array of strings into a normalized object"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"options")),(0,r.kt)("td",{parentName:"tr",align:null},"Options passed to csvtojson parser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"callback")),(0,r.kt)("td",{parentName:"tr",align:null},"Options passed to csvtojson parser")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"normalizeCSVarray({ delimiter: ';', noheader: true });\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"putcsv"},"putCSV"),(0,r.kt)("p",null,"putCSV(localFilePath, remoteFilePath, parsingOptions) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nConvert JSON to CSV and upload to an FTP server"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"localFilePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Data source for data to copy to the remote server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoteFilePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the remote file to be created on the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parsingOptions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Options which can be passed to adjust the read and write stream used in sending the data to the remote server")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"putCSV(\n  '/some/path/to_local_file.csv',\n  '/some/path/to_remove_file.csv',\n  { delimiter: ';', noheader: true }\n);\n")),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);