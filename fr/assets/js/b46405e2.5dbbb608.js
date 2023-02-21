"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[64098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,d=c["".concat(s,".").concat(u)]||c[u]||h[u]||o;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={title:"OpenHIE instantan\xe9"},i=void 0,p={unversionedId:"instant-openhie",id:"instant-openhie",title:"OpenHIE instantan\xe9",description:"Please note that OpenFn/microservice and OpenFn/devtools are being deprecated and replaced by OpenFn/lightning, When lighting is released, it may be used within Instant OpenHIE instead of microservice.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/instant-openhie.md",sourceDirName:".",slug:"/instant-openhie",permalink:"/fr/documentation/instant-openhie",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/instant-openhie.md",tags:[],version:"current",frontMatter:{title:"OpenHIE instantan\xe9"},sidebar:"docs",previous:{title:"Plateforme",permalink:"/fr/documentation/deploy/platform"},next:{title:"Gestion de projet",permalink:"/fr/documentation/manage/platform-mgmt"}},s={},m=[{value:"Aper\xe7u",id:"aper\xe7u",level:2},{value:"Cas d&#39;utilisation pour l&#39;impl\xe9mentation du prototype",id:"cas-dutilisation-pour-limpl\xe9mentation-du-prototype",level:2},{value:"R\xe9cits utilisateur",id:"r\xe9cits-utilisateur",level:3},{value:"Conception de la mise en \u0153uvre",id:"conception-de-la-mise-en-\u0153uvre",level:2},{value:"Explorer l\u2019impl\xe9mentation",id:"explorer-limpl\xe9mentation",level:2},{value:"\xc0 propos de la configuration de l&#39;impl\xe9mentation",id:"\xe0-propos-de-la-configuration-de-limpl\xe9mentation",level:2},{value:"Processus",id:"processus",level:3},{value:"\xc9tapes de configuration du projet",id:"\xe9tapes-de-configuration-du-projet",level:3},{value:"Notes sur l&#39;\xe9criture des t\xe2ches",id:"notes-sur-l\xe9criture-des-t\xe2ches",level:2},{value:"\xc9tapes de d\xe9ploiement du syst\xe8me",id:"\xe9tapes-de-d\xe9ploiement-du-syst\xe8me",level:2}],l={toc:m},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Microservice and devtools are being replaced by Lightning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please note that OpenFn/microservice and OpenFn/devtools are being deprecated and replaced by OpenFn/lightning, When lighting is released, it may be used within Instant OpenHIE instead of microservice.")),(0,r.kt)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,r.kt)("p",null,"In partnership with ",(0,r.kt)("a",{parentName:"p",href:"https://digitalsquare.org/"},"Digital Square")," and ",(0,r.kt)("em",{parentName:"p"},"FCDO COVIDaction"),", ",(0,r.kt)("strong",{parentName:"p"},"OpenFn has been investing in its open source integration toolkit")," to provide robust integration solutions that can connect ",(0,r.kt)("em",{parentName:"p"},"any digital health system")," and be rapidly implemented on any server, in any country, by any organization."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn/microservice"))," is a fully ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," compliant component which can be used to drive workflow, achieve compliance with standards, and integrate components of the ",(0,r.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"OpenHIE stack"),"."),(0,r.kt)("p",null,"We seek to enhance the value of the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," project by developing a package that will include ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," as an integration pathway for connecting with the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE architecture"),"."),(0,r.kt)("p",null,"This package aims to enhance the value of ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," by providing another option for robust information processing, integration, and business process (workflow) automation. When deploying ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE"),", implementers now have the option to include ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," as a component."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," may also be used as a workflow engine to automate complex business logic alongside ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"OpenHIE stack"),". Individual ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs")," in ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn"),", sometimes many in a single microservice deployment, may be used as ",(0,r.kt)("em",{parentName:"p"},"\u201cmediators\u201d")," (",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"see OpenHIE library of existing mediators"),") to quickly transform and map data to the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE architecture"),"."),(0,r.kt)("p",null,"To demonstrate a real-world use case for how ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," might be implemented in the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE architecture"),", we met with several community members to identify key use cases for a reference prototype implementation."),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"demo repo here"),"."),(0,r.kt)("h2",{id:"cas-dutilisation-pour-limpl\xe9mentation-du-prototype"},"Cas d'utilisation pour l'impl\xe9mentation du prototype"),(0,r.kt)("p",null,"We\u2019ve seen that the most common integration use case is that health service delivery providers, especially large community health worker (\u201cCHW\u201d) interventions, need to integrate their data and programming into national eHealth architectures."),(0,r.kt)("h3",{id:"r\xe9cits-utilisateur"},"R\xe9cits utilisateur"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"En tant que responsable de la mise en \u0153uvre de la sant\xe9 communautaire, je souhaite int\xe9grer mon application de gestion de cas CommCare utilis\xe9e par les ASC au registre national des patients, afin de pouvoir d\xe9velopper un dossier de sant\xe9 partag\xe9 et automatiser les pipelines de rapports.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("em",{parentName:"li"},"En tant que prestataire de services de sant\xe9, je souhaite int\xe9grer mon application existante au SIH national, mais je veux appliquer la norme FHIR \xe0 mes donn\xe9es collect\xe9es avant le partage pour adh\xe9rer aux exigences de conformit\xe9 et de rapport.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nous avons donc d\xe9cid\xe9 de cr\xe9er une solution d'int\xe9gration qui d\xe9montre comment les applications ",(0,r.kt)("strong",{parentName:"li"},"ASC")," existantes peuvent \xeatre int\xe9gr\xe9es \xe0 l'infrastructure nationale de sant\xe9 et tirer parti d'un travail simple sur ",(0,r.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," en tant que m\xe9diateur ",(0,r.kt)("a",{parentName:"li",href:"http://openhim.org/mediator-library/"})," pour appliquer la norme de donn\xe9es FHIR ",(0,r.kt)("a",{parentName:"li",href:"https://fhir.org/"})," et d'autres manipulations de donn\xe9es n\xe9cessaires pour s'int\xe9grer \xe0 ",(0,r.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),".")),(0,r.kt)("h2",{id:"conception-de-la-mise-en-\u0153uvre"},"Conception de la mise en \u0153uvre"),(0,r.kt)("p",null,"In sum, the prototype sends patient case registration data from mobile data collection apps (",(0,r.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"KoboToolbox"),") to ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice"),". ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," then transforms the data and ensures that it adheres to the ",(0,r.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patient")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"encounter")," data standards, before sending it onwards to a ",(0,r.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR channel")," in the ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),". ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," is used as a ","_","\u201cchannel\u201d","_"," here for the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE architecture")," to validate requests and forward them onto other systems in the ",(0,r.kt)("strong",{parentName:"p"},"national eHealth architecture"),". In this case, we forward the case data onwards to register the patients in a ",(0,r.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR")," server."),(0,r.kt)("p",null,"This implementation design was determined to be the highest value/most in-demand because it leverages the core functionality of ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," (providing a reverse proxy and generating an audit trail) without requiring integrators to build a new ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"mediator\u2014a")," process that is more complex than configuring a ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"job")," within an ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn project"),"."),(0,r.kt)("p",null,"This prototype includes the following components:"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," instance can be spun up which contains ",(0,r.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),", ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", and a single ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," deployment (a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," file, exported from ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn/platform"),") with 2 different ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs"),". When data is forwarded to ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," from two distinct form submissions on ",(0,r.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),", it is processed and creates ",(0,r.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," patient resources via ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," and ",(0,r.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),". We\u2019ve opted for a single ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," \u201cproject\u201d with two slightly different ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs")," and ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"},"triggers")," to highlight the versatility of ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn projects"),"."),(0,r.kt)("h2",{id:"explorer-limpl\xe9mentation"},"Explorer l\u2019impl\xe9mentation"),(0,r.kt)("p",null,"Currently, there are two different ways to explore this demo. The first (the more traditional ",(0,r.kt)("em",{parentName:"p"},"\u201cInstant\u201d")," way) is by ",(0,r.kt)("strong",{parentName:"p"},"cloning the OpenFn/instant-demo repo"),". Once inside, users type ",(0,r.kt)("em",{parentName:"p"},"\u201cyarn setup\u201d")," to get everything up and running. Running ",(0,r.kt)("em",{parentName:"p"},"\u201cyarn test\u201d")," will then demonstrate the ",(0,r.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),"/",(0,r.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," to ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," to ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," to ",(0,r.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," flows."),(0,r.kt)("p",null,"They can explore the various ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs"),", sample payloads, endpoints, and post data to the various endpoints using either the data forwarding settings in ",(0,r.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," or via ",(0,r.kt)("a",{parentName:"p",href:"https://curl.se/"},"CURL")," (or their HTTP request agent of choice.)"),(0,r.kt)("p",null,"Once running, users can see how standard ",(0,r.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," submissions are transformed by the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," to adhere to the ",(0,r.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," specifications for ",(0,r.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patients")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"encounters"),", and then that those subsequent resources are created on the ",(0,r.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR")," server, via a channel on the ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),"."),(0,r.kt)("p",null,"The second (slightly less conventional way) to explore the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"demo"),", is via ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org"),". Since ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn projects")," can be run in ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice")," or on the ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"hosted platform"),", we\u2019ve provided a project instance at ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org")," that allows users to explore the configuration required to incorporate ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," in an ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," project. There are three ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/projects/p5pqx3/jobs"},"jobs")," which can be accessed with a ",(0,r.kt)("strong",{parentName:"p"},"demo user")," with ",(0,r.kt)("em",{parentName:"p"},"username: ",(0,r.kt)("a",{parentName:"em",href:"mailto:demo@openfn.org"},"demo@openfn.org"))," and ",(0,r.kt)("em",{parentName:"p"},"password:guest123"),"."),(0,r.kt)("p",null,"The three jobs will show:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Comment une soumission de ",(0,r.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," est transform\xe9e et envoy\xe9e \xe0 ",(0,r.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," ;"),(0,r.kt)("li",{parentName:"ul"},"Comment une soumission ",(0,r.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo")," est transform\xe9e et envoy\xe9e \xe0 ",(0,r.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," ;"),(0,r.kt)("li",{parentName:"ul"},"Et \xe0 quoi ressemblent les ressources finales qui seraient envoy\xe9es \xe0 ",(0,r.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),".")),(0,r.kt)("p",null,"It\u2019s our hope that this will provide a valuable entry-point for ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," configuration with ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservices"),"."),(0,r.kt)("h2",{id:"\xe0-propos-de-la-configuration-de-limpl\xe9mentation"},"\xc0 propos de la configuration de l'impl\xe9mentation"),(0,r.kt)("h3",{id:"processus"},"Processus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nous avons rencontr\xe9 des ",(0,r.kt)("a",{parentName:"p",href:"https://ohie.org/tag/community/"},"membres de la communaut\xe9 OpenHIE")," pour comprendre les cas d'utilisation, et avec ",(0,r.kt)("a",{parentName:"p",href:"https://www.jembi.org/"},"Jembi Health Systems")," pour en savoir plus sur les paquets, les sp\xe9cifications et les exigences de conformit\xe9 ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\xc9chantillon de sources de donn\xe9es identifi\xe9es (vraies formulaires d'enregistrement de cas",(0,r.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,r.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo - voic ici)")," que nous pourrions utiliser pour envoyer des donn\xe9es \xe0 l'",(0,r.kt)("strong",{parentName:"p"},"'architecture nationale de cybersant\xe9"),". Voici un ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/commcare_sample.json"},"exemple de charge utile de soumission de CommCare")," Voici un ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/koboCaseRegistration.json"},"exemple de charge utile de soumission de Kobo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"R\xe9vision de la documentation ",(0,r.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR-HL7")," pour d\xe9terminer les exigences des normes de donn\xe9es pour les donn\xe9es des patients et les donn\xe9es de rencontre. Voir ",(0,r.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"la sp\xe9cification du patient FHIR")," et ",(0,r.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"la sp\xe9cification de rencontre FHIR"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\xc9valuation des capacit\xe9s",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," vs. ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," pour d\xe9terminer comment utiliser. Nous avons d\xe9termin\xe9 que l'utilisation d'un ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"canal OpenHIM")," tirera parti de la fonctionnalit\xe9 d'audit principale d'",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", mais pas nous obliger \xe0 cr\xe9er un ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"nouveau m\xe9diateur"),"."))),(0,r.kt)("h3",{id:"\xe9tapes-de-configuration-du-projet"},"\xc9tapes de configuration du projet"),(0,r.kt)("p",null,"There are two ways to set up a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," to run as a ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice"),". The first is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org platform"),", and the second way is to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),"."),(0,r.kt)("p",null,"These two methods are detailed below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configurer un projet en utilisant la plate-forme OpenFn.org")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cette option permet aux organisations d\u2019exploiter les fonctionnalit\xe9s int\xe9gr\xe9es d'",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org")," pour faciliter la configuration du ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projet")," , ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"l'\xe9criture de t\xe2ches")," et la gestion du code source.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Le fichier ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"projet.yaml")," g\xe9n\xe9r\xe9 \xe0 partir de cette configuration de projet sera alors utilis\xe9 comme structure de base pour l' ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Les \xe9tapes pour configurer le projet ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," en utilisant la ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"plate-forme OpenFn.org")," sont les suivantes :"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A. Ajoutez ",(0,r.kt)("a",{parentName:"strong",href:"/documentation/build/credentials/"},"les identifiants")," au projet qui seront utilis\xe9es pour connecter le Microservice OpenFn \xe0 OpenHIM.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"C'est \xe9galement l'occasion d'ajouter des ",(0,r.kt)("a",{parentName:"li",href:"/documentation/build/credentials/"},"identifiants ")," qu' ",(0,r.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice")," peut utiliser pour se connecter aux syst\xe8mes sources (comme ",(0,r.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," ou ",(0,r.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"KoBotoolbox"),").")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"B. Ajouter les ",(0,r.kt)("a",{parentName:"strong",href:"/documentation/build/triggers/"},"d\xe9clencheurs")," au projet qui serontutilis\xe9s par ",(0,r.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn Microservice")," pour faire correspondre les charges des syst\xe8mes sources aux ",(0,r.kt)("a",{parentName:"strong",href:"/documentation/build/jobs/"},"OpenFn Microservice Jobs"),".")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Notez que le ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice")," est configur\xe9 pour ex\xe9cuter une t\xe2che ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"})," en fonction de la forme de la charge utile entrante.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Par exemple, un d\xe9clencheur ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"})," peut \xeatre configur\xe9 pour correspondre aux charges utiles, \xe0 partir de ",(0,r.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", qui contiennent le message ",(0,r.kt)("inlineCode",{parentName:"p"},"{\xab @name \xbb : \xab Inscrire un nouveau patient \xbb}")," dans le corps de leur message.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Une ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2che")," donn\xe9e correspondra alors \xe0 ce message, et sera utilis\xe9 par le ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice OpenFn")," pour (a) cr\xe9er un une charge utile dans le ",(0,r.kt)("a",{parentName:"p",href:"https://fhir.org/"},"standard FHIR")," contenant une",(0,r.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"ressource de rencontre")," et (b) envoyer la charge utile",(0,r.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"standard FHIR ")," \xe0 ",(0,r.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," avec des instructions pour le charger sur ",(0,r.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),"."))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"C. Exporter le fichier ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," en utilisant l'assistant d'exportation d'",(0,r.kt)("a",{parentName:"strong",href:"https://openfn.org/"},"OpenFn.org"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Le fichier ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"YAML g\xe9n\xe9r\xe9")," sera ensuite utilis\xe9 par ",(0,r.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice")," pour ex\xe9cuter les ",(0,r.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"t\xe2ches")," pour les charges utiles correspondantes."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Configurer un projet en utilisant ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"))),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cette option permet aux organisations de configurer les fichiers source du",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," et de l' ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"expression de t\xe2che"),", pour ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"les projects OpenFn Microservice"),", sans utiliser la",(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"plateforme OpenFn"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Avec cette option, il est recommand\xe9 aux organisations d'utiliser des outils et des plates-formes de gestion des versions de source tels que ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"github")," pour g\xe9rer le code / les fichiers source du",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projet")," et l'",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"expression de travail"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pour configurer le projet ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," \xe0 l'aide d'",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),", cr\xe9ez un dossier local ou un d\xe9p\xf4t github pour h\xe9berger vos fichiers de configuration de projet. \xc0 l'int\xe9rieur de ce dossier, on effectuerait alors les actions suivantes :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9er un fichier identifiant.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ajouter des identifiants comme indiqu\xe9 dans l'",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml#L165-L167"},"\xe9chantillon d'authentification ici"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez les ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"}," expressions de travail"),". Dans ce cas, on cr\xe9erait les expressions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"CommCare-to-OpenHIM")," et ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"Kobo-to-OpenHIM")," comme indiqu\xe9 dans les expressions de d\xe9monstration ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"ici"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ex\xe9cutez l' ",(0,r.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI")," pour configurer le reste du projet. La CLI",(0,r.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"})," assemblera le fichier ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," \xe0 partir des diff\xe9rents artefacts tels que fournis. Voir les \xe9tapes d\xe9taill\xe9es dans le site de documentation ",(0,r.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"ici"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"La derni\xe8re \xe9tape de l'invite ",(0,r.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"CLI")," permettra d'exporter le ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"fichier du project YAML"),", qui sera ensuite utilis\xe9 par ",(0,r.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice OpenFn")," pour ex\xe9cuter les ",(0,r.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2ches")," pour les charges utiles correspondantes."))))))),(0,r.kt)("h2",{id:"notes-sur-l\xe9criture-des-t\xe2ches"},"Notes sur l'\xe9criture des t\xe2ches"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," provides two ways of writing jobs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Utiliser le ",(0,r.kt)("a",{parentName:"li",href:"/documentation/jobs/job-studio/"},"Job Studio d'OpenFn.org")," comme d\xe9taill\xe9 dans le site de documentation ",(0,r.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"ici"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Avec cette option, si vous modifiez une ",(0,r.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"expression de travail"),"existante, une devrait utiliser le ",(0,r.kt)("a",{parentName:"li",href:"https://openfn.org/"},"service d'exportation de projet OpenFn.org")," pour r\xe9g\xe9n\xe9rer le fichier du ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Projet YAML")," pour l'",(0,r.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),"."))),(0,r.kt)("li",{parentName:"ul"},"En utilisant ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cette option permet aussi aux organisations d'\xe9crire des ",(0,r.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"expressions de travail")," sans utiliser le ",(0,r.kt)("a",{parentName:"li",href:"https://openfn.org/"},"service h\xe9berg\xe9 d'OpenFn"),". Voir la documentation d\xe9taill\xe9e ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"ici")),(0,r.kt)("li",{parentName:"ul"},"Avec cette option, si vous modifiez une ",(0,r.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"expression de travail"),"existante, on s'attend \xe0 ce que vous ex\xe9cutiez l' ",(0,r.kt)("a",{parentName:"li",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI"),", pour r\xe9g\xe9n\xe9rer le ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"fichier du Projet YAML")," pour l'",(0,r.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),".")))),(0,r.kt)("h2",{id:"\xe9tapes-de-d\xe9ploiement-du-syst\xe8me"},"\xc9tapes de d\xe9ploiement du syst\xe8me"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," fournit un script de d\xe9ploiement automatis\xe9 qui permet aux administrateurs syst\xe8me de configurer et d'ex\xe9cuter ",(0,r.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),"."),(0,r.kt)("li",{parentName:"ul"},"Par exemple, pour ex\xe9cuter le ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"Microservice de d\xe9monstration instantan\xe9e"),", les \xe9tapes suivantes sont recommand\xe9es :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Cloner ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"le d\xe9p\xf4t OpenFn/Instant-demo")),(0,r.kt)("li",{parentName:"ul"},"\xc9craser le fichier ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"exemple \xab project.yaml \xbb ")," avec votre nouveau ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"fichier project.yaml "),", g\xe9n\xe9r\xe9 ou utilisez le",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"fichier YAML")," existant pour d\xe9ployer le projet de d\xe9monstration. Ex\xe9cutez la commande de configuration comme d\xe9crite dans la documentation ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"ici")),(0,r.kt)("li",{parentName:"ul"},"V\xe9rifiez que le syst\xe8me fonctionne en ",(0,r.kt)("a",{parentName:"li",href:"https://curl.se/"},"roulant")," les donn\xe9es (ou en soumettant des formulaires le ",(0,r.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare"),"/",(0,r.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo"),") faisant correspondre leurs ",(0,r.kt)("a",{parentName:"li",href:"/documentation/build/triggers/"},"d\xe9clencheurs")," au ",(0,r.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"point de terminaison du")," microservice",(0,r.kt)("inlineCode",{parentName:"li"},"(localhost:4001/inbox)")," et v\xe9rifiant que les ressources sont cr\xe9\xe9es dans ",(0,r.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),"."),(0,r.kt)("li",{parentName:"ul"},"Notez comment ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/test.js"},"le fichier test.js")," g\xe8re cette v\xe9rification avec ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"l'\xe9chantillon du project.yaml"))))))}h.isMDXComponent=!0}}]);