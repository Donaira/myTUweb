(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1012:function(n,t,e){"use strict";e.r(t);var r=e(13),o=e(14),c=e(20),f=e(21),l=e(9),m=e(4),d=e(2),v=e(171),y=e(549),h=e(598),w=e(588),k=e(589),_=e(552),x=e(587),I=e(100),O=e(101);function j(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(l.a)(n);if(t){var o=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(f.a)(this,e)}}var C=function(n){Object(c.a)(e,n);var t=j(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return Object(o.a)(e,[{key:"handleClick",value:function(link){Object(O.a)(link,this)}}]),e}(d.Vue),L=C=Object(m.a)([Object(d.Component)({components:{PageHeader:v.a,HeroSlider:y.a,FooterComponent:_.a,ImageTextBlock:h.a,SimpleSteps:k.a,CardsGrid:x.a,FeaturesList:w.a,TuButton:I.a}})],C),D=(e(982),e(30)),component=Object(D.a)(L,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"container mx-auto"},[e("hero-slider",{staticClass:"mb-12 xl:mb-24",attrs:{"hero-slides":n.$t("ukrainianAccount.heroSlides")}})],1),n._v(" "),e("div",{staticClass:"bg-gray-300 mb-24 xl:mb-40"},[e("div",{staticClass:"container mx-auto"},[e("features-list",{staticClass:"mb-24 xl:mb-40 py-16",attrs:{features:n.$t("ukrainianAccount.intro.items"),id:n.$t("ukrainianAccount.intro.hash")}})],1)]),n._v(" "),e("div",{staticClass:"container mx-auto"},[e("cards-grid",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("ukrainianAccount.requirements"),"grid-options":"grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"}}),n._v(" "),e("simple-steps",{staticClass:"mb-24",attrs:{content:n.$t("ukrainianAccount.instructions"),id:n.$t("ukrainianAccount.instructions.blockId")}}),n._v(" "),e("tu-button",{staticClass:"mb-24 xl:mb-40 mx-auto",attrs:{type:"orange",title:n.$t("ukrainianAccount.instructions.cta.title")},nativeOn:{click:function(t){n.handleClick(n.$t("ukrainianAccount.instructions.cta.link"))}}}),n._v(" "),e("div",{staticClass:"legal"},[e("span",{domProps:{innerHTML:n._s(n.$t("pocketMoney.legal.text"))}}),n._v(" "),e("nuxt-link",{attrs:{to:n.localePath(n.$t("pocketMoney.legal.link"))}},[e("span",{domProps:{innerHTML:n._s(n.$t("pocketMoney.legal.linkText"))}})])],1)],1),n._v(" "),e("footer-component")],1)}),[],!1,null,"687329e5",null);t.default=component.exports},566:function(n,t,e){var content=e(577);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(44).default)("72983f75",content,!0,{sourceMap:!1})},567:function(n,t,e){var content=e(580);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(44).default)("22b53096",content,!0,{sourceMap:!1})},572:function(n,t,e){var content=e(601);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(44).default)("62464f2b",content,!0,{sourceMap:!1})},576:function(n,t,e){"use strict";e(566)},577:function(n,t,e){(t=e(33)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.cards-grid__title{\n  font-weight:300;\n  text-align:center;\n  margin-bottom:40px\n}\n@media(min-width: 1024px){\n.cards-grid__title{\n    margin-bottom:80px\n}\n}\n.card{\n  background-color:#fbfbfb;\n  border-radius:10px;\n  padding:30px;\n  font-size:21px;\n  font-weight:700;\n  display:flex;\n  flex-direction:column\n}\n.card.card-primary{\n  background-color:#2ad2c9;\n  color:#fff\n}\n.card.card-primary .card__description{\n  font-weight:500\n}\n.card img{\n  width:100px;\n  margin-bottom:20px\n}\n.card__title{\n  overflow:hidden;\n  margin-bottom:8px;\n  font-weight:300;\n  line-height:1.25;\n  word-break:break-word\n}\n.card__description{\n  font-size:16px;\n  font-weight:300\n}\n\n/* purgecss end ignore */",""]),n.exports=t},578:function(n,t,e){var map={"./1-tiffani.svg":279,"./1.svg":280,"./2-tiffani.svg":281,"./2.svg":282,"./3-tiffani.svg":283,"./3.svg":284,"./4.svg":285};function r(n){var t=o(n);return e(t)}function o(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=578},579:function(n,t,e){"use strict";e(567)},580:function(n,t,e){(t=e(33)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.simple-steps__title{\n  text-align:center;\n  font-weight:300;\n  margin-bottom:80px\n}\n.simple-steps a{\n  color:#2ad2c9\n}\n.simple-steps a:hover{\n  text-decoration:underline\n}\n.simple-steps__step{\n  padding:32px;\n  font-weight:300\n}\n@media(min-width: 1024px){\n.simple-steps__step{\n    padding:64px\n}\n}\n\n/* purgecss end ignore */",""]),n.exports=t},587:function(n,t,e){"use strict";var r=e(13),o=e(20),c=e(21),f=e(9),l=e(4),m=e(2),d=e(100);function v(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(f.a)(n);if(t){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var y=function(n){Object(o.a)(e,n);var t=v(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return e}(m.Vue);Object(l.a)([Object(m.Prop)({required:!1,default:""})],y.prototype,"content",void 0),Object(l.a)([Object(m.Prop)({required:!1,default:""})],y.prototype,"cardColor",void 0),Object(l.a)([Object(m.Prop)({required:!1,default:"grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4"})],y.prototype,"gridOptions",void 0);var h=y=Object(l.a)([Object(m.Component)({components:{TuButton:d.a}})],y),w=(e(576),e(30)),component=Object(w.a)(h,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"cards-grid"},[e("div",{staticClass:"h1 cards-grid__title",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),e("div",{class:["grid",n.gridOptions]},n._l(n.content.items,(function(t,r){return e("div",{key:"cards-grid-"+r,class:["card",n.cardColor?"card-"+n.cardColor:""]},[e("img",{attrs:{src:n.$options.filters.localisedAsset(t.img)}}),n._v(" "),e("div",{staticClass:"card__title"},[e("span",{staticClass:"font-bold",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("span",{domProps:{innerHTML:n._s(t.subtitle)}})]),n._v(" "),t.description?e("div",{staticClass:"card__description",domProps:{innerHTML:n._s(t.description)}}):n._e(),n._v(" "),t.cta?e("tu-button",{attrs:{type:"card__cta primary orange",title:t.cta.title}}):n._e()],1)})),0)])}),[],!1,null,null,null);t.a=component.exports},588:function(n,t,e){"use strict";var r=e(13),o=e(14),c=e(20),f=e(21),l=e(9),m=e(4),d=e(2),v=e(100),y=e(101);function h(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(l.a)(n);if(t){var o=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(f.a)(this,e)}}var w=function(n){Object(c.a)(e,n);var t=h(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return Object(o.a)(e,[{key:"handleClick",value:function(link){Object(y.a)(link,this)}}]),e}(d.Vue);Object(m.a)([Object(d.Prop)({required:!1,default:""})],w.prototype,"features",void 0);var k=w=Object(m.a)([Object(d.Component)({components:{TuButton:v.a}})],w),_=(e(600),e(30)),component=Object(_.a)(k,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"features__list space-y-10"},n._l(n.features,(function(t,r){return e("div",{key:"feature-row-"+r,class:["feature w-full flex flex-wrap justify-between custom-image",t.blockId]},[e("div",{staticClass:"w-full md:w-1/2"},[e("div",{staticClass:"feature__visual"},[e("div",{staticClass:"feature__circle"}),n._v(" "),t&&!t.img.includes(".mp4")?e("div",{staticClass:"feature__phone-wrapper"},[e("img",{staticClass:"feature__phone",attrs:{src:n.$options.filters.localisedAsset(t.img)}}),n._v(" "),t.icon?e("img",{staticClass:"feature__icon",attrs:{src:n.$options.filters.localisedAsset(t.icon)}}):n._e()]):t?e("div",{staticClass:"feature__phone-wrapper"},[e("video",{staticClass:"feature__phone",attrs:{autoplay:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:n.$options.filters.localisedAsset(t.img),type:"video/mp4"}}),n._v("\n            Your browser does not support the video tag.\n          ")]),n._v(" "),t.icon?e("img",{staticClass:"feature__icon",attrs:{src:n.$options.filters.localisedAsset(t.icon)}}):n._e()]):n._e()])]),n._v(" "),e("div",{staticClass:"w-full md:w-1/2 flex flex-col justify-center items-start 2xl:items-end"},[e("div",{staticClass:"feature__texts"},[e("div",{staticClass:"h2 feature__title",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("div",{staticClass:"h4 feature__text",domProps:{innerHTML:n._s(t.text)}}),n._v(" "),e("tu-button",{staticClass:"feature__cta",attrs:{type:"primary",title:t.cta.title},nativeOn:{click:function(e){return n.handleClick(t.cta.link)}}})],1)])])})),0)}),[],!1,null,null,null);t.a=component.exports},589:function(n,t,e){"use strict";var r=e(13),o=e(20),c=e(21),f=e(9),l=e(4),m=e(2);function d(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(f.a)(n);if(t){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var v=function(n){Object(o.a)(e,n);var t=d(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return e}(m.Vue);Object(l.a)([Object(m.Prop)({required:!0,default:""})],v.prototype,"content",void 0);var y=v=Object(l.a)([Object(m.Component)({components:{}})],v),h=(e(579),e(30)),component=Object(h.a)(y,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"simple-steps"},[r("div",{staticClass:"simple-steps__title h1",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),r("div",{class:["w-full lg:grid lg:gap-8 lg:grid-cols-2"]},n._l(n.content.steps,(function(t,o){return r("div",{key:"simple-step-"+o,class:[3===n.content.steps.length&&2===o?"col-span-2":"","simple-steps__step h4 flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-10 lg:space-x-14 bg-gray-300"]},[r("img",{attrs:{src:e(578)("./"+(o+1)+".svg")}}),n._v(" "),r("div",{staticClass:"simple-steps__text",domProps:{innerHTML:n._s(t)}})])})),0)])}),[],!1,null,null,null);t.a=component.exports},600:function(n,t,e){"use strict";e(572)},601:function(n,t,e){(t=e(33)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.feature{\n  margin-bottom:80px\n}\n.feature:nth-child(even){\n  flex-direction:row-reverse\n}\n@media(min-width: 768px){\n.feature__texts{\n    padding-left:40px\n}\n}\n@media(min-width: 1280px){\n.feature__texts{\n    margin:auto;\n    max-width:500px\n}\n}\n@media(min-width: 1536px){\n.feature__texts{\n    max-width:550px\n}\n}\n.feature:last-child{\n  margin-bottom:0\n}\n.feature__title{\n  font-weight:300;\n  margin-bottom:20px;\n  line-height:1.25\n}\n.feature__cta{\n  margin-top:40px\n}\n.feature__text{\n  font-weight:300\n}\n.feature__text ul{\n  list-style-type:disc;\n  margin-left:20px\n}\n.feature__visual{\n  position:relative\n}\n.feature__circle{\n  background-color:#fbfbfb;\n  width:300px;\n  height:300px;\n  border-radius:100%;\n  position:absolute;\n  left:50%;\n  top:50%;\n  transform:translate3d(-50%, -50%, 0);\n  z-index:-10\n}\n@media(min-width: 1024px){\n.feature__circle{\n    width:500px;\n    height:500px\n}\n}\n.feature__phone-wrapper{\n  position:relative;\n  margin:0 auto;\n  max-width:150px\n}\n@media(min-width: 1024px){\n.feature__phone-wrapper{\n    max-width:250px\n}\n}\n.feature.custom-image .feature__phone{\n  box-shadow:none;\n  border-radius:0;\n  max-height:300px;\n  margin:auto\n}\n@media(min-width: 1024px){\n.feature.custom-image .feature__phone{\n    max-height:500px\n}\n}\n.feature.custom-image .feature__phone-wrapper{\n  max-width:none\n}\n.feature__icon{\n  position:absolute;\n  transform:rotate(10deg);\n  bottom:-15px;\n  right:0px;\n  width:100px\n}\n@media(min-width: 1280px){\n.feature__icon{\n    bottom:-20px;\n    right:110px;\n    width:144px\n}\n}\n.feature__phone{\n  border-radius:20px;\n  box-shadow:0 4px 8px -4px #233746\n}\n@media(min-width: 1024px){\n.feature__phone{\n    border-radius:34px\n}\n}\n\n/* purgecss end ignore */",""]),n.exports=t},733:function(n,t,e){var content=e(983);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(44).default)("3749edae",content,!0,{sourceMap:!1})},982:function(n,t,e){"use strict";e(733)},983:function(n,t,e){(t=e(33)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition[data-v-687329e5]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-687329e5],.zoomIn-leave-active[data-v-687329e5],.zoomIn-enter[data-v-687329e5],.zoomIn-enter-active[data-v-687329e5]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-687329e5]{\n  -webkit-animation:bounce-out-data-v-687329e5 .3s ease;\n          animation:bounce-out-data-v-687329e5 .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-687329e5]{\n  -webkit-animation:bounce-in-data-v-687329e5 .3s ease-out;\n          animation:bounce-in-data-v-687329e5 .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-687329e5]{\n  -webkit-animation:fadeInUp-data-v-687329e5 .5s;\n          animation:fadeInUp-data-v-687329e5 .5s\n}\n.fadeInUp-leave-active[data-v-687329e5]{\n  animation:fadeInUp-data-v-687329e5 .5s reverse\n}\n.fadeInLeft-enter-active[data-v-687329e5]{\n  -webkit-animation:fadeInLeft-data-v-687329e5 .3s;\n          animation:fadeInLeft-data-v-687329e5 .3s\n}\n.fadeInLeft-leave-active[data-v-687329e5]{\n  animation:fadeInLeft-data-v-687329e5 .3s reverse\n}\n.fadeIn-enter-active[data-v-687329e5]{\n  -webkit-animation:fadeIn-data-v-687329e5 .14s ease-in;\n          animation:fadeIn-data-v-687329e5 .14s ease-in\n}\n.fadeIn-leave-active[data-v-687329e5]{\n  animation:fadeIn-data-v-687329e5 .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-687329e5]{\n  -webkit-animation:slideDown-data-v-687329e5 .3s;\n          animation:slideDown-data-v-687329e5 .3s\n}\n.slideDown-leave-active[data-v-687329e5]{\n  animation:slideDown-data-v-687329e5 .3s reverse\n}\n@-webkit-keyframes swing-data-v-687329e5{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing-data-v-687329e5{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown-data-v-687329e5{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown-data-v-687329e5{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn-data-v-687329e5{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-687329e5{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft-data-v-687329e5{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft-data-v-687329e5{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp-data-v-687329e5{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-data-v-687329e5{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in-data-v-687329e5{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in-data-v-687329e5{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out-data-v-687329e5{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out-data-v-687329e5{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle-data-v-687329e5{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle-data-v-687329e5{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle-data-v-687329e5{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle-data-v-687329e5{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.legal[data-v-687329e5]{\n  margin:160px 0;\n  font-style:italic\n}\n.legal a[data-v-687329e5]{\n  color:#2ad2c9\n}\n\n/* purgecss end ignore */",""]),n.exports=t}}]);