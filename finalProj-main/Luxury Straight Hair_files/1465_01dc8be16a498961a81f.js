(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[1465],{50362:function(e){e.exports={wrap:"wrap-1Ot06",normalizeWrap:"normalizeWrap-2U-Ub",optimalFont:"optimalFont-2DGUE",bounce:"bounce-3FuQZ"}},46433:function(e){e.exports={portalContainer:"portalContainer-3kURt",portalContainerEnablePointEvents:"portalContainerEnablePointEvents-snzLk"}},51465:function(e,t,n){"use strict";n.d(t,{ZP:function(){return L}});var a,o,r,i=n(87612),u=n(94761),s=n(62960),l=(n(44936),n(17385),n(87184)),c=n(72779),d=n.n(c),p=n(50362),f=n.n(p),_=n(42826),v=n(78245),E=n(36586),h=n(35457),T=n(13693),y=n(81862),N=n(5163),m=(n(69867),n(91560),n(45483),n(28813)),A=n(12);n(12008),n(60452),n(23395),n(93801);!function(e){e.ENTER="enter_pop",e.RETAIN="retain_pop"}(a||(a={})),function(e){e.INIT="init",e.READY="ready",e.SHOWING="showing",e.DESTROY="destroy",e.PENDING="pending"}(o||(o={})),function(e){e.CPS_NATIVE_NO_QT="NoQualifiedPopup",e.CPS_NATIVE_DIVERSION_NO_QT="DiversionNoQualifiedPopup",e.CPS_NATIVE_BROWSER_TASK_REWARD="BrowserTaskRewardDialog",e.CPS_NATIVE_COUPON_BUNDLE_AWRAD_V2="CouponBundleAwardPopupV2",e.CPS_NATIVE_COUPON_BUNDLE_AWRAD="CouponBundleAwardPopup",e.CPS_NATIVE_COUPON_BUNDLE_AWRAD_SHARE_GOODS="CouponBundleAwardPopupV2ShareGoodsPopup",e.CPS_NATIVE_COUPON_BUNDLE_REWARD_200="CouponBundleRewardPopup200",e.CPS_NATIVE_DISCOUNT_COUPON_AWARD="DiscountCouponAwardPopup",e.CPS_NATIVE_DEFAULT_LOGIN="DefaultLoginPopup",e.CPS_NATIVE_DISCOUNT_COUPON_LOGIN="DiscountCouponLoginPopup",e.CPS_NATIVE_SCRATCH_CARD_COUPON_DOUBLE_LOGIN="ScratchCardCouponDoubleLoginPopup",e.CPS_NATIVE_SCRATCH_CARD_LOGIN="ScratchCardLogionPopup",e.CPS_NATIVE_FLIP_CARD_LOGIN="FlipCardLoginPopup",e.CPS_NATIVE_CHANNEL_GOODS="ChannelGoodsPopup",e.CPS_WEB_DISCOUNT_COUPON_RETAIN="DiscountCouponRetainPopup",e.CPS_WEB_COUPON_BUNDLE_RETAIN="CouponBundleRetainPopup",e.CPS_WEB_AFFILIATE_RETAIN="AffiliateRetainPopup",e.CPS_NATIVE_LOGIN_RETAIN="LoginRetainPopup",e.CPS_NATIVE_GOODS_RETAIN="GoodsRetainPopup",e.CPS_NATIVE_COUPON_RETAIN="CouponRetainPopup",e.CPS_NATIVE_APP_RETAIN="AppRetainPopup",e.CPS_NATIVE_NO_ACTIVITY="NoActivityPopup",e.CPS_WEB_GUIDE_DOWNLOAD="GuideDownloadPopup",e.CPS_NATIVE_CART_GUIDE_ANIM="CartGuideAnim",e.CPS_NATIVE_COUPON_GUIDE="CouponGuidePopup",e.KOL_FREE_CHARGE_RETAIN_POPUP="KolFreeChargeRetainPopup"}(r||(r={}));var g=n(20245),C=function(){function e(){this.modalTasks=[],this.initialized=!1,this.stashRegisterModalTasks=[]}var t=e.prototype;return t.init=function(e){var t,n=this,a=e.modalTasks;this.initialized?console.error("ModalManager has initialized!!!"):Array.isArray(a)&&(null==a?void 0:a.length)&&(this.modalTasks=a.map((function(e){return(0,u._)({},e,{status:o.INIT,hasShow:!1})})),null==(t=this.stashRegisterModalTasks)||t.forEach((function(e){n.register(e)})),this.initialized=!0)},t.register=function(e){var t,n=e||{},a=n.type,r=n.callBack;if(Array.isArray(this.modalTasks)&&(null==(t=this.modalTasks)?void 0:t.length)){var i=this.modalTasks.find((function(e){return e.type===a}));i&&(null==i?void 0:i.status)===o.INIT&&this.ready({rsType:i.rsType,type:a,callBack:r})}else this.stashRegisterModalTasks.push(e)},t.ready=function(e){var t=this.findTargetModalIndex(e.type),n=this.modalTasks[t],a=n&&n.status===o.INIT;return a&&(this.modalTasks[t]=(0,u._)({},n,{status:o.READY,callBack:e.callBack})),a},t.unRegister=function(e){var t=this.modalTasks.find((function(t){return t.type===e}));t&&(null==t?void 0:t.status)!==o.DESTROY&&(this.changeModalStatusByType(e,o.DESTROY),this.trigger(t.rsType).catch((function(){})))},t.dangerRemove=function(e){this.changeModalStatusByType(e,o.DESTROY,!0)},t.dangerRemoveMore=function(e){var t=this;e.forEach((function(e){e&&t.changeModalStatusByType(e,o.DESTROY,!0)}))},t.trigger=function(e){var t=this;return(0,y._)((function(){var n,a;return(0,N.Jh)(this,(function(r){switch(r.label){case 0:return t.hasShowingModal?[2]:(n=t.modalTasks.find((function(t){return t.rsType===e&&t.status===o.READY&&t.callBack})))&&"function"==typeof n.callBack?(t.changeModalStatusByType(n.type,o.PENDING),n.delayTime?[4,(0,g._)(n.delayTime)]:[3,2]):[3,4];case 1:r.sent(),r.label=2;case 2:return[4,n.callBack()];case 3:a=r.sent().success,t.changeModalStatusByType(n.type,a?o.SHOWING:o.DESTROY,a),r.label=4;case 4:return[2]}}))}))()},t.destroy=function(){this.modalTasks=[]},t.changeModalStatusByType=function(e,t,n){var a=this.modalTasks.findIndex((function(t){return t.type===e}));if(-1!==a){var o=this.modalTasks[a];this.modalTasks[a]=(0,u._)({},o,{status:t,hasShown:void 0!==n?!!n:!!o.hasShown})}},t.findTargetModalIndex=function(e){return this.modalTasks.findIndex((function(t){return t.type===e}))},(0,A._)(e,[{key:"hasShowingModal",get:function(){var e;return null==(e=this.modalTasks)?void 0:e.some((function(e){return[(o.SHOWING,o.PENDING)].includes(e.status)}))}},{key:"enterModalAllReady",get:function(){var e,t=null==(e=this.modalTasks)?void 0:e.filter((function(e){return e.rsType===a.ENTER&&e.display}));return(null==t?void 0:t.length)>0&&t.every((function(e){return e.status===o.READY}))}}]),e}(),I=n(73366),P=n(54036),S=(0,m.Ue)((function(e,t,n){return{modalManager:void 0,retainManager:(0,E.i5)(),overlayManager:(0,E.i5)(),modalTasks:void 0,hasExecuted:!1,prepareModalData:(0,y._)((function(e,t){var n,a;return(0,N.Jh)(this,(function(o){switch(o.label){case 0:n=[],o.label=1;case 1:return o.trys.push([1,3,,4]),[4,t.post("api/jade/fargo/batch_rs/get",(0,P.lv)(e,[],!0))];case 2:return(a=o.sent()).success&&a.result&&Object.keys(a.result).forEach((function(e){Array.isArray(a.result[e])&&a.result[e].forEach((function(t){n.push({rsType:e,type:t.type,delayTime:t.delayTime,display:t.display})}))})),[3,4];case 3:return o.sent(),n=[],[3,4];case 4:return[2,n]}}))})),initModalManager:function(e,n,o){if(I.jU){var r=Array.isArray(t().modalTasks)?t().modalTasks:[],i=t().modalManager||new C;t().modalManager=i,(null==r?void 0:r.some((function(e){return e.rsType===a.RETAIN&&e.display})))&&(t().retainManager=n),t().overlayManager||(t().overlayManager=o),i.init({modalTasks:r}),(null==i?void 0:i.enterModalAllReady)&&!t().hasExecuted&&t().execute()}},execute:function(){var n,o,r=t(),i=r.modalManager,u=r.modalTasks,s=r.retainManager;r.hasExecuted||(e({hasExecuted:!0,reportModalList:(null==i||null==(o=i.modalTasks)||null==(n=o.map((function(e){return"ready"!==(null==e?void 0:e.status)?(null==e?void 0:e.type)+"-unregistered":null==e?void 0:e.type})))?void 0:n.join("|"))||""}),i&&(i.trigger(a.ENTER),s&&(null==u?void 0:u.find((function(e){return e.rsType===a.RETAIN&&e.display})))&&s.push({taskType:"simple",callback:function(){i.trigger(a.RETAIN),console.log("trigger retain....")}})))}}})),R=n(61658),O=n(46023),D=(0,m.Ue)((function(e){return{activeModalNumber:0,mounted:function(){e((function(e){return{activeModalNumber:e.activeModalNumber+1}}))},unMounted:function(){e((function(e){return{activeModalNumber:e.activeModalNumber-1}}))}}})),k=(n(96391),n(87246),n(7872)),M=n(95239),L=function(e){var t,n=(0,R.s6)((function(e){return e.retainManager})),a=(0,R.s6)((function(e){return e.isRTL})),o=(0,l.useRef)(null),r=e||{},c=r.hideNativeCart,p=void 0===c||c,y=r.usePortal,N=void 0===y||y,m=r.enableScrollX,A=void 0!==m&&m,g=r.portalProps,C=void 0===g?{}:g,P=r.isBackToClose,L=void 0!==P&&P,B=r.onBackToClose,b=void 0===B?E.WY:B,U=r.customZIndex,G=r.modalType,w=(null==e?void 0:e.overscrollBehavior)||"contain",V=(0,R.s6)((function(e){var t;return null==(t=e.sysInfo)?void 0:t.isIOSSystem})),x=(0,R.s6)((function(e){var t;return null==(t=e.sysInfo)?void 0:t.userAgent})),W=function(e){var t=e.isIOSSystem,n=e.userAgent;if(I.jU){var a=window.innerHeight,o=screen.height,r=(0,k.Y0)(n);return"Facebook_Mobile_Feed"===(0,M.FU)(window.location.search)._x_ns_placement&&(t?a<7*o/10||a===o:o-a<100)&&r===k.iw.Facebook}return!1}({isIOSSystem:V,userAgent:x});w=W?"auto":w;var F=e.responsiveManagers?(0,R.s6)((function(e){return e.overlayManager}),Object.is):null==(t=S.getState())?void 0:t.overlayManager,Y=(0,s._)((0,l.useState)((function(){return e.modalId||"modal_id_"+(0,h.x)(10)})),1)[0],H=function(e){var t=(0,s._)((0,l.useState)(!e),2),n=t[0],a=t[1];return(0,l.useEffect)((function(){a(!0)}),[]),{mounted:n}}(N).mounted;(0,O.L)((function(){return D.getState().mounted(),function(){return D.getState().unMounted()}}),[]),(0,l.useEffect)((function(){H&&o.current&&o.current.focus()}),[H,e.ariaFocusKey]),(0,l.useEffect)((function(){var e,t=Y;Y&&F&&(N?null==F||null==(e=F.push)||e.call(F,t,{hideNativeCart:p,overscrollBehavior:w}):setTimeout((function(){var e;null==F||null==(e=F.push)||e.call(F,t,{hideNativeCart:p,overscrollBehavior:w})}),1));return function(){var e;null==F||null==(e=F.removeById)||e.call(F,t)}}),[Y,!!F]),(0,l.useEffect)((function(){var e;if(L)return null==n||null==(e=n.push)||e.call(n,b),function(){var e;null==n||null==(e=n.removeByRef)||e.call(n,b)}}),[b,L]),(0,l.useEffect)((function(){if("contain"===w&&o.current&&H){var e=0,t=0,n=function(n){e=n.touches[0].pageY,t=n.touches[0].pageX},r=function(n){var o="";A&&(o=n.touches[0].pageX>t?"right":"left"),(0,_.fY)(n,n.touches[0].pageY>e?"up":"down",o,a)},i=!!_.e$&&{passive:!1},u=o.current;return u.addEventListener("touchstart",n,i),u.addEventListener("touchmove",r,i),function(){u&&(u.removeEventListener("touchstart",n),u.removeEventListener("touchmove",r))}}}),[w,H,A,a]),(0,l.useEffect)((function(){if(H){if(!V)return;if(!o.current||"function"!=typeof o.current.querySelectorAll)return;var e=o.current.querySelectorAll("[data-scroll]");if(!e||"function"!=typeof e.forEach)return;e.forEach((function(e){if(e)try{if(!e.classList.contains(f().bounce))return void e.classList.add(f().bounce)}catch(e){}}))}}),[H]),(0,l.useEffect)((function(){G&&(0,T.A)("kuiper_common_modal_impr",{customTags:{commonModalType:G}})}),[G]);var z=function(){return l.createElement("div",{ref:o,className:d()(e.normalizePreset?f().normalizeWrap:f().wrap,e.className,(0,i._)({},f().optimalFont,e.optimalFont)),style:e.style,tabIndex:-1,role:"dialog","aria-modal":!0,onClick:function(t){t.stopPropagation(),t.target===t.currentTarget&&e.onClick&&e.onClick(t)}},e.children)};return N?l.createElement(v.Z,(0,u._)({enablePointEvents:!0,containerId:Y,containerZIndex:U||9999},C),z()):z()}},78245:function(e,t,n){"use strict";var a=n(62960),o=(n(69867),n(67904),n(87246),n(93801),n(17385),n(44936),n(87184)),r=n(46433),i=n.n(r),u=n(14726),s=n(36586),l=n(73366);t.Z=function(e){var t=e.containerStyle,n=e.containerClassName,r=e.containerAttributes,c=e.enablePointEvents,d=e.disableDefaultClassName,p=e.containerId,f=void 0===p?"bg-simple-portal-container":p,_=e.containerZIndex,v=void 0===_?1003:_,E=e.children,h=e.parentEl,T=(0,o.useRef)([]),y=(0,a._)((0,o.useState)(null),2),N=y[0],m=y[1];return(0,o.useEffect)((function(){try{var e=document.querySelector("#"+f);if(e){for(var a=e.childNodes,o=[],u=0;u<a.length;u+=1)o.push(a.item(u));T.current=o}else{if(e=document.createElement("div"),r)for(var p=0,_=Object.keys(r);p<_.length;p++){var E=_[p];e.setAttribute(E,r[E])}if(t)for(var y=0,N=Object.keys(t);y<N.length;y++){var A=N[y];e.style[A]=t[A]}if(d||e.classList.add(i().portalContainer),c&&e.classList.add(i().portalContainerEnablePointEvents),n)for(var g=n.split(/\s/g).filter(s.yR),C=0;C<g.length;C++){var I=g[C];e.classList.add(I)}null!=v&&(e.style.zIndex=""+v),f&&(e.id=f);var P=document.body;"function"==typeof h?P=h():"string"==typeof h&&(P=document.querySelector(h)),P?P.appendChild(e):l.yG&&console.error("SimplePortal "+f+" parentEl empty")}return m(e),function(){try{document.body.removeChild(e)}catch(e){}}}catch(e){l.yG&&console.error(e)}}),[]),E&&l.jU&&N?(0,u.createPortal)(E,N):o.createElement(o.Fragment,null)}}}]);
//# sourceMappingURL=http://temudebug.com/sourcemaps/assets/js/1465_01dc8be16a498961a81f.js.map