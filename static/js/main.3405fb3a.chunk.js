(this["webpackJsonptimer-rx-js"]=this["webpackJsonptimer-rx-js"]||[]).push([[0],{19:function(t,e,c){},26:function(t,e,c){"use strict";c.r(e);var n=c(3),r=c.n(n),a=c(20),i=c.n(a),s=(c(19),c(5)),j=c(7),o=c.n(j),l=c(0),u=function(){var t=Object(n.useState)("00"),e=Object(s.a)(t,2),c=e[0],r=e[1],a=Object(n.useState)("00"),i=Object(s.a)(a,2),j=i[0],u=i[1],b=Object(n.useState)("00"),O=Object(s.a)(b,2),d=O[0],h=O[1],m=Object(n.useState)(!1),x=Object(s.a)(m,2),_=x[0],S=x[1],f=Object(n.useState)(0),p=Object(s.a)(f,2),v=p[0],T=p[1],B=Object(n.useState)(0),N=Object(s.a)(B,2),R=N[0],g=N[1],C=Object(n.useState)(!1),I=Object(s.a)(C,2),J=I[0],W=I[1],k=Object(n.useState)(0),M=Object(s.a)(k,2),P=M[0],E=M[1];return Object(n.useEffect)((function(){var t;return J&&(t=setInterval((function(){g((function(t){return t+10})),R>300&&(g(0),E(0))}),10)),function(){return clearInterval(t)}}),[J,R,P]),Object(n.useEffect)((function(){var t;return _&&(t=setInterval((function(){var t=Math.floor(v%3600%60),e=Math.floor(v%3600/60),c=Math.floor(v/3600),n=1===String(t).length?"0".concat(t):t,a=1===String(e).length?"0".concat(e):e,i=1===String(c).length?"0".concat(c):c;r(n),u(a),h(i),T((function(t){return t+1}))}),1e3)),function(){return clearInterval(t)}}),[_,v]),Object(l.jsxs)("div",{className:o.a.Wrapper,children:[Object(l.jsx)("h2",{className:o.a.Title,children:"Timer React"}),Object(l.jsxs)("div",{className:o.a.Timer,children:[Object(l.jsxs)("div",{className:o.a.Item,children:[Object(l.jsx)("p",{children:d}),Object(l.jsx)("h2",{children:"Hours"})]}),Object(l.jsxs)("div",{className:o.a.Item,children:[Object(l.jsx)("p",{children:j}),Object(l.jsx)("h2",{children:"Minutes"})]}),Object(l.jsxs)("div",{className:o.a.Item,children:[Object(l.jsx)("p",{children:c}),Object(l.jsx)("h2",{children:"Seconds"})]})]}),Object(l.jsxs)("div",{className:o.a.ControlPanel,children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:o.a.ButtonStart,onClick:function(){S(!0)},children:"Start"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:o.a.ButtonStop,onClick:function(){S(!1),W(!1),g(0),T(0),r("00"),u("00"),h("00")},children:"Stop"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:o.a.ButtonWait,onClick:function(){E((function(t){return t+1})),P>=1&&R<300&&S(!1),W(!0)},children:"Wait"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:o.a.ButtonReset,onClick:function(){T(0),r("00"),u("00"),h("00"),S(!0)},children:"Reset"})})]})]})},b=c(31),O=c(30),d=c(29),h=c(8),m=c.n(h),x=function(){var t=Object(n.useState)(0),e=Object(s.a)(t,2),c=e[0],r=e[1],a=Object(n.useState)("00"),i=Object(s.a)(a,2),j=i[0],o=i[1],u=Object(n.useState)("00"),h=Object(s.a)(u,2),x=h[0],_=h[1],S=Object(n.useState)("00"),f=Object(s.a)(S,2),p=f[0],v=f[1],T=Object(n.useState)(!1),B=Object(s.a)(T,2),N=B[0],R=B[1],g=Object(n.useState)(0),C=Object(s.a)(g,2),I=C[0],J=C[1],W=Object(n.useState)(!1),k=Object(s.a)(W,2),M=k[0],P=k[1],E=Object(n.useState)(0),F=Object(s.a)(E,2),G=F[0],w=F[1];Object(n.useEffect)((function(){var t=new b.a;return Object(O.a)(10).pipe(Object(d.a)(t)).subscribe((function(){J((function(t){return t+10})),I>300&&(J(0),w(0))})),function(){t.next(),t.complete()}}),[M,I,G]),Object(n.useEffect)((function(){var t=new b.a;return Object(O.a)(1e3).pipe(Object(d.a)(t)).subscribe((function(){if(N){var t=Math.floor(c%3600%60),e=Math.floor(c%3600/60),n=Math.floor(c/3600),a=1===String(t).length?"0".concat(t):t,i=1===String(e).length?"0".concat(e):e,s=1===String(n).length?"0".concat(n):n;o(a),_(i),v(s),r((function(t){return t+1}))}})),function(){t.next(),t.complete()}}),[N,c]);return Object(l.jsxs)("div",{className:m.a.Wrapper,children:[Object(l.jsx)("h2",{className:m.a.Title,children:"Timer React + RxJS"}),Object(l.jsxs)("div",{className:m.a.Timer,children:[Object(l.jsxs)("div",{className:m.a.Item,children:[Object(l.jsx)("p",{children:p}),Object(l.jsx)("h2",{children:"Hours"})]}),Object(l.jsxs)("div",{className:m.a.Item,children:[Object(l.jsx)("p",{children:x}),Object(l.jsx)("h2",{children:"Minutes"})]}),Object(l.jsxs)("div",{className:m.a.Item,children:[Object(l.jsx)("p",{children:j}),Object(l.jsx)("h2",{children:"Seconds"})]})]}),Object(l.jsxs)("div",{className:m.a.ControlPanel,children:[Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:m.a.ButtonStart,onClick:function(){R(!0)},children:"Start"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:m.a.ButtonStop,onClick:function(){R(!1),r(0),o("00")},children:"Stop"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:m.a.ButtonWait,onClick:function(){w((function(t){return t+1})),G>=1&&I<300&&R(!1),P(!0)},children:"Wait"})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:m.a.ButtonReset,onClick:function(){r(0),R(!0)},children:"Reset"})})]})]})};var _=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(x,{})]})},S=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;c(t),n(t),r(t),a(t),i(t)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),S()},7:function(t,e,c){t.exports={Wrapper:"Timer_Wrapper__13V22",Title:"Timer_Title__2gZOn",Timer:"Timer_Timer__3-J4q",Item:"Timer_Item__1MsGD",ControlPanel:"Timer_ControlPanel__1IGOs",ButtonStart:"Timer_ButtonStart__1Z2VZ",ButtonStop:"Timer_ButtonStop__j7_jG",ButtonWait:"Timer_ButtonWait__tvOG7",ButtonReset:"Timer_ButtonReset__1le6c"}},8:function(t,e,c){t.exports={Wrapper:"TimerRxJS_Wrapper__3PuKh",Title:"TimerRxJS_Title__2tk_T",Timer:"TimerRxJS_Timer__2OWm6",Item:"TimerRxJS_Item__2ma4v",ControlPanel:"TimerRxJS_ControlPanel__1EWQJ",ButtonStart:"TimerRxJS_ButtonStart__23yr3",ButtonStop:"TimerRxJS_ButtonStop__2MlRJ",ButtonWait:"TimerRxJS_ButtonWait__J_Bge",ButtonReset:"TimerRxJS_ButtonReset__JBGFz"}}},[[26,1,2]]]);
//# sourceMappingURL=main.3405fb3a.chunk.js.map