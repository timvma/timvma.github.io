(function(t){function e(e){for(var s,l,r=e[0],o=e[1],c=e[2],p=0,v=[];p<r.length;p++)l=r[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&v.push(i[l][0]),i[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},n=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"054a":function(t,e,a){"use strict";var s=a("d7cb"),i=a.n(s);i.a},"086e":function(t,e,a){},1714:function(t,e,a){},"17a1":function(t,e,a){},"199c":function(t,e){},"23be":function(t,e,a){"use strict";var s=a("199c"),i=a.n(s);e["default"]=i.a},2563:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"page-change"}},[a("router-view")],1)],1)},i=[]},"3dfd":function(t,e,a){"use strict";var s=a("2563"),i=a("23be"),n=(a("5c0b"),a("2877")),l=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=l.exports},4039:function(t,e,a){"use strict";var s=a("f345"),i=a.n(s);i.a},4843:function(t,e,a){"use strict";var s=a("8e4c"),i=a.n(s);i.a},"49f8":function(t,e,a){var s={"./en.json":"edd4","./jp.json":"9e97"};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="49f8"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=a("3dfd"),n=a("8c4f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"bg-top"}),a("div",{staticClass:"wrapper"},[a("main-nav"),a("page-hero"),a("page-intro"),a("page-about"),a("page-project"),a("page-skill")],1),a("page-footer")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",[a("span",{staticClass:"mainnavi",on:{click:function(e){t.navMenu=!t.navMenu,t.menus=!t.menus}}},[a("i",{class:{active:t.menus}})]),a("span",{staticClass:"sidedrawer",on:{click:function(e){t.sideMenu=!t.sideMenu}}},[a("i",{class:{active:t.menus}})]),a("transition",{attrs:{name:"lang"}},[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.navMenu,expression:"navMenu"}]},[a("li",[a("router-link",{attrs:{to:"/about"}},[t._v(t._s(t.$t("h-about")))])],1),a("li",[a("router-link",{attrs:{to:"/projects"}},[t._v(t._s(t.$t("h-projects")))])],1),a("li",[a("a",{attrs:{href:"#skills"}},[t._v(t._s(t.$t("h-skills")))])]),a("li",[a("router-link",{attrs:{to:"/contact"}},[t._v(t._s(t.$t("h-contact")))])],1)])]),a("div",{staticClass:"locale-changer"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.$i18n,"locale",e.target.multiple?a:a[0])}}},t._l(t.langs,(function(e,s){return a("option",{key:"Lang"+s,domProps:{value:e}},[t._v(t._s(e))])})),0)])],1),a("transition",{attrs:{name:"slide"}},[t.sideMenu?a("aside",{staticClass:"sidenav",attrs:{id:"mySidenav",role:"navigation"},on:{click:function(e){t.sideMenu=!t.sideMenu}}},[a("div",[a("router-link",{attrs:{to:"/"}},[t._v("Me")]),a("router-link",{attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("h-about")))]),a("router-link",{attrs:{to:"/projects"}},[t._v(t._s(t.$t("h-projects")))]),a("a",{attrs:{href:"#skills"}},[t._v(t._s(t.$t("h-skills")))]),a("router-link",{attrs:{to:"/contact"}},[t._v(t._s(t.$t("h-contact")))])],1)]):t._e()])],1)},c=[],u={name:"MainNav",data:function(){return{navMenu:!1,menus:!1,sideMenu:!1,langs:["en","jp"]}}},p=u,v=(a("64e8"),a("2877")),_=Object(v["a"])(p,o,c,!1,null,null,null),d=_.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero"},[a("div",{staticClass:"hero-text"},[a("h1",[t._v(t._s(t.$t("hero-content-1")))]),a("h2",[t._v(t._s(t.$t("hero-content-2"))+" ")]),a("p",[a("vue-typer",{class:t.typing,attrs:{text:["Debug","Create","Design","Improve","Find"],repeat:1/0,shuffle:!0,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":250,"erase-style":"clear","erase-on-complete":!1,"caret-animation":"phase"}})],1),a("a",{staticClass:"link1",attrs:{href:"#project"}},[t._v(t._s(t.$t("hero-content-4")))])])])},b=[],m=a("e956"),h={name:"page-hero",components:{VueTyper:m["VueTyper"]}},g=h,C=(a("4843"),Object(v["a"])(g,f,b,!1,null,null,null)),k=C.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"intro"}},[a("div",{staticClass:"intro-wrap"},[a("span",{staticClass:"intro-bar"}),a("div",{staticClass:"intro-center img-hover1"},[a("router-link",{attrs:{to:"/about"}},[a("img",{attrs:{src:"img/half-face.webp",alt:"halfface"}})])],1),a("div",{staticClass:"intro-left"},[a("h6",[t._v("私")]),a("p",[a("vue-scramble-text",{attrs:{text:"ABOUT"}}),t._v(" アバウト ACERCA de около TENTANG ТУХАЙ बारेमा ÜBER ZOKHUDZA À Propos کے بارے میں เกี่ยวกับ ກ່ຽວກັບ ਬਾਰੇ பற்றி 关于 약 tungkol ТУРЫНДА 關於 trong khoảng "),a("br"),a("br"),t._v(" ACERCA de около ТУХАЙ बारेमा ÜBER À Propos کے بارے میں เกี่ยวกับ ZOKHUDZA ກ່ຽວກັບ ਬਾਰੇ பற்றி 关于 khoảng TENTANG 약 TUNGKOL ТУРЫНДА 關於 trong アバウト ਬਾਰੇ பற்றி 关于 약 약 "),a("vue-scramble-text",{attrs:{text:"ABOUT"}}),t._v(" ТУРЫНДА 關於 trong khoảng "),a("br"),a("br"),t._v(" sHAK アバウト ABOUT ")],1)]),a("div",{staticClass:"intro-right"},[a("p",[t._v("アバウト ACERCA de около TENTANG ТУХАЙ बारेमा ÜBER ZOKHUDZA À Propos کے بارے میں เกี่ยวกับ ກ່ຽວກັບ ਬਾਰੇ பற்றி 关于 약 tungkol ТУРЫНДА 關於 trong khoảng tungkol ТУРЫНДА 關於 trong khoảng เกี่ยวกับ "),a("vue-scramble-text",{attrs:{text:"ABOUT"}}),t._v(" ກ່ຽວກັບ ਬਾਰੇ பற்றி 关于 khoảng "),a("br"),a("br"),t._v(" ТУХАЙ बारेमा ÜBER À Propos کے بارے میں ACERCA de около ТУХАЙ बारेमा ÜBER À Propos کے بارے میں TENTANG 약 TUNGKOL ТУРЫНДА 關於 trong アバウト ਬਾਰੇ பற்றி 关于 약 ТУХАЙ बारेमा ÜBER ZOKHUDZA À Propos "),a("br"),a("br"),t._v(" เกี่ยวกับ ກ່ຽວກັບ ਬਾਰੇ பற்றி ")],1)])])])},w=[],E=a("4e0b"),y=a.n(E),$={name:"page-intro",components:{VueScrambleText:y.a}},A=$,O=Object(v["a"])(A,j,w,!1,null,null,null),S=O.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"about"}},[a("div",[a("h6",{staticClass:"heading"},[t._v(t._s(t.$t("h-about")))]),a("object",{attrs:{type:"image/svg+xml",data:"img/about.svg"}},[t._v("Your browser does not support SVGs")])]),a("div",[a("strong",{staticClass:"letter"},[t._v(t._s(t.$t("about-content-1")))]),a("p",[t._v(t._s(t.$t("about-content-2")))])]),a("div",[a("strong",{staticClass:"letter"},[t._v(t._s(t.$t("about-content-3")))]),a("p",[t._v(t._s(t.$t("about-content-4"))+" ")]),a("br"),a("a",{staticClass:"link2 center",attrs:{href:"https://www.fb.com/timvma"}},[t._v(t._s(t.$t("about-content-5")))])]),t._m(0)])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img-hover1"},[a("img",{attrs:{src:"img/moon.webp",alt:"moon"}})])}],P={name:"page-about"},I=P,N=Object(v["a"])(I,x,T,!1,null,null,null),R=N.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"project"}},[a("h6",{staticClass:"heading"},[t._v(t._s(t.$t("h-projects")))]),a("div",{staticClass:"row"},[a("div",{staticClass:"col p-1"},[a("p",[t._v(t._s(t.$t("project-content-1"))),a("router-link",{staticClass:"link2 f-right",attrs:{to:"/projects"}},[t._v(t._s(t.$t("project-content-3")))]),a("br"),t._v(t._s(t.$t("project-content-2")))],1)]),a("div",{staticClass:"col"})]),a("hooper",[a("slide",[a("router-link",{attrs:{to:"/projects/crazetrip"}},[a("img",{attrs:{src:"img/projects/crazetrip.webp",alt:"crazetrip"}})])],1),a("slide",[a("router-link",{attrs:{to:"/projects/suzuki"}},[a("img",{attrs:{src:"img/projects/suzuki.webp",alt:"suzuki"}})])],1),a("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),a("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],1)],1)},M=[],B=(a("955f"),a("7e04")),z={name:"page-project",components:{Hooper:B["a"],Slide:B["d"],HooperPagination:B["c"],HooperNavigation:B["b"]}},D=z,G=Object(v["a"])(D,L,M,!1,null,null,null),U=G.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"skills"}},[a("div",{staticClass:"parts"},[a("h6",{staticClass:"heading"},[t._v(t._s(t.$t("h-develop")))]),a("p",[t._v(t._s(t.$t("skills-content-1"))),a("br"),a("br"),t._v(" [ ME RIGHT NOW ]"),a("br"),a("br"),t._v(" FRONT : "),a("i",{staticClass:"fab fa-css3"}),t._v(" / "),a("i",{staticClass:"fab fa-vuejs"}),t._v(" / "),a("i",{staticClass:"fab fa-js-square"}),t._v(" / "),a("i",{staticClass:"fab fa-sass"}),a("br"),t._v(" BACK: "),a("i",{staticClass:"fab fa-laravel"}),t._v(" "),a("br"),t._v(" DATABASE: "),a("i",{staticClass:"fas fa-database"}),t._v(" "),a("br"),a("br")])]),a("div",{staticClass:"parts"},[a("br"),a("br"),a("br"),a("accordion",{attrs:{title:"LANGUAGE"}},[a("ul",{staticClass:"list3"},[a("li",{attrs:{title:"Noob"}},[a("label",{staticStyle:{"--skill-level":"100%"}},[a("i",{staticClass:"fab fa-php"}),t._v(" PHP")])]),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[a("i",{staticClass:"fas fa-database"}),t._v(" MYSQL")])]),a("hr"),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[a("i",{staticClass:"fab fa-js"}),t._v(" JAVASCRIPT")])]),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("JAVA")])]),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("DART")])])])]),a("accordion",{attrs:{title:"FRAMEWORK"}},[a("ul",{staticClass:"list3"},[a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[a("i",{staticClass:"fab fa-laravel"}),t._v(" LARAVEL")])]),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("YII2")])]),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[a("i",{staticClass:"fab fa-vuejs"}),t._v(" VUE.js")])]),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("FLUTTER")])]),a("hr"),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[a("i",{staticClass:"fab fa-sass"}),t._v(" SASS")])]),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[a("i",{staticClass:"fab fa-bootstrap"}),t._v(" BOOTSTRAP")])]),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("MATERIALIZE")])]),a("li",{attrs:{title:""}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("BULMA")])])]),a("ul",{staticClass:"list1"},[a("li",[a("p",[t._v("Node")]),a("span",[t._v("Scripts")])]),a("li",[a("p",[t._v("SSH")])])])]),a("accordion",{attrs:{title:"SOFTWARE"}},[a("ul",{staticClass:"list3"},[a("li",{attrs:{title:"Confident"}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("PHOTOSHOP")])]),a("li",{attrs:{title:"Not Quite there yet"}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("ILLUSTRATOR")])]),a("li",{attrs:{title:"Confident"}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("PREMIERE PRO")])]),a("li",{attrs:{title:"Confident"}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("LIGHTROOM")])]),a("li",{attrs:{title:"Confident"}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("XAMPP")])]),a("li",{attrs:{title:"Confident"}},[a("label",{staticStyle:{"--skill-level":"100%"}},[t._v("FILEZILLA")])])])]),a("accordion",{attrs:{title:"DEV METHODS"}},[a("ul",{staticClass:"list1"},[a("li",{attrs:{title:"Used"}},[a("p",[t._v("Agile")])]),a("li",{attrs:{title:"Used"}},[a("p",[t._v("Scrum")])]),a("li",{attrs:{title:"Used"}},[a("p",[t._v("Waterfall")])])])]),a("accordion",{attrs:{title:"DEV OPS"}},[a("ul",{staticClass:"list1"},[a("li",{attrs:{title:"Confident"}},[a("p",[t._v("Amazon Web Services")])]),a("li",{attrs:{title:"Not Quite there yet"}},[a("p",[t._v("Azure")])]),a("li",{attrs:{title:"Not Quite there yet"}},[a("p",[t._v("Github")])])])]),a("br"),a("p",{staticClass:"txtHide"},[t._v(t._s(t.$t("skills-content-2")))]),a("br")],1)])},V=[],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"accordion",class:{active:t.isActive},on:{click:function(e){t.isActive=!t.isActive}}},[t._v(t._s(t.title))]),a("transition",{attrs:{name:"acc"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"panel"},[t._t("default")],2)])],1)},F=[],q={name:"accordion",props:["title"],data:function(){return{isActive:!1}}},J=q,K=(a("b7f9"),Object(v["a"])(J,W,F,!1,null,"1b9cc0ec",null)),Z=K.exports,Y={name:"page-skill",components:{Accordion:Z}},Q=Y,X=Object(v["a"])(Q,H,V,!1,null,null,null),tt=X.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer container"},[a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"wrapper"},[a("a",{staticClass:"navi-open",attrs:{href:"#",title:"click"}}),a("p",[t._v("All Rights Reserved © 2020 Tim Ambi")]),a("p",[t._v("Experimental Coding")]),a("br"),t._m(0)])])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"sns-list container"},[a("li",[a("a",{attrs:{href:"mailto:timawbi@gmail.com",title:"Email"}},[a("i",{staticClass:"fa fa-envelope"})])]),a("li",[a("a",{attrs:{href:"https://www.fb.com/timambi",title:"Facebook"}},[a("i",{staticClass:"fa fa-facebook-square"})])]),a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/timambi/",title:"LinkedIn"}},[a("i",{staticClass:"fa fa-linkedin"})])]),a("li",[a("a",{attrs:{href:"#",title:"Resume"}},[a("i",{staticClass:"fa fa-file"})])])])}],st={name:"page-footer"},it=st,nt=Object(v["a"])(it,et,at,!1,null,null,null),lt=nt.exports,rt={data:function(){return{whatSkill:0}},components:{MainNav:d,PageHero:k,PageIntro:S,PageAbout:R,PageProject:U,PageSkill:tt,PageFooter:lt}},ot=rt,ct=Object(v["a"])(ot,l,r,!1,null,null,null),ut=ct.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",attrs:{id:"contact-page"}},[a("div",[a("go-back"),a("h6",{staticClass:"heading"},[t._v(t._s(t.$t("h-contact")))])],1),a("div",{staticClass:"page-content"},[a("section",[a("p",[t._v(t._s(t.$t("contact-content-1"))),a("br"),a("br"),t._v(t._s(t.$t("contact-content-2")))]),a("br"),a("ul",{staticClass:"list1"},[a("li",[a("span",[t._v(t._s(t.$t("contact-content-3")))]),a("a",{attrs:{href:"mailto:timawbi@gmail.com"}},[t._v("timawbi@gmail.com")])]),a("li",[a("span",[t._v(t._s(t.$t("contact-content-4")))]),a("a",{attrs:{href:"https://www.facebook.com/timambi"}},[t._v("Tim Vma")])])])])]),a("div",{staticClass:"overlay"},[t._v("Eメール")])])},vt=[],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"page-nav",on:{click:t.goback}},[t._v("BACK")])},dt=[],ft={methods:{goback:function(){return this.$router.go(-1)}}},bt=ft,mt=(a("4039"),Object(v["a"])(bt,_t,dt,!1,null,"43f0f31a",null)),ht=mt.exports,gt={components:{GoBack:ht}},Ct=gt,kt=Object(v["a"])(Ct,pt,vt,!1,null,null,null),jt=kt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",attrs:{id:"about-page"}},[a("go-back"),a("div",[a("h6",{staticClass:"heading"},[t._v(t._s(t.$t("h-about")))])]),a("div",{staticClass:"page-content"},[a("section",[a("div",{staticClass:"about-intro"},[a("p",[t._v(" "+t._s(t.$t("about-content-6"))),a("br"),a("br"),t._v(" "+t._s(t.$t("about-content-7"))),a("br"),a("br"),t._v(" "+t._s(t.$t("about-content-8")))])]),a("ul",{staticClass:"list2"},[a("li",[a("p",[t._v(t._s(t.$t("name")))]),a("p",{},[t._v(t._s(t.$t("timambi")))])]),a("li",[a("span",[t._v(t._s(t.$t("title")))]),a("p",[t._v(t._s(t.$t("about-content-9")))])]),a("li",[a("span",[t._v(t._s(t.$t("gender")))]),a("span",[t._v(t._s(t.$t("male")))])]),a("li",[a("span",[t._v(t._s(t.$t("address")))]),a("span",[t._v(t._s(t.$t("japan")))])]),a("li",[a("span",[t._v(t._s(t.$t("age")))]),a("span",[t._v("24")])]),a("li",[a("span",[t._v(t._s(t.$t("level")))]),a("span",[t._v(t._s(t.$t("noob")))])])])]),a("section",[a("h3",{staticClass:"bar-text"},[t._v(t._s(t.$t("education")))]),t._m(0),a("h3",{staticClass:"bar-text"},[t._v(t._s(t.$t("experience")))]),t._m(1),a("h3",{staticClass:"bar-text"},[t._v(t._s(t.$t("certificate")))]),a("ul",[a("li",{staticClass:"box-list"},[t._m(2),a("span",[a("p",[t._v(t._s(t.$t("jlpt")))])]),t._m(3)]),t._m(4),a("li",{staticClass:"box-empty"}),a("br")])]),a("section",[a("h3",{staticClass:"bar-text"},[t._v(t._s(t.$t("abilities")))]),t._m(5),t._m(6),a("p",[t._v(t._s(t.$t("about-content-10")))]),a("accordion",{attrs:{title:t.$t("hobbies")}},[a("p",[t._v(" Mountain Climbing"),a("br"),t._v(" Guitar"),a("br")])])],1)]),a("div",{staticClass:"overlay"},[t._v("私のこと")])],1)},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",{staticClass:"box-list"},[a("span",[a("i",{staticClass:"material-icons"},[t._v("article")])]),a("span",[a("a",{attrs:{href:"https://www.uc-bcf.edu.ph/"}},[a("p",[t._v("University of the Cordilleras")])])]),a("span",{attrs:{title:"Bachelor of Science in Information Technology"}},[t._v("2018")])]),a("li",{staticClass:"box-list"},[a("span",[a("i",{staticClass:"material-icons"},[t._v("article")])]),a("span",[a("a",{attrs:{href:"https://www.facebook.com/Irisan-National-HIGH-School-1375998612721476/"}},[a("p",[t._v("Irisan National High School")])])]),a("span",{attrs:{title:"Secondary Education"}},[t._v("2012")])]),a("li",{staticClass:"box-empty"}),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",{staticClass:"box-list"},[a("span",[a("i",{staticClass:"material-icons"},[t._v("build")])]),a("span",[a("p",[t._v("マシンオペレーター")])]),a("span",[t._v("6/18 ~")])]),a("li",{staticClass:"box-list"},[a("span",[a("i",{staticClass:"material-icons"},[t._v("work")])]),a("span",[a("p",[t._v(" Web Developer")])]),a("span",[t._v("6/M")])]),a("li",{staticClass:"box-empty"}),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"material-icons"},[t._v("translate")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("a",{attrs:{href:"https://academy.exceedlms.com/student/award/10325490"}},[t._v(" N3")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"box-list"},[a("span",[a("i",{staticClass:"material-icons"},[t._v("phonelink")])]),a("span",[a("p",[t._v("Mobile Sites Certification")])]),a("span",[a("a",{attrs:{href:"https://academy.exceedlms.com/student/award/10325490"}},[t._v("Google")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list2"},[a("li",[a("p",[t._v("Innovative")])]),a("li",[a("p",[t._v("Creative Thinkiing")])]),a("li",[a("p",[t._v("Teamplayer")]),a("p",[t._v("Support")])]),a("li",[a("p",[t._v("Teachable")]),a("p",[t._v("Adaptive")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",{staticClass:"box-list"},[a("span",[a("i",{staticClass:"material-icons"},[t._v("code")])]),a("span",[a("p",[t._v("Web Desinger / Programmer")])]),a("span",[t._v("Posible")])]),a("li",{staticClass:"box-list"},[a("span",[a("i",{staticClass:"material-icons"},[t._v("architecture")])]),a("span",[a("p",[t._v("Graphic Designer")])]),a("span",[t._v("Posible")])]),a("li",{staticClass:"box-list"},[a("span",[a("i",{staticClass:"material-icons"},[t._v("monochrome_photos")])]),a("span",[a("p",[t._v("Video Editor / Photographer")])]),a("span",[a("a",{attrs:{href:"https://www.fb.com/timvma"}},[t._v("Seasonal")])])]),a("li",{staticClass:"box-list"},[a("span",[a("i",{staticClass:"material-icons"},[t._v("device_unknown")])]),a("span",[a("p",[t._v("IT Help Desk ")])]),a("span",[t._v("Posible")])])])}],yt={components:{Accordion:Z,GoBack:ht}},$t=yt,At=Object(v["a"])($t,wt,Et,!1,null,null,null),Ot=At.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page",attrs:{id:"project-page"}},[a("div",[a("go-back"),a("h6",{staticClass:"heading"},[t._v(t._s(t.$t("h-projects")))])],1),a("div",{staticClass:"page-content"},[a("section",{on:{click:t.qwe2}},[a("p",[t._v("In Progress ...")]),a("div",{staticClass:"hiding"},[a("slides",{attrs:{sliders:t.sliding}}),a("p",[t._v("qwes")]),a("br"),a("br"),a("p",[t._v("qwes")]),a("br"),a("br"),a("p",[t._v("qwes")]),a("br"),a("br"),a("p",[t._v("qwes")]),a("br"),a("br")],1)])]),a("div",{staticClass:"overlay"},[t._v(t._s(t.$t("h-projects")))])])},xt=[],Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider"},[a("ul",t._l(t.sliders,(function(e){return a("li",{key:e+t.index},[t.current==t.key?a("div",[a("h1",[t._v(t._s(e.title))]),a("h1",[t._v(t._s(e.second))]),a("p",[t._v(t._s(e.description))]),a("p",[t._v(t._s(e.index))])]):t._e(),a("img",{attrs:{src:e.img,alt:""}})])})),0),a("ol",t._l(t.sliders,(function(t){return a("li",{key:t})})),0),a("button",{on:{click:t.test}},[t._v("WE")])])},Pt=[],It={props:["sliders"],data:function(){return{current:1}},methods:{test:function(){alert(this.index)}}},Nt=It,Rt=(a("609f"),Object(v["a"])(Nt,Tt,Pt,!1,null,null,null)),Lt=Rt.exports,Mt={data:function(){return{sliding:[{title:"Lorem",second:"Ipsum",description:"web dev",img:"img/www_03.jpg"},{title:"Craze",second:"Trip",description:"web design",img:"img/www_06.jpg"},{title:"Watshu",second:"Meat",description:"Logo Design",img:"img/www_09.jpg"}],qwe:["<img src='img/DSC_9827.jpg'>","qwe","qwe","qwe"]}},methods:{qwe2:function(){console.log(this.qwe)}},components:{GoBack:ht,Slides:Lt}},Bt=Mt,zt=(a("054a"),Object(v["a"])(Bt,St,xt,!1,null,null,null)),Dt=zt.exports,Gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hoop1"},[a("img",{attrs:{src:"img/11.jpg",alt:"",preload:""}}),a("img",{attrs:{src:"img/12.jpg",alt:"",preload:""}}),a("img",{attrs:{src:"img/7.jpg",alt:"",preload:""}}),a("img",{attrs:{src:"img/27.jpg",alt:"",preload:""}}),a("img",{attrs:{src:"img/2.jpg",alt:"",preload:""}})])}],Ht={components:{}},Vt=Ht,Wt=Object(v["a"])(Vt,Gt,Ut,!1,null,null,null),Ft=Wt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notfound"},[a("section",[a("h6",[t._v("PAGE NOT FOUND")]),t._m(0),a("br"),a("router-link",{attrs:{to:"/"}},[t._v("Home")]),a("img",{attrs:{src:"img/logo.svg",alt:"404"}})],1)])},Jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("why are you here?"),a("br"),t._v("Go Back now.")])}],Kt=(a("b3e9"),{}),Zt=Object(v["a"])(Kt,qt,Jt,!1,null,"86c16c2e",null),Yt=Zt.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"left"},[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"material-icons"},[t._v("chevron_left")])])],1),a("h6",{staticClass:"heading"},[t._v("Instajob")]),a("div",{staticClass:"overlay"},[t._v("私のこと")])])},Xt=[],te={data:function(){return{accordion:!1,active:""}},methods:{showAccordion:function(){0==this.accordion?this.nextElementSibling=!0:this.accordion=!1}}},ee=te,ae=Object(v["a"])(ee,Qt,Xt,!1,null,null,null),se=ae.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-projects",attrs:{id:"crazetrip"}},[a("go-back"),a("h6",{staticClass:"heading"},[t._v("crazetrip")]),a("img",{attrs:{src:"/img/projects/crazetrip.jpg",alt:""}}),t._m(0),t._m(1),a("section",{staticClass:"p-footer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("video",{attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[a("source",{attrs:{src:"/video/2.mp4",type:"video/mp4"}}),t._v("Your browser does not support the video tag. ")])])]),t._m(2)]),a("a",{staticClass:"link2",attrs:{href:"#crazetrip"}},[t._v("Top")]),a("a",{staticClass:"link2",attrs:{href:"http://www.crazetrip.com/"}},[t._v("Visit Website ")]),a("a",{staticClass:"link2",attrs:{href:"https://www.facebook.com/CrazeTrip/"}},[t._v("Facebook")]),t._m(3),a("router-link",{staticClass:"link2",attrs:{to:"/projects"}},[t._v("ALL PROJECTS")])],1)},ne=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"p-intro"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("ul",{staticClass:"list4"},[a("li",[a("p",[t._v("YEAR")]),t._v("2018")]),a("li",[a("p",[t._v("COMPANY")]),t._v("Crazetrip")]),a("li",[a("p",[t._v("ROLE")]),t._v("WEB CODER / WEB DESIGN")])])]),a("div",{staticClass:"col"},[a("p",[t._v("CrazeTrip is a website that promotes the unseen and unheard places of the Philippines. They believe in making a difference and pledge to donate 10% of their profits to the less privileged children in the Philippines so that they can enjoy better living standards and education. .")])])]),a("hr")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"p-content"},[a("img",{attrs:{src:"/img/projects/ct1.jpg",alt:""}}),a("img",{attrs:{src:"/img/projects/ct2.jpg",alt:""}}),a("img",{attrs:{src:"/img/projects/ct3.jpg",alt:""}}),a("img",{attrs:{src:"/img/projects/ct6.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"device-preview"},[a("div",[a("img",{attrs:{src:"/img/projects/ct5.jpg",alt:"mobile-preview"}})])]),a("img",{staticStyle:{width:"400px"},attrs:{src:"/img/projects/ct4.jpg",alt:""}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{},[t._v(" *Possible unavailable or content have been changed"),a("br"),a("br")])}],le={components:{GoBack:ht}},re=le,oe=(a("74b2"),Object(v["a"])(re,ie,ne,!1,null,null,null)),ce=oe.exports,ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-projects",attrs:{id:"suzuki"}},[a("go-back"),a("h6",{staticClass:"heading"},[t._v("Suzuki")]),a("img",{attrs:{src:"/img/projects/suzuki.jpg",alt:""}}),t._m(0),t._m(1),a("a",{staticClass:"link2",attrs:{href:"#suzuki"}},[t._v("Top")]),a("a",{staticClass:"link2",attrs:{href:"https://www.suzuki.com.ph/"}},[t._v("Visit Website ")]),t._m(2),a("router-link",{staticClass:"link2",attrs:{to:"/projects"}},[t._v("ALL PROJECTS")])],1)},pe=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"p-intro"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("ul",{staticClass:"list4"},[a("li",[a("p",[t._v("YEAR")]),t._v("2018")]),a("li",[a("p",[t._v("COMPANY")]),t._v("Suzuki")]),a("li",[a("p",[t._v("ROLE")]),t._v("WEB CODER / WEB DESIGN")])])]),a("div",{staticClass:"col"},[a("p",[t._v("Suzuki Philippines - Coded the homepage of Suzuki Philippines when I was working for VirtuoSearch Philippines in 2018,Minimalist design in all aspect.")])])]),a("hr")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"p-content"},[a("img",{attrs:{src:"/img/projects/s1.jpg",alt:""}}),a("img",{attrs:{src:"/img/projects/s2.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{},[t._v(" *Possible unavailable or content have been changed"),a("br"),a("br")])}],ve={components:{GoBack:ht}},_e=ve,de=(a("aabe"),Object(v["a"])(_e,ue,pe,!1,null,null,null)),fe=de.exports;s["default"].use(n["a"]);var be=new n["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:ut},{path:"/about",name:"About",component:Ot},{path:"/contact",name:"Contact",component:jt},{path:"/projects",name:"Project",component:Dt},{path:"/projects/instajob",name:"Instajob",component:se},{path:"/projects/crazetrip",name:"Crazetrip",component:ce},{path:"/projects/suzuki",name:"Suzuki",component:fe},{path:"/Try",name:"Try",component:Ft},{path:"*",name:"NotFound",component:Yt}]}),me=be,he=(a("4160"),a("d3b7"),a("ac1f"),a("466d"),a("159b"),a("ddb0"),a("a925"));function ge(){var t=a("49f8"),e={};return t.keys().forEach((function(a){var s=a.match(/([A-Za-z0-9-_]+)\./i);if(s&&s.length>1){var i=s[1];e[i]=t(a)}})),e}s["default"].use(he["a"]);var Ce=new he["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:ge()});s["default"].config.productionTip=!1,new s["default"]({el:"#app",router:me,i18n:Ce,render:function(t){return t(i["default"])}})},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"5ffb":function(t,e,a){},"609f":function(t,e,a){"use strict";var s=a("17a1"),i=a.n(s);i.a},"64e8":function(t,e,a){"use strict";var s=a("1714"),i=a.n(s);i.a},"73bf":function(t,e,a){},"74b2":function(t,e,a){"use strict";var s=a("5ffb"),i=a.n(s);i.a},7907:function(t,e,a){},"8e4c":function(t,e,a){},"9c0c":function(t,e,a){},"9e97":function(t){t.exports=JSON.parse('{"hero-content-1":"ティムです","hero-content-2":"WEB開発者","hero-content-3":"を開発および設計する","hero-content-4":"プロジェクトを見てください","about-content-1":"俺","about-content-2":"はティムと申します。先ずはあたしの日本語は謝るします。自分は[多芸は無芸]な表現みたいです。何かを作成したいときは、作成方法を学び、プロジェクトに適用します。","about-content-3":"も","about-content-4":"写真を撮っていますので、よろしければ見ってください","about-content-5":"写真撮影","about-content-6":"まず、ウェブサイトにアクセスしていただきありがとうございます。","about-content-7":"基本的に私はたくさんのことをしますが、すべてをマスターするわけではないと言っています。","about-content-8":"ゼロから何かを作ることに情熱を注いでいます。","about-content-9":"何でも屋","about-content-10":"バグが嫌いですが、それを解決するのが大好きです。 苦労しました。 それを改善しようとしています。失敗が私を妨げたり、あきらめたりするのを妨げませんでした。 それは難しいことであり、良くなる前にさらに難しくなる可能性が高いですが、確かにそれだけの価値はあります。","skills-content-1":"ここに、私がいくつかのプロジェクトを開発するために使用してきた、開発言語、ソフトウェア、技術を長年にわたって獲得したいくつかのスキルがあります。","skills-content-2":"特にうまくいくなら、一から何かを学んだとき、それを嬉です。","project-content-1":"苦労なくして得るものなし","project-content-2":"働いたいくつかのプロジェクトがあります。","project-content-3":"詳細","footer-content-3":"無断転載禁止","contact-content-1":"接続している限り、私はあなたのメッセージを受け取ります。","contact-content-2":"1日程度で返信します。","contact-content-3":"メール","contact-content-4":"フェイスブック","name":"名前","title":"題名","timambi":"ティム　アンビ","gender":"性別","male":"男性","address":"住所","japan":"日本","age":"年齢","level":"レベル","noob":"アマ","education":"教育","experience":"経験","abilities":"能力","hobbies":"趣味","certificate":"証明書","jlpt":"日本語能力試験","h-about":"私","h-projects":"プロジェクト","h-skills":"スキル","h-develop":"発展","h-contact":"お問い合わせ"}')},aabe:function(t,e,a){"use strict";var s=a("73bf"),i=a.n(s);i.a},b3e9:function(t,e,a){"use strict";var s=a("7907"),i=a.n(s);i.a},b7f9:function(t,e,a){"use strict";var s=a("086e"),i=a.n(s);i.a},d7cb:function(t,e,a){},edd4:function(t){t.exports=JSON.parse('{"hero-content-1":"TIM AMBI","hero-content-2":"WEB DEVELOPER","hero-content-3":"","hero-content-4":"- See Projects","about-content-1":"I","about-content-2":"am Tim Ambi, I descibed myself as a  /Jack of all Trades Master of Nothing/, When I want to create something I learn how to create it then apply it on my projects.","about-content-3":"M","about-content-4":"I also do photography so if you want, you could check it out.","about-content-5":"Photography","about-content-6":"First of all, Thank You for visiting my website.","about-content-7":"Basically saying I do alot of things but do not master it all.","about-content-8":"I am passionate in creating something from scratch.","about-content-9":"Jack of all Trades","about-content-10":"I hate bugs but I love solving it. I struggled; I try to improve at it, I didn’t let failures hold me back or prevent me from giving up. It’s difficult, and most likely it will get more difficult before it gets better, but it’s worth it for sure.","skills-content-1":"Here are some skills I have gained through out the years, language, softwares and techniques that I\'ve used to develop several projects.","skills-content-2":"I love it when I learned something from scratch especially if it works.","project-content-1":"No pain no Gain","project-content-2":"Here are few projects I\'ve worked at.","project-content-3":"More","contact-content-1":"As long as I\'m connected I\'ll get your message.","contact-content-2":"Replies within a day or so.","contact-content-3":"Email","contact-content-4":"Facebook","name":"Name","title":"Title","timambi":"Tim Ambi","gender":"Gender","male":"Male","address":"Address","japan":"Japan","age":"Age","level":"Level","noob":"Noobs","education":"Education","experience":"Experience","abilities":"Abilities","hobbies":"Hobbies","certificate":"Certificate","jlpt":"Japanese Language Proficiency Test","h-about":"ABOUT","h-projects":"PROJECTS","h-skills":"SKILLS","h-develop":"DEVELOP","h-contact":"CONTACT"}')},f345:function(t,e,a){}});
//# sourceMappingURL=app.9f39b1e6.js.map