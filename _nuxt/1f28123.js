(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1056:function(n,t,e){"use strict";e.r(t);var r=e(10),o=e(17),c=e(18),f=e(6),l=e(3),m=e(1),d=e(173),y=e(579),v=e(676),k=e(606),h=e(621),w=e(582),x=e(620),_=e(603),I=e(619);function O(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(f.a)(n);if(t){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var j=function(n){Object(o.a)(e,n);var t=O(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return e}(m.Vue),C=j=Object(l.a)([Object(m.Component)({components:{PageHeader:d.a,HeroSlider:y.a,TwoBlocks:v.a,ImageTextBlock:k.a,SimpleSteps:h.a,FooterComponent:w.a,FeaturesList:x.a,FeaturesSlider:_.a,CardsGrid:I.a}})],j),P=e(22),component=Object(P.a)(C,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"container mx-auto"},[e("hero-slider",{staticClass:"mb-24 xl:mb-40",attrs:{"hero-slides":n.$t("kidsPage.heroSlides")}}),n._v(" "),e("two-blocks",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("kidsPage.twoBlocks")}})],1),n._v(" "),e("div",{staticClass:"bg-gray-300 mb-24 xl:mb-40"},[e("div",{staticClass:"container mx-auto"},[e("image-text-block",{staticClass:"image-align-bottom",attrs:{content:n.$t("kidsPage.mobileBankingForKids")}})],1)]),n._v(" "),e("div",{staticClass:"container mx-auto"},[e("cards-grid",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("kidsPage.securityCards"),id:n.$t("kidsPage.securityCards.blockId")}}),n._v(" "),e("simple-steps",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("kidsPage.openingAccount"),id:n.$t("kidsPage.openingAccount.blockId")}}),n._v(" "),e("features-list",{staticClass:"mb-24 xl:mb-40",attrs:{features:n.$t("kidsPage.featuresList"),id:n.$t("kidsPage.kidsFeaturesId")}}),n._v(" "),e("features-slider",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("kidsPage.featuresSlider"),id:n.$t("kidsPage.featuresSlider.blockId")}})],1),n._v(" "),e("footer-component")],1)}),[],!1,null,null,null);t.default=component.exports},595:function(n,t,e){var content=e(610);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("72983f75",content,!0,{sourceMap:!1})},596:function(n,t,e){var content=e(612);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("22b53096",content,!0,{sourceMap:!1})},600:function(n,t,e){var map={"./1-tiffani.svg":283,"./1.svg":284,"./2-tiffani.svg":285,"./2.svg":286,"./3-tiffani.svg":287,"./3.svg":288,"./4.svg":289};function r(n){var t=o(n);return e(t)}function o(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=600},609:function(n,t,e){"use strict";e(595)},610:function(n,t,e){(t=e(27)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.cards-grid__title{\n  font-weight:300;\n  text-align:center;\n  margin-bottom:40px\n}\n@media(min-width: 1024px){\n.cards-grid__title{\n    margin-bottom:80px\n}\n}\n.card{\n  background-color:#fbfbfb;\n  border-radius:10px;\n  padding:30px;\n  font-size:21px;\n  font-weight:700;\n  display:flex;\n  flex-direction:column\n}\n.card.card-primary{\n  background-color:#2ad2c9;\n  color:#fff\n}\n.card.card-primary .card__description{\n  font-weight:500\n}\n.card img{\n  width:100px;\n  margin-bottom:20px\n}\n.card__title{\n  overflow:hidden;\n  margin-bottom:8px;\n  font-weight:300;\n  line-height:1.25;\n  word-break:break-word\n}\n.card__description{\n  font-size:16px;\n  font-weight:300\n}\n\n/* purgecss end ignore */",""]),n.exports=t},611:function(n,t,e){"use strict";e(596)},612:function(n,t,e){(t=e(27)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.simple-steps__title{\n  text-align:center;\n  font-weight:300;\n  margin-bottom:80px\n}\n.simple-steps a{\n  color:#2ad2c9\n}\n.simple-steps a:hover{\n  text-decoration:underline\n}\n.simple-steps__step{\n  padding:32px;\n  font-weight:300\n}\n@media(min-width: 1024px){\n.simple-steps__step{\n    padding:64px\n}\n}\n\n/* purgecss end ignore */",""]),n.exports=t},619:function(n,t,e){"use strict";var r=e(10),o=e(17),c=e(18),f=e(6),l=e(3),m=e(1),d=e(101);function y(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(f.a)(n);if(t){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var v=function(n){Object(o.a)(e,n);var t=y(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return e}(m.Vue);Object(l.a)([Object(m.Prop)({required:!1,default:""})],v.prototype,"content",void 0),Object(l.a)([Object(m.Prop)({required:!1,default:""})],v.prototype,"cardColor",void 0),Object(l.a)([Object(m.Prop)({required:!1,default:"grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4"})],v.prototype,"gridOptions",void 0);var k=v=Object(l.a)([Object(m.Component)({components:{TuButton:d.a}})],v),h=(e(609),e(22)),component=Object(h.a)(k,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"cards-grid"},[e("div",{staticClass:"h1 cards-grid__title",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),e("div",{class:["grid",n.gridOptions]},n._l(n.content.items,(function(t,r){return e("div",{key:"cards-grid-"+r,class:["card",n.cardColor?"card-"+n.cardColor:""]},[e("img",{attrs:{src:n.$options.filters.localisedAsset(t.img)}}),n._v(" "),e("div",{staticClass:"card__title"},[e("span",{staticClass:"font-bold",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("span",{domProps:{innerHTML:n._s(t.subtitle)}})]),n._v(" "),t.description?e("div",{staticClass:"card__description",domProps:{innerHTML:n._s(t.description)}}):n._e(),n._v(" "),t.cta?e("tu-button",{attrs:{type:"card__cta primary orange",title:t.cta.title}}):n._e()],1)})),0)])}),[],!1,null,null,null);t.a=component.exports},621:function(n,t,e){"use strict";var r=e(10),o=e(11),c=e(17),f=e(18),l=e(6),m=e(3),d=e(1),y=e(102),v=e(101);function k(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(l.a)(n);if(t){var o=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(f.a)(this,e)}}var h=function(n){Object(c.a)(e,n);var t=k(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return Object(o.a)(e,[{key:"handleClick",value:function(link,n){Object(y.a)(link+"#"+n,this)}}]),e}(d.Vue);Object(m.a)([Object(d.Prop)({required:!0,default:""})],h.prototype,"content",void 0);var w=h=Object(m.a)([Object(d.Component)({components:{TuButton:v.a}})],h),x=(e(611),e(22)),component=Object(x.a)(w,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"simple-steps"},[r("div",{staticClass:"simple-steps__title h1",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),r("div",{class:["w-full lg:grid lg:gap-8 lg:grid-cols-2"]},n._l(n.content.steps,(function(t,o){return r("div",{key:"simple-step-"+o,class:[3===n.content.steps.length&&2===o?"col-span-2":"","simple-steps__step h4 flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-10 lg:space-x-14 bg-gray-300"]},[r("div",{staticClass:"h4 flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-10 lg:space-x-14"},[r("img",{attrs:{src:e(600)("./"+(o+1)+".svg")}}),n._v(" "),r("div",[r("div",{staticClass:"simple-steps__text",domProps:{innerHTML:n._s("string"==typeof t?t:t.text)}}),n._v(" "),t.cta?r("tu-button",{staticClass:"mt-4",attrs:{title:t.cta.title},nativeOn:{click:function(e){return n.handleClick(t.cta.link,t.cta.hash)}}}):n._e()],1)])])})),0)])}),[],!1,null,null,null);t.a=component.exports}}]);