"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[19761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Editing jobs locally"},i=void 0,l={unversionedId:"developers/editing-locally",id:"developers/editing-locally",title:"Editing jobs locally",description:"To edit jobs, instead of using the OpenFn",source:"@site/docs/developers/editing-locally.md",sourceDirName:"developers",slug:"/developers/editing-locally",permalink:"/documentation/next/developers/editing-locally",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/developers/editing-locally.md",tags:[],version:"current",frontMatter:{title:"Editing jobs locally"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To edit jobs, instead of using the OpenFn\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/jobs/job-studio"},"Job Studio")," you can also use your favorite text\neditor and make changes offline, committing and pushing to GitHub to deploy to\nyour OpenFn using the\n",(0,r.kt)("a",{parentName:"p",href:"/documentation/manage/platform-mgmt/#github-version-control"},"version control feature"),"."),(0,r.kt)("p",null,"First, make sure that version control is set up for your project and the job in\nquestion. When that's all done, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you have\n",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git installed"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the repo from GitHub. Depending on how you're connecting, grab the\nHTTPS or SSH URL of the repository."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GH Clone URL",src:n(49004).Z,width:"1242",height:"388"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can connect to GitHub with username+password (HTTPS) or an SSH keypair you\ngenerated. (You can check out the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories"},"GitHub docs"),"\nfor more info.)")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then use it to\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},"clone the repo"),"\nto your computer by running this command in a folder that you'd like to\ncontain your new repo: ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone {repo URL}")," (e.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/OpenFn/Miracle-Feet.git"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To update your local copy with changes from GitHub, run ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," regularly\nwhile you're editing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For this tutorial, we assume you're making changes on the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\nbranch: the one that is deployed as your production system to OpenFn.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To edit your jobs, use a code editor such as\n",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"VS Code",src:n(67794).Z,width:"873",height:"311"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Make sure you install the\n",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier VSCode Extension"),"\nand set is as default formatter in Settings as seen below. This will apply\nthe correct code formatting to the files you change.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Prettier",src:n(72110).Z,width:"1619",height:"387"})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you're done, you can check which files you changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"git status"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then use ",(0,r.kt)("inlineCode",{parentName:"p"},"git add {filepath}")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"git commit -m {change notes}")," to\nprepare the changes to be merged into the repo."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"There's a lot to learn about git.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/git-guides/git-commit"},"Here's a good place to start"),".")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Then run ",(0,r.kt)("inlineCode",{parentName:"li"},"git push")," to upload the files to the repo (see more on\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/git-guides/git-push"},"git docs"),").")),(0,r.kt)("p",null,"From there, the version control integration will update changed jobs in your\nOpenFn project and you can test those changes on the platform."),(0,r.kt)("p",null,"Once you're ready to start running jobs and testing your changes ",(0,r.kt)("em",{parentName:"p"},"locally"),", head\nover to the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/cli"},"The CLI")," docs for guidance."))}d.isMDXComponent=!0},67794:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/edit_job_vscode-50bc82336db0cb6ba661a679d944c8c0.png"},49004:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/git_clone_url-ede20cc05248cef922982e3b1c193bf9.png"},72110:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/prettier-39610625289b705d60e757aa3ac76c8d.png"}}]);