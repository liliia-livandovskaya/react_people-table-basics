(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),r=c(5),j=(c(15),c(2)),a=c(10),b=c(4),i=c(8),l=c.n(i),o=c(0);var h=c(1),p=function(e){var t=e.person;return Object(h.jsxs)("tr",{className:"Person",children:[Object(h.jsx)("td",{children:t.name}),Object(h.jsx)("td",{children:t.sex}),Object(h.jsx)("td",{children:t.born}),Object(h.jsx)("td",{children:t.died}),Object(h.jsx)("td",{children:t.motherName}),Object(h.jsx)("td",{children:t.fatherName})]})},d=(c(18),function(e){var t=e.people;return Object(h.jsxs)("table",{className:"PeopleTable table is-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"Sex"}),Object(h.jsx)("th",{children:"Born"}),Object(h.jsx)("th",{children:"Died"}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsx)(p,{person:e},e.slug)}))})]})}),O=function(){var e=Object(o.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)(!1),r=Object(b.a)(s,2),j=r[0],i=r[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(a.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),j?Object(h.jsx)("p",{children:"Failed to Load people"}):Object(h.jsx)(d,{people:c})},x=function(){return Object(h.jsxs)("div",{className:"App subtitle is-3",children:[Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsx)(r.b,{className:"button is-link",to:"/",children:"Home page"}),Object(h.jsx)(r.b,{className:"button is-info",to:"/people",children:"People page"})]}),Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{path:"/",element:Object(h.jsx)("h1",{children:"Home page"})}),Object(h.jsx)(j.b,{path:"/home",element:Object(h.jsx)(j.a,{to:"/"})}),Object(h.jsx)(j.b,{path:"/people",element:Object(h.jsx)(O,{})}),Object(h.jsx)(j.b,{path:"*",element:Object(h.jsx)("p",{children:"Page not found"})})]})]})};s.a.render(Object(h.jsx)(r.a,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.09856d1a.chunk.js.map