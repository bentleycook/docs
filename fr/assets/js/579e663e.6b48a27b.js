"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[63369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const s={title:"Sources de donn\xe9es g\xe9n\xe9riques",sidebar_label:"Sources g\xe9n\xe9riques"},i=void 0,u={unversionedId:"source-apps",id:"source-apps",title:"Sources de donn\xe9es g\xe9n\xe9riques",description:"Configuration standard du webhook",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/source-apps.md",sourceDirName:".",slug:"/source-apps",permalink:"/fr/documentation/source-apps",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/source-apps.md",tags:[],version:"current",frontMatter:{title:"Sources de donn\xe9es g\xe9n\xe9riques",sidebar_label:"Sources g\xe9n\xe9riques"},sidebar:"docs",previous:{title:"Votre Inbox",permalink:"/fr/documentation/build/inbox"},next:{title:"CLI (v2, beta)",permalink:"/fr/documentation/cli"}},a={},l=[{value:"Configuration standard du webhook",id:"configuration-standard-du-webhook",level:2},{value:"Comment les webhooks permettent une int\xe9gration en temps r\xe9el",id:"comment-les-webhooks-permettent-une-int\xe9gration-en-temps-r\xe9el",level:2},{value:"Vous fournissez une interface utilisateur pour votre webhook ?",id:"vous-fournissez-une-interface-utilisateur-pour-votre-webhook-",level:2},{value:"Quand envoyer ?",id:"quand-envoyer-",level:2},{value:"Quand envoyer ?",id:"quand-envoyer--1",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuration-standard-du-webhook"},"Configuration standard du webhook"),(0,o.kt)("p",null,"Cette section d\xe9crit comment activer les notifications push \xe0 partir des applications sources s\xe9lectionn\xe9es ou comment configurer les t\xe2ches d'extraction pour extraire les donn\xe9es de ces sources. Si vous ne voyez pas le v\xf4tre dans la liste alphab\xe9tique ci-dessous, n'h\xe9sitez pas \xe0 l'ajouter avec une demande."),(0,o.kt)("p",null,"Chaque projet OpenFn a une adresse unique ",(0,o.kt)("strong",{parentName:"p"},"Inbox URL ")," qui peut \xeatre utilis\xe9e comme point de terminaison pour n'importe quel webhook JSON. Pour configurer une source de donn\xe9es, configurez cette source pour faire un POST via HTTPS \xe0 votre Inbox URL. Voir ",(0,o.kt)("a",{parentName:"p",href:"/fr/documentation/build/inbox"},"votre inbox"),"."),(0,o.kt)("p",null,'Pour connecter une application \xe0 des webhooks JSON standard, copiez votre inbox URL \xe0 partir de la page "Inbox" ou de votre \xe9cran "Project Settings" et utilisez-la comme URL de destination sur votre application source. Sauf si vous l\'avez sp\xe9cifiquement configur\xe9 sur la page "Acces& Security", aucune authentification n\'est requise.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"N.B. : Il ne s'agit en aucun cas d'une liste exhaustive."))," Il s'agit simplement d'une liste de sources communes ajout\xe9es par des contributeurs externes. N'oubliez pas que tout ce qui a une API REST ou un service de notification bas\xe9 sur JSON peut \xeatre utilis\xe9 avec OpenFn."),(0,o.kt)("h2",{id:"comment-les-webhooks-permettent-une-int\xe9gration-en-temps-r\xe9el"},"Comment les webhooks permettent une int\xe9gration en temps r\xe9el"),(0,o.kt)("p",null,"Les services webhooks (parfois appel\xe9s \xab services REST \xbb) sont des services que vos utilisateurs peuvent configurer sur votre application pour publier des messages sur d'autres points de terminaison REST. L'exemple le plus courant que nous rencontrerons est un formulaire, une soumission, ou un service de transfert de cas qui enverra une copie d'une soumission \xe0 une API externe."),(0,o.kt)("h2",{id:"vous-fournissez-une-interface-utilisateur-pour-votre-webhook-"},"Vous fournissez une interface utilisateur pour votre webhook ?"),(0,o.kt)("p",null,"Il s'agit probablement de la partie la plus interactive de votre API pour l'utilisateur final, et vous souhaiterez probablement une fonctionnalit\xe9 dans votre interface utilisateur qui leur permette d'activer et de d\xe9sactiver ces divers services. Voir l'exemple ci-dessous de Kobo Toolbox (\xe0 gauche) et CommCare (\xe0 droite)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kobo_to_commcare",src:n(14460).Z,width:"1576",height:"810"})),(0,o.kt)("h2",{id:"quand-envoyer-"},"Quand envoyer ?"),(0,o.kt)("p",null,"Consid\xe9rez s'il faut configurer des montres ou des d\xe9clencheurs au niveau de la base de donn\xe9es (cela semble excessif mais est fourni par certaines bases de donn\xe9es \xe0 un co\xfbt relativement bas) ou \xe0 plusieurs interfaces cl\xe9s de votre application. De quels types de mises \xe0 jour / soumissions / modifications dans votre application d'autres applications pourraient-elles avoir besoin d'\xeatre notifi\xe9es en temps r\xe9el ? Une nouvelle soumission est la plus courante, mais les mises \xe0 jour d'un \xab cas \xbb, les modifications apport\xe9es \xe0 l'UAM ou tout autre \xe9v\xe9nement peuvent \xeatre utiles."),(0,o.kt)("h2",{id:"quand-envoyer--1"},"Quand envoyer ?"),(0,o.kt)("p",null,"Toute la ressource, s'il vous pla\xeet. Cela anticipe l\xe9g\xe8rement nos r\xe9flexions sur les normes de donn\xe9es \xe0 l'\xe9chelle du secteur, mais (dans la limite du raisonnable), il est logique d'exposer tout ce dont votre utilisateur final aura besoin pour ex\xe9cuter la prochaine \xe9tape de sa logique. Certaines interfaces permettent \xe0 l'utilisateur de contr\xf4ler quels champs (et m\xeame quelles ressources associ\xe9es) sont envoy\xe9s dans une charge utile donn\xe9e, mais la valeur par d\xe9faut est souvent d'envoyer tout et de les laisser choisir ce qu'ils veulent utiliser."))}d.isMDXComponent=!0},14460:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/webhooks1-087e20afb50003fac925a9e7318b8cfd.png"}}]);