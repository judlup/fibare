(this.webpackJsonpfibare=this.webpackJsonpfibare||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},58:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(2),r=n.n(a),i=n(18),s=n.n(i),o=(n(49),n(50),n(25)),j=n(12),l=(n(51),n(35));l.a.initializeApp({apiKey:"AIzaSyD2kJmyE9IuE_wumYVW53R-i78RIYxnMYY",authDomain:"fibare-27779.firebaseapp.com",projectId:"fibare-27779",storageBucket:"fibare-27779.appspot.com",messagingSenderId:"403727482050",appId:"1:403727482050:web:b87bbe329b877517a30f5b",measurementId:"G-S24RTX6YTD"});var d=l.a,b=n(19),u=n(68),h=n(70),O="SUCESSFUL_LOGIN",x="FAILURE_LOGIN",p="LOGOUT",m="ADD_TODO",g=function(){var e=Object(b.c)((function(e){return e.auth})),t=Object(b.b)();function n(){var e=new d.auth.GoogleAuthProvider;d.auth().signInWithPopup(e).then((function(e){var n,c=e.user.displayName,a=e.user.email,r=e.user.photoURL,i={username:c,email:a,photo:r};t(c&&a&&r?(n=JSON.stringify(i),{type:O,payload:n}):{type:x})}))}function a(){t({type:p})}return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(u.a,{expand:"lg",variant:"light",bg:"light",children:[Object(c.jsx)(u.a.Brand,{children:Object(c.jsx)(o.b,{to:"/",children:"Fibare"})}),e?Object(c.jsx)(h.a,{onClick:function(){a()},children:"Logout"}):Object(c.jsx)(h.a,{variant:"light",className:"text-danger",onClick:function(){n()},children:"Google Login"})]})})},f=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("p",{style:{color:"#aaaaaa",textAlign:"center"},children:"judlup.dev"})})},v=n(65),y=n(66),I=n(43),S=n(69),D=n(67),_=(n(58),function(){var e=Object(b.c)((function(e){return e.auth})),t=Object(b.c)((function(e){return e.todos})),n=Object(b.b)(),r=Object(a.useRef)("");return Object(c.jsx)(c.Fragment,{children:e?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(v.a,{className:"container",children:Object(c.jsxs)(y.a,{children:[Object(c.jsxs)(I.a,{md:12,children:[Object(c.jsx)("br",{}),Object(c.jsx)("h4",{className:"text-muted text-center",children:"Fibare ToDo"}),Object(c.jsx)("hr",{})]}),Object(c.jsx)(I.a,{md:12,children:Object(c.jsx)(S.a,{onSubmit:function(e){e.preventDefault();var t={title:r.current.value,done:!1};n({type:m,payload:t})},children:Object(c.jsx)(S.a.Group,{children:Object(c.jsx)(S.a.Control,{size:"lg",type:"text",placeholder:"Enter Todo here... [Press Enter]",ref:r,autoComplete:"off"})})})}),Object(c.jsxs)(I.a,{md:12,children:[t,"--",Object(c.jsx)("ul",{className:"todos list-groups",children:Object(c.jsx)("li",{className:"todo list-group-item",children:Object(c.jsxs)(D.a,{children:[Object(c.jsx)(S.a.Check,{type:"checkbox",label:"write this code "}),Object(c.jsx)(D.a.Append,{children:Object(c.jsx)(h.a,{variant:"outline-secondary",size:"sm",style:{position:"absolute",top:0,bottom:0,right:"1.25rem",margin:"auto 0",height:"25px",paddingTop:0,paddingBottom:0},children:"\xd7"})})]})})})]})]})})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(v.a,{className:"container",children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(I.a,{children:[Object(c.jsx)("br",{}),Object(c.jsx)("h4",{className:"text-muted text-center",children:"Sign In and ToDo all"}),Object(c.jsx)("hr",{})]})})})})})});function E(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{}),Object(c.jsx)(j.c,{children:Object(c.jsx)(j.a,{exac:!0,path:"/",component:_})}),Object(c.jsx)(f,{})]})})}var N=n(23),w=(n(60),localStorage.getItem("userData")),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!!w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return localStorage.setItem("userData",t.payload),!0;case x:return localStorage.setItem("userData",""),!1;case p:return d.auth().signOut().then((function(){console.log("LOG OUT!"),localStorage.setItem("userData","")})),!1;default:return e}},L=[],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return t.payload;default:return e}},k=Object(N.b)({auth:T,todos:F}),G=Object(N.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());window.store=G,s.a.render(Object(c.jsx)(b.a,{store:G,children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(E,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.4a45400b.chunk.js.map