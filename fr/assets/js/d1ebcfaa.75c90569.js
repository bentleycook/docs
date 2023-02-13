"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(o,".").concat(m)]||p[m]||c[m]||s;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={title:"Triggers"},i=void 0,l={unversionedId:"build/triggers",id:"build/triggers",title:"Triggers",description:"Les triggers sont responsables du d\xe9marrage automatique du job. Il en existe 4 types. Les plus courants sont les triggers de type \xab\xa0filtre de messages\xa0\xbb , mais il existe aussi les triggers de type \xab\xa0cron\xa0\xbb, \xab\xa0flux\xa0\xbb et \xab\xa0\xe9chec\xa0\xbb.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/build/triggers.md",sourceDirName:"build",slug:"/build/triggers",permalink:"/fr/documentation/build/triggers",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/triggers.md",tags:[],version:"current",frontMatter:{title:"Triggers"},sidebar:"docs",previous:{title:"Working with branches",permalink:"/fr/documentation/jobs/working_with_branches"},next:{title:"Credentials",permalink:"/fr/documentation/build/credentials"}},o={},u=[{value:"Types de trigger",id:"types-de-trigger",level:2},{value:"Triggers de filtre de messages",id:"triggers-de-filtre-de-messages",level:3},{value:"Triggers Cron (anciennement minuteurs)",id:"triggers-cron-anciennement-minuteurs",level:3},{value:"Triggers de flux",id:"triggers-de-flux",level:3},{value:"Triggers d&#39;\xe9chec",id:"triggers-d\xe9chec",level:3},{value:"Traitement des jobs cron",id:"traitement-des-jobs-cron",level:2},{value:"Maintien d&#39;un curseur en <code>state</code> pour les jobs de minuterie",id:"maintien-dun-curseur-en-state-pour-les-jobs-de-minuterie",level:4},{value:"Gestion de la taille de <code>state</code> pour les jobs de minuterie",id:"gestion-de-la-taille-de-state-pour-les-jobs-de-minuterie",level:3},{value:"Une solution rapide pour l&#39;\xe9tat final bloat",id:"une-solution-rapide-pour-l\xe9tat-final-bloat",level:3},{value:"La correspondance des filtres en d\xe9tail",id:"la-correspondance-des-filtres-en-d\xe9tail",level:2},{value:"Filtre 1, inclusion simple",id:"filtre-1-inclusion-simple",level:3},{value:"Le message \xab\xa0a\xa0\xbb correspondra",id:"le-message-a-correspondra",level:4},{value:"Le message \xab\xa0b\xa0\xbb ne correspondra pas",id:"le-message-b-ne-correspondra-pas",level:4},{value:"Filtre 2, inclusion <em>et</em> exclusion",id:"filtre-2-inclusion-et-exclusion",level:3},{value:"Le message \xab\xa0c\xa0\xbb correspondra",id:"le-message-c-correspondra",level:4},{value:"Le message \xab\xa0d\xa0\xbb ne correspondra pas",id:"le-message-d-ne-correspondra-pas",level:4},{value:"Autres \xe9chantillons de filtres",id:"autres-\xe9chantillons-de-filtres",level:2},{value:"Correspond aux messages <code>WHERE</code> le <code>formId</code> est <code>&quot;Robot_Photo_21.04.2015&quot;</code>",id:"correspond-aux-messages-where-le-formid-est-robot_photo_21042015",level:3},{value:"Faire correspondre un message avec deux fragments \xe0 l&#39;int\xe9rieur d&#39;un tableau appel\xe9 <code>data</code>",id:"faire-correspondre-un-message-avec-deux-fragments-\xe0-lint\xe9rieur-dun-tableau-appel\xe9-data",level:3},{value:"Faire correspondre un message <code>WHERE</code> et <code>AND</code> qui sont tous les deux inclus",id:"faire-correspondre-un-message-where-et-and-qui-sont-tous-les-deux-inclus",level:3},{value:"Faire correspondre un message en utilisant l&#39;exclusion",id:"faire-correspondre-un-message-en-utilisant-lexclusion",level:3},{value:"Faire correspondre un message avec un fragment \xe0 l&#39;int\xe9rieur d&#39;un autre objet appel\xe9 <code>form</code>",id:"faire-correspondre-un-message-avec-un-fragment-\xe0-lint\xe9rieur-dun-autre-objet-appel\xe9-form",level:3},{value:"Une d\xe9mo d&#39;exclusion",id:"une-d\xe9mo-dexclusion",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les triggers sont responsables du d\xe9marrage automatique du job. Il en existe 4 types. Les plus courants sont les triggers de type \xab\xa0filtre de messages\xa0\xbb , mais il existe aussi les triggers de type \xab\xa0cron\xa0\xbb, \xab\xa0flux\xa0\xbb et \xab\xa0\xe9chec\xa0\xbb."),(0,a.kt)("h2",{id:"types-de-trigger"},"Types de trigger"),(0,a.kt)("h3",{id:"triggers-de-filtre-de-messages"},"Triggers de filtre de messages"),(0,a.kt)("p",null,"Les triggers de filtre de messages surveillent les messages entrants et v\xe9rifient si les donn\xe9es dans ces messages correspondent \xe0 leurs ",(0,a.kt)("strong",{parentName:"p"},"crit\xe8res d'inclusion")," et ",(0,a.kt)("em",{parentName:"p"},"ne r\xe9pondent pas")," \xe0 leurs ",(0,a.kt)("strong",{parentName:"p"},"crit\xe8res d'exclusion"),". S'ils r\xe9ussissent ces tests et s'il y a des jobs actifs configur\xe9s pour utiliser ce trigger, une ex\xe9cution sera lanc\xe9e pour chaque combinaison message/job."),(0,a.kt)("p",null,"En tant qu'utilisateur, vous sp\xe9cifiez les crit\xe8res d'inclusion et d'exclusion qui d\xe9terminent les messages entrants qui doivent d\xe9clencher l'ex\xe9cution des jobs. En gros, si une partie d'un corps de message ",(0,a.kt)("strong",{parentName:"p"},"correspond")," au JSON que vous fournissez comme filtre d'inclusion, et ",(0,a.kt)("em",{parentName:"p"},"ne")," correspond pas au JSON que vous avez fourni comme filtre d'exclusion, un job s'ex\xe9cutera (en supposant que vous en avez cr\xe9\xe9 un avec ",(0,a.kt)("inlineCode",{parentName:"p"},"autoprocess")," activ\xe9)."),(0,a.kt)("p",null,"Le crit\xe8re de filtrage prend la forme d'une cha\xeene de caract\xe8res JSON valide, comme ceci\xa0: ",(0,a.kt)("inlineCode",{parentName:"p"},'{"Name":"Aleksa Iwobi"}'),". Dans une requ\xeate SQL, cette cha\xeene sera utilis\xe9e dans la clause WHERE et utilisera des op\xe9rateurs sp\xe9ciaux de ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonb")," comme celui-ci\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM messages\n  WHERE body::jsonb @> \'{"Name":"Nicholas P\xe9p\xe9"}\'::jsonb;\n')),(0,a.kt)("p",null,"Si vous fournissez des crit\xe8res d'exclusion comme ",(0,a.kt)("inlineCode",{parentName:"p"},'{"type": "fake-data"}')," la requ\xeate r\xe9sultante ressemblera \xe0 quelque chose comme ceci :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM messages\n  WHERE body::jsonb @> \'{"Name":"Nicholas P\xe9p\xe9"}\'::jsonb\n  AND NOT (body::jsonb @> \'{"type":"fake-data"}\'::jsonb);\n')),(0,a.kt)("p",null,"Il y a une explication plus d\xe9taill\xe9e de la correspondance des filtres ",(0,a.kt)("a",{parentName:"p",href:"#filter-matching-in-detail"},"ci-dessous"),"."),(0,a.kt)("h3",{id:"triggers-cron-anciennement-minuteurs"},"Triggers Cron (anciennement minuteurs)"),(0,a.kt)("p",null,"Cron triggers run jobs based on a cron schedule. Ils peuvent fonctionner aussi fr\xe9quemment qu'une fois toutes les minutes, ou aussi rarement que vous le souhaitez, et peuvent \xeatre programm\xe9s \xe0 des dates ou des heures tr\xe8s pr\xe9cises. Chaque fois qu'un job chronom\xe9tr\xe9 r\xe9ussit, son ",(0,a.kt)("inlineCode",{parentName:"p"},"final_state")," est sauvegard\xe9 et utilis\xe9 comme ",(0,a.kt)("inlineCode",{parentName:"p"},"initial_state")," pour sa prochaine ex\xe9cution. Voir \xab\xa0G\xe9rer l'\xe9tat\xa0\xbb et \xab\xa0Garder un curseur\xa0\xbb ci-dessous pour une aide \xe0 l'impl\xe9mentation."),(0,a.kt)("p",null,"La meilleure fa\xe7on d'apprendre \xe0 conna\xeetre ",(0,a.kt)("inlineCode",{parentName:"p"},"cron"),", si vous n'\xeates pas d\xe9j\xe0 familier, est \xe0 travers l'interface OpenFn ou"),(0,a.kt)("a",{href:"https://crontab.guru",target:"_blank"},"crontab.guru"),".",(0,a.kt)("h3",{id:"triggers-de-flux"},"Triggers de flux"),(0,a.kt)("p",null,"Les triggers de flux ex\xe9cutent un job ",(0,a.kt)("em",{parentName:"p"},"apr\xe8s")," qu'un autre job sp\xe9cifi\xe9 se termine avec succ\xe8s. Par exemple, un trigger de flux qui sp\xe9cifie l'ex\xe9cution r\xe9ussie du Job A peut \xeatre utilis\xe9 pour le Job B. Chaque fois que le Job A r\xe9ussit, le Job B commence \xe0 s'ex\xe9cuter avec le ",(0,a.kt)("inlineCode",{parentName:"p"},"final_state")," du Job A comme son ",(0,a.kt)("inlineCode",{parentName:"p"},"initial_state"),"."),(0,a.kt)("h3",{id:"triggers-d\xe9chec"},"Triggers d'\xe9chec"),(0,a.kt)("p",null,"Les triggers d'\xe9chec, ou \xab\xa0catch\xa0\xbb, fonctionnent comme les triggers de flux, sauf qu'ils guettent l'\xe9chec, plut\xf4t que le succ\xe8s, d'un job sp\xe9cifique. (par exemple, le Job A paie un ASC via MPESA. Si le Job A ",(0,a.kt)("em",{parentName:"p"},"\xe9choue,")," nous devons lancer le Job B, qui envoie un SMS au responsable du district lui demandant de payer manuellement l'ASC.)"),(0,a.kt)("h2",{id:"traitement-des-jobs-cron"},"Traitement des jobs cron"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Traitement \xe0 la demande pour les jobs cron.")," Si vous exploitez les triggers cron pour ex\xe9cuter des jobs \xe0 des moments pr\xe9cis, vous pouvez \xe9galement ex\xe9cuter ce job d\xe9clench\xe9 par cron \xe0 la demande. De cette fa\xe7on, vous n\u2019avez pas \xe0 attendre l'expiration de la minuterie avant de proc\xe9der au test\xa0! Il suffit simplement de cliquer sur le bouton Processus/\xab Jouer \xbb maintenant disponible sur les pages Job, Run et Activity History."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ex\xe9cute le bouton de trigger de temps d&#39;ex\xe9cution de la liste",src:n(39229).Z,width:"2204",height:"104"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bouton de trigger de l&#39;historique de l&#39;ex\xe9cution",src:n(12946).Z,width:"345",height:"352"})),(0,a.kt)("h4",{id:"maintien-dun-curseur-en-state-pour-les-jobs-de-minuterie"},"Maintien d'un curseur en ",(0,a.kt)("inlineCode",{parentName:"h4"},"state")," pour les jobs de minuterie"),(0,a.kt)("p",null,"Comme de nombreux jobs de minuterie n\xe9cessitent de garder une sorte d'enregistrement de leur ex\xe9cution pr\xe9c\xe9dente pour modifier leurs actions ult\xe9rieures, ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," est transmis entre les ex\xe9cutions. Un exemple pourrait \xeatre de conserver un \xab curseur \xbb pour ne s\xe9lectionner que les nouveaux enregistrements dans une base de donn\xe9es. On s'attendrait \xe0 la logique suivante\xa0:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"job-1")," r\xe9cup\xe8re les patients de la base de donn\xe9es"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"job-1")," fait quelque chose d'important avec ces dossiers de patients"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"job-1")," enregistre l'",(0,a.kt)("inlineCode",{parentName:"li"},"id")," du dernier patient trait\xe9 avec succ\xe8s \xe0 ",(0,a.kt)("inlineCode",{parentName:"li"},"final_state")),(0,a.kt)("li",{parentName:"ol"},"quand ",(0,a.kt)("inlineCode",{parentName:"li"},"job-1")," s'ex\xe9cute \xe0 nouveau, il r\xe9cup\xe8re les patients dont l'",(0,a.kt)("inlineCode",{parentName:"li"},"id")," est sup\xe9rieur \xe0 l'",(0,a.kt)("inlineCode",{parentName:"li"},"id")," du dernier patient trait\xe9 avec succ\xe8s.")),(0,a.kt)("p",null,"Pour y parvenir, vous pourriez \xe9crire\xa0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"fetchPatient({ type: 'referral', offset: state.lastId }, state => {\n  // Assuming the system returned an array of patients in the \"data\" key.\n  state.lastId = state.data.patients.sort((a, b) => b.id - a.id)[0];\n  return state;\n});\n")),(0,a.kt)("p",null,"Le d\xe9calage initial sera ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", mais les ex\xe9cutions suivantes vont automatiquement r\xe9cup\xe9rer seulement les \xab\xa0nouveaux\xa0\xbb patients."),(0,a.kt)("h3",{id:"gestion-de-la-taille-de-state-pour-les-jobs-de-minuterie"},"Gestion de la taille de ",(0,a.kt)("inlineCode",{parentName:"h3"},"state")," pour les jobs de minuterie"),(0,a.kt)("p",null,"Etant donn\xe9 que l'\xe9tat est transmis entre chaque ex\xe9cution d'un job de minuterie, si votre job ajoute quelque chose de nouveau \xe0 l'\xe9tat \xe0 chaque ex\xe9cution, il peut rapidement devenir trop grand pour \xeatre trait\xe9 de mani\xe8re pratique. Imaginez qu'une r\xe9ponse du serveur ajoutait, via ",(0,a.kt)("inlineCode",{parentName:"p"},"array.push(...)"),", \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"state.references")," chaque fois que le job est ex\xe9cut\xe9. OpenFn supporte jusqu'\xe0 50 000 octets (via Erlang's ",(0,a.kt)("inlineCode",{parentName:"p"},"byte_size"),"), bien que la plupart des octets ",(0,a.kt)("inlineCode",{parentName:"p"},"final_state")," se situent entre 100 et 1000."),(0,a.kt)("p",null,"Si la taille de votre ",(0,a.kt)("inlineCode",{parentName:"p"},"final_state")," d\xe9passe 10 000 octets, OpenFn enverra aux collaborateurs du projet un email d'avertissement. Si elle d\xe9passe 50 000 octets, votre ex\xe9cution va toujours r\xe9ussir mais son ",(0,a.kt)("inlineCode",{parentName:"p"},"final_state")," ne sera pas sauvegard\xe9 et la prochaine fois que le job sera ex\xe9cut\xe9e il h\xe9ritera de l'\xe9tat final pr\xe9c\xe9dent, non mis \xe0 jour. (p. ex. le dernier \xe9tat qui \xe9tait < de 50 000 octets.)"),(0,a.kt)("h3",{id:"une-solution-rapide-pour-l\xe9tat-final-bloat"},"Une solution rapide pour l'\xe9tat final bloat"),(0,a.kt)("p",null,"Le plus souvent, l'\xe9tat final bloat est d\xfb \xe0 une gestion incorrecte de ",(0,a.kt)("inlineCode",{parentName:"p"},"state.references")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"state.data"),". Cela peut \xeatre corrig\xe9 en ajoutant les lignes suivantes\xa0: ",(0,a.kt)("em",{parentName:"p"},"either")," \xe0 la fonction callback de votre paquetage de langue (s'il en permet un) ou en ajoutant une op\xe9ration ",(0,a.kt)("inlineCode",{parentName:"p"},"alterState(. .)")," apr\xe8s votre op\xe9ration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  state.custom = somethingIntentional;\n  state.data = {};\n  state.references = [];\n  return state;\n});\n")),(0,a.kt)("h2",{id:"la-correspondance-des-filtres-en-d\xe9tail"},"La correspondance des filtres en d\xe9tail"),(0,a.kt)("p",null,"Pour illustrer la correspondance des filtres, reportez-vous aux exemples de filtres et de messages ci-dessous."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le message \xab\xa0a\xa0\xbb correspondra au filtre 1, mais pas le message \xab\xa0b\xa0\xbb."),(0,a.kt)("li",{parentName:"ul"},"Le message \xab\xa0c\xa0\xbb correspondra au filtre 2, mais pas le message \xab\xa0d\xa0\xbb.")),(0,a.kt)("h3",{id:"filtre-1-inclusion-simple"},"Filtre 1, inclusion simple"),(0,a.kt)("p",null,"Les crit\xe8res d'inclusion sont ",(0,a.kt)("inlineCode",{parentName:"p"},'{ "formID": "patient_registration_v7" }')," et les crit\xe8res d'exclusion sont laiss\xe9s vides."),(0,a.kt)("h4",{id:"le-message-a-correspondra"},"Le message \xab\xa0a\xa0\xbb correspondra"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "formID": "patient_registration_v7",\n  "name": "Jack Wilshere",\n  "dob": "1986-05-16",\n  "medications": ["anaphlene", "zaradood", "morphofast"]\n}\n')),(0,a.kt)("h4",{id:"le-message-b-ne-correspondra-pas"},"Le message \xab\xa0b\xa0\xbb ne correspondra pas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-16",\n  "formID": "patient_registration_v8",\n  "name": "Larry Bird",\n  "dob": "1982-03-21",\n  "medications": ["anaphlene", "zaradood", "morphofast"]\n}\n')),(0,a.kt)("p",null,"Le message \xab\xa0b\xa0\xbb n'inclut pas ",(0,a.kt)("inlineCode",{parentName:"p"},'"formID":"patient_registration_v7"')," et ne correspond pas au filtre \xab\xa01\xa0\xbb."),(0,a.kt)("h3",{id:"filtre-2-inclusion-et-exclusion"},"Filtre 2, inclusion ",(0,a.kt)("em",{parentName:"h3"},"et")," exclusion"),(0,a.kt)("p",null,"Le crit\xe8re d'inclusion est ",(0,a.kt)("inlineCode",{parentName:"p"},'{ "name": "john doe" }')," et le crit\xe8re d'exclusion est ",(0,a.kt)("inlineCode",{parentName:"p"},'{"allowedToShare": false}'),"."),(0,a.kt)("h4",{id:"le-message-c-correspondra"},"Le message \xab\xa0c\xa0\xbb correspondra"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "name": "john doe",\n  "dob": "1986-05-16"\n}\n')),(0,a.kt)("h4",{id:"le-message-d-ne-correspondra-pas"},"Le message \xab\xa0d\xa0\xbb ne correspondra pas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "name": "john doe",\n  "dob": "1986-05-16",\n  "allowedToShare": false\n}\n')),(0,a.kt)("h2",{id:"autres-\xe9chantillons-de-filtres"},"Autres \xe9chantillons de filtres"),(0,a.kt)("h3",{id:"correspond-aux-messages-where-le-formid-est-robot_photo_21042015"},"Correspond aux messages ",(0,a.kt)("inlineCode",{parentName:"h3"},"WHERE")," le ",(0,a.kt)("inlineCode",{parentName:"h3"},"formId")," est ",(0,a.kt)("inlineCode",{parentName:"h3"},'"Robot_Photo_21.04.2015"')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,a.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015" }')),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"faire-correspondre-un-message-avec-deux-fragments-\xe0-lint\xe9rieur-dun-tableau-appel\xe9-data"},"Faire correspondre un message avec deux fragments \xe0 l'int\xe9rieur d'un tableau appel\xe9 ",(0,a.kt)("inlineCode",{parentName:"h3"},"data")),(0,a.kt)("p",null,"(Ceci est utile lors de la collecte de donn\xe9es via ODK)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,a.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{ "data": [{ "outlet_call": "TRUE", "new_existing": "Existing" }] }')),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"faire-correspondre-un-message-where-et-and-qui-sont-tous-les-deux-inclus"},"Faire correspondre un message ",(0,a.kt)("inlineCode",{parentName:"h3"},"WHERE")," et ",(0,a.kt)("inlineCode",{parentName:"h3"},"AND")," qui sont tous les deux inclus"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,a.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015", "secret_number": 8 }')),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"faire-correspondre-un-message-en-utilisant-lexclusion"},"Faire correspondre un message en utilisant l'exclusion"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,a.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015" }')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{ "safeToProcess": false }'))))),(0,a.kt)("h3",{id:"faire-correspondre-un-message-avec-un-fragment-\xe0-lint\xe9rieur-dun-autre-objet-appel\xe9-form"},"Faire correspondre un message avec un fragment \xe0 l'int\xe9rieur d'un autre objet appel\xe9 ",(0,a.kt)("inlineCode",{parentName:"h3"},"form")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,a.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{"form": {"@xmlns": "http://openrosa.org/formdesigner/F732194-3278-nota-ReAL-one"}}')),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"une-d\xe9mo-dexclusion"},"Une d\xe9mo d'exclusion"),(0,a.kt)("p",null,"Imaginez que nous ayons un filtre qui inclut des messages avec ",(0,a.kt)("inlineCode",{parentName:"p"},"form == 'bns_survey'")," mais nous voulons ensuite commencer ",(0,a.kt)("em",{parentName:"p"},"en excluant")," ceux qui ont ",(0,a.kt)("inlineCode",{parentName:"p"},"body.survey_type == 'practice'"),". Notre trigger de filtre devrait ressembler \xe0 ceci\xa0:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,a.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{ "form": "bns_survey" }')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'{"body": {"survey_type": "practice"}}'))))),(0,a.kt)("p",null,"Nous l'avons configur\xe9 \xe0 partir du formulaire de trigger comme ceci\xa0:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(84167).Z,width:"1676",height:"946"})),(0,a.kt)("p",null,"Et v\xe9rifiez le r\xe9sultat dans l'inbox\xa0:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(71109).Z,width:"1676",height:"946"})))}c.isMDXComponent=!0},71109:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/demo-exclusion-cc520464bca5893c3ca38bfa1d1f2142.gif"},84167:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/exclusion-cb6fe8d428d9dd35a5712fa756eb907a.gif"},12946:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtimetrigger1-5fa01ed4cd107935178ec302619b86ea.png"},39229:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);