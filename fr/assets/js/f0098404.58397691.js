(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[715],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14237:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"2. Upsert Intervention",sidebar_label:"2. Upsert Intervention",id:"2. Upsert Intervention-2021-04-08",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},l={unversionedId:"jobs/auto/2. Upsert Intervention-2021-04-08",id:"jobs/auto/2. Upsert Intervention-2021-04-08",isDocsHomePage:!1,title:"2. Upsert Intervention",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/2. Upsert Intervention-2021-04-08.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/2. Upsert Intervention-2021-04-08",permalink:"/fr/library/jobs/auto/2. Upsert Intervention-2021-04-08",version:"current",sidebar_label:"2. Upsert Intervention",sidebarPosition:2,frontMatter:{title:"2. Upsert Intervention",sidebar_label:"2. Upsert Intervention",id:"2. Upsert Intervention-2021-04-08",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},sidebar:"library",previous:{title:"1. Create Payment in SF",permalink:"/fr/library/jobs/auto/1. Create Payment in SF-2018-09-03"},next:{title:"513_Enroll_Household_in_SF",permalink:"/fr/library/jobs/auto/513_Enroll_Household_in_SF-2019-09-17"}},s=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: 2. Upsert Intervention"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.0.0"},(0,o.kt)("inlineCode",{parentName:"a"},"v2.0.0"))),(0,o.kt)("li",{parentName:"ul"},"Created about 1 month ago"),(0,o.kt)("li",{parentName:"ul"},"Updated about 1 hour ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"74")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"alterState((state) => {\n  \n  function clean(str) {\n    if (!!str)\n      return str\n        .split('_')\n        .map(word => {\n          let new_word = word.toString().toLowerCase();\n          return new_word.slice(0, 1).toUpperCase() + new_word.slice(1);\n        })\n        .join(' ');\n  }\n  \n  state.data.form.delivery_method = clean(state.data.form.delivery_method);\n  \n  const coachFieldNames = ['Coach_A__r','Coach_B__r','Coach_C__r','Coach_D__r']\n \n  state.data.destinationCoachFields = state.data.form.coaches\n  .split(' ')\n  .reduce(\n    (accumulator, currentValue, currentIndex) => [\n      ...accumulator,\n      (currentIndex < coachFieldNames.length && !!currentValue\n        ? relationship(coachFieldNames[currentIndex], 'CommCare_Ext_ID__c', currentValue)\n        : []),\n    ],\n    []\n  );\n  \n  return state; \n}); \n\nupsert(\n  'Event__c',\n  'CommCare_Ext_ID__c',\n  state=>({\n  ...fields(\n    field('Name', dataValue('form.name_of_intervention')),\n    field('CommCare_Ext_ID__c', dataValue('form.name_of_intervention')),\n    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),\n    field('Grant_Text__c', dataValue('form.grant')),\n    relationship('RecordType', 'Name', 'Intervention'),\n    field('Business_Unit__c', state => {\n      const bu = dataValue('form.business_unit')(state); \n      return bu==='65680f0c4c144b03ad0f86bdc46c1ebc' ? 'GRS Zambia' : \n      bu==='04d98397e28046118fade28ced6b65cb' ? 'GRS Zimbabwe' : \n      bu==='ed125ab19ec34aacab79585e59eb76f4' ? 'GRS Partnerships': undefined ; \n    }),\n    relationship(\n      'Site__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.site')\n    ),\n    relationship(\n      'Venue__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.Venue')\n      \n    ),\n    relationship(\n      'Curriculum__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.curriculum_selection.curriculum')\n    ),\n    field('Delivery_Method__c', dataValue('form.delivery_method')),\n    field('Class_Group_Team__c', dataValue('form.class_grade')),\n    field('Pre_Post_Administered__c', dataValue('form.prepost_administered')),\n    field('Start_Date__c', dataValue('form.intervention_dates.start_date')),\n    field('End_Date__c', dataValue('form.intervention_dates.end_date'))\n  ),\n  ...fields(...state.data.destinationCoachFields)\n  })\n);\n")))}c.isMDXComponent=!0}}]);