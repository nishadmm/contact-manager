(this["webpackJsonpreact-starting"]=this["webpackJsonpreact-starting"]||[]).push([[0],{69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(32),s=a.n(c),o=a(4),i=a(5),l=a(7),u=a(6),d=a(16),h=a(2),j=a(0),p=function(e){var t=e.branding;return Object(j.jsx)("nav",{className:"navbar bg-danger py-0 mb-3 navbar-expand-sm navbar-dark",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("a",{href:"/",className:"navbar-brand",children:[" ",t," "]}),Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(d.b,{to:"/",className:"nav-link",children:[Object(j.jsx)("i",{className:"fas fa-home"})," Home"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(d.b,{to:"/contact/add",className:"nav-link",children:[Object(j.jsx)("i",{className:"fas fa-plus"})," Add"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(d.b,{to:"/about",className:"nav-link",children:[Object(j.jsx)("i",{className:"fas fa-question"})," About"]})})]})})]})})};p.defaultProps={branding:"Contacts Manager"};var b=p,m=a(19),O=a(8),f=a.n(O),v=a(14),x=a(35),y=a(18),g=a(15),N=a.n(g),C=r.a.createContext(),k=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return console.log("Add Contact"),Object(y.a)(Object(y.a)({},e),{},{contacts:[t.payload].concat(Object(x.a)(e.contacts))});case"UPDATE_CONTACT":return console.log("Update contact"),Object(y.a)(Object(y.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},w=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return k(e,t)}))}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)(C.Provider,{value:this.state,children:this.props.children})}}]),a}(n.Component),E=C.Consumer,S=a(10),A=a.n(S),T=a(34),D=a.n(T),P=function(e){var t=e.label,a=e.type,n=e.placeholder,r=e.name,c=e.onchange,s=e.value,o=e.errors;return Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:r,children:t}),Object(j.jsx)("input",{type:a,name:r,placeholder:n,className:D()("form-control form-control-lg",{"is-invalid":o}),value:s,onChange:c}),o&&Object(j.jsxs)("div",{className:"invalid-feedback",children:[" ",o," "]})]})};P.defaultProps={type:"text"},P.propType={label:A.a.string.isRequired,type:A.a.string.isRequired,name:A.a.string.isRequired,placeholder:A.a.string.isRequired,value:A.a.string.isRequired,onChange:A.a.func.isRequired,error:A.a.object.isRequired};var q=P,I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(v.a)(f.a.mark((function t(a,n){var r,c,s,o,i,l;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name Is Requierd"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email Is Requierd"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone Is Requierd"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},t.next=14,N.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:l=t.sent,a({type:"ADD_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(m.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone;return Object(j.jsx)(E,{children:function(t){var c=t.dispatch;return Object(j.jsxs)("div",{className:"card mb-3",children:[Object(j.jsx)("div",{className:"card-header ",children:"Add Contact"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{onSubmit:e.onSubmit.bind(e,c),children:[Object(j.jsx)(q,{label:"Name",name:"name",placeholder:"Enter name...",value:a,onchange:e.onChange,errors:e.state.errors.name}),Object(j.jsx)(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onchange:e.onChange,errors:e.state.errors.email}),Object(j.jsx)(q,{label:"Phone Number",name:"phone",placeholder:"Enter Phone...",value:r,onchange:e.onChange,errors:e.state.errors.phone}),Object(j.jsx)("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"})]})})]})}})}}]),a}(n.Component),R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(v.a)(f.a.mark((function t(a,n){var r,c,s,o,i,l,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name Is Requierd"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email Is Requierd"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone Is Requierd"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},l=e.props.match.params.id,t.next=15,N.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(m.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,N.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.email});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone;return Object(j.jsx)(E,{children:function(t){var c=t.dispatch;return Object(j.jsxs)("div",{className:"card mb-3",children:[Object(j.jsx)("div",{className:"card-header ",children:"Edit Contact"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{onSubmit:e.onSubmit.bind(e,c),children:[Object(j.jsx)(q,{label:"Name",name:"name",placeholder:"Enter name...",value:a,onchange:e.onChange,errors:e.state.errors.name}),Object(j.jsx)(q,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onchange:e.onChange,errors:e.state.errors.email}),Object(j.jsx)(q,{label:"Phone Number",name:"phone",placeholder:"Enter Phone...",value:r,onchange:e.onChange,errors:e.state.errors.phone}),Object(j.jsx)("input",{type:"submit",value:"Update Contact",className:"btn btn-danger btn-block"})]})})]})}})}}]),a}(n.Component),F=function(e){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"display-5",children:"About Contact Manager"}),Object(j.jsx)("p",{className:"lead",children:"Simple Contact Manager for You..."}),Object(j.jsx)("div",{className:"text-secondary",children:"vesion: 1.0.3"})]})},M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(v.a)(f.a.mark((function e(t,a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t({type:"DELETE_CONTACT",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:"DELETE_CONTACT",payload:a});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=this.state.showContactInfo;return Object(j.jsx)(E,{children:function(n){var r=n.dispatch;return Object(j.jsxs)("div",{className:"card card-body mb-3",children:[Object(j.jsxs)("h3",{children:[t.name," ",a?Object(j.jsx)("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer",color:"red"}}):Object(j.jsx)("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),Object(j.jsx)("i",{className:"fas fa-times",style:{color:"red",float:"right",cursor:"pointer"},onClick:e.onDeleteClick.bind(e,r,t.id)}),Object(j.jsx)(d.b,{to:"/contact/edit/".concat(t.id),children:Object(j.jsx)("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",color:"black",float:"right",marginRight:"1rem"}})})]}),a?Object(j.jsxs)("ul",{className:"list-group",children:[Object(j.jsxs)("li",{className:"list-group-item",children:["Email : ",t.email," "]}),Object(j.jsxs)("li",{className:"list-group-item",children:["Phone : ",t.phone," "]})]}):null]})}})}}]),a}(n.Component),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)(E,{children:function(e){var t=e.contacts;return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsxs)("h1",{className:"display-4",children:[Object(j.jsx)("span",{className:"text-danger",children:"Contact"})," List"]}),t.map((function(e){return Object(j.jsx)(M,{contact:e},e.id)}))]})}})}}]),a}(n.Component),L=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{className:"dislay-4",children:[Object(j.jsx)("span",{className:"text-danger",children:"404"})," Page Not Found"]}),Object(j.jsx)("p",{className:"lead",children:"Sorry, that page does not exit..."})]})},U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",comapny:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/1").then((function(e){return e.json()})).then((function(t){return e.setState({name:t.name,company:t.company.name})}))}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.company;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("p",{children:a})]})}}]),a}(n.Component),B=(a(68),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)(w,{children:Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",component:_}),Object(j.jsx)(h.a,{exact:!0,path:"/about",component:F}),Object(j.jsx)(h.a,{exact:!0,path:"/contact/add/",component:I}),Object(j.jsx)(h.a,{exact:!0,path:"/contact/edit/:id",component:R}),Object(j.jsx)(h.a,{exact:!0,path:"/test",component:U}),Object(j.jsx)(h.a,{component:L})]})})]})})})}}]),a}(r.a.Component)),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),J()}},[[69,1,2]]]);
//# sourceMappingURL=main.6f4f214d.chunk.js.map