"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3884],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34760:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Create Intervention",sidebar_label:"\u2728 Create Intervention",id:"Create-Intervention-2021-04-08",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},s=void 0,c={unversionedId:"jobs/auto/Create-Intervention-2021-04-08",id:"jobs/auto/Create-Intervention-2021-04-08",title:"Create Intervention",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Create-Intervention-2021-04-08.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Create-Intervention-2021-04-08",permalink:"/fr/library/jobs/auto/Create-Intervention-2021-04-08",draft:!1,tags:[],version:"current",frontMatter:{title:"Create Intervention",sidebar_label:"\u2728 Create Intervention",id:"Create-Intervention-2021-04-08",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","join","map","relationship","upsert"]},sidebar:"library",previous:{title:"Create contact (sf)",permalink:"/fr/library/jobs/auto/Create-contact-sf-2021-03-01"},next:{title:"Create Person in SF",permalink:"/fr/library/jobs/auto/Create-Person-in-SF-2019-02-25"}},u={},d=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Create Intervention"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,o.kt)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,o.kt)("li",{parentName:"ul"},"Created over 1 year ago"),(0,o.kt)("li",{parentName:"ul"},"Updated 3 months ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"88")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"alterState((state) => {\n  \n  function clean(str) {\n    if (!!str)\n      return str\n        .split('_')\n        .map(word => {\n          let new_word = word.toString().toLowerCase();\n          return new_word.slice(0, 1).toUpperCase() + new_word.slice(1);\n        })\n        .join(' ');\n  }\n  \n  state.data.form.delivery_method = clean(state.data.form.delivery_method);\n  \n  const coachFieldNames = ['Coach_A__r','Coach_B__r','Coach_C__r','Coach_D__r']\n \n  state.data.destinationCoachFields = state.data.form.coaches\n  .split(' ')\n  .reduce(\n    (accumulator, currentValue, currentIndex) => [\n      ...accumulator,\n      (currentIndex < coachFieldNames.length && !!currentValue\n        ? relationship(coachFieldNames[currentIndex], 'CommCare_Ext_ID__c', currentValue)\n        : []),\n    ],\n    []\n  );\n  \n  return state; \n}); \n\nupsert(\n  'Event__c',\n  'CommCare_Case_ID__c',\n  state=>({\n  ...fields(\n    field('Name', dataValue('form.name_of_intervention')),\n    field('CommCare_Ext_ID__c', state => {\n      return dataValue('form.name_of_intervention')(state).replace(/\\//gi, ''); \n    }),\n    field('CommCare_Case_ID__c', dataValue('form.case.@case_id')),\n    field('Grant_Text__c', dataValue('form.grant')),\n    relationship('RecordType', 'Name', 'Intervention'),\n    field('Business_Unit__c', state => {\n      const bu = dataValue('form.business_unit')(state); \n      return bu==='65680f0c4c144b03ad0f86bdc46c1ebc' ? 'GRS Zambia' : \n      bu==='04d98397e28046118fade28ced6b65cb' ? 'GRS Zimbabwe' : \n      bu==='ed125ab19ec34aacab79585e59eb76f4' ? 'GRS Partnerships': undefined ; \n    }),\n    relationship(\n      'Site__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.site')\n    ),\n    relationship(\n      'Venue__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.Venue')\n      \n    ),\n    relationship(\n      'Curriculum__r',\n      'CommCare_Ext_ID__c',\n      dataValue('form.curriculum_selection.curriculum')\n    ),\n    field('Delivery_Method__c', dataValue('form.delivery_method')),\n    field('Class_Group_Team__c', dataValue('form.class_grade')),\n    field('Pre_Post_Administered__c', dataValue('form.prepost_administered')),\n    field('Start_Date__c', dataValue('form.intervention_dates.start_date')),\n    field('End_Date__c', dataValue('form.intervention_dates.end_date'))\n  ),\n  ...fields(...state.data.destinationCoachFields)\n  })\n);\n")))}f.isMDXComponent=!0}}]);