(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{143:function(e,t,n){},144:function(e,t,n){},147:function(e,t,n){},151:function(e,t,n){},157:function(e,t){},159:function(e,t){},170:function(e,t){},172:function(e,t){},197:function(e,t){},199:function(e,t){},200:function(e,t){},205:function(e,t){},207:function(e,t){},213:function(e,t){},215:function(e,t){},234:function(e,t){},246:function(e,t){},249:function(e,t){},263:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(50),o=n.n(a),i=(n(143),n(5)),s=n(29),l=n(6),u=(n(144),n.p+"static/media/loading.e3474b89.svg"),j=n(0);var d=function(e){var t=e.isLoading;return Object(j.jsx)("div",{className:"loading-indicator ".concat(t?"loading":""),children:Object(j.jsx)("img",{className:"loading-indicator__spinner",src:u,alt:"Loading ..."})})},h=n(11),b=(n(36),n(134));function O(){return"ADMIN"===function(){var e=localStorage.getItem("token");return e?Object(b.a)(e).role:""}().toUpperCase()}var f,m=O,g=n(16),p=n.n(g),x=n(21),v=(n(147),n(51)),y=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT_URL:"https://tommycodes-blog.herokuapp.com"}).PORT,"https://tommycodes-blog.herokuapp.com");function S(e,t){var n=localStorage.getItem("token");return fetch("".concat(y,"/").concat(e),{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)})}function k(e){var t=localStorage.getItem("token");return fetch("".concat(y,"/").concat(e),{method:"GET",mode:"cors",cache:"no-cache",credentials:"include",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"}})}function C(e,t){var n=localStorage.getItem("token");return fetch("".concat(y,"/").concat(e),{method:"PUT",mode:"cors",cache:"no-cache",credentials:"include",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"},body:JSON.stringify(t)})}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;switch(t){case f.success:h.c.success(e,{position:"bottom-center",autoClose:n,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,transition:h.a});break;case f.error:h.c.error(e,{position:"bottom-center",autoClose:n,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,transition:h.a});break;default:h.c.success(e,{position:"bottom-center",autoClose:n,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,transition:h.a})}}!function(e){e[e.error=0]="error",e[e.success=1]="success"}(f||(f={}));var N=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),s=o[0],l=o[1],u=Object(c.useState)(""),d=Object(i.a)(u,2),h=d[0],b=d[1],O=Object(c.useState)(!1),m=Object(i.a)(O,2),g=(m[0],m[1]);function y(e){return k.apply(this,arguments)}function k(){return(k=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=3;break}return e.next=3,t.json().then((function(e){throw Error(e.error)}));case 3:return e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){localStorage.getItem("token")&&g(!0)}),[]);var C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{password:s,email:n},c=e.target.parentElement.checkValidity();e.target.parentElement.reportValidity(),e.preventDefault(),""!==t.email&&""!==t.password&&c?(b(""),S("api/auth/login",t).then(y).then((function(e){w("Logged in!"),localStorage.setItem("token",e.token),setTimeout((function(){window.location.href="/"}),1500)})).catch((function(e){w(e.message,f.error)}))):b("Alle Felder m\xfcssen ausgef\xfcllt sein.")};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)(v.a,{children:[Object(j.jsx)("meta",{charSet:"utf-8"}),Object(j.jsx)("title",{children:"Tommycodes Blog - Login"})]}),Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("div",{className:"welcome-headline",children:Object(j.jsx)("h2",{children:"Welcome to Tommycodes"})}),Object(j.jsx)("div",{className:"login-container",children:Object(j.jsxs)("form",{autoComplete:"on",onSubmit:function(e){return C(e)},children:[Object(j.jsx)("label",{children:"E-Mail"}),Object(j.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"example@domain.com",onLoad:function(e){return r(e.target.value)},onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password",required:!0,placeholder:"********",minLength:6,onLoad:function(e){return l(e.target.value)},onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("span",{className:"error-message error-message--small",children:h}),Object(j.jsx)("button",{onClick:function(e){return C(e)},children:"Login"}),Object(j.jsx)("button",{style:{float:"right"},onClick:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{password:s,email:n};e.target.parentElement.checkValidity(),e.target.parentElement.reportValidity(),e.preventDefault(),""!==t.email&&""!==t.password?(b(""),S("api/auth/register",t).then(y).then((function(){w("User was successfully registered!")})).catch((function(e){w(e.message,f.error)}))):b("Alle Felder m\xfcssen ausgef\xfcllt sein.")}(e)},children:"Register"})]})})]})]})},E=(n(78),n(22)),T=n(23);var L=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),s=o[0],l=o[1],u=Object(c.useState)(""),d=Object(i.a)(u,2),b=d[0],O=d[1],m=Object(c.useState)(""),g=Object(i.a)(m,2),v=g[0],y=g[1],S=Object(c.useState)(""),N=Object(i.a)(S,2),L=N[0],_=N[1],I=Object(c.useState)(""),P=Object(i.a)(I,2),A=P[0],F=P[1];function B(e){return R.apply(this,arguments)}function R(){return(R=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=3;break}return e.next=3,t.json().then((function(e){if("failed"===e.authStatus)throw Error("authFailed");throw Error(e.message)}));case 3:return e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){D()}),[]);var D=function(){""===n&&k("api/profile").then(B).then((function(e){r(e.name),l(e.surname),O(e.city)})).catch((function(e){if("authFailed"===e.message)return localStorage.removeItem("token"),w("Session expired or token invalid. Please log in.",f.error),void setTimeout((function(){window.location.href="/"}),2e3);w(e.message,f.error)}))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("h2",{children:"Your profile"}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Name:"}),Object(j.jsx)("input",{defaultValue:n,onChange:function(e){return y(e.target.value)}})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Surname:"}),Object(j.jsx)("input",{defaultValue:s,onChange:function(e){return _(e.target.value)}})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"City:"}),Object(j.jsx)("input",{defaultValue:b,onChange:function(e){return F(e.target.value)}})]}),Object(j.jsxs)("button",{onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:v,surname:L,city:A};""===e.name&&(e.name=n),""===e.surname&&(e.surname=s),""===e.city&&(e.city=b),C("api/profile",e).then(B).then((function(e){r(e.profile.name),l(e.profile.surname),w(e.message)})).catch((function(e){w(e.message,f.error)}))}()},children:[Object(j.jsx)(E.a,{icon:T.b})," \xc4nderungen speichern"]})]})]}),Object(j.jsx)(h.b,{})]})};var _=function(e){var t=e.handleLoading,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),u=l[0],d=l[1],b=Object(c.useState)(""),O=Object(i.a)(b,2),m=O[0],g=O[1],v=Object(c.useState)([]),C=Object(i.a)(v,2),N=C[0],L=C[1],_=Object(c.useState)(""),I=Object(i.a)(_,2),P=I[0],A=I[1];function F(e){return B.apply(this,arguments)}function B(){return(B=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=3;break}return e.next=3,t.json().then((function(e){if("failed"===e.authStatus)throw Error("authFailed");throw Error(e.message)}));case 3:return e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){R()}),[P]);var R=function(){t(!0);k("api/users").then(F).then((function(e){L(e),t(!1)})).catch((function(e){w(e.message,f.error),t(!1)}))},D=function(e){(function(e,t){var n=localStorage.getItem("token");return fetch("".concat(y,"/").concat(e,"/").concat(t),{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"include",headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}})})("api/users",e).then(F).then((function(e){w(e.message),A(e)})).catch((function(e){w(e.message,f.error)}))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)("h2",{children:"Create new user"}),Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"User E-Mail:"}),Object(j.jsx)("input",{type:"email",required:!0,placeholder:"example@mail.com",onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Password (temporary):"}),Object(j.jsx)("input",{type:"text",required:!0,placeholder:"******",onChange:function(e){return d(e.target.value)}})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Role:"}),Object(j.jsxs)("select",{name:"role",onChange:function(e){return g(e.target.value)},defaultValue:"Please choose a role",id:"role",required:!0,children:[Object(j.jsx)("option",{value:"",children:"Please choose a role"}),Object(j.jsx)("option",{id:"admin",children:"Admin"}),Object(j.jsx)("option",{id:"editor",children:"Editor"}),Object(j.jsx)("option",{id:"writer",children:"Writer"})]})]}),Object(j.jsxs)("button",{onClick:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{email:a,password:u,role:m};if(e.target.form.checkValidity(),e.target.form.reportValidity(),e.preventDefault(),""!==t.email&&""!==t.password&&""!==t.role){S("api/auth/register",t).then(F).then((function(e){A(e),w("User was successfully registered")})).catch((function(e){w(e.message,f.error)}))}}(e)},children:[Object(j.jsx)(E.a,{icon:T.b})," \xc4nderungen speichern"]})]})}),Object(j.jsx)("hr",{}),Object(j.jsx)("h2",{children:"All registered users"}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"Name"}),Object(j.jsx)("td",{children:"Role"}),Object(j.jsx)("td",{children:"Remove"})]})}),Object(j.jsx)("tbody",{children:N.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.role}),Object(j.jsx)("td",{children:Object(j.jsxs)("button",{onClick:function(){return D(e._id)},children:[Object(j.jsx)(E.a,{icon:T.c})," Remove"]})})]},e.email)}))})]})]}),Object(j.jsx)(h.b,{})]})},I=(n(151),n(152),n(252),n(253),n(254),n(255),n(256),n(257),n(137)),P=n.n(I);var A={docId:"froala-editor",toolbarButtons:["fullscreen","bold","italic","underline","strikeThrough","subscript","superscript","|","paragraphFormat","align","formatOL","formatUL","outdent","indent","quote","-","insertLink","insertImage","insertTable","|","fontAwesome","specialCharacters","insertHR","selectAll","clearFormatting","html","|","undo","redo"],quickInsertTags:["p","div","h1","h2","h3"]},F=function(e){var t=e.handleLoading,n=Object(c.useState)([]),r=Object(i.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),u=l[0],d=l[1],b=Object(c.useState)(""),O=Object(i.a)(b,2),g=O[0],y=O[1],C=Object(c.useState)(""),N=Object(i.a)(C,2),L=N[0],_=N[1],I=Object(c.useState)(!1),F=Object(i.a)(I,2),B=F[0],R=F[1];function D(e){return V.apply(this,arguments)}function V(){return(V=Object(x.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=3;break}return e.next=3,t.json().then((function(e){if("failed"===e.authStatus)throw Error("authFailed");throw Error(e.message)}));case 3:return e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){M()}),[L]);var M=function(){t(!0),k("api/entry").then(D).then((function(e){e.reverse(),o(e),t(!1)})).catch((function(e){if("authFailed"===e.message)return localStorage.removeItem("token"),w("Session expired or token invalid. Please log in.",f.error),void setTimeout((function(){window.location.href="/login"}),2e3);w(e.message,f.error),t(!1)}))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)(v.a,{children:[Object(j.jsx)("meta",{charSet:"utf-8"}),Object(j.jsx)("title",{children:"Tommycodes Blog - Overview"})]}),Object(j.jsxs)("div",{className:"main",children:[m()&&Object(j.jsxs)("div",{className:"",children:[Object(j.jsxs)("button",{onClick:function(){return R(!B)},className:"blog-entry__button",children:[Object(j.jsx)(E.a,{icon:T.a})," Write entry"]}),B&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{children:"Title of entry"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},required:!0}),Object(j.jsx)("label",{children:"Content of entry"}),Object(j.jsx)(P.a,{config:A,tag:"textarea",onModelChange:function(e){return y(e)}}),Object(j.jsxs)("button",{type:"submit",className:"success",onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:u,content:g};""!==e.title&&""!==e.content&&(localStorage.getItem("token"),S("api/entry",e).then(D).then((function(e){_(e),w("Blog entry saved!"),R(!1)})).catch((function(e){w(e.message,f.error)})))}()},children:[Object(j.jsx)(E.a,{icon:T.b})," Publish entry"]})]})]}),0===a.length&&Object(j.jsx)("h2",{children:"No blog post so far ..."}),a.map((function(e){var t=function(e){var t=new Date(e),n=""+(t.getMonth()+1),c=""+t.getDate(),r=t.getFullYear();return n.length<2&&(n="0"+n),c.length<2&&(c="0"+c),[c,n,r].join(".")}(e.time);return Object(j.jsxs)("div",{className:"blog-entry",children:[Object(j.jsxs)("div",{className:"blog-entry__meta",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{children:["Written on ",t]})]}),Object(j.jsx)("div",{className:"blog-entry__content",dangerouslySetInnerHTML:{__html:e.content}})]},e.title)}))]}),Object(j.jsx)(h.b,{})]})},B=n.p+"static/media/tommyCodes.ee0b293c.svg";var R=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),u=o[0],b=o[1];return Object(c.useEffect)((function(){localStorage.getItem("token")&&b(localStorage.getItem("token"))}),[]),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(d,{isLoading:n}),Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{className:"logo-holder",children:Object(j.jsx)(s.b,{activeClassName:"active",to:"/",exact:!0,children:Object(j.jsx)("img",{src:B,alt:"Tommy Codes Blog"})})}),Object(j.jsxs)("div",{className:"main-navigation",children:[Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{activeClassName:"active",to:"/",exact:!0,children:"Blog"})}),!u&&Object(j.jsx)("li",{className:"logout",children:Object(j.jsx)(s.b,{activeClassName:"active",to:"/login",exact:!0,children:"Login"})}),u&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{activeClassName:"active",to:"/profile",children:"Profile"})}),O()&&Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{activeClassName:"active",to:"/userManagement",children:"Users"})}),Object(j.jsx)("li",{className:"logout",children:Object(j.jsx)("button",{onClick:function(){return localStorage.removeItem("token"),w("Logged out successfully! Redirecting to home."),void setTimeout((function(){window.location.href="/"}),2e3)},children:"Logout"})})]})]})}),Object(j.jsx)(h.b,{})]})]}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,children:Object(j.jsx)(F,{handleLoading:r})}),Object(j.jsx)(l.a,{path:"/profile",children:Object(j.jsx)(L,{})}),Object(j.jsx)(l.a,{path:"/userManagement",children:Object(j.jsx)(_,{handleLoading:r})}),Object(j.jsx)(l.a,{path:"/login",children:Object(j.jsx)(N,{})})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,264)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),D()},78:function(e,t,n){}},[[263,1,2]]]);
//# sourceMappingURL=main.98ce5f4e.chunk.js.map