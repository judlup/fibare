(this.webpackJsonpfibare=this.webpackJsonpfibare||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},58:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(6),a=c(2),r=c.n(a),i=c(18),s=c.n(i),o=(c(49),c(50),c(25)),j=c(12),l=(c(51),c(35));l.a.initializeApp({apiKey:"AIzaSyD2kJmyE9IuE_wumYVW53R-i78RIYxnMYY",authDomain:"fibare-27779.firebaseapp.com",projectId:"fibare-27779",storageBucket:"fibare-27779.appspot.com",messagingSenderId:"403727482050",appId:"1:403727482050:web:b87bbe329b877517a30f5b",measurementId:"G-S24RTX6YTD"});var b=l.a,d=c(19),h=c(68),u=c(70),O="SUCESSFUL_LOGIN",x="FAILURE_LOGIN",p="LOGOUT",m=function(){var e=Object(d.c)((function(e){return e.auth})),t=Object(d.b)();function c(){var e=new b.auth.GoogleAuthProvider;b.auth().signInWithPopup(e).then((function(e){var c,n=e.user.displayName,a=e.user.email,r=e.user.photoURL,i={username:n,email:a,photo:r};t(n&&a&&r?(c=JSON.stringify(i),{type:O,payload:c}):{type:x})}))}function a(){t({type:p})}return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(h.a,{expand:"lg",variant:"light",bg:"light",children:[Object(n.jsx)(h.a.Brand,{children:Object(n.jsx)(o.b,{to:"/",children:"Fibare"})}),e?Object(n.jsx)(u.a,{onClick:function(){a()},children:"Logout"}):Object(n.jsx)(u.a,{variant:"light",className:"text-danger",onClick:function(){c()},children:"Google Login"})]})})},g=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("p",{style:{color:"#aaaaaa",textAlign:"center"},children:"judlup.dev"})})},f=c(65),I=c(66),y=c(43),v=c(69),S=c(67),E=(c(58),function(){var e=Object(d.c)((function(e){return e.auth}));Object(d.b)();return Object(n.jsx)(n.Fragment,{children:e?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(f.a,{className:"container",children:Object(n.jsxs)(I.a,{children:[Object(n.jsxs)(y.a,{md:12,children:[Object(n.jsx)("br",{}),Object(n.jsx)("h4",{className:"text-muted text-center",children:"Fibare ToDo"}),Object(n.jsx)("hr",{})]}),Object(n.jsx)(y.a,{md:12,children:Object(n.jsx)(v.a.Group,{children:Object(n.jsx)(v.a.Control,{size:"lg",type:"text",placeholder:"Enter Todo here... [Press Enter]",autoComplete:"off"})})}),Object(n.jsx)(y.a,{md:12,children:Object(n.jsx)("ul",{className:"todos list-groups",children:Object(n.jsx)("li",{className:"todo list-group-item",children:Object(n.jsxs)(S.a,{children:[Object(n.jsx)(v.a.Check,{type:"checkbox",label:"write this code "}),Object(n.jsx)(S.a.Append,{children:Object(n.jsx)(u.a,{variant:"outline-secondary",size:"sm",style:{position:"absolute",top:0,bottom:0,right:"1.25rem",margin:"auto 0",height:"25px",paddingTop:0,paddingBottom:0},children:"\xd7"})})]})})})})]})})}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(f.a,{className:"container",children:Object(n.jsx)(I.a,{children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)("br",{}),Object(n.jsx)("h4",{className:"text-muted text-center",children:"Sign In and ToDo all"}),Object(n.jsx)("hr",{})]})})})})})});function N(){return Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(m,{}),Object(n.jsx)(j.c,{children:Object(n.jsx)(j.a,{exac:!0,path:"/",component:E})}),Object(n.jsx)(g,{})]})})}var _=c(23),w=(c(60),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return localStorage.setItem("userData",t.payload),!0;case x:return localStorage.setItem("userData",""),!1;case p:return b.auth().signOut().then((function(){console.log("LOG OUT!"),localStorage.setItem("userData","")})),!1;default:return e}}),D=Object(_.b)({auth:w}),T=Object(_.c)(D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());window.store=T,s.a.render(Object(n.jsx)(d.a,{store:T,children:Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.46bdbb72.chunk.js.map