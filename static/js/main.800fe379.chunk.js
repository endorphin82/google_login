(this.webpackJsonpgoogle_login=this.webpackJsonpgoogle_login||[]).push([[0],{21:function(e,n,o){},22:function(e,n,o){},41:function(e,n,o){"use strict";o.r(n);var t=o(1),c=o(2),s=o.n(c),i=o(13),r=o.n(i),l=(o(21),o(22),o(14)),a=o(4),g=o.n(a),u=o(15);console.log("v2.2.62");var d=function(e){console.log("res",e);var n="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=".concat("78bmlnwju2j0vj","&redirect_uri=").concat("https%3A%2F%2Fendorphin82.github.io%2Fgoogle_login","&scope=r_liteprofile%20r_emailaddress%20w_member_social");g.a.get(n,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return console.log(e)})).catch((function(e){return function(e){console.log("err",e)}(e)}))},h=function(e){console.log("response",e),g.a.post("https://con29.tk:8080/rest-auth/google",{access_token:e.accessToken}).then((function(e){console.log("then",e)}))};var j=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsxs)("header",{className:"App-header",children:[Object(t.jsxs)("p",{children:["Edit ",Object(t.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(t.jsx)(l.GoogleLogin,{clientId:"319511837370-6h11919mja93u8rijnlbu3h5j8kt9k5l.apps.googleusercontent.com",buttonText:"Login",isSignedIn:!0,onSuccess:h}),Object(t.jsx)("br",{}),Object(t.jsx)(u.LinkedInLoginButton,{onClick:d})]})})},p=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,42)).then((function(n){var o=n.getCLS,t=n.getFID,c=n.getFCP,s=n.getLCP,i=n.getTTFB;o(e),t(e),c(e),s(e),i(e)}))};r.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(j,{})}),document.getElementById("root")),p()}},[[41,1,2]]]);
//# sourceMappingURL=main.800fe379.chunk.js.map