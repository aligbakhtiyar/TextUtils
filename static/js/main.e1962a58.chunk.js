(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(5),l=c.n(n),r=(c(10),c(2)),i=(c(11),c(0));function o(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{href:"/",className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"/",className:"nav-link","aria-current":"page",to:"/",children:"Home"})})}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function d(e){var t=Object(s.useState)(""),c=Object(r.a)(t,2),a=c[0],n=c[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h1",{className:"mb-4",children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:a,onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(i.jsx)("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=a.toUpperCase();n(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=a.toLowerCase();n(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:function(){n(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(i.jsx)("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(a),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h2",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[a.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",a.length," characters"]}),Object(i.jsxs)("p",{children:[.008*a.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:a.length>0?a:"Nothing to preview!"})]})]})}o.defaultProps={title:"Set title here",aboutText:"About"};var j=function(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},b=c(3);c(13);var h=function(){return Object(i.jsx)("div",{className:"main-footer",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("h3",{children:"TextUtils"}),Object(i.jsxs)("h5",{className:"list-unstyled",children:[Object(i.jsx)("li",{children:"+91-6392970190"}),Object(i.jsx)("li",{children:"Lucknow, India"}),Object(i.jsx)("li",{children:"123 Streeet, Gomti Nagar"})]})]}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("h4",{children:"Stuff"}),Object(i.jsxs)("ui",{className:"list-unstyled",children:[Object(i.jsx)("li",{children:"Word Counter"}),Object(i.jsx)("li",{children:"UpperCase"}),Object(i.jsx)("li",{children:"LowerCase"})]})]}),Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("h4",{children:"Contact Us"}),Object(i.jsxs)("ui",{className:"list-unstyled",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(b.a,{})," Facebook"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(b.b,{})," Github"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)(b.c,{})," Linkedin"]})]})]})]}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("p",{className:"col-sm",children:["\xa9",(new Date).getFullYear()," THICC MEMES | All rights reserved | Terms Of Service | Privacy"]})})]})})};var u=function(){var e=Object(s.useState)("light"),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),l=Object(r.a)(n,2),b=l[0],u=l[1],m=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{title:"T-Utils",mode:c,toggleMode:function(){"light"===c?(a("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled","success")):(a("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"))}},new Date),Object(i.jsx)(j,{alert:b}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(d,{showAlert:m,heading:"Try TextUtils - word counter, character counter, remove extra spaces",mode:c})}),Object(i.jsx)(h,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),m()}],[[14,1,2]]]);
//# sourceMappingURL=main.e1962a58.chunk.js.map