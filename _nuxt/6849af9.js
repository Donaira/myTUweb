(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1165:function(t,e,n){"use strict";n.r(e);var o=n(8),c=n(9),r=n(13),l=n(14),d=n(6),m=n(3),f=n(2),w=n(612),h=n(644),v=n(645),y=n(659),k=n(646),x=n(647),_=n(660),C=n(732),E=n(707),I=n(75),z=n(684),T=n(632),P=n(685),M=n(74);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var L=function(t){Object(r.a)(n,t);var e=j(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"head",value:function(){return{script:[{src:"https://assets.calendly.com/assets/external/widget.js"}],link:[{rel:"stylesheet",href:"https://assets.calendly.com/assets/external/widget.css"}]}}},{key:"handleClick",value:function(link,t){t?Object(M.a)(link+"#"+t,this):Object(M.a)(link,this)}},{key:"bookDemo",value:function(){return window.Calendly.initPopupWidget({url:"https://calendly.com/mytubusiness?text_color=354552&primary_color=2ad2c9"}),!1}},{key:"lastImg",value:function(t){return t[t.length-1]}},{key:"content",value:function(t){return E.a[t][this.$i18n.locale]||E.a[t].en}},{key:"layout",get:function(){return"defaultv2"}},{key:"pricingPlans",get:function(){return this.content("pricing").plans}}]),n}(f.Vue),O=L=Object(m.a)([Object(f.Component)({components:{FooterComponent:w.a,HeroStatic:h.a,DownloadApp:x.a,TextImage:v.a,TextImageBgGrid:y.a,AccountsGrid:_.a,BusinessSteps:C.a,Reviews:k.a,TuButton:I.a,TwoBlocks:T.a,DemoCall:z.a,PartnersLine:P.a}})],L),S=(n(872),n(17)),component=Object(S.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hero-static",{attrs:{content:t.content("hero")}}),t._v(" "),n("div",{attrs:{id:t.content("hero").ctaPrimary.hash}}),t._v(" "),n("div",{staticClass:"container mx-auto mt-10 md:mt-20"},[n("div",{staticClass:"md:flex two-blocks space-y-10 md:space-y-0 md:space-x-10"},[n("div",{staticClass:"two-blocks__left w-full md:w-1/2 flex flex-col flex-grow justify-between",style:{"background-image":"url("+t.$options.filters.localisedAsset(t.content("twoBlocks").blockLeft.bg)+")"}},[n("div",{staticClass:"two-blocks__text"},[n("span",{staticClass:"two-blocks__block-title",domProps:{innerHTML:t._s(t.content("twoBlocks").blockLeft.title)}}),t._v(" "),n("span",{staticClass:"two-blocks__block-subtitle",domProps:{innerHTML:t._s(t.content("twoBlocks").blockLeft.subtitle)}})])]),t._v(" "),n("div",{staticClass:"two-blocks__right flex flex-wrap w-full md:w-1/2",style:{"background-image":"url("+t.$options.filters.localisedAsset(t.content("twoBlocks").blockRight.bg)+")"}},[n("div",{staticClass:"w-full flex flex-col justify-between"},[n("div",{staticClass:"two-blocks__text"},[n("span",{staticClass:"two-blocks__block-title",domProps:{innerHTML:t._s(t.content("twoBlocks").blockRight.title)}}),t._v(" "),n("span",{staticClass:"two-blocks__block-subtitle",domProps:{innerHTML:t._s(t.content("twoBlocks").blockRight.subtitle)}})])])])])]),t._v(" "),n("div",{staticClass:"bg-gray-300 mt-10 lg:mt-32"},[n("div",{staticClass:"container mx-auto py-10"},[n("text-image",{attrs:{content:t.content("accountWithEuropeanIban")}})],1)]),t._v(" "),n("div",{staticClass:"container mx-auto mt-10 lg:mt-32"},[n("text-image",{staticClass:"xl:flex-row-reverse",attrs:{content:t.content("featureMoneyTransfers")}})],1),t._v(" "),n("div",{staticClass:"bg-gray-300 mt-10 lg:mt-32"},[n("div",{staticClass:"container mx-auto py-10"},[n("text-image",{attrs:{content:t.content("featureRequestToPay")}})],1)]),t._v(" "),n("div",{staticClass:"container mx-auto mt-10 lg:mt-32"},[n("text-image",{staticClass:"xl:flex-row-reverse",attrs:{content:t.content("featureOnlineOffice")}})],1),t._v(" "),n("div",{staticClass:"bg-default text-white mt-10 lg:mt-32"},[n("div",{staticClass:"container mx-auto py-10"},[n("text-image",{staticClass:"w-full btn-secondary",attrs:{content:t.content("marketplaceIntro")}})],1)]),t._v(" "),n("div",{staticClass:"container mx-auto mt-10 lg:mt-32"},[n("text-image-bg-grid",{attrs:{content:t.content("security"),link:"security"}})],1),t._v(" "),n("div",{staticClass:"bg-gray-300 mt-10 lg:mt-32"},[n("partners-line")],1),t._v(" "),n("div",{staticClass:"container mx-auto mt-10 lg:mt-32 pricing"},[n("div",{staticClass:"h2 text-center mb-8 lg:mb-14",domProps:{innerHTML:t._s(t.content("pricing").title)}}),t._v(" "),n("div",{staticClass:"grid grid-cols-1 xl:grid-cols-3 gap-2 lg:gap-7"},t._l(t.pricingPlans,(function(e,o){return n("div",{key:"plan-"+o,staticClass:"plan flex flex-col",style:{"background-color":e.bgColor,stroke:"1px solid "+e.strokeColor}},[n("img",{staticClass:"plan__icon",attrs:{src:t.$options.filters.localisedAsset(e.icon)}}),t._v(" "),n("div",{staticClass:"plan__top flex items-end justify-between lg:block"},[n("div",{staticClass:"plan__title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"plan__price"},[n("span",{staticClass:"plan__price-amount"},[t._v(t._s(e.priceMonthly))]),t._v(" "),n("span",{staticClass:"plan__price-label"},[t._v(t._s(e.priceLabel))])])]),t._v(" "),n("div",{staticClass:"plan__desc",domProps:{innerHTML:t._s(e.desc)}}),t._v(" "),n("tu-button",{staticClass:"plan__cta",attrs:{type:e.cta.style?e.cta.style:"white"},nativeOn:{click:function(n){return t.handleClick(e.cta.link,e.cta.hash)}}},[t._v("\n          "+t._s(e.cta.title)+" "),n("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:["fas","chevron-right"]}})],1),t._v(" "),n("div",{staticClass:"plan__items"},t._l(e.included,(function(e,i){return n("div",{key:"item"+i},[n("font-awesome-icon",{class:[0===o?"text-primary":"text-white","mr-1"],attrs:{icon:["fas","check-circle"]}}),t._v("\n            "+t._s(e)+"\n          ")],1)})),0),t._v(" "),n("div",{staticClass:"flex-grow flex items-end mt-4"},[n("div",{staticClass:"flex items-center"},[n("nuxt-link",{staticClass:"hover:underline",attrs:{to:t.localePath("pricing-business")}},[t._v(t._s(t.content("pricing").allPrices))]),t._v(" "),n("font-awesome-icon",{staticClass:"text-sm ml-2",attrs:{icon:["fas","chevron-right"]}})],1)])],1)})),0),t._v(" "),n("a",{staticClass:"mt-4 italic block hover:text-primary cursor-pointer",domProps:{innerHTML:t._s(t.content("pricing").bottomText)},on:{click:function(e){return t.bookDemo()}}})]),t._v(" "),n("div",{staticClass:"container mx-auto mt-10 lg:mt-32 steps"},[n("business-steps",{staticClass:"mb-24 xl:mb-40",attrs:{content:t.content("accountOpeningSteps"),id:t.content("accountOpeningSteps").blockId}})],1),t._v(" "),n("demo-call",{attrs:{content:t.content("download")}}),t._v(" "),n("footer-component",{attrs:{type:"business"}})],1)}),[],!1,null,"37c04d78",null);e.default=component.exports},707:function(t,e,n){"use strict";e.a={hero:{en:{bg:"{{cdn}}/website/business/hero-2.webp",bgColor:"#354552",mobileImg:"{{cdn}}/website/business/hero-small-2.webp",ctaPrimary:{hash:"content",link:"business",title:"Learn more"},title:"Manage your business finances on the go - <span style='font-weight: 300'>from wherever you are</span>"}},twoBlocks:{en:{blockLeft:{title:"Fully digital onboarding and account management",bg:"{{cdn}}/website/business/two-blocks-left-2.webp"},blockRight:{title:"Lower fees & faster transactions",bg:"{{cdn}}/website/business/two-blocks-right.webp"}}},accountWithEuropeanIban:{en:{title:"Account with European IBAN",text:"With fully digital onboarding and account management, myTU business banking users enjoy the convenience of the European IBAN that simplifies SEPA cross-border transactions, ensuring seamless international trade and expanded opportunities from anywhere.",img:"{{cdn}}/website/business/en/feature-account-european-iban-2.webp"}},featureMoneyTransfers:{en:{title:"Money transfers",text:"Real-time SEPA Instant payments, allowing businesses to execute transactions within seconds, significantly improving cash flow management and enhancing the efficiency of cross-border payments.",img:"{{cdn}}/website/business/en/feature-money-transfers.webp"}},featureRequestToPay:{en:{title:"myTU as a payment method",text:"The integration of myTU as a payment method on a business's website allows to streamline the payment process for customers, enhancing user experience, and potentially increasing conversion rates.",img:"{{cdn}}/website/business/en/feature-request-to-pay-2.webp"}},featureOnlineOffice:{en:{title:"Online Office",text:"Online office provides a comprehensive suite of services, including seamless statement exports, real-time expense tracking, intelligent transaction categorization, and customisable user management for effective task delegation.",img:"{{cdn}}/website/business/en/feature-online-office.webp",ctaSecondary:{link:"online-office",title:"Learn more",style:"secondary"}}},marketplaceIntro:{en:{title:"myTU Marketplace",text:"myTU loyalty marketplace enables partner companies to sell digital gift cards and subscriptions to myTU users, allowing to expand brand visibility across 29 EU countries. Offering user-friendly redemption options and adaptable partnership models, myTU Outlet serves as an alternative sales channel that connects partners to clients while promoting deals and boosting sales through #TIME loyalty points.",ctaSecondary:{link:"outlet",title:"Learn more",style:"secondary white"},img:"{{cdn}}/website/business/feature-marketplace-2.webp"}},security:{en:{title:"State-of-the-art security",items:[{title:"We are a fully licensed Electronic Money Institution (EMI) operating in all EU/EEA countries.",img:"{{cdn}}/website/business/security1.webp",style:"text-white"},{title:"All customer funds are deposited and safeguarded in the Central Bank.",img:"{{cdn}}/website/homepage/security2.webp",style:"text-default"},{title:"Account access is protected with industry-leading multi-factor authentication.",img:"{{cdn}}/website/business/security3.webp",style:"text-white"}]},lv:{title:"Vismodernākā drošība",items:[{title:"Mēs esam pilnībā licencēta elektroniskās naudas iestāde (EMI), kas darbojas visās ES/EEZ valstīs.",img:"{{cdn}}/website/business/security1.webp",style:"text-white"},{title:"Visi klientu līdzekļi tiek noguldīti un glabāti Centrālajā bankā.",img:"{{cdn}}/website/homepage/security2.webp",style:"text-default"},{title:"Piekļuve kontam ir aizsargāta ar nozarē vadošo daudzfaktoru autentifikāciju.",img:"{{cdn}}/website/business/security3.webp",style:"text-white"}]},sk:{title:"Moderné zabezpečenie",items:[{title:"Sme plne licencovaná inštitúcia elektronických peňazí (Electronic Money Institution – EMI), pôsobiaca vo všetkých krajinách EÚ/EHP.",img:"{{cdn}}/website/business/security1.webp",style:"text-white"},{title:"Všetky financie zákazníkov sú uložené a chránené v centrálnej banke.",img:"{{cdn}}/website/homepage/security2.webp",style:"text-default"},{title:"Prístup k účtu je chránený špičkovým viacfaktorovým overením.",img:"{{cdn}}/website/business/security3.webp",style:"text-white"}]},et:{title:"Tipptasemel turve",items:[{title:"Oleme ametlikult litsentseeritud finantsasutus (EMI), õigusega tegutseda kõigis ELi/EMP riikides.",img:"{{cdn}}/website/business/security1.webp",style:"text-white"},{title:"Kõiki klientide rahalisi vahendeid hoiustatakse ja hoitakse keskpangas.",img:"{{cdn}}/website/homepage/security2.webp",style:"text-default"},{title:"Juurdepääs kontole on kaitstud oma valdkonna juhtiva mitmetasandilise autentimisteenusega.",img:"{{cdn}}/website/business/security3.webp",style:"text-white"}]},es:{title:"Lo último en seguridad",items:[{title:"Somos una institución de dinero electrónico (EMI) con licencia completa que opera en todos los paises de la UE/EEE",img:"{{cdn}}/website/business/security1.webp",style:"text-white"},{title:"Todos los fondos de los clientes son depositados y salvaguardados en el Banco Central",img:"{{cdn}}/website/homepage/security2.webp",style:"text-default"},{title:"El acceso a la cuenta está protegido por autenticación multifactor lider en la industria.",img:"{{cdn}}/website/business/security3.webp",style:"text-white"}]},pl:{title:"Najnowocześniejsze bezpieczeństwo",items:[{title:"Jesteśmy licencjonowaną instytucją pieniądza elektronicznego (EMI) działającą we wszystkich krajach UE/EOG.",img:"{{cdn}}/website/business/security1.webp",style:"text-white"},{title:"Wszystkie środki klientów są przechowywane w Banku Centralnym.",img:"{{cdn}}/website/homepage/security2.webp",style:"text-default"},{title:"Dostęp do konta jest chroniony za pomocą zaawansowanego uwierzytelniania wieloskładnikowego.",img:"{{cdn}}/website/business/security3.webp",style:"text-white"}]},ru:{title:"Сверхтехнологичная система безопасности",items:[{title:"Мы являемся лицензированным учреждением электронных денег (EMI), работающим во всех странах ЕС/ЕЭЗ.",img:"{{cdn}}/website/business/security1.webp",style:"text-white"},{title:"Все средства клиентов хранятся в Центральном банке.",img:"{{cdn}}/website/homepage/security2.webp",style:"text-default"},{title:"Доступ к счету защищен с помощью передовой многофакторной аутентификации.",img:"{{cdn}}/website/business/security3.webp",style:"text-white"}]},de:{title:"Sicherheit auf dem neusten Stand",items:[{title:"Wir sind ein voll lizensiertes E-Geld Institut (EMI), das in allen EU/EWR-Ländern tätig ist.",img:"{{cdn}}/website/business/security1.webp",style:"text-white"},{title:"Alle Kundeneinlagen werden bei der Zentralbank hinterlegt und gesichert.",img:"{{cdn}}/website/homepage/security2.webp",style:"text-default"},{title:"Der Zugriff auf das Konto ist durch die branchenführende Multi-Faktor-Authentifizierung geschützt.",img:"{{cdn}}/website/business/security3.webp",style:"text-white"}]},lt:{title:"Garantuotas saugumas",items:[{title:"Mes - Lietuvos banko licencijuota elektroninių pinigų įstaiga (EMI), vykdanti veiklą visose ES/EEE šalyse.",img:"{{cdn}}/website/business/security1.webp",style:"text-white"},{title:"Visos klientų lėšos yra saugomos Lietuvos Centriniame banke.",img:"{{cdn}}/website/homepage/security2.webp",style:"text-default"},{title:"Prieiga prie paskyros yra apsaugota naudojant pažangiausią industrijoje kelių veiksnių autentifikavimą.",img:"{{cdn}}/website/business/security3.webp",style:"text-white"}]}},pricesTable:{en:{title:"Pricing",table:[["","Standard","Premium","Premium+"],["Monthly fee","7€ /month","49€ /month","99€ /month"],["Account opening","Free","475 €","975 €"],["Description","Designed for local companies registered in the EU/EEA with directors, shareholders, ultimate beneficiaries (UBOs), and representatives who are residents of the EU/EEA, providing an affordable solution customised for simpler ownership structures and lower-risk businesses.","Suited for companies with more complex ownership structures or operations in higher-risk industries, offering enhanced support to navigate the challenges and requirements associated with these businesses.","Designed for financial institutions and exchanges, primarily supporting administrative payments, offering enhanced support to navigate the challenges and requirements associated with these businesses."],["Support","Limited support","Dedicated account manager","Dedicated account manager"],["Higher risk industries","-","+","+"],["Complex ownership company structures","-","+","+"],["Other","-","-","Provision of administrative accounts for financial institutions"],["Internal transfers","0€","0€","0€"],["SEPA / SEPA Instant Incoming","0€","0€","0€"],["SEPA / SEPA Instant Outgoing","0.10€","0.10€","0.10€"],["Cancellation","20€","20€","20€"],["Refund (investigation request)","20€","20€","20€"]]}},pricing:{en:{bottomText:"Custom solutions available. Contact us to learn more.",allPrices:"All prices",title:"Pricing",plans:[{title:"Standard",priceMonthly:"7€",priceLabel:"/ month",desc:"Designed for EU/EEA based companies with lean business structure.",cta:{hash:"how-to-open-an-account",link:"business",title:"Sign up now",style:"primary"},included:["Limited support","Free account opening"],bgColor:"#F2F2F2",strokeColor:"#E4E4E4",icon:"{{cdn}}/website/business/ic-plan-standard.svg"},{title:"Premium",priceMonthly:"49€",priceLabel:"/ month",desc:"Tailored for higher risk industries providing dedicated account manager.",cta:{hash:"how-to-open-an-account",link:"business",title:"Try 3 months for free"},included:["Dedicated account manager","Support of more complex ownership structures","Suitable for higher-risk industries","Account opening fee - 475 €"],bgColor:"#2AD2C9",strokeColor:"#E4E4E4",icon:"{{cdn}}/website/business/ic-plan-premium.svg"},{title:"Premium +",priceMonthly:"99€",priceLabel:"/ month",desc:"Additional support of administrative accounts for financial institutions.",cta:{hash:"how-to-open-an-account",link:"business",title:"Try 3 months for free"},included:["Dedicated account manager","Support of more complex ownership structures","Suitable for higher-risk industries","Provision of administrative accounts for financial institutions","Account opening fee - 975 €"],bgColor:"#354552",strokeColor:"#E4E4E4",icon:"{{cdn}}/website/business/ic-plan-premium-plus.svg"}]}},accountOpeningSteps:{en:{blockId:"how-to-open-an-account",blockTitle:"How to open a business account?",steps:[{cta:{link:"app",title:"Download the app"},number:"number-icons/1-tiffani.svg",text:"To open a business account, you must first become a myTU customer. Download the myTU mobile app and sign up.",title:"Not yet a myTU customer?"},{cta:{link:"https://web.mytu.live",title:"Open a business account"},number:"number-icons/2-tiffani.svg",text:"Log in to myTU Business and register your company to open a business account. Fill in the form and we will verify your details and open a business account for you.",title:"Already a myTU customer?"}]}},download:{en:{title:"Curious to know more? Book a demo call, meet the team and get to know the product!",cta:{link:"business",title:"Book a demo call",style:"white"},img:"{{cdn}}/website/business/book-demo.webp",imgMob:"{{cdn}}/website/business/book-demo-mob.webp"}}}},748:function(t,e,n){var content=n(873);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("c621695c",content,!0,{sourceMap:!1})},872:function(t,e,n){"use strict";n(748)},873:function(t,e,n){(e=n(22)(!1)).push([t.i,"/* purgecss start ignore */\n.page-in-transition[data-v-37c04d78]{\n  overflow-x:hidden\n}\n.zoomIn-leave[data-v-37c04d78],.zoomIn-leave-active[data-v-37c04d78],.zoomIn-enter[data-v-37c04d78],.zoomIn-enter-active[data-v-37c04d78]{\n  position:absolute;\n  left:0;\n  top:0;\n  width:100vw !important;\n  height:101vh !important;\n  max-width:none !important;\n  transition:all .3s ease\n}\n.zoomIn-leave-active[data-v-37c04d78]{\n  -webkit-animation:bounce-out-data-v-37c04d78 .3s ease;\n          animation:bounce-out-data-v-37c04d78 .3s ease;\n  transform-origin:50% 50%\n}\n.zoomIn-enter-active[data-v-37c04d78]{\n  -webkit-animation:bounce-in-data-v-37c04d78 .3s ease-out;\n          animation:bounce-in-data-v-37c04d78 .3s ease-out;\n  transform-origin:50% 50%\n}\n.fadeInUp-enter-active[data-v-37c04d78]{\n  -webkit-animation:fadeInUp-data-v-37c04d78 .5s;\n          animation:fadeInUp-data-v-37c04d78 .5s\n}\n.fadeInUp-leave-active[data-v-37c04d78]{\n  animation:fadeInUp-data-v-37c04d78 .5s reverse\n}\n.fadeInLeft-enter-active[data-v-37c04d78]{\n  -webkit-animation:fadeInLeft-data-v-37c04d78 .3s;\n          animation:fadeInLeft-data-v-37c04d78 .3s\n}\n.fadeInLeft-leave-active[data-v-37c04d78]{\n  animation:fadeInLeft-data-v-37c04d78 .3s reverse\n}\n.fadeIn-enter-active[data-v-37c04d78]{\n  -webkit-animation:fadeIn-data-v-37c04d78 .14s ease-in;\n          animation:fadeIn-data-v-37c04d78 .14s ease-in\n}\n.fadeIn-leave-active[data-v-37c04d78]{\n  animation:fadeIn-data-v-37c04d78 .14s ease-out reverse\n}\n.slideDown-enter-active[data-v-37c04d78]{\n  -webkit-animation:slideDown-data-v-37c04d78 .3s;\n          animation:slideDown-data-v-37c04d78 .3s\n}\n.slideDown-leave-active[data-v-37c04d78]{\n  animation:slideDown-data-v-37c04d78 .3s reverse\n}\n@-webkit-keyframes swing-data-v-37c04d78{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@keyframes swing-data-v-37c04d78{\n0%{\n    transform:rotate(0deg)\n}\n25%{\n    transform:rotate(-3deg)\n}\n75%{\n    transform:rotate(3deg)\n}\n100%{\n    transform:rotate(0deg)\n}\n}\n@-webkit-keyframes slideDown-data-v-37c04d78{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@keyframes slideDown-data-v-37c04d78{\n0%{\n    height:0\n}\n100%{\n    height:100vh\n}\n}\n@-webkit-keyframes fadeIn-data-v-37c04d78{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@keyframes fadeIn-data-v-37c04d78{\n0%{\n    opacity:0\n}\n100%{\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInLeft-data-v-37c04d78{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@keyframes fadeInLeft-data-v-37c04d78{\n0%{\n    transform:translateX(10px);\n    opacity:0\n}\n100%{\n    transform:translateX(0);\n    opacity:1\n}\n}\n@-webkit-keyframes fadeInUp-data-v-37c04d78{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@keyframes fadeInUp-data-v-37c04d78{\n0%{\n    transform:translateY(10px);\n    opacity:0\n}\n100%{\n    transform:translateY(0);\n    opacity:1\n}\n}\n@-webkit-keyframes bounce-in-data-v-37c04d78{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@keyframes bounce-in-data-v-37c04d78{\n0%{\n    opacity:0;\n    transform:scale(0.95)\n}\n100%{\n    opacity:1;\n    transform:scale(1)\n}\n}\n@-webkit-keyframes bounce-out-data-v-37c04d78{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@keyframes bounce-out-data-v-37c04d78{\n0%{\n    opacity:1;\n    transform:scale(1)\n}\n75%{\n    opacity:0\n}\n100%{\n    opacity:0;\n    transform:scale(1.2)\n}\n}\n@-webkit-keyframes bounce-circle-data-v-37c04d78{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@keyframes bounce-circle-data-v-37c04d78{\n0%{\n    transform:scale(1)\n}\n20%{\n    transform:scale(0.8)\n}\n60%{\n    transform:scale(1.1)\n}\n100%{\n    transform:scale(1)\n}\n}\n@-webkit-keyframes wiggle-data-v-37c04d78{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n@keyframes wiggle-data-v-37c04d78{\n0%{\n    transform:scale(0, 0) rotate(0);\n    opacity:0\n}\n70%{\n    transform:scale(1.3, 1.3) rotate(3deg);\n    opacity:1\n}\n100%{\n    transform:scale(1, 1) rotate(0);\n    opacity:1\n}\n}\n.pricing .plan[data-v-37c04d78]{\n  position:relative;\n  padding:45px 15px 15px 15px;\n  border-radius:20px;\n  border:1px solid #e4e4e4;\n  margin-bottom:30px\n}\n.pricing .plan[data-v-37c04d78]:nth-child(2),.pricing .plan[data-v-37c04d78]:nth-child(3){\n  color:#fff\n}\n@media(min-width: 1024px){\n.pricing .plan[data-v-37c04d78]{\n    padding:75px 30px 30px 30px;\n    margin-bottom:0px\n}\n}\n.pricing .plan__top[data-v-37c04d78]{\n  margin-bottom:20px;\n  margin-top:20px\n}\n@media(min-width: 1024px){\n.pricing .plan__top[data-v-37c04d78]{\n    margin-top:30px;\n    margin-bottom:30px\n}\n}\n.pricing .plan__icon[data-v-37c04d78]{\n  width:60px;\n  top:-15px;\n  left:15px;\n  position:absolute\n}\n@media(min-width: 1024px){\n.pricing .plan__icon[data-v-37c04d78]{\n    width:105px;\n    top:-30px;\n    left:30px\n}\n}\n.pricing .plan__title[data-v-37c04d78]{\n  line-height:1;\n  font-size:21px;\n  font-weight:700\n}\n@media(min-width: 1024px){\n.pricing .plan__title[data-v-37c04d78]{\n    font-size:28px;\n    margin-bottom:30px\n}\n}\n.pricing .plan__price[data-v-37c04d78]{\n  line-height:1\n}\n.pricing .plan__price-amount[data-v-37c04d78]{\n  font-size:36px;\n  font-weight:900\n}\n.pricing .plan__desc[data-v-37c04d78]{\n  font-size:16px;\n  font-weight:300\n}\n@media(min-width: 1024px){\n.pricing .plan__desc[data-v-37c04d78]{\n    font-size:18px;\n    height:82px\n}\n}\n.pricing .plan__cta[data-v-37c04d78]{\n  margin-top:20px\n}\n.pricing .plan__items[data-v-37c04d78]{\n  margin-top:30px;\n  margin-bottom:20px;\n  font-weight:300\n}\n@media(min-width: 1024px){\n.pricing .plan__items[data-v-37c04d78]{\n    margin-top:45px;\n    margin-bottom:0\n}\n}\n.two-blocks[data-v-37c04d78]{\n  font-size:21px;\n  line-height:1.25\n}\n@media(min-width: 768px){\n.two-blocks[data-v-37c04d78]{\n    font-size:28px\n}\n}\n.two-blocks__block-title[data-v-37c04d78]{\n  font-weight:700\n}\n.two-blocks__block-subtitle[data-v-37c04d78]{\n  font-weight:300\n}\n.two-blocks__left[data-v-37c04d78],.two-blocks__right[data-v-37c04d78]{\n  padding:16px;\n  min-height:275px;\n  border-radius:10px;\n  background-size:cover\n}\n@media(min-width: 1024px){\n.two-blocks__left[data-v-37c04d78],.two-blocks__right[data-v-37c04d78]{\n    padding:30px 30px 30px 30px;\n    min-height:340px;\n    height:340px\n}\n}\n.two-blocks__right[data-v-37c04d78]{\n  background-color:#f2f2f2;\n  color:#233746;\n  margin-top:20px;\n  background-position:bottom\n}\n@media(min-width: 1024px){\n.two-blocks__right[data-v-37c04d78]{\n    background-position:bottom left\n}\n}\n@media(min-width: 768px){\n.two-blocks__right[data-v-37c04d78]{\n    margin-top:0\n}\n}\n.two-blocks__left[data-v-37c04d78]{\n  position:relative;\n  background-color:#233746;\n  color:#fff;\n  background-position:bottom\n}\n@media(min-width: 1024px){\n.two-blocks__left[data-v-37c04d78]{\n    background-position:bottom right\n}\n.two-blocks__left .two-blocks__text[data-v-37c04d78]{\n    width:100%\n}\n}\n.two-blocks .no-backdrop .text-image__image-backdrop[data-v-37c04d78]{\n  background-color:transparent\n}\n@media(min-width: 1024px){\n.two-blocks .text-image[data-v-37c04d78]{\n    min-height:400px;\n    align-items:center\n}\n}\n.two-blocks .text-image__image[data-v-37c04d78]{\n  border-radius:40px\n}\n.two-blocks .text-image__title[data-v-37c04d78]{\n  margin-top:20px\n}\n@media(min-width: 1024px){\n.two-blocks .text-image__title[data-v-37c04d78]{\n    margin-top:0\n}\n}\n.two-blocks .text-image__text[data-v-37c04d78]{\n  font-weight:300;\n  margin-top:20px\n}\n\n/* purgecss end ignore */",""]),t.exports=e}}]);