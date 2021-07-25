(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{35:function(t,e,n){},54:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var c,r=n(0),a=n.n(r),o=n(6),i=n.n(o),u=n(9),s=(n(35),n(4)),b=n(24),l=n(2),j=n(5),h=n(12),f=n.n(h),d=Object(j.b)("ADD_CONTACT"),O=Object(j.b)("DELETE_CONTACT"),p=Object(j.b)("FILTER_CONTACTS"),m=Object(j.b)("GET_DATA"),v=Object(j.b)("API/REQUEST"),g=Object(j.b)("API/SUCCESS"),C=Object(j.b)("API/ERROR"),y=Object(j.c)({contacts:[],filter:"",isFetching:!1,error:null},(c={},Object(s.a)(c,m,(function(t,e){var n=e.payload;return Object(l.a)(Object(l.a)({},t),{},{contacts:n.data})})),Object(s.a)(c,d,(function(t,e){var n=e.payload;return Object(l.a)(Object(l.a)({},t),{},{contacts:[].concat(Object(b.a)(t.contacts),[n])})})),Object(s.a)(c,O,(function(t,e){var n=e.payload;return Object(l.a)(Object(l.a)({},t),{},{contacts:t.contacts.filter((function(t){return t.id!==n}))})})),Object(s.a)(c,p,(function(t,e){var n=e.payload;return Object(l.a)(Object(l.a)({},t),{},{filter:n.target.value})})),Object(s.a)(c,v,(function(t){return Object(l.a)(Object(l.a)({},t),{},{isFetching:!0})})),Object(s.a)(c,g,(function(t){return Object(l.a)(Object(l.a)({},t),{},{isFetching:!1})})),Object(s.a)(c,C,(function(t,e){var n=e.payload;return console.log(n),Object(l.a)(Object(l.a)({},t),{},{isFetching:!1,error:n})})),c)),x=Object(j.a)({reducer:{reducer:y}}),k=n(7),S=n(8),w=n(11),A=n(10),D=n(60),F=(n(54),n(1)),T={name:"",number:""},E=function(t){Object(w.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(k.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state=Object(l.a)(Object(l.a)({},T),{},{toggler:t.props.isFetching}),t.handleChange=function(e){var n=e.target,c=n.name,r=n.value;t.setState(Object(s.a)({},c,r))},t.reset=function(){t.setState(Object(l.a)({},T))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,r=n.number;if(""===c||""===r)alert("Name and Number are required fields!");else if(t.props.friends.some((function(t){return t.name.toLowerCase()===c.toLowerCase()})))alert("".concat(c," is already in contacts!"));else{var a={id:Object(D.a)(),name:c,number:r};t.props.handlerSubmit(a)}t.reset()},t}return Object(S.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.toggler;return Object(F.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(F.jsxs)("label",{children:["Name",Object(F.jsx)("input",{name:"name",value:e,onChange:this.handleChange})]}),Object(F.jsxs)("label",{children:["Number",Object(F.jsx)("input",{name:"number",value:n,onChange:this.handleChange})]}),Object(F.jsx)("button",{type:"submit",disabled:c,children:"Add contact"})]})}}]),n}(r.Component),N=(n(56),function(t){var e=t.filter,n=t.onChange;return Object(F.jsx)("div",{className:"filter",children:Object(F.jsxs)("label",{children:["Find contacts by name",Object(F.jsx)("input",{value:e,onChange:n})]})})}),I=(n(57),function(t){var e=t.id,n=t.name,c=t.number,r=t.onClick;return Object(F.jsxs)("li",{className:"item",children:[n,": ",c,Object(F.jsx)("button",{onClick:function(){r(e)},children:"Delete"})]})}),L=function(t){Object(w.a)(n,t);var e=Object(A.a)(n);function n(){return Object(k.a)(this,n),e.apply(this,arguments)}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.onMount()}},{key:"render",value:function(){var t=this;return Object(F.jsx)("ul",{children:this.props.friends.filter((function(e){return e.name.toLowerCase().indexOf(t.props.filter.toLowerCase())>=0})).map((function(e){return Object(F.jsx)(I,{id:e.id,name:e.name,number:e.number,onClick:t.props.onClick},e.id)}))})}}]),n}(r.Component),R=function(t){return t.reducer.contacts},M=function(t){return t.reducer.filter},P=function(t){return t.reducer.isFetching};var _=Object(u.b)((function(t){return{friends:R(t),filter:M(t),isFetching:P(t)}}),(function(t){return{handleData:function(){return t((function(t){t(v()),f.a.get("http://my-json-server.typicode.com/patsyuck/goit-react-hw-07-phonebook/contacts").then((function(e){t(g()),t(m(e))})).catch((function(e){t(C(e))}))}))},handleInput:function(e){return t(p(e))},handleSubmit:function(e){return t((n=e,function(t){t(v()),f.a.post("http://my-json-server.typicode.com/patsyuck/goit-react-hw-07-phonebook/contacts",n).then((function(){t(g()),t(d(n))})).catch((function(e){t(C(e))}))}));var n},handleDelete:function(e){return t(function(t){return function(e){e(v()),f.a.get("http://my-json-server.typicode.com/patsyuck/goit-react-hw-07-phonebook/contacts").then((function(n){e(g(n)),e(O(t))})).catch((function(t){e(C(t))}))}}(e))}}}))((function(t){var e=t.friends,n=t.filter,c=t.isFetching,r=t.handleData,a=t.handleInput,o=t.handleSubmit,i=t.handleDelete;return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(E,{friends:e,handlerSubmit:function(t){return o(t)},isFetching:c}),Object(F.jsx)("h2",{children:"Contacts"}),Object(F.jsx)(N,{filter:n,onChange:function(t){return a(t)}}),Object(F.jsx)(L,{friends:e,filter:n,onClick:function(t){return i(t)},onMount:function(){return r()}})]})}));i.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(u.a,{store:x,children:Object(F.jsx)(_,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.2b42c119.chunk.js.map