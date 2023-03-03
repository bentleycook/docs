"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[63870],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"Create encounter in OpenHIM",sidebar_label:"\ud83d\udcdc Create encounter in OpenHIM",id:"CommCare-FHIR",keywords:["library","job","expression","openhim","dataValue","field","fields"]},i=void 0,l={unversionedId:"library/jobs/auto/CommCare-FHIR",id:"library/jobs/auto/CommCare-FHIR",title:"Create encounter in OpenHIM",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/CommCare-FHIR.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/CommCare-FHIR",permalink:"/fr/adaptors/library/jobs/auto/CommCare-FHIR",draft:!1,tags:[],version:"current",frontMatter:{title:"Create encounter in OpenHIM",sidebar_label:"\ud83d\udcdc Create encounter in OpenHIM",id:"CommCare-FHIR",keywords:["library","job","expression","openhim","dataValue","field","fields"]},sidebar:"adaptors",previous:{title:"Config for openhim",permalink:"/fr/adaptors/packages/openhim-configuration-schema"},next:{title:"openhim changelog",permalink:"/fr/adaptors/packages/openhim-changelog"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\udcdc ",(0,r.kt)("em",null,"This job is an official example from OpenFn.")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Create encounter in OpenHIM"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openhim"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-openhim"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openhim"},(0,r.kt)("inlineCode",{parentName:"a"},"latest"))),(0,r.kt)("li",{parentName:"ul"},"Created date unknown"),(0,r.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"100")," (an ",(0,r.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// CommCare form submission mapped to the FHIR patient encounter standard,\n// submitted by Simon Kelly @ Dimagi.\nencounter(\n  fields(\n    field('resourceType', 'Encounter'),\n    field('status', 'finished'),\n    field('type', function (state) {\n      return [\n        {\n          coding: [\n            {\n              system: 'momconnect:type',\n              code: '8',\n            },\n          ],\n        },\n      ];\n    }),\n    field('contained', function (state) {\n      return [\n        {\n          resourceType: 'Patient',\n          id: 'patient',\n          identifier: [\n            {\n              use: 'official',\n              system: 'momconnect:sanid',\n              value: dataValue('properties.id_number')(state),\n            },\n          ],\n          name: [\n            {\n              use: 'official',\n              family: [dataValue('properties.family_name')(state)],\n              given: [dataValue('properties.given_name')(state)],\n              text: dataValue('properties.given_name')(state).concat(\n                ' ',\n                dataValue('properties.family_name')(state)\n              ),\n            },\n          ],\n          gender: 'female',\n          birthDate: dataValue('properties.dob')(state),\n          telecom: [\n            {\n              system: 'phone',\n              value: dataValue('properties.msisdn')(state),\n            },\n          ],\n          communication: [\n            {\n              language: {\n                coding: [\n                  {\n                    system: 'urn:ietf:bcp:47',\n                    code: dataValue('properties.language_code')(state),\n                  },\n                ],\n              },\n              preferred: true,\n            },\n          ],\n        },\n        {\n          resourceType: 'Observation',\n          id: 'edd',\n          code: {\n            coding: [\n              {\n                system: 'http://loinc.org',\n                code: '11778-8',\n                display: 'Delivery date Estimated',\n              },\n            ],\n          },\n          valueDateTime: dataValue('properties.edd')(state),\n          status: 'preliminary',\n        },\n      ];\n    }),\n    field('patient', function (state) {\n      return {\n        reference: '#patient',\n      };\n    }),\n    field('period', function (state) {\n      return {\n        start: dataValue('properties.visit_date')(state),\n      };\n    }),\n    field('extension', function (state) {\n      return [\n        {\n          url: 'momconnect:mha',\n          valueInteger: 2,\n        },\n        {\n          url: 'momconnect:swt',\n          valueInteger: 3,\n        },\n        {\n          url: 'momconnect:dmsisdn',\n          valueString: '+27831111111',\n        },\n      ];\n    })\n  )\n);\n\n")))}m.isMDXComponent=!0}}]);