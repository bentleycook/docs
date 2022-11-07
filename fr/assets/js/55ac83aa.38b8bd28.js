"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={layout:"post",title:"Moving from Webpack to esbuild on Phoenix",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","js","webpack","build","phoenix","ci/cd"],featured:!0},r=void 0,l={permalink:"/fr/articles/2021/10/15/webpack-to-esbuild-part1",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-10-15-webpack-to-esbuild-part1.md",source:"@site/articles/2021-10-15-webpack-to-esbuild-part1.md",title:"Moving from Webpack to esbuild on Phoenix",description:"We're very happy users of Elixir and Phoenix at OpenFn, given that we've been",date:"2021-10-15T00:00:00.000Z",formattedDate:"15 octobre 2021",tags:[{label:"how-to",permalink:"/fr/articles/tags/how-to"},{label:"js",permalink:"/fr/articles/tags/js"},{label:"webpack",permalink:"/fr/articles/tags/webpack"},{label:"build",permalink:"/fr/articles/tags/build"},{label:"phoenix",permalink:"/fr/articles/tags/phoenix"},{label:"ci/cd",permalink:"/fr/articles/tags/ci-cd"}],readingTime:6.47,hasTruncateMarker:!0,authors:[{name:"Stuart Corbishley",url:"https://github.com/stuartc",imageURL:"https://avatars.githubusercontent.com/stuartc"}],frontMatter:{layout:"post",title:"Moving from Webpack to esbuild on Phoenix",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","js","webpack","build","phoenix","ci/cd"],featured:!0},prevItem:{title:"Testing a React app, the blurred line between Unit, integration and E2E",permalink:"/fr/articles/2021/10/22/testing-react-app-with-jest-hound"},nextItem:{title:"Improving Multistage Docker Builds using Buildx",permalink:"/fr/articles/2021/10/08/improving-multistage-docker-builds-using-buildx"}},s={authorsImageUrls:[void 0]},u=[{value:"So what&#39;s this about esbuild",id:"so-whats-this-about-esbuild",level:2},{value:"Exploring the caveats",id:"exploring-the-caveats",level:2},{value:"What we need esbuild to provide",id:"what-we-need-esbuild-to-provide",level:2},{value:"Giving it a go",id:"giving-it-a-go",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Resources",id:"resources",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We're very happy users of Elixir and Phoenix at OpenFn, given that we've been\nusing it continuously for about 6 years - upgrades and all. Our front-end\ntoolchain, albeit far from out of date (Webpack ",(0,i.kt)("inlineCode",{parentName:"p"},"5.52.1")," today) has left some\nroom for improvement."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is a post written on what we call 'Slow Fridays', where we explore and\nthink about stuff we're curious about. The deal is some artifact at the end of\nthe day. So while this post is not complete - I believe part two is warranted.")),(0,i.kt)("p",null,"Phoenix 1.6 started to include esbuild by ",(0,i.kt)("a",{parentName:"p",href:"#ref1"},"default"),". The main reasons\ncited were the amount of support the team had to continuously give for a\ntoolchain that although necessary is not under the control of the framework\nteams control."),(0,i.kt)("p",null,"Back in the day, Phoenix used brunch to do front end builds - despite not being\nthe most common bundler at the time. The objective I assume was to provide\nsomething that is easy to get going with and lowers the barrier to entry for\nPhoenix. We actually switched brunch out for webpack before webpack got into\nPhoenix in order to more easily use new libraries and newer ES syntax."),(0,i.kt)("p",null,"It wasn't without its challenges, and still is. Webpack is wonderfully\npowerful - but it does do ",(0,i.kt)("em",{parentName:"p"},"a lot"),", and it's really easy to stumble onto plugins\nthat are either order dependent or mutually exclusive."),(0,i.kt)("h2",{id:"so-whats-this-about-esbuild"},"So what's this about esbuild"),(0,i.kt)("p",null,"It's a bundler/compiler for JS/TS projects that is written in Go, along with\nbeing faster by the simple fact it's natively compiled it also leverages\nconcurrency. To compare ",(0,i.kt)("em",{parentName:"p"},"why")," esbuild is faster than NodeJS on face value is\nunfair in my opinion. Although having similar objectives, they are wildly\ndifferent in implementation and in features."),(0,i.kt)("p",null,"So ",(0,i.kt)("strong",{parentName:"p"},"speed")," is the big selling point. But thinking back to other bundlers, what\nmade us switch (thinking of gulp, grunt, mixing in babel, browserify etc). Those\nchanges were never about speed, at least a drop in build time was nice - a bit of\ncaching goes a long way. The changes were about being able to use the syntax and\nlibraries we wanted with as little fuss as possible."),(0,i.kt)("p",null,"Webpack ",(0,i.kt)("em",{parentName:"p"},"can")," do almost anything. I'm not convinced esbuild can match that, and\nas an open-source maintainer I'd argue it shouldn't break its original goals to\nmatch Webpack."),(0,i.kt)("h2",{id:"exploring-the-caveats"},"Exploring the caveats"),(0,i.kt)("p",null,"I started breaking down what our current bundle setup actually does, after all\nif we were just bundling plain JS I'd probably be using rollup and terser. Going\nthrough our ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," file I can see that it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conditionally provide sourcemaps depending on the environment."),(0,i.kt)("li",{parentName:"ul"},"Uses babel to parse js/jsx files",(0,i.kt)("br",{parentName:"li"}),"At the same time cherry picks lodash imports",(0,i.kt)("a",{href:"#lodash"},(0,i.kt)("sup",null,"*")),"."),(0,i.kt)("li",{parentName:"ul"},"Parse ",(0,i.kt)("inlineCode",{parentName:"li"},"import"),"s for ",(0,i.kt)("inlineCode",{parentName:"li"},".css")," files through ",(0,i.kt)("inlineCode",{parentName:"li"},"style-loader")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"css-loader"),(0,i.kt)("br",{parentName:"li"}),"Injecting the styles onto the dom."),(0,i.kt)("li",{parentName:"ul"},"Detect ",(0,i.kt)("inlineCode",{parentName:"li"},"require")," statements to images, copy them to an assets folder",(0,i.kt)("br",{parentName:"li"}),"and replace the statement with a url to image."),(0,i.kt)("li",{parentName:"ul"},"Can watch files (excluding ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules"),") in development."),(0,i.kt)("li",{parentName:"ul"},"Splits files that come from ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," into a ",(0,i.kt)("inlineCode",{parentName:"li"},"vendor.js")," bundle.")),(0,i.kt)("p",null,"That's a lot more than just building something, there's some implicit behaviour\nhere."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The interaction between ",(0,i.kt)("inlineCode",{parentName:"li"},"style-loader")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"css-loader")," results in extra\nfunctions and behaviour being introduced, it's not producing a ",(0,i.kt)("inlineCode",{parentName:"li"},".css")," file.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"I'm personally not a big fan of apps injecting styles, but I think I get why\npeople do it. Maybe I'm old-school and like to have my stylesheets delivered\nin a few files (or even one)."))),(0,i.kt)("li",{parentName:"ul"},"The splitting doesn't know about ",(0,i.kt)("inlineCode",{parentName:"li"},"app.js"),", it puts everything that resolves to\n",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"vendor.js"),". Subtle but worth pointing out.")),(0,i.kt)("a",{name:"lodash"},(0,i.kt)("sup",null,"*")),"Could probably ignore this and refactor some files and check that tree-shaking is working properly.",(0,i.kt)("h2",{id:"what-we-need-esbuild-to-provide"},"What we need esbuild to provide"),(0,i.kt)("p",null,"Like I mentioned before, webpack is super versatile and it would be\nshort-sighted to get esbuild to do everything it does."),(0,i.kt)("p",null,"So I'm approaching this with the idea that I code will need some changes, the\nless the better - I've always firmly believed the kinds of restrictions smaller\ntools provide can make things neater and more portable."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705 ",(0,i.kt)("strong",{parentName:"li"},"Provide source maps"),(0,i.kt)("br",{parentName:"li"}),"Supported out of the box. ",(0,i.kt)("a",{parentName:"li",href:"https://esbuild.github.io/api/#sourcemap"},"docs")),(0,i.kt)("li",{parentName:"ul"},"\u2705 ",(0,i.kt)("strong",{parentName:"li"},"Watching files"),(0,i.kt)("br",{parentName:"li"}),"Yup. ",(0,i.kt)("a",{parentName:"li",href:"https://esbuild.github.io/api/#watch"},"docs")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udd97 ",(0,i.kt)("strong",{parentName:"li"},"Build our css")," (and vendored css)",(0,i.kt)("br",{parentName:"li"}),"Compiling CSS is supported, however it doesn't (as far as I can tell) doesn't\nreplace ",(0,i.kt)("inlineCode",{parentName:"li"},"style-loader")," and how it injects CSS into the DOM."),(0,i.kt)("li",{parentName:"ul"},"\u2705 ",(0,i.kt)("strong",{parentName:"li"},"Copy image assets referenced in JS"),(0,i.kt)("br",{parentName:"li"}),"Indeed it can, using the ",(0,i.kt)("inlineCode",{parentName:"li"},"file")," loader.\n",(0,i.kt)("a",{parentName:"li",href:"https://esbuild.github.io/content-types/#external-file"},"docs")),(0,i.kt)("li",{parentName:"ul"},"\u2705 ",(0,i.kt)("strong",{parentName:"li"},"Can split our files"),(0,i.kt)("br",{parentName:"li"}),"I picked a confusing green checkbox to illustrate that while esbuild does\nsupport file splitting - it appears to have some caveats, primarily that it\nonly works with ",(0,i.kt)("inlineCode",{parentName:"li"},"esm")," output files. We don't ship ES Modules to the browser,\nbut seems like a good moment to try given the primary targets for our web\nfront end getting module support in 2019 ",(0,i.kt)("sup",null,(0,i.kt)("a",{href:"#esm"},"2")),".")),(0,i.kt)("h2",{id:"giving-it-a-go"},"Giving it a go"),(0,i.kt)("p",null,"I've tried to go over the process as methodically as possible, after all this\nisn't a new codebase nor am I alone on this. It's always important to understand\nwho's going to be working with this, and respect the varying skill sets and\nfocuses of our peers."),(0,i.kt)("p",null,"So we know what we want, but can any of this work? Let's give it a go with the\nsimplest of steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./node_modules/.bin/esbuild js/app.js --bundle --outfile=out.js                                    \n > js/app.js:58:2: error: Unexpected "<"\n    58 \u2502   <React.StrictMode>\n       \u2575   ^\n\n1 error\n')),(0,i.kt)("p",null,"Bang! Right, that one makes sense to me, it doesn't know what JSX is yet. I'm\ngonna take a wild guess and say it won't know about the CSS or our referenced\nimages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./node_modules/.bin/esbuild js/app.js \\\n        --loader:.js=jsx \\\n        --loader:.png=file \\\n        --loader:.jpg=file \\\n        --loader:.jpeg=file \\\n        --bundle \\\n        --outdir=out\n > js/marketing/ProductsList.js:53:40: error: Unexpected ":"\n    53 \u2502     const displayList = products.filter(::this.includesText);\n       \u2575                                         ^\n\n > js/marketing/Banner.js:13:4: warning: Duplicate key "background" in object literal\n    13 \u2502     background: `-webkit-linear-gradient(to left, ${theme.palette.banner.right}, ${theme.palette.banner.left})`,\n       \u2575     ~~~~~~~~~~\n...\n')),(0,i.kt)("p",null,"Nice! Two things worth mentioning here:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We're using some non-standard ES syntax here: ",(0,i.kt)("inlineCode",{parentName:"li"},"::"),", let's replace that with\nthe equivalent ",(0,i.kt)("inlineCode",{parentName:"li"},"includesText.bind(this)"),"."),(0,i.kt)("li",{parentName:"ol"},"Some duplicate keys in our theme objects, looks like a warning but worth\ncleaning up.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./node_modules/.bin/esbuild js/app.js \\\n        --loader:.js=jsx \\\n        --loader:.png=file \\\n        --loader:.jpg=file \\\n        --loader:.jpeg=file \\\n        --bundle \\\n        --outdir=out\n\n  out/app.js                               8.0mb \u26a0\ufe0f\n  out/commcare-dhis2-JKJLM3MQ.png        471.0kb\n  ...\n  out/app.css                             85.1kb\n  ...and 145 more output files...\n\n\u26a1 Done in 651ms\n")),(0,i.kt)("p",null,"Jeepers! 651ms! That's nuts."),(0,i.kt)("p",null,"We can see it's copied our images and css into the build folder. Note that we're\nnot doing any bundle splitting right now and from the looks of it"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"... \\ \n>   --minify\n\n  out/app.js                               3.4mb \u26a0\ufe0f\n  ...\n\u26a1 Done in 611ms\n")),(0,i.kt)("p",null,"That's better, wow. It's kinda difficult to not be amazed. For context, a\nminified and split production build takes about 34s with webpack and that's on my\ni7 desktop machine, and 197s (3+ mins) on CI/CD."),(0,i.kt)("h2",{id:"whats-next"},"What's next?"),(0,i.kt)("p",null,"So our 'can we actually do this' seems to have gone pretty well so far. I'm\nreally excited about what this will give us in the end."),(0,i.kt)("p",null,"But a shell command doth not a replacement for webpack make. We still need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get Phoenix to use esbuild and watch our files as we work."),(0,i.kt)("li",{parentName:"ol"},"Ensure that our html templates serve the correct files in dev & production.",(0,i.kt)("br",{parentName:"li"}),"Including our CSS that is no longer injected into the DOM."),(0,i.kt)("li",{parentName:"ol"},"Split at least our vendored modules into their own bundle."),(0,i.kt)("li",{parentName:"ol"},"Make sure sourcemaps generate correctly for when we upload them to Sentry."),(0,i.kt)("li",{parentName:"ol"},"Have some kind of cache-busting naming scheme for production builds.")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fly.io/blog/phoenix-moves-to-esbuild-for-assets/"},"FYI: Phoenix drops webpack and npm for esbuild")," ",(0,i.kt)("a",{name:"ref1"},(0,i.kt)("sup",null,"1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://caniuse.com/es6-module"},"JavaScript modules via script tag")," ",(0,i.kt)("a",{name:"esm"},(0,i.kt)("sup",null,"2")))))}d.isMDXComponent=!0}}]);