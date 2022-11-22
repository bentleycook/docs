"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"OpenFn Concepts"},i=void 0,s={unversionedId:"getting-started/terminology",id:"getting-started/terminology",title:"OpenFn Concepts",description:"All across the OpenFn Integration Toolkit, the iPaaS, and this documentation site you'll find some OpenFn-specific terminology that's important to understand. This page is your reference guide\u2014a glossary of the most important OpenFn-specific words and what they mean.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/terminology.md",sourceDirName:"getting-started",slug:"/getting-started/terminology",permalink:"/fr/documentation/getting-started/terminology",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/terminology.md",tags:[],version:"current",frontMatter:{title:"OpenFn Concepts"},sidebar:"docs",previous:{title:"Platform Quick-Start",permalink:"/fr/documentation/build/example-build"},next:{title:"Implementation Checklist",permalink:"/fr/documentation/getting-started/implementation-checklist"}},l={},p=[{value:"Project",id:"project",level:2},{value:"Job",id:"job",level:2},{value:"Adaptor",id:"adaptor",level:3},{value:"Operation",id:"operation",level:3},{value:"Trigger",id:"trigger",level:2},{value:"Credential",id:"credential",level:2},{value:"Message",id:"message",level:2},{value:"Inbox",id:"inbox",level:3},{value:"Run",id:"run",level:2},{value:"Activity History",id:"activity-history",level:3},{value:"Related Runs and Messages",id:"related-runs-and-messages",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All across the OpenFn Integration Toolkit, the iPaaS, and this documentation site you'll find some OpenFn-specific terminology that's important to understand. This page is your reference guide\u2014a glossary of the most important ",(0,o.kt)("em",{parentName:"p"},"OpenFn-specific")," words and what they mean."),(0,o.kt)("admonition",{title:"Keep In Mind",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"As you read about the terms below, remember that in order to make OpenFn perform some sort of data integration work you'll always need to specify:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"What")," to do (e.g., update patient data in some system)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"When")," to do it (e.g., at 7am every day)"),(0,o.kt)("li",{parentName:"ul"},"and ",(0,o.kt)("strong",{parentName:"li"},"How")," to log in (e.g., go to ",(0,o.kt)("inlineCode",{parentName:"li"},"example.com")," and use ",(0,o.kt)("inlineCode",{parentName:"li"},"abc123")," as the security token)")),(0,o.kt)("p",{parentName:"admonition"},"With this in mind, let's check out the key terms.")),(0,o.kt)("p",null,"Please note that if you're looking for a glossary for generic terms used in data-integration (rather than this ",(0,o.kt)("em",{parentName:"p"},"OpenFn-specific")," stuff) head over to the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/getting-started/glossary"},"Glossary for Integration")," page in the Design section. Otherwise, read on!"),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,"A project is an administrative grouping in OpenFn. In ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice"),", it corresponds to a ",(0,o.kt)("a",{parentName:"p",href:"/documentation/portability#proposal-v2-latest"},(0,o.kt)("inlineCode",{parentName:"a"},"project.yaml"))," file. On the platform, it's got an owner, a billing plan, and a bunch of collaborators\u2014different users that have been granted access to the project. In either case, a project contains jobs, triggers, credentials, and everything you need to run an integration with OpenFn."),(0,o.kt)("h2",{id:"job"},"Job"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Jobs are the ",(0,o.kt)("strong",{parentName:"p"},'"what to do"')," part of automation!")),(0,o.kt)("p",null,"OpenFn automation centers around ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs"},"jobs"),", which define the specific series of operations (i.e., tasks) that OpenFn should perform. Jobs can be executed at certain times, when message arrive from outside systems, or when ",(0,o.kt)("em",{parentName:"p"},"other jobs")," succeed or fail. Think of jobs as a set of instructions you might give a data entry staff member (e.g., Please create a new Patient record in OpenMRS when a form containing a newly registered client is received from CommCare, export data to DHIS2 every week on Friday 11pm, send SMS with payment confirmation number when payment confirmation message is received etc.)."),(0,o.kt)("admonition",{title:"Jobs are Reusable",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Jobs are fully configurable and reusable. They can also be chained together to create ",(0,o.kt)("a",{parentName:"p",href:"/documentation/jobs/multiple-operations"},"multi-step automation")," flows, two-way syncs, and to keep data consistent between multiple applications (using multi-app Saga patterns). You can read more on two-way syncing below.")),(0,o.kt)("h3",{id:"adaptor"},"Adaptor"),(0,o.kt)("p",null,"OpenFn ",(0,o.kt)("a",{parentName:"p",href:"/adaptors"},"adaptors")," are open-source modules that provide your jobs with the features they need to communicate with a particular system's API. Some examples are ",(0,o.kt)("inlineCode",{parentName:"p"},"language-dhis2"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"language-commcare"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"language-salesforce"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"language-postgresql"),", etc. There are more than 50 active adaptors at the moment, and anyone is free to build or enhance them."),(0,o.kt)("h3",{id:"operation"},"Operation"),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/documentation/jobs/operations"},"operation")," is the sub-task inside a job. For example, a job for loading data to DHIS2 might include 3 separate operations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Create a new "program".'),(0,o.kt)("li",{parentName:"ol"},'Create many new "tracked entity instances".'),(0,o.kt)("li",{parentName:"ol"},"Enroll those tracked entity instances in the program.")),(0,o.kt)("h2",{id:"trigger"},"Trigger"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Triggers are the ",(0,o.kt)("strong",{parentName:"p"},'"when to do it"')," part of automation!")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/triggers"},"trigger")," determines ",(0,o.kt)("strong",{parentName:"p"},"when")," to run a job automatically. A trigger could be set up to run a job when a message arrives (this is known as a ",(0,o.kt)("inlineCode",{parentName:"p"},"message filter")," trigger), on a cron schedule (a ",(0,o.kt)("inlineCode",{parentName:"p"},"cron")," trigger) or based on the success or failure of ",(0,o.kt)("em",{parentName:"p"},"another")," job(a ",(0,o.kt)("inlineCode",{parentName:"p"},"flow")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"catch"),' trigger). A simple cron trigger might specify to run a job at "7am every weekday".'),(0,o.kt)("h2",{id:"credential"},"Credential"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Credentials are the ",(0,o.kt)("strong",{parentName:"p"},'"How to log in"')," part of automation!")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/credentials"},"credential")," is used to log in to a destination system (e.g., Salesforce username, password & login URL) so that a job can run. Via OpenFn's security model, they are separated from the jobs themselves to ensure that stored usernames and passwords (which are all encrypted) do not get leaked or accessed by the wrong people."),(0,o.kt)("h2",{id:"message"},"Message"),(0,o.kt)("p",null,"A message is a chunk of data that's been received by your inbox. (Technically, it's an HTTP request.) It might trigger a job run, and it contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"headers")," of the HTTP request that was made to your inbox."),(0,o.kt)("h3",{id:"inbox"},"Inbox"),(0,o.kt)("p",null,"Your project's ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/inbox"},"inbox")," contains all of the messages that have been sent to your project. Messages are stored payloads or data (e.g., an incoming SMS, a submitted CommCare form) that were sent via HTTP post to your inbox."),(0,o.kt)("admonition",{title:"Inbox URL",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Click the link icon in the top right of the "Inbox" page to copy your inbox URL. You can then use this URL to send data to OpenFn.')),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"A run is each individual execution of a job. Imagine that a job is configured to create a new patient in OpenMRS whenever a case is opened in CommCare. Over the next week, if 5 cases are opened in CommCare, you\u2019ll see 5 different runs of this one job. If 4 runs are successful and one has failed, you\u2019ll see 4 new patients in OpenMRS, and your system administrator will have been notified that one of those patients couldn\u2019t be created (or whatever more robust error-handling you\u2019ve set up will take place.)"),(0,o.kt)("p",null,"Runs have start times, end times, logs and exit codes that indicate when they took place, what they did, and whether or not they succeeded."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There\u2019s not always a 1-to-1 mapping between runs and the real-world things you\u2019re working with. I might define a job that gets all updated event data from DHIS2 for the last 2 weeks and publishes it to a public map using CartoDB. This job will be triggered at specified time intervals, every 2 weeks in this case, and after a month, we\u2019ll only see 2 runs in OpenFn (that\u2019s one run every two weeks). Each run will have succeeded or failed, and each one might have processed thousands of events from DHIS2.")),(0,o.kt)("h3",{id:"activity-history"},"Activity History"),(0,o.kt)("p",null,'On the platform, the Activity History section provides a list of all of the runs that have taken place in a project. ("Activity History" is to "Run" and "Inbox" is to "Message".)'),(0,o.kt)("h2",{id:"related-runs-and-messages"},"Related Runs and Messages"),(0,o.kt)("p",null,"Given the many-to-one relationship between ",(0,o.kt)("inlineCode",{parentName:"p"},"runs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"messages"),", OpenFn provides an interface for viewing a messages ",(0,o.kt)("strong",{parentName:"p"},'"job-state"'),". This is a calculation that can be useful for organizations that need to understand if a given message has ",(0,o.kt)("em",{parentName:"p"},"eventually")," been handled successfully."),(0,o.kt)("p",null,'A job state is defined as the result ("success", "failure", or "in progress") of the ',(0,o.kt)("em",{parentName:"p"},"last")," run (ordered by the time it was finished, rather than when it was inserted into the runs table) for a given message-job combination."),(0,o.kt)("p",null,"If two runs for the same message-job combination finished at the same time, it's ordered by their start time, and then finally by their primary key. In reality, since the same message-job combination can only be used to create a run once every 10 seconds, this will almost never occur."),(0,o.kt)("admonition",{title:"A Job state example",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'Consider a message which should trigger both a case referral job and a payment job. Two runs will get created when the message arrives, with the referral succeeding and the payment failing. Navigating to the inbox, you\'d see two "job-states" for that single message:'),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Referral (success - run 1)"),(0,o.kt)("li",{parentName:"ol"},"Payment (failure - run 2)")),(0,o.kt)("p",{parentName:"admonition"},"If an administrator then made some sort of change, re-ran the failed payment job for that message, and this third run succeeded, you'd still only see 2 \"job-states\" in the inbox, but they'd both be successful:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Referral (success - run 1)"),(0,o.kt)("li",{parentName:"ol"},"Payment (success - run 3)")),(0,o.kt)("p",{parentName:"admonition"},"Browsing to the receipt inspector would show all three runs for this single message.")))}m.isMDXComponent=!0}}]);