(this.webpackJsonpgoogle_login=this.webpackJsonpgoogle_login||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t(1),s=t.n(c),a=t(3),i=t.n(a),l=(t(10),t.p+"static/media/logo.6ce24c58.svg"),r=(t(11),t(4)),g=void 0;console.log("v2.2.11");var d=function(e){var n={method:"POST",body:new Blob([JSON.stringify({access_token:e.accessToken,email:e.profileObj.email,name:e.profileObj.name,avatar:e.profileObj.imageUrl},null,2)],{type:"application/json"}),mode:"cors",cache:"default"};console.log("response",e),fetch("https://endorphin.fun/auth/google/callback",n).then((function(e){var n=e.headers.get("x-auth-token");e.json().then((function(e){n&&g.setState({isAuthenticated:!0,user:e,token:n})}))}))};var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(o.jsxs)("p",{children:["Edit ",Object(o.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(o.jsx)(r.GoogleLogin,{clientId:"319511837370-6h11919mja93u8rijnlbu3h5j8kt9k5l.apps.googleusercontent.com",buttonText:"Login",isSignedIn:!0,onSuccess:d})]})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,s=n.getLCP,a=n.getTTFB;t(e),o(e),c(e),s(e),a(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),p()}},[[12,1,2]]]);
//# sourceMappingURL=main.2ae5d396.chunk.js.map