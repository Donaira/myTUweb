(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{579:function(n,t,e){"use strict";e(174);var o=e(12),r=e(13),c=e(17),l=e(18),f=e(6),d=e(3),m=e(1),v=e(101),y=e(587),h=(e(588),e(102));function k(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=Object(f.a)(n);if(t){var r=Object(f.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(l.a)(this,e)}}var w=function(n){Object(c.a)(e,n);var t=k(e);function e(){var n;return Object(o.a)(this,e),(n=t.apply(this,arguments)).activeSlide=0,n}return Object(r.a)(e,[{key:"redirectToPlayStore",value:function(n){"ios"===n?window.open("https://apps.apple.com/us/app/id1484316366","_blank"):"android"===n&&window.open("https://play.google.com/store/apps/details?id=com.travelunion","_blank")}},{key:"heroLink",value:function(link){this.$router.push(this.localePath({name:link}))}},{key:"handleClick",value:function(n){n&&(console.log(n.hash,n.link),Object(h.a)(n.hash?n.link+"#"+n.hash:n.link,this))}},{key:"handleAfterChange",value:function(n,t,e){this.activeSlide=e}},{key:"nextSlide",value:function(){this.$refs.slick.next(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"prevSlide",value:function(){this.$refs.slick.prev(),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"goToSlide",value:function(n){this.$refs.slick.goTo(n),this.activeSlide=this.$refs.slick.currentSlide()}},{key:"slickOptions",get:function(){return{slidesToShow:1,dots:!1,arrows:!1,autoplay:!0,autoplaySpeed:3e3}}}]),e}(m.Vue);Object(d.a)([Object(m.Prop)({required:!0})],w.prototype,"heroSlides",void 0);var _=w=Object(d.a)([Object(m.Component)({components:{TuButton:v.a,Slick:y.a}})],w),x=(e(592),e(22)),component=Object(x.a)(_,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return n.heroSlides.length>0?o("div",{staticClass:"full-width"},[o("slick",{ref:"slick",attrs:{options:n.slickOptions},on:{afterChange:n.handleAfterChange}},n._l(n.heroSlides,(function(t,r){return o("div",{key:"hero-slide-"+r,class:["hero-slide",t.link?"link":""],style:{"background-image":"url("+n.$options.filters.localisedAsset(t.bg)+")"},on:{click:function(e){return e.target!==e.currentTarget?null:n.handleClick(t.ctaPrimary)}}},[o("div",{staticClass:"hero-slide-inner justify-between"},[o("div",{staticClass:"w-full lg:w-1/2 xl:w-1/2 hero-slide__left"},[o("div",{staticClass:"h1 hero-slide__title leading-tight",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),t.text?o("div",{domProps:{innerHTML:n._s(t.text)}}):n._e(),n._v(" "),t.ctaPrimary||t.ctaSecondary?o("div",{staticClass:"hero-slide__buttons flex items-center"},[t.ctaPrimary?o("tu-button",{attrs:{type:"primary",title:t.ctaPrimary.title},nativeOn:{click:function(e){return n.handleClick(t.ctaPrimary)}}}):n._e(),n._v(" "),t.ctaSecondary?o("a",{staticClass:"ml-8 text-center",domProps:{innerHTML:n._s(t.ctaSecondary.title)},on:{click:function(e){return n.handleClick(t.ctaSecondary)}}}):n._e()],1):n._e(),n._v(" "),t.ctaDownload?o("div",{staticClass:"hero-slide__buttons flex items-center space-x-6"},[o("img",{staticClass:"hero-slide__cta-download cursor-pointer",attrs:{src:e(281)},on:{click:function(t){return n.redirectToPlayStore("android")}}}),n._v(" "),o("img",{staticClass:"hero-slide__cta-download cursor-pointer",attrs:{src:e(280)},on:{click:function(t){return n.redirectToPlayStore("ios")}}})]):n._e()]),n._v(" "),o("div",{staticClass:"w-full lg:w-1/2 hero-slide__right"},[o("img",{attrs:{src:n.$options.filters.localisedAsset(t.img)}})])])])})),0),n._v(" "),n.heroSlides&&n.heroSlides.length>1?o("div",{staticClass:"slick-custom-controls"},n._l(n.heroSlides,(function(t,e){return o("div",{key:"hero-slides-dot-"+e,class:["dot",n.activeSlide===e?"active":""],on:{click:function(t){return n.goToSlide(e)}}})})),0):n._e()],1):n._e()}),[],!1,null,null,null);t.a=component.exports},582:function(n,t,e){"use strict";var o=e(12),r=e(13),c=e(17),l=e(18),f=e(6),d=e(3),m=e(1),v=e(102);function y(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=Object(f.a)(n);if(t){var r=Object(f.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(l.a)(this,e)}}var h=function(n){Object(c.a)(e,n);var t=y(e);function e(){return Object(o.a)(this,e),t.apply(this,arguments)}return Object(r.a)(e,[{key:"handleClick",value:function(link){Object(v.a)(link,this)}},{key:"companyData",get:function(){return this.$t("contacts")}},{key:"footerMenu",get:function(){return this.$t("footer")}},{key:"socialLinks",get:function(){return this.$te("footer.socialLinks."+this.$i18n.locale)?this.$t("footer.socialLinks."+this.$i18n.locale):this.$t("footer.socialLinks.default")}},{key:"footerMenuItems",get:function(){return this.$t("footerMenuItems")}}]),e}(m.Vue),k=h=Object(d.a)([Object(m.Component)({components:{}})],h),w=(e(598),e(22)),component=Object(w.a)(k,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("div",{staticClass:"container mx-auto"},[o("div",{staticClass:"legal"},[o("span",{domProps:{innerHTML:n._s(n.$t("pocketMoney.legal.text"))}}),n._v(" "),o("nuxt-link",{attrs:{to:n.localePath(n.$t("pocketMoney.legal.link"))}},[o("span",{domProps:{innerHTML:n._s(n.$t("pocketMoney.legal.linkText"))}})])],1)]),n._v(" "),o("div",{staticClass:"footer"},[o("div",{staticClass:"container mx-auto"},[o("div",{staticClass:"w-full flex flex-wrap lg:flex-row"},[o("div",{staticClass:"w-full mb-10 lg:w-2/5"},[o("img",{staticClass:"opacity-80",attrs:{src:e(282)}}),n._v(" "),o("div",{staticClass:"w-full social-icons text-2xl mt-5 space-x-5"},[o("a",{attrs:{href:n.socialLinks.facebook,target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),n._v(" "),o("a",{attrs:{href:n.socialLinks.instagram,target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),n._v(" "),o("a",{attrs:{href:n.socialLinks.linkedin,target:"_blank"}},[o("font-awesome-icon",{attrs:{icon:["fab","linkedin-in"]}})],1)])]),n._v(" "),o("div",{staticClass:"flex w-full mb-10 lg:w-3/5 space-x-4"},n._l(n.footerMenuItems,(function(t,e){return o("div",{key:"footer-item-"+e,staticClass:"w-1/3"},[o("ul",[t.link?o("li",{staticClass:"link"},[o("a",{attrs:{href:t.link,target:"_blank"},domProps:{innerHTML:n._s(t.title)}})]):o("li",{domProps:{innerHTML:n._s(t.title)}}),n._v(" "),n._l(t.items,(function(t,i){return o("li",{key:"footer-subitem-"+i},[t.link&&!t.link.includes("https")?o("a",{on:{click:function(e){return n.handleClick(t.link)}}},[o("span",{domProps:{innerHTML:n._s(t.title)}})]):o("a",{attrs:{href:t.link,target:"_blank"},domProps:{innerHTML:n._s(t.title)}})])}))],2)])})),0),n._v(" "),o("div",{staticClass:"w-full lg:flex"},[o("div",{staticClass:"w-full lg:w-1/2"},[o("div",{staticClass:"mt-4 w-5/6 opacity-50"},[n._v("© 2021 UAB Travel Union")]),n._v(" "),o("div",{staticClass:"mt-1 w-5/6 opacity-50",domProps:{innerHTML:n._s(n.footerMenu.legalText)}})]),n._v(" "),o("div",{staticClass:"w-full lg:w-1/2 lg:text-right"},[o("div",{staticClass:"mt-4 opacity-50"},[o("span",{domProps:{innerHTML:n._s(n.companyData.companyName)}}),n._v(", "),o("span",{domProps:{innerHTML:n._s(n.companyData.address)}})]),n._v(" "),o("div",{staticClass:"mt-1 opacity-50"},[o("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:["fas","phone"]}}),n._v(" "),o("span",{staticClass:"mr-2",domProps:{innerHTML:n._s(n.companyData.phone)}}),n._v(" "),o("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:["fas","at"]}}),n._v(" "),o("span",{domProps:{innerHTML:n._s(n.companyData.email)}})],1),n._v(" "),o("div",{staticClass:"mt-1 opacity-50",domProps:{innerHTML:n._s(n.companyData.companyCode)}},[o("span")]),n._v(" "),o("div",{staticClass:"mt-1 opacity-50",domProps:{innerHTML:n._s(n.companyData.vatCode)}},[o("span")])])])])])])])}),[],!1,null,"05c84445",null);t.a=component.exports},583:function(n,t,e){var content=e(593);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("5d62e26b",content,!0,{sourceMap:!1})},585:function(n,t,e){var content=e(599);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("61ae7bbf",content,!0,{sourceMap:!1})},592:function(n,t,e){"use strict";e(583)},593:function(n,t,e){(t=e(27)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.full-width{\n  margin-left:-16px;\n  margin-right:-16px;\n  width:calc(100% + 32px)\n}\n@media(min-width: 1024px){\n.full-width{\n    margin-left:0;\n    margin-right:0;\n    width:100%\n}\n}\n.hero-slide{\n  height:560px;\n  background-size:cover;\n  background-position:center;\n  border-radius:10px;\n  background-color:#fbfbfb\n}\n.hero-slide.link{\n  cursor:pointer\n}\n@media(min-width: 1024px){\n.hero-slide{\n    height:440px\n}\n}\n.hero-slide__cta-download{\n  width:200px;\n  max-width:50%\n}\n.hero-slide-inner{\n  height:560px;\n  display:flex;\n  flex-wrap:wrap;\n  padding:0 16px\n}\n@media(min-width: 1024px){\n.hero-slide-inner{\n    padding:0;\n    height:440px\n}\n}\n.hero-slide__left{\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:flex-start\n}\n@media(min-width: 1024px){\n.hero-slide__left{\n    padding-left:48px\n}\n}\n.hero-slide__right{\n  display:flex;\n  align-items:flex-end;\n  justify-content:center;\n  max-height:100%;\n  margin-top:20px\n}\n@media(min-width: 1024px){\n.hero-slide__right{\n    margin-top:0\n}\n}\n.hero-slide__right img{\n  max-height:100%\n}\n.hero-slide__title{\n  font-weight:300\n}\n@media(min-width: 640px){\n.hero-slide__title{\n    margin-top:40px\n}\n}\n@media(min-width: 1024px){\n.hero-slide__title{\n    margin-top:0\n}\n}\n.hero-slide__buttons{\n  display:flex;\n  align-items:center;\n  width:100%;\n  margin-top:40px\n}\n.hero-slide__buttons button,.hero-slide__buttons a{\n  flex-grow:1;\n  flex-basis:0;\n  justify-content:center\n}\n@media(min-width: 768px){\n.hero-slide__buttons button,.hero-slide__buttons a{\n    flex-grow:unset;\n    flex-basis:unset\n}\n}\n.hero-slide__buttons a{\n  font-weight:700;\n  transition:all .2s ease;\n  margin-left:30px;\n  word-break:break-word;\n  cursor:pointer\n}\n.hero-slide__buttons a:hover{\n  color:#2ad2c9\n}\n\n/* purgecss end ignore */",""]),n.exports=t},598:function(n,t,e){"use strict";e(585)},599:function(n,t,e){(t=e(27)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition[data-v-05c84445]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-05c84445],.zoomIn-leave-active[data-v-05c84445],.zoomIn-enter[data-v-05c84445],.zoomIn-enter-active[data-v-05c84445]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-05c84445]{\n  -webkit-animation:bounce-out-data-v-05c84445 .3s ease;\n          animation:bounce-out-data-v-05c84445 .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-05c84445]{\n  -webkit-animation:bounce-in-data-v-05c84445 .3s ease-out;\n          animation:bounce-in-data-v-05c84445 .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-05c84445]{\n  -webkit-animation:fadeInUp-data-v-05c84445 .5s;\n          animation:fadeInUp-data-v-05c84445 .5s\n}\n.fadeInUp-leave-active[data-v-05c84445]{\n  animation:fadeInUp-data-v-05c84445 .5s reverse\n}\n.fadeInLeft-enter-active[data-v-05c84445]{\n  -webkit-animation:fadeInLeft-data-v-05c84445 .3s;\n          animation:fadeInLeft-data-v-05c84445 .3s\n}\n.fadeInLeft-leave-active[data-v-05c84445]{\n  animation:fadeInLeft-data-v-05c84445 .3s reverse\n}\n.fadeIn-enter-active[data-v-05c84445]{\n  -webkit-animation:fadeIn-data-v-05c84445 .14s ease-in;\n          animation:fadeIn-data-v-05c84445 .14s ease-in\n}\n.fadeIn-leave-active[data-v-05c84445]{\n  animation:fadeIn-data-v-05c84445 .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-05c84445]{\n  -webkit-animation:slideDown-data-v-05c84445 .3s;\n          animation:slideDown-data-v-05c84445 .3s\n}\n.slideDown-leave-active[data-v-05c84445]{\n  animation:slideDown-data-v-05c84445 .3s reverse\n}\n@-webkit-keyframes swing-data-v-05c84445{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing-data-v-05c84445{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown-data-v-05c84445{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown-data-v-05c84445{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn-data-v-05c84445{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-05c84445{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft-data-v-05c84445{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft-data-v-05c84445{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp-data-v-05c84445{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-data-v-05c84445{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in-data-v-05c84445{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in-data-v-05c84445{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out-data-v-05c84445{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out-data-v-05c84445{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle-data-v-05c84445{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle-data-v-05c84445{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle-data-v-05c84445{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle-data-v-05c84445{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.legal[data-v-05c84445]{\n  margin:5rem 0;\n  font-style:italic\n}\n.legal a[data-v-05c84445]{\n  color:#2ad2c9\n}\n@media(min-width: 1024px){\n.legal[data-v-05c84445]{\n    margin:10rem 0\n}\n}\n.footer[data-v-05c84445]{\n  background-color:#fbfbfb;\n  padding:40px 0;\n  font-size:12px\n}\n.footer a[data-v-05c84445]{\n  cursor:pointer\n}\n.footer .social-icons a[data-v-05c84445]{\n  opacity:.2;\n  transition:all .3s ease\n}\n.footer .social-icons a[data-v-05c84445]:hover{\n  opacity:.8;\n  color:#2ad2c9\n}\n.footer ul li[data-v-05c84445]{\n  margin-bottom:8px\n}\n.footer ul li a[data-v-05c84445]{\n  opacity:.5;\n  transition:all .2s ease\n}\n.footer ul li:hover a[data-v-05c84445]{\n  color:#2ad2c9;\n  opacity:.8\n}\n.footer ul li.link[data-v-05c84445]:first-child{\n  opacity:1\n}\n.footer ul li[data-v-05c84445]:first-child{\n  font-weight:700;\n  opacity:.5\n}\n\n/* purgecss end ignore */",""]),n.exports=t},677:function(n,t,e){"use strict";var o=e(12),r=e(17),c=e(18),l=e(6),f=e(3),d=e(1);function m(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,o=Object(l.a)(n);if(t){var r=Object(l.a)(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return Object(c.a)(this,e)}}var v=function(n){Object(r.a)(e,n);var t=m(e);function e(){return Object(o.a)(this,e),t.apply(this,arguments)}return e}(d.Vue);Object(f.a)([Object(d.Prop)({required:!0,default:""})],v.prototype,"content",void 0);var y=v=Object(f.a)([Object(d.Component)({components:{}})],v),h=(e(789),e(22)),component=Object(h.a)(y,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"prices-table w-full xl:w-3/4 mx-auto"},[e("div",{staticClass:"simple-steps__title h1",domProps:{innerHTML:n._s(n.content.title)}}),n._v(" "),n._l(n.content.prices,(function(t,o){return e("div",{key:"price-line-"+o,staticClass:"prices__line h4"},[e("div",{staticClass:"prices__line-title",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("div",{class:["prices__line-price",t.bold?"text-primary font-bold":""],domProps:{innerHTML:n._s(t.price)}})])}))],2)}),[],!1,null,null,null);t.a=component.exports},687:function(n,t,e){var content=e(790);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(39).default)("14147d56",content,!0,{sourceMap:!1})},789:function(n,t,e){"use strict";e(687)},790:function(n,t,e){(t=e(27)(!1)).push([n.i,"/* purgecss start ignore */\n.page-in-transition{\n  overflow-x:hidden\n}\n.zoomIn-leave,.zoomIn-leave-active,.zoomIn-enter,.zoomIn-enter-active{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active{\n  -webkit-animation:bounce-out .3s ease;\n          animation:bounce-out .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active{\n  -webkit-animation:bounce-in .3s ease-out;\n          animation:bounce-in .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active{\n  -webkit-animation:fadeInUp .5s;\n          animation:fadeInUp .5s\n}\n.fadeInUp-leave-active{\n  animation:fadeInUp .5s reverse\n}\n.fadeInLeft-enter-active{\n  -webkit-animation:fadeInLeft .3s;\n          animation:fadeInLeft .3s\n}\n.fadeInLeft-leave-active{\n  animation:fadeInLeft .3s reverse\n}\n.fadeIn-enter-active{\n  -webkit-animation:fadeIn .14s ease-in;\n          animation:fadeIn .14s ease-in\n}\n.fadeIn-leave-active{\n  animation:fadeIn .14s ease-out reverse\n}\n.slideDown-enter-active{\n  -webkit-animation:slideDown .3s;\n          animation:slideDown .3s\n}\n.slideDown-leave-active{\n  animation:slideDown .3s reverse\n}\n@-webkit-keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.prices__line{\n  width:100%;\n  display:flex;\n  justify-content:space-between;\n  padding:20px 20px;\n  background-color:#fbfbfb;\n  border-radius:10px;\n  margin-bottom:20px;\n  font-weight:300;\n  line-height:1.2\n}\n.prices__line-title{\n  margin-right:40px\n}\n\n/* purgecss end ignore */",""]),n.exports=t}}]);