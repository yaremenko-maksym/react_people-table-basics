(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(10),l=c.n(a),s=c(5),n=(c(16),c(2)),r=c(0),j=(c(17),c(1)),o=function(){return Object(j.jsx)("div",{className:"HomePage",children:Object(j.jsx)("h1",{className:"HomePage__title",children:"Home Page"})})},b=c(11),i=c(7),h=c(4),p=c(6),d=c.n(p),u=function(){var e=Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://mate-academy.github.io/react_people-table/api","/people.json"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=c(27),O=(c(20),function(e){var t=e.person;return Object(j.jsxs)("tr",{className:"PeopleTable__row Person",children:[Object(j.jsx)("td",{className:"PeopleTable__cell",children:t.name}),Object(j.jsx)("td",{className:"PeopleTable__cell",children:t.sex}),Object(j.jsx)("td",{className:"PeopleTable__cell",children:t.born}),Object(j.jsx)("td",{className:"PeopleTable__cell",children:t.died}),Object(j.jsx)("td",{className:"PeopleTable__cell",children:t.motherName||"-"}),Object(j.jsx)("td",{className:"PeopleTable__cell",children:t.fatherName||"-"})]})}),x=(c(21),function(e){var t=e.peoples;return Object(j.jsxs)("table",{className:"PeopleTable",children:[Object(j.jsx)("thead",{className:"PeopleTable__head",children:Object(j.jsxs)("tr",{className:"PeopleTable__row",children:[Object(j.jsx)("th",{className:"PeopleTable__cell",children:"name"}),Object(j.jsx)("th",{className:"PeopleTable__cell",children:"sex"}),Object(j.jsx)("th",{className:"PeopleTable__cell",children:"born"}),Object(j.jsx)("th",{className:"PeopleTable__cell",children:"died"}),Object(j.jsx)("th",{className:"PeopleTable__cell",children:"mother"}),Object(j.jsx)("th",{className:"PeopleTable__cell",children:"father"})]})}),t&&Object(j.jsx)("tbody",{className:"PeopleTable__body",children:t.map((function(e){return Object(j.jsx)(O,{person:e},Object(m.a)())}))})]})}),_=(c(22),function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),c=t[0],a=t[1],l=Object(r.useCallback)(Object(i.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,c=t.map((function(e){var c=Object(b.a)({},e),a=t.find((function(t){return e.fatherName===t.name||e.fatherName===t.name}));return a&&("m"===a.sex?c.father=a:c.mother=a),c})),a(c);case 5:case"end":return e.stop()}}),e)}))),[]);return Object(r.useEffect)((function(){l()}),[]),Object(j.jsxs)("div",{className:"PeoplePage",children:[Object(j.jsx)("h1",{className:"PeoplePage__title",children:"People table"}),Object(j.jsx)(x,{peoples:c})]})}),f=(c(23),function(){return Object(j.jsx)("div",{className:"NotFoundPage",children:Object(j.jsx)("h1",{className:"NotFoundPage__title",children:"Page not found"})})}),N=(c(24),function(){return Object(j.jsxs)("nav",{className:"header",children:[Object(j.jsx)(s.b,{to:"/home",className:"header__link",children:"HOME"}),Object(j.jsx)(s.b,{to:"/people",className:"header__link",children:"PEOPLE"})]})}),P=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(N,{}),Object(j.jsxs)(n.d,{children:[Object(j.jsx)(n.b,{path:"/",element:Object(j.jsx)(o,{})}),Object(j.jsx)(n.b,{path:"/home",element:Object(j.jsx)(n.a,{to:"/"})}),Object(j.jsx)(n.b,{path:"/people/*",element:Object(j.jsx)(_,{})}),Object(j.jsx)(n.b,{path:"*",element:Object(j.jsx)(f,{})})]})]})};l.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.9ea6c860.chunk.js.map