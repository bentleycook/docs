"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"PostgreSQL"},i=void 0,s={unversionedId:"apps/postgresql",id:"apps/postgresql",title:"PostgreSQL",description:"Overview",source:"@site/docs/apps/postgresql.md",sourceDirName:"apps",slug:"/apps/postgresql",permalink:"/documentation/apps/postgresql",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/postgresql.md",tags:[],version:"current",frontMatter:{title:"PostgreSQL"},sidebar:"docs",previous:{title:"Ona.io",permalink:"/documentation/apps/ona"},next:{title:"Power BI",permalink:"/documentation/apps/powerbi"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Integration Use Cases",id:"integration-use-cases",level:2},{value:"Integration Options",id:"integration-options",level:2},{value:"Authentication:",id:"authentication",level:3},{value:"Sample Job Expressions:",id:"sample-job-expressions",level:3},{value:"Integration tips",id:"integration-tips",level:3},{value:"Common Errors",id:"common-errors",level:2},{value:"OpenFn Adaptors",id:"openfn-adaptors",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"PostgreSQL is a free and open-source relational database management system. It can be accessed and manipulated using SQL to extract or load data. "),(0,r.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,r.kt)("p",null,"PostgreSQL databases are great for those looking to configure their own database and can be used to feed into reports and analytics."),(0,r.kt)("p",null,"Example user stories:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As an NGO program manager, I would like to be able to automatically see cases registered in our case-management system in a Postgres database which is connected to a visualization dashboard. "),(0,r.kt)("li",{parentName:"ul"},"As a fundraiser at an NGO, I would like to see all consumption data in Postgres so I can better monitor activities in real-time.")),(0,r.kt)("h2",{id:"integration-options"},"Integration Options"),(0,r.kt)("p",null,"OpenFn adaptors (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-postgresql"},"language-postgresql"),") provide direct database connections for accessing data and executing SQL and standard database operations."),(0,r.kt)("h3",{id:"authentication"},"Authentication:"),(0,r.kt)("p",null,"To create the direct DB connection, you'll need to specify the following credential inputs. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configuration": {\n      "host": "some-host-url.compute-1.amazonaws.com",\n      "port": "5432",\n      "database": "testdatabase",\n      "user": "myusername",\n      "password": "testing123",\n      "ssl": true,\n      "allowSelfSignedCert": true\n    }\n}\n')),(0,r.kt)("p",null,"(This authentication step is handled in the OpenFn adaptor.)"),(0,r.kt)("h3",{id:"sample-job-expressions"},"Sample Job Expressions:"),(0,r.kt)("p",null,"This function creates a table ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," in a database from a given array of columns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insertTable('users', state =>\n  state.data.map(column => ({\n    name: column.name,\n    type: column.type,\n    required: true, // optional\n    unique: false, // optional - set to true for unique constraint\n  }))\n);\n")),(0,r.kt)("p",null,"This function is used to insert a single record in a Postgres database. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"insert(\n  'users',\n  {\n    email: 'antony@gmail.com',\n    first_name: 'Antony',\n    inserted_at: '2020-08-27 00:00:00',\n    updated_at: '2020-08-27 00:00:00',\n  },\n  { setNull: [\"''\", \"'undefined'\"], writeSql: true, logValues: true }\n);\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/library"},"Job Library")," for more sample jobs."),(0,r.kt)("h3",{id:"integration-tips"},"Integration tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Keys"),": Make sure the primary key and foreign keys for each table are known documented in the mapping specifications "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unique identifiers"),': To avoid the "ON CONFLICT DO UPDATE command cannot affect row a second time" error discussed below, spend time thinking through which field or combination of fields makes each record unique using the sample data recieved '),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testing"),": Create a robust test suite which outlines which tables should be updated by each job run\n",(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/80456839/150614749-6d667df9-495c-4153-b5d6-48632e3ba05a.png",alt:"image"})," ")),(0,r.kt)("h2",{id:"common-errors"},"Common Errors"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Connection TIMEOUT")," - This error usually means the destination system is offline or inaccessible to your user. Contact the destination system administrator. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"error: value too long for type character varying(16)")," & ",(0,r.kt)("inlineCode",{parentName:"li"},'error: null value in column "household_id" violates not-null constraint')," - Both of these errors highlight a mismatch in the data you're attempting to add to the database and what it's configured to accept. In this case, you are sending more than 16 characters for a field that only accepts up to 16 characters AND sending \"null\" for a required field in that table. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"error: ON CONFLICT DO UPDATE command cannot affect row a second time"),"- This error means that there are two rows with the same value for unique fields. Review the sample data and mapping specifications to decide what makes a record unique in that table. ")),(0,r.kt)("h2",{id:"openfn-adaptors"},"OpenFn Adaptors"),(0,r.kt)("p",null,"OpenFn implementations can leverage the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-postgresql"},(0,r.kt)("inlineCode",{parentName:"a"},"PostgreSQL"))," adaptor. "),(0,r.kt)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Wildlife Conservation Society Kobo < > Database: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/consosci"},"https://github.com/OpenFn/consosci")),(0,r.kt)("li",{parentName:"ol"},"Cambodia Primero < > ONA Database: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/primero-ona-dashboard"},"https://github.com/OpenFn/primero-ona-dashboard"))))}u.isMDXComponent=!0}}]);