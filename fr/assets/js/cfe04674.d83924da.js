"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(p,".").concat(u)]||m[u]||h[u]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Working with branches"},i=void 0,l={unversionedId:"jobs/working_with_branches",id:"jobs/working_with_branches",title:"Working with branches",description:"In the Editing jobs locally section we walked through the process of creating and adding your changes to the main branch of a project.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/working_with_branches.md",sourceDirName:"jobs",slug:"/jobs/working_with_branches",permalink:"/fr/documentation/jobs/working_with_branches",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/working_with_branches.md",tags:[],version:"current",frontMatter:{title:"Working with branches"},sidebar:"docs",previous:{title:"Editing jobs locally",permalink:"/fr/documentation/jobs/editing_locally"},next:{title:"Triggers",permalink:"/fr/documentation/build/triggers"}},p={},c=[],s={toc:c};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/jobs/editing_locally"},"Editing jobs locally")," section we walked through the process of creating and adding your changes to the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch of a project."),(0,a.kt)("p",null,"However, most code change workflows involve sharing and reviewing changes before deployment. You can do this by creating, testing and sharing your changes on a new branch, then, once final, merging them into ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," for deployment."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"There are LOTS of different strategies for branching and reviewing code on Git. (Like ",(0,a.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow/"},"GitHub Flow")," or ",(0,a.kt)("a",{parentName:"p",href:"https://nvie.com/posts/a-successful-git-branching-model/"},'"That Famous @nvie Post"'),' for example!) This guide is meant to give you a very brief introduction to branches in Git, but it is not meant to dictate the "right way".')),(0,a.kt)("p",null,"Let's pick up the workflow when you ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," -ed the latest changes of the repo to your local folder."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout -b {branch_name}")," will create and switch over to a new branch. When you start editing your jobs, the changes will be kept on this branch, managed separately from ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To test the changes locally, check out the ",(0,a.kt)("a",{parentName:"p",href:"/documentation/devtools/home"},"Devtools")," docs.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Just as you've seen when working on ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),", when you're done check which files you changed with ",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then use ",(0,a.kt)("inlineCode",{parentName:"p"},"git add {filepath}")," followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit -m {change notes}")," to prepare the changes to be merged into the repo.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The following command will push your changes to the remote repository as a separate, new branch: ",(0,a.kt)("inlineCode",{parentName:"p"},"git push --set-upstream origin {branch_name}"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On GitHub, you can create a Pull Request to get your changes reviewed and approved."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"PR-1",src:n(75443).Z,width:"1285",height:"258"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"PR-2",src:n(46666).Z,width:"1155",height:"686"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"As you keep working with branches, make sure you check which branch you're on with ",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"git-status",src:n(65012).Z,width:"594",height:"100"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To keep your local copy up to date with the remote repo, switch to ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout main")," and hit ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," to pull any changes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're still working on your separate branch while ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," has been updated, use ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout {branch_name}")," followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"git merge main")," to copy over new changes from ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," to your branch."))))}h.isMDXComponent=!0},65012:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/git-status-b871e6bb98f9fd6d7ec4e3073b982b46.png"},46666:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pull-request-2-2cbcdc35cd9434b41491d62d2c237676.png"},75443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pull-request-9864092fb4ca2fbffab703957a7db3f1.png"}}]);