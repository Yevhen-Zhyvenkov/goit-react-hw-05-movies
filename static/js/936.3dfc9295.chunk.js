"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{481:function(n,t,e){var r=e(689),c=e(87),a=e(184);t.Z=function(n){var t=n.item,e=(0,r.TH)();return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.original_name||t.original_title})})}},641:function(n,t,e){e.d(t,{U:function(){return u}});var r=e(861),c=e(687),a=e.n(c),u=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://api.themoviedb.org/").concat(t,"api_key=").concat("d871c37f03af5f9d732b89f21e2b613f"));case 2:if(!(e=n.sent).ok){n.next=5;break}return n.abrupt("return",e.json());case 5:return n.next=7,Promise.reject(new Error("error"));case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},936:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(433),c=e(861),a=e(439),u=e(687),o=e.n(u),i=e(481),s=e(641),f=e(791),l="Home_list__aopnc",p=e(184),v=function(){var n=(0,f.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1];return(0,f.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.U)("3/trending/all/day?");case 3:t=n.sent,u((0,r.Z)(t.results)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,p.jsx)("ul",{className:l,children:e.length&&e.map((function(n){return(0,p.jsx)(i.Z,{item:n},n.id)}))})}},861:function(n,t,e){function r(n,t,e,r,c,a,u){try{var o=n[a](u),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var u=n.apply(t,e);function o(n){r(u,c,a,o,i,"next",n)}function i(n){r(u,c,a,o,i,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=936.3dfc9295.chunk.js.map