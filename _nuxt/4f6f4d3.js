(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1049:function(n,t,e){"use strict";e.r(t);var r=e(12),o=e(17),c=e(18),l=e(6),f=e(3),m=e(1),d=e(174),v=e(569),y=e(643),k=e(580),h=e(598),w=e(571),x=e(602),I=e(593),_=e(631);function C(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(l.a)(n);if(t){var o=Object(l.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(c.a)(this,e)}}var O=function(n){Object(o.a)(e,n);var t=C(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return e}(m.Vue),j=O=Object(f.a)([Object(m.Component)({components:{PageHeader:d.a,HeroSlider:v.a,TwoBlocks:y.a,ImageTextBlock:k.a,SimpleSteps:h.a,FooterComponent:w.a,FeaturesList:x.a,FeaturesSlider:I.a,CardsGrid:_.a}})],O),P=e(22),component=Object(P.a)(j,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"container mx-auto"},[e("hero-slider",{staticClass:"mb-24 xl:mb-40",attrs:{"hero-slides":n.$t("kidsPage.heroSlides")}}),n._v(" "),e("two-blocks",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("kidsPage.twoBlocks")}})],1),n._v(" "),e("div",{staticClass:"bg-gray-300 mb-24 xl:mb-40"},[e("div",{staticClass:"container mx-auto"},[e("image-text-block",{staticClass:"image-align-bottom",attrs:{content:n.$t("kidsPage.mobileBankingForKids")}})],1)]),n._v(" "),e("div",{staticClass:"container mx-auto"},[e("cards-grid",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("kidsPage.securityCards"),id:n.$t("kidsPage.securityCards.blockId")}}),n._v(" "),e("simple-steps",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("kidsPage.openingAccount"),id:n.$t("kidsPage.openingAccount.blockId")}}),n._v(" "),e("features-list",{staticClass:"mb-24 xl:mb-40",attrs:{features:n.$t("kidsPage.featuresList"),id:n.$t("kidsPage.kidsFeaturesId")}}),n._v(" "),e("features-slider",{staticClass:"mb-24 xl:mb-40",attrs:{content:n.$t("kidsPage.featuresSlider"),id:n.$t("kidsPage.featuresSlider.blockId")}})],1),n._v(" "),e("footer-component")],1)}),[],!1,null,null,null);t.default=component.exports},583:function(n,t,e){var content=e(595);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("22b53096",content,!0,{sourceMap:!1})},591:function(n,t,e){var map={"./1-tiffani.svg":284,"./1.svg":285,"./2-tiffani.svg":286,"./2.svg":287,"./3-tiffani.svg":288,"./3.svg":289,"./4.svg":290};function r(n){var t=o(n);return e(t)}function o(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=591},594:function(n,t,e){"use strict";e(583)},595:function(n,t,e){(t=e(27)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.simple-steps__title{\n  text-align:center;\n  font-weight:300;\n  margin-bottom:80px\n}\n.simple-steps a{\n  color:#2ad2c9\n}\n.simple-steps a:hover{\n  text-decoration:underline\n}\n.simple-steps__step{\n  padding:32px;\n  font-weight:300\n}\n@media(min-width: 1024px){\n.simple-steps__step{\n    padding:64px\n}\n}\n\n/* purgecss end ignore */",""]),n.exports=t},598:function(n,t,e){"use strict";var r=e(12),o=e(13),c=e(17),l=e(18),f=e(6),m=e(3),d=e(1),v=e(102),y=e(101);function k(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=Object(f.a)(n);if(t){var o=Object(f.a)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return Object(l.a)(this,e)}}var h=function(n){Object(c.a)(e,n);var t=k(e);function e(){return Object(r.a)(this,e),t.apply(this,arguments)}return Object(o.a)(e,[{key:"handleClick",value:function(link,n){Object(v.a)(link+"#"+n,this)}}]),e}(d.Vue);Object(m.a)([Object(d.Prop)({required:!0,default:""})],h.prototype,"content",void 0);var w=h=Object(m.a)([Object(d.Component)({components:{TuButton:y.a}})],h),x=(e(594),e(22)),component=Object(x.a)(w,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"simple-steps"},[r("div",{staticClass:"simple-steps__title h1",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),r("div",{class:["w-full lg:grid lg:gap-8 lg:grid-cols-2"]},n._l(n.content.steps,(function(t,o){return r("div",{key:"simple-step-"+o,class:[3===n.content.steps.length&&2===o?"col-span-2":"","simple-steps__step h4 flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-10 lg:space-x-14 bg-gray-300"]},[r("div",{staticClass:"h4 flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-10 lg:space-x-14"},[r("img",{attrs:{src:e(591)("./"+(o+1)+".svg")}}),n._v(" "),r("div",[r("div",{staticClass:"simple-steps__text",domProps:{innerHTML:n._s("string"==typeof t?t:t.text)}}),n._v(" "),t.cta?r("tu-button",{staticClass:"mt-4 mx-auto lg:ml-0",attrs:{title:t.cta.title},nativeOn:{click:function(e){return n.handleClick(t.cta.link,t.cta.hash)}}}):n._e()],1)])])})),0)])}),[],!1,null,null,null);t.a=component.exports}}]);