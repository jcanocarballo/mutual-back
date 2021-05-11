(this["webpackJsonpmutual-app"]=this["webpackJsonpmutual-app"]||[]).push([[0],{204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(10),c=n.n(r),o=n(9),s=n(28),i=n(81),u=n(6),l="[UI] Set Error",j="[UI] Remove Error",b="[UI] Start loading",d="[UI] Finish loading",m="[ui] Open modal",p="[ui] Close modal",O="[event] Set Active",f="[event] Logout event",h="[event] Add new",v="[event] Clear active event",x="[event] Event updated",g="[event] Event deleted",y="[event] Events loaded",k="[auth] Finish checking login state",w="[auth] Login",E="[auth] Logout",N={modalOpen:!1},_=n(58),S={events:[],activeEvent:null},C={checking:!0},D=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case p:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});case l:return Object(u.a)(Object(u.a)({},e),{},{msgError:t.payload});case j:return Object(u.a)(Object(u.a)({},e),{},{msgError:null});case b:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{loading:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case h:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(_.a)(e.events),[t.payload])});case v:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case x:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case g:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case y:return Object(u.a)(Object(u.a)({},e),{},{events:Object(_.a)(t.payload)});case f:return Object(u.a)({},S);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case k:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case E:return{checking:!1};default:return e}}}),I="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,T=Object(s.d)(D,I(Object(s.a)(i.a))),A=n(21),F=n(11),L=n(16),R=n(27),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(L.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(R.a)({},t.name,t.value)))};return[r,s,o]},U=n(13),G=n.n(U),V=n(24),H="https://mutual-app.herokuapp.com/api",J=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(H,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(H,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},q=n(20),B=n.n(q),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:B()(e.end).toDate(),start:B()(e.start).toDate()})}))},z=n(18),Y=n.n(z),K=function(e){return{type:h,payload:e}},Q=function(e){return{type:y,payload:e}},W=function(){return{type:v}},Z=function(e){return{type:x,payload:e}},$=function(){return{type:g}},ee=function(){return{type:k}},te=function(e){return{type:w,payload:e}},ne=function(){return function(e){localStorage.clear(),e({type:f}),e(ae())}},ae=function(){return{type:E}},re=n(2),ce=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=P({email:"",password:""}),a=Object(L.a)(n,2),r=a[0],c=a[1],s=r.email,i=r.password;return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)("h3",{className:"auth__title",children:"Login"}),Object(re.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(function(e,t){return function(){var n=Object(V.a)(G.a.mark((function n(a){var r,c;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,J("auth",{email:e,password:t},"POST");case 2:return r=n.sent,n.next=5,r.json();case 5:if(!(c=n.sent).ok){n.next=12;break}localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),a(te({uid:c.uid,name:c.name,email:c.email})),n.next=18;break;case 12:if(!c.errors){n.next=17;break}if(!c.errors.email){n.next=15;break}return n.abrupt("return",Y.a.fire("Error",c.errors.email.msg,"error"));case 15:if(!c.errors.password){n.next=17;break}return n.abrupt("return",Y.a.fire("Error",c.errors.password.msg,"error"));case 17:return n.abrupt("return",Y.a.fire("Error",c.msg,"error"));case 18:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(s,i))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(re.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:s,onChange:c}),Object(re.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:i,onChange:c}),Object(re.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(re.jsx)(A.b,{to:"/auth/register",className:"link",children:"Crear nueva cuenta"})]})]})},oe=n(82),se=n.n(oe),ie=function(e){return{type:l,payload:e}},ue=function(){return{type:m}},le=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,n=P({name:"",email:"",password:"",password2:""}),a=Object(L.a)(n,2),r=a[0],c=a[1],s=r.name,i=r.email,u=r.password,l=r.password2,b=function(){return 0===s.trim().length?(e(ie("El nombre es requerido")),!1):se.a.isEmail(i)?u!==l||u.length<5?(e(ie("La contrase\xf1a debe tener al menos 6 caracteres y coincidir entre s\xed")),!1):(e({type:j}),!0):(e(ie("El email no es valido")),!1)};return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)("h3",{className:"auth__title",children:"Registrar"}),t&&Object(re.jsx)("div",{className:"auth__alert-error",children:t}),Object(re.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b()&&e(function(e,t,n){return function(){var a=Object(V.a)(G.a.mark((function a(r){var c,o;return G.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,J("auth/register",{email:e,password:t,name:n},"POST");case 2:return c=a.sent,a.next=5,c.json();case 5:(o=a.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),r(te({uid:o.uid,name:o.name,email:o.email}))):Y.a.fire("Error",o.msg,"error");case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(i,u,s))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(re.jsx)("input",{type:"text",placeholder:"Nombre",name:"name",className:"auth__input",autoComplete:"off",value:s,onChange:c}),Object(re.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:c}),Object(re.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",name:"password",className:"auth__input",value:u,onChange:c}),Object(re.jsx)("input",{type:"password",placeholder:"Confirmar contrase\xf1a",name:"password2",className:"auth__input",value:l,onChange:c}),Object(re.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Registrar"}),Object(re.jsx)(A.b,{to:"/auth/login",className:"link",children:"Ya estas registrado?"})]})]})},je=function(){return Object(re.jsx)("div",{className:"auth__main",children:Object(re.jsx)("div",{className:"auth__box-container",children:Object(re.jsxs)(F.d,{children:[Object(re.jsx)(F.b,{exact:!0,path:"/auth/login",component:ce}),Object(re.jsx)(F.b,{exact:!0,path:"/auth/register",component:le}),Object(re.jsx)(F.a,{to:"/auth/login"})]})})})},be=n(41),de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(be.a)(e,["isAuthenticated","component"]);return Object(re.jsx)(F.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(re.jsx)(n,Object(u.a)({},e)):Object(re.jsx)(F.a,{to:"/auth/login"})}}))},me=n(57),pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(re.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(re.jsx)("span",{className:"navbar-brand",children:t}),Object(re.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(ne())},children:[Object(re.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(re.jsx)("span",{children:" Salir"})]})]})},Oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},fe=function(e){var t=e.event,n=t.title,a=t.user;return Object(re.jsxs)("div",{children:[Object(re.jsxs)("strong",{children:[" ",n," "]}),Object(re.jsxs)("span",{children:["- ",a.name," "]})]})},he=n(54),ve=n.n(he),xe=n(55),ge=n.n(xe),ye={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ve.a.setAppElement("#root");var ke=B()().minutes(0).seconds(0).add(1,"hours"),we=ke.clone().add(1,"hours"),Ee={title:"",notes:"",start:ke.toDate(),end:we.toDate()},Ne=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(ke.toDate()),c=Object(L.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(we.toDate()),j=Object(L.a)(l,2),b=j[0],d=j[1],m=Object(a.useState)(!0),O=Object(L.a)(m,2),f=O[0],h=O[1],v=Object(a.useState)(Ee),x=Object(L.a)(v,2),g=x[0],y=x[1],k=g.notes,w=g.title,E=g.start,N=g.end;Object(a.useEffect)((function(){y(t||Ee)}),[t,y]);var _=function(e){var t=e.target;y(Object(u.a)(Object(u.a)({},g),{},Object(R.a)({},t.name,t.value)))},S=function(){n({type:p}),n(W()),y(Ee)};return Object(re.jsxs)(ve.a,{isOpen:e,onRequestClose:S,style:ye,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(re.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(re.jsx)("hr",{}),Object(re.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=B()(E),c=B()(N);return r.isSameOrAfter(c)?Y.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):w.trim().length<2?h(!1):(n(t?(a=g,function(){var e=Object(V.a)(G.a.mark((function e(t){var n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(Z(a)):Y.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(V.a)(G.a.mark((function t(n,a){var r,c,o,s,i,u;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,s=r.email,t.prev=1,t.next=4,M("events",e,"POST");case 4:return i=t.sent,t.next=7,i.json();case 7:u=t.sent,console.log(u),u.ok&&(e.id=u.evento.id,e.user={_id:c,name:o,email:s},console.log(e),n(K(e))),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0),Y.a.fire("Error","Favor de comunicarse con el administrador","error");case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),h(!0),void S())},children:[Object(re.jsxs)("div",{className:"form-group",children:[Object(re.jsx)("label",{children:"Fecha y hora inicio"}),Object(re.jsx)(ge.a,{onChange:function(e){i(e),y(Object(u.a)(Object(u.a)({},g),{},{start:e}))},value:s,className:"form-control"})]}),Object(re.jsxs)("div",{className:"form-group",children:[Object(re.jsx)("label",{children:"Fecha y hora fin"}),Object(re.jsx)(ge.a,{onChange:function(e){d(e),y(Object(u.a)(Object(u.a)({},g),{},{end:e}))},value:b,minDate:s,className:"form-control"})]}),Object(re.jsx)("hr",{}),Object(re.jsxs)("div",{className:"form-group",children:[Object(re.jsx)("label",{children:"Titulo y notas"}),Object(re.jsx)("input",{type:"text",className:"form-control ".concat(!f&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:w,onChange:_}),Object(re.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(re.jsxs)("div",{className:"form-group",children:[Object(re.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:k,onChange:_}),Object(re.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(re.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block",children:[Object(re.jsx)("i",{className:"far fa-save"}),Object(re.jsx)("span",{children:" Guardar"})]})]})]})},_e=(n(202),n(203),function(){var e=Object(o.b)();return Object(re.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ue())},children:Object(re.jsx)("i",{className:"fas fa-plus"})})}),Se=function(){var e=Object(o.b)();return Object(re.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(V.a)(G.a.mark((function e(t,n){var a,r,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,M("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t($()):Y.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(re.jsx)("i",{className:"fas fa-trash"}),Object(re.jsx)("span",{children:" Borrar evento "})]})};B.a.locale("es");var Ce=Object(me.b)(B.a),De=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(L.a)(s,2),u=i[0],l=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(V.a)(G.a.mark((function e(t){var n,a,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=X(a.eventos),t(Q(r)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),Y.a.fire("Error","Favor de comunicarse con el administrador","error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(re.jsxs)("div",{className:"calendar-screen",children:[Object(re.jsx)(pe,{}),Object(re.jsx)(me.a,{localizer:Ce,events:n,startAccessor:"start",endAccessor:"end",messages:Oe,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ue())},onSelectEvent:function(t){e({type:O,payload:t})},onView:function(e){l(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(W())},selectable:!0,view:u,components:{event:fe}}),Object(re.jsx)(_e,{}),r&&Object(re.jsx)(Se,{}),Object(re.jsx)(Ne,{})]})},Ie=function(e){var t=e.isAuthenticated,n=e.component,a=Object(be.a)(e,["isAuthenticated","component"]);return Object(re.jsx)(F.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(re.jsx)(F.a,{to:"/"}):Object(re.jsx)(n,Object(u.a)({},e))}}))},Te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(V.a)(G.a.mark((function e(t){var n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:a.uid,name:a.name,email:a.email}))):t(ee());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(re.jsx)("h1",{children:"Espere..."}):Object(re.jsx)(A.a,{children:Object(re.jsx)("div",{children:Object(re.jsxs)(F.d,{children:[Object(re.jsx)(Ie,{path:"/auth",component:je,isAuthenticated:!!r}),Object(re.jsx)(de,{exact:!0,isAuthenticated:!!r,path:"/",component:De}),Object(re.jsx)(F.a,{to:"/auth/login",exact:!0})]})})})},Ae=function(){return Object(re.jsx)(o.a,{store:T,children:Object(re.jsx)(Te,{})})};n(204),n(205);c.a.render(Object(re.jsx)(Ae,{}),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.6a15228d.chunk.js.map