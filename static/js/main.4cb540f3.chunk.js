(this["webpackJsonpsteffan-cv"]=this["webpackJsonpsteffan-cv"]||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s.n(c),i=s(32),r=s.n(i),o=(s(41),s(42),s(5)),l=s(9),j=s(10),d=s(12),h=s(11),b=s(30),m=s(33),p=s.n(m),u=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.occupation,s=this.props.data.description,c=this.props.data.address.city,n=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsxs)("header",{id:"home",children:[Object(a.jsxs)("nav",{id:"nav-wrap",children:[Object(a.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(a.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(a.jsxs)("ul",{id:"nav",className:"nav",children:[Object(a.jsx)("li",{className:"current",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#resume",children:"CV"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Portfolio"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsx)("h1",{className:"responsive-headline",children:e}),Object(a.jsxs)("h3",{children:["I'm a ",c," based ",Object(a.jsx)("span",{children:t}),", ",s,"."]}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{className:"social",children:n})]})}),Object(a.jsx)("p",{className:"scrolldown",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(a.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),O=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})},e.name)}));return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"twelve columns",children:[Object(a.jsx)("ul",{className:"social-links",children:e}),Object(a.jsxs)("ul",{className:"copyright",children:[Object(a.jsx)("li",{children:"\xa9 Copyright 2020 Steffan Crowe"}),Object(a.jsxs)("li",{children:["Design by ",Object(a.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]}),Object(a.jsx)("div",{id:"go-top",children:Object(a.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(a.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),x=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="react-CV/images/"+this.props.data.image,s=this.props.data.bio,c=(this.props.data.address.street,this.props.data.address.city),n=(this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email),i=this.props.data.resumedownload;return Object(a.jsx)("section",{id:"about",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"three columns",children:Object(a.jsx)("img",{className:"profile-pic",src:t,alt:"Steffan Crowe Profile Pic"})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("h2",{children:"About Me"}),Object(a.jsx)("p",{children:s}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"columns contact-details",children:[Object(a.jsx)("h2",{children:"Contact Details"}),Object(a.jsxs)("p",{className:"address",children:[e,Object(a.jsx)("br",{}),c," ",Object(a.jsx)("br",{}),n," ",Object(a.jsx)("br",{})]})]}),Object(a.jsx)("div",{className:"columns download",children:Object(a.jsx)("p",{children:Object(a.jsxs)("a",{href:i,className:"button",children:[Object(a.jsx)("i",{className:"fa fa-download"}),"Download CV"]})})})]}),Object(a.jsx)("a",{href:"https://github.com/SteffanCrowe/react-CV",children:"The source for this website can be viewed on my GitHub repository. Click Here!"})]})]})})}}]),s}(c.Component),f=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e.school}),Object(a.jsxs)("p",{className:"info",children:[e.degree," ",Object(a.jsx)("span",{children:"\u2022"}),Object(a.jsx)("em",{className:"date",children:e.graduated})]}),Object(a.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:e.company}),Object(a.jsxs)("p",{className:"info",children:[e.title,Object(a.jsx)("span",{children:"\u2022"})," ",Object(a.jsx)("em",{className:"date",children:e.years})]}),Object(a.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{style:{width:e.level},className:t}),Object(a.jsx)("em",{children:e.name})]},e.name)}));return Object(a.jsxs)("section",{id:"resume",children:[Object(a.jsxs)("div",{className:"row work",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Work"})})}),Object(a.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(a.jsxs)("div",{className:"row education",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Education"})})}),Object(a.jsx)("div",{className:"nine columns main-col",children:Object(a.jsx)("div",{className:"row item",children:Object(a.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(a.jsxs)("div",{className:"row skill",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Skills"})})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("p",{children:e}),Object(a.jsx)("div",{className:"bars",children:Object(a.jsx)("ul",{className:"skills",children:c})})]})]})]})}}]),s}(c.Component),v=s(19),g=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="react-CV/images/portfolio/"+e.image;return Object(a.jsx)("div",{className:"columns portfolio-item",children:Object(a.jsx)("div",{className:"item-wrap",children:Object(a.jsxs)(v.b,{to:e.url,title:e.title,children:[Object(a.jsx)("img",{alt:e.title,src:t}),Object(a.jsx)("div",{className:"overlay",children:Object(a.jsxs)("div",{className:"portfolio-item-meta",children:[Object(a.jsx)("h5",{children:e.title}),Object(a.jsx)("p",{children:e.category})]})}),Object(a.jsx)("div",{className:"link-icon",children:Object(a.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(a.jsx)("section",{id:"portfolio",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"twelve columns collapsed",children:[Object(a.jsx)("h1",{children:"Recent personal projects"}),Object(a.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(c.Component),N=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.address.city,s=this.props.data.email,c=this.props.data.contactmessage;return Object(a.jsxs)("section",{id:"contact",children:[Object(a.jsxs)("div",{className:"row section-head",children:[Object(a.jsx)("div",{className:"two columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Get In Touch."})})}),Object(a.jsx)("div",{className:"ten columns",children:Object(a.jsx)("p",{className:"lead",children:c})})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("aside",{className:"four columns footer-widgets",children:Object(a.jsxs)("div",{className:"widget widget_contact",children:[Object(a.jsx)("h4",{children:"Address"}),Object(a.jsxs)("p",{className:"address",children:[e,Object(a.jsx)("br",{}),t," ",Object(a.jsx)("br",{}),s," ",Object(a.jsx)("br",{})]})]})})})]})}}]),s}(c.Component),w=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},b.a.initialize("UA-110570651-1"),b.a.pageview(window.location.pathname),a}return Object(j.a)(s,[{key:"getResumeData",value:function(){p.a.ajax({url:"react-CV/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{data:this.state.resumeData.main}),Object(a.jsx)(x,{data:this.state.resumeData.main}),Object(a.jsx)(f,{data:this.state.resumeData.resume}),Object(a.jsx)(g,{data:this.state.resumeData.portfolio}),Object(a.jsx)(N,{data:this.state.resumeData.main}),Object(a.jsx)(O,{data:this.state.resumeData.main})]})}}]),s}(c.Component),y=s(83),C=s(82),k=s(81),D=s(77),S=s(79),V=s(78),B=s(74),A=s(76),T=s(80);function W(){return Object(a.jsxs)(B.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ","Steffan Crowe",2020,"."]})}var G=Object(A.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(4,0,2)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),E=[1,2,3,4,5,6,7,8,9];function H(){var e=G();return window.scrollTo(0,0),Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)(D.a,{}),Object(a.jsx)(V.a,{children:Object(a.jsx)(v.b,{title:"Back",to:"/react-CV",children:Object(a.jsxs)(S.a,{container:!0,spacing:2,justify:"left",children:[Object(a.jsx)(S.a,{item:!0,children:Object(a.jsx)("i",{className:"icon-left-open"})}),Object(a.jsx)(S.a,{item:!0,children:Object(a.jsx)(B.a,{variant:"h4",color:"inherit",noWrap:!0,children:"Back"})})]})})}),Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:e.heroContent,children:Object(a.jsxs)(T.a,{maxWidth:"sm",children:[Object(a.jsx)(B.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"AutoConsult"}),Object(a.jsx)(B.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"AutoConsult is a business that lease cars founded by some friends of mine. They required a system for their employees to use, to allow them to manage their customers and the status of their lease applications."})]})}),Object(a.jsx)(T.a,{className:e.cardGrid,maxWidth:"md",children:Object(a.jsx)(S.a,{container:!0,spacing:4,children:E.map((function(t){return Object(a.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsxs)(y.a,{className:e.card,children:[Object(a.jsx)(k.a,{className:e.cardMedia,image:"images/portfolio/autoconsult-login.JPG",title:"User Login"}),Object(a.jsxs)(C.a,{className:e.cardContent,children:[Object(a.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"User Login"}),Object(a.jsx)(B.a,{children:"Every employee has their own login details to access the system, with differing levels of privileges. Using Simblas database driven website builder, storing the user account details is made secure and easy to manage."})]})]})},t)}))})})]}),Object(a.jsxs)("footer",{className:e.footer,children:[Object(a.jsx)(B.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(a.jsx)(B.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(a.jsx)(W,{})]})]})}var L=function(){return Object(a.jsxs)(o.c,{children:[" ",Object(a.jsx)(o.a,{exact:!0,path:"/react-CV",component:w}),Object(a.jsx)(o.a,{exact:!0,path:"/react-CV/autoconsult",component:H})]})};var P=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(L,{})})},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(a.jsx)(v.a,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-CV",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-CV","/service-worker.js");R?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):U(e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.4cb540f3.chunk.js.map