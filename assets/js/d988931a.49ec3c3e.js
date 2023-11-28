"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[18934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,g=s["".concat(p,".").concat(m)]||s[m]||k[m]||r;return n?a.createElement(g,i(i({ref:t},h),{},{components:n})):a.createElement(g,i({ref:t},h))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Working with branches"},i=void 0,l={unversionedId:"developers/working-with-branches",id:"developers/working-with-branches",title:"Working with branches",description:"In the Editing Workflows Locally",source:"@site/docs/developers/working-with-branches.md",sourceDirName:"developers",slug:"/developers/working-with-branches",permalink:"/documentation/next/developers/working-with-branches",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/developers/working-with-branches.md",tags:[],version:"current",frontMatter:{title:"Working with branches"}},p={},c=[],h={toc:c},s="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"editing-locally"},"Editing Workflows Locally"),"\nsection we walked through the process of creating and adding your changes to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch of a project."),(0,o.kt)("p",null,"However, most code change workflows involve sharing and reviewing changes before\ndeployment. You can do this by creating, testing and sharing your changes on a\nnew branch, then, once final, merging them into ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," for deployment."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"There are LOTS of different strategies for branching and reviewing code on Git.\n(Like ",(0,o.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow/"},"GitHub Flow")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://nvie.com/posts/a-successful-git-branching-model/"},'"That Famous @nvie Post"'),'\nfor example!) This guide is meant to give you a very brief introduction to\nbranches in Git, but it is not meant to dictate the "right way".')),(0,o.kt)("p",null,"Let's pick up the workflow when you ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull")," -ed the latest changes of the\nrepo to your local folder."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout -b {branch_name}")," will create and switch over to a new\nbranch. When you start editing your jobs, the changes will be kept on this\nbranch, managed separately from ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To test the changes locally, check out the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/cli"},"The CLI"),"\ndocs.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Just as you've seen when working on ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", when you're done check which\nfiles you changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"git status"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then use ",(0,o.kt)("inlineCode",{parentName:"p"},"git add {filepath}")," followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"git commit -m {change notes}")," to\nprepare the changes to be merged into the repo.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The following command will push your changes to the remote repository as a\nseparate, new branch: ",(0,o.kt)("inlineCode",{parentName:"p"},"git push --set-upstream origin {branch_name}"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On GitHub, you can create a Pull Request to get your changes reviewed and\napproved."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"PR-1",src:n(75443).Z,width:"1285",height:"258"})),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"PR-2",src:n(46666).Z,width:"1155",height:"686"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"As you keep working with branches, make sure you check which branch you're on\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"git status"),"."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"git-status",src:n(65012).Z,width:"594",height:"100"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To keep your local copy up to date with the remote repo, switch to ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout main")," and hit ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull")," to pull any changes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you're still working on your separate branch while ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," has been\nupdated, use ",(0,o.kt)("inlineCode",{parentName:"p"},"git checkout {branch_name}")," followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"git merge main")," to\ncopy over new changes from ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," to your branch."))))}k.isMDXComponent=!0},65012:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},46666:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pull-request-2-39da4d828968dcfc78cae503c3f1accf.png"},75443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pull-request-329a680d472c4acb831ad9ecd18b1997.png"}}]);