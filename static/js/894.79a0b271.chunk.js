"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[894],{577:function(n,e,t){t.d(e,{Z:function(){return l}});var r,a,c=t(689),i=t(168),o=t(87),u=t(444),s=u.ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),f=(0,u.ZP)(o.rU)(a||(a=(0,i.Z)(["\n  color: black;\n\n  &:hover {\n    color: red;\n  }\n"]))),d=t(184),l=function(n){var e=n.movies,t=(0,c.TH)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(s,{children:e.map((function(n){var e=n.id,r=n.title;return(0,d.jsx)("li",{children:(0,d.jsx)(f,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))})})}},894:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r,a=t(439),c=t(791),i=t(408),o=t(577),u=t(168),s=t(444).ZP.h1(r||(r=(0,u.Z)(["\n  text-align: center;\n"]))),f=t(184),d=function(){var n=(0,c.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1];return(0,c.useEffect)((function(){(0,i.P)().then((function(n){return r(n.results)})).catch((function(n){return console.log(n)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s,{children:"Trending today"}),(0,f.jsx)(o.Z,{movies:t})]})}},408:function(n,e,t){t.d(e,{P:function(){return u},v:function(){return f}});var r=t(861),a=t(757),c=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="d783920aea034ba2adae6031a0bf96c0";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day",{params:{api_key:o}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e,t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={trends:"/trending/movie/day",query:"/search/movie?query=".concat(t),movie:"/movie/".concat(t),cast:"/movie/".concat(t,"/credits"),reviews:"/movie/".concat(t,"/reviews")},n.next=3,i.Z.get("".concat(r[e]),{params:{api_key:o}});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=894.79a0b271.chunk.js.map