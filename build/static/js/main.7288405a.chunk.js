(this["webpackJsonpmsal-react-quickstart"]=this["webpackJsonpmsal-react-quickstart"]||[]).push([[0],{80:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),i=a.n(r),o=(a(79),a(80),a(65)),s=a(16),l=a(37),d=a(17),u=a(29),j=a(51),b={auth:{clientId:"6a6da228-77ee-4861-b81a-09f06cb71774",authority:"https://login.microsoftonline.com/3b33923a-78f3-4f37-9921-f0186d9bacd1",redirectUri:"http://localhost:3000/"},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!1},system:{loggerOptions:{loggerCallback:function(e,t,a){if(!a)switch(e){case j.a.Error:return void console.error(t);case j.a.Info:return void console.info(t);case j.a.Verbose:return void console.debug(t);case j.a.Warning:return void console.warn(t)}}}}},p={scopes:["User.Read"]},h="https://graph.microsoft.com/v1.0/me",g=a(124),m=a(6),O=function(){var e=Object(u.e)().instance;return Object(m.jsx)(g.a,{className:"btn btn-primary",variant:"contained",color:"secondary",drop:"left",onClick:function(){var t;"popup"===(t="redirect")?e.loginPopup(p).catch((function(e){console.log(e)})):"redirect"===t&&e.loginRedirect(p).catch((function(e){console.log(e)}))},children:"Inicia Sesi\xf3n"})},f=a(31),x=a(138),v=a(126),k=a(24),y=a(64),w=a.n(y),C=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(f.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.a)(e.palette.common.white,.25)},marginLeft:0,marginRight:4,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),B=function(e){var t=e.buscar,a=e.setBuscar,n=Object(u.e)().instance,c=C(),r=t.name;t.enter;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:c.search,children:[Object(m.jsx)("div",{className:c.searchIcon,children:Object(m.jsx)(w.a,{})}),Object(m.jsx)(x.a,{name:"name",placeholder:"Buscar...",classes:{root:c.inputRoot,input:c.inputInput},inputProps:{"aria-label":"search"},value:r,onKeyPress:function(e){var n,c=e.target;"Enter"===e.key&&(console.log("Se intentan buscar las coincidencias de: ",c.value),a(Object(l.a)(Object(l.a)({},t),{},(n={},Object(f.a)(n,c.name,c.value),Object(f.a)(n,"enter",!0),n))))},onChange:function(e){return function(e){var n,c=e.target;a(Object(l.a)(Object(l.a)({},t),{},(n={},Object(f.a)(n,c.name,c.value),Object(f.a)(n,"enter",!1),n)))}(e)},autoComplete:"off"})]}),Object(m.jsx)(g.a,{className:"btn btn-primary",variant:"contained",color:"secondary",drop:"left",onClick:function(){var e;"popup"===(e="redirect")?n.logoutPopup({postLogoutRedirectUri:"/",mainWindowRedirectUri:"/"}):"redirect"===e&&n.logoutRedirect({postLogoutRedirectUri:"/"})},children:"Cerrar Sesi\xf3n"})]})},N=a(127),S=a(128),R=a(98),I=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),E=function(e){var t=e.buscar,a=e.setBuscar,n=e.children,c=Object(u.d)(),r=I();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:r.root,children:Object(m.jsx)(N.a,{position:"static",children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(R.a,{variant:"h6",className:r.title,children:"Plataforma de Autenticaci\xf3n de Microsoft"}),c?Object(m.jsx)(B,{buscar:t,setBuscar:a}):Object(m.jsx)(O,{})]})})}),Object(m.jsx)("br",{}),n]})},D=function(e){return console.log(e.graphData),Object(m.jsxs)("div",{id:"profile-div",children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"First Name: "})," ",e.graphData.givenName]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Last Name: "})," ",e.graphData.surname]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Email: "})," ",e.graphData.userPrincipalName]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Id: "})," ",e.graphData.id]})]})},P=a(35),G=a.n(P),A=a(40);function z(){return(z=Object(A.a)(G.a.mark((function e(t){var a,n,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Headers,n="Bearer ".concat(t),a.append("Authorization",n),c={method:"GET",headers:a},e.abrupt("return",fetch(h,c).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=a(67),T=(a(90),a(131)),U=a.p+"static/media/bathroom1.0d9aabef.png",L=(a(91),a(25)),M=a(133),V=a(136),_=a(135),q=a(134),W=a(130),J=a(132),H=a(129),K=a(139),Y=a.p+"static/media/PDF.16200e97.png",Q=a.p+"static/media/JPG.22ace614.png",X=a.p+"static/media/DOC.839581f4.png",Z=a.p+"static/media/FILE.6f1ec08c.png",$=a.p+"static/media/FOLDER2.037bbf71.png";a(92);function ee(){return Object(m.jsxs)(R.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 Mi sitio web de proyectos realizados: ",Object(m.jsx)(H.a,{color:"inherit",href:"https://github.com/cocorland",children:"https://github.com/cocorland"})," ",(new Date).getFullYear(),"."]})}var te=function e(t,a,n){var c,r="\\Users\\adminvencer\\Documents\\".concat(t.join("\\"));for(c=0;c<a.length;c+=1)a[c].path==r?(console.log("Este es el resultado en la funcion: ",a[c].children),n.push(a[c].children)):a[c].children&&e(t,a[c].children,n)};function ae(e,t,a,n,c,r,i,o,s,l,d,u){var j=Object(L.a)(r),b=t.findIndex((function(t){return t===e.target.innerText}))+1;t.length=b,j.length=b,i(Object(L.a)(j));var p=[];te(t,o,p),console.log("Result al terminar la funcion buscar: ",p[0]),p[0]?(c(p[0]),d(p[0])):(c(o),d(o)),a(t),u({name:"",enter:!1})}var ne=function(e){var t=e.breadcrumb,a=e.setBreadcrumb,n=(e.folders,e.setFolders),c=e.recorrido,r=e.setRecorrido,i=e.foldersOriginal,o=(e.setConsegui,e.actual,e.setActual),s=e.setEnter,l=Object(L.a)(t);return l.pop(),Object(m.jsxs)(K.a,{separator:"\u203a","aria-label":"breadcrumb",align:"center",children:[l.map((function(e){return Object(m.jsx)(g.a,{underline:"hover",color:"primary",onClick:function(e){return ae(e,Object(L.a)(t),a,0,n,Object(L.a)(c),r,i,0,0,o,s)},children:e},e)})),Object(m.jsx)(g.a,{underline:"hover",color:"inherit",children:t[t.length-1]})]})},ce=Object(v.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function re(e,t,a){var n;for(n=0;n<t.length;n+=1)t[n].name.includes(e)?(a.push(t[n]),t[n].children&&re(e,t[n].children,a)):t[n].children&&re(e,t[n].children,a);return a}function ie(e){var t=ce(),a=e.buscar,r=e.setBuscar,i=Object(n.useState)([]),o=Object(d.a)(i,2),s=o[0],l=o[1],u=Object(n.useState)(["COMPA\xd1\xcdAS"]),j=Object(d.a)(u,2),b=j[0],p=j[1],h=Object(n.useState)("https:localhost:5000"),O=Object(d.a)(h,2),f=O[0],x=O[1],v=Object(n.useState)(),k=Object(d.a)(v,2),y=k[0],w=k[1],C=Object(n.useState)(),B=Object(d.a)(C,2),N=B[0],S=B[1],I=Object(n.useState)(),E=Object(d.a)(I,2),D=E[0],P=E[1],z=Object(n.useState)(!0),F=Object(d.a)(z,2),U=F[0],H=F[1],K=function(){var e=Object(A.a)(G.a.mark((function e(){var t,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://10.20.4.251:4000/api/folders");case 3:return t=e.sent,console.log(t.status),e.next=7,t.json();case 7:a=e.sent,w(a),S(a),P(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){K()}),[]),Object(n.useEffect)((function(){l([].concat(Object(L.a)(s),[y]));var e=b.map((function(e){return encodeURI(e)}));e.shift();var t="http://localhost:5000/"+e.join("/");x(t)}),[y]),Object(n.useEffect)((function(){var e=a.name.toUpperCase();if(y&&(a.name.length>7&&a.name.match(/\w/))){var t=re(e,D,[]);w(t),0==t.length?H(!1):console.log("Encontre ".concat(t.length," resultados."))}if(a.enter){var n=e.match(/\w/);if(0==e.length&&(console.log("Busqueda vacia, muestra la carpeta actual."),w(D)),n){var c=re(e,D,[]);w(c),0==c.length?H(!1):console.log("Encontre ".concat(c.length," resultados."))}}}),[a]);var te=function(e){switch(e){case e=".pdf":return Y;case e=".jpg":return Q;case e=".docx":return X;default:return Z}};var ae=function(e){var t=e.ruta.split(/\\/).splice(4).join("/");return Object(m.jsx)("p",{className:"breakAll",children:t})};return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(W.a,{}),Object(m.jsxs)("main",{children:[Object(m.jsx)(T.a,{className:t.cardGrid,maxWidth:"md",children:Object(m.jsx)(ne,{breadcrumb:Object(L.a)(b),setBreadcrumb:p,folders:y,setFolders:w,recorrido:s,setRecorrido:l,foldersOriginal:N,actual:D,setActual:P,setEnter:r})}),Object(m.jsx)(T.a,{className:t.cardGrid,maxWidth:"md",children:Object(m.jsx)(J.a,{container:!0,spacing:4,children:y?0==y.length?1==U?Object(m.jsx)("div",{className:"alert alert-danger",children:" Esta carpeta esta vacia "}):Object(m.jsx)("div",{className:"alert alert-danger",children:" No consegui resultados. Actualice la p\xe1gina o ingrese otra b\xfasqueda. "}):y.map((function(e){return Object(m.jsx)(J.a,{item:!0,xs:12,sm:6,md:4,children:Object(m.jsxs)(M.a,{className:"animate__animated animate__fadeIn animate__fast",children:[Object(m.jsx)(q.a,{name:e.name,className:t.cardMedia,image:"directory"==e.type?$:te(e.extension)}),Object(m.jsxs)(_.a,{className:t.cardContent,children:[Object(m.jsx)(R.a,{gutterBottom:!0,variant:"h6",component:"h2",children:e.name}),a.enter?Object(m.jsx)(ae,{ruta:e.path}):Object(m.jsx)(m.Fragment,{children:" "}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(V.a,{children:"directory"==e.type?Object(m.jsx)(g.a,{size:"small",onClick:function(t){return function(e,t,a){w(Object(L.a)(t)),P(Object(L.a)(t));var n=a.split(/\\/).splice(4);p(Object(L.a)(n)),H(!0),r({name:"",enter:!1})}(0,Object(L.a)(e.children),e.path)},children:"Abrir Directorio"}):Object(m.jsx)(g.a,{onClick:function(t){return function(e,t){var a=t.split(/\\/).splice(5);x("http://localhost:5000/".concat(a.join("/")))}(0,e.path)},href:"".concat(f),size:"small",target:"_blank",children:"Ver"})})]})},"".concat(e.name).concat(e.path))})):Object(m.jsx)("div",{className:"alert alert-danger",children:" No se pudo acceder a la base de datos del servidor "})})})]}),Object(m.jsxs)("footer",{className:t.footer,children:[Object(m.jsx)(R.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Departamento de Inform\xe1tica Vencer\xe1mica"}),Object(m.jsxs)(R.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:[Object(m.jsx)("a",{children:"P\xe1gina web propiedad de Vencer\xe1mica Venezuela."}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{children:"Dise\xf1o, Implementaci\xf3n, Gesti\xf3n y Mantenimiento realizado por: "})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{children:"Orlando Chaparro Salazar"})})]}),Object(m.jsx)(ee,{})]})]})}var oe=Object(v.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})),se=function(){var e=oe(),t=Object(u.e)(),a=t.instance,c=t.accounts,r=Object(n.useState)(null),i=Object(d.a)(r,2),o=i[0],s=i[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(T.a,{maxWidth:"sm",children:[Object(m.jsxs)(R.a,{component:"h1",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0,children:["Bienvenido(a) ",c[0].name]}),Object(m.jsx)(R.a,{variant:"subtitle2",align:"center",color:"textSecondary",paragraph:!0,children:"Te damos la bienvenida al sistema de visualizaci\xf3n de archivos de Vencer\xe1mica, Venezuela. Te encuentras en el servidor principal. Utilizando el sistema de navegaci\xf3n por tarjetas puedes dirigirte al archivo que necesitas, o puedes utilizar el buscador en la barra de tareas."}),Object(m.jsx)("div",{className:e.heroButtons,children:o?Object(m.jsx)(D,{graphData:o}):Object(m.jsx)(F.a,{variant:"secondary",onClick:function(){a.acquireTokenSilent(Object(l.a)(Object(l.a)({},p),{},{account:c[0]})).then((function(e){(function(e){return z.apply(this,arguments)})(e.accessToken).then((function(e){return s(e)}))}))},children:"Solicitar Datos del Usuario"})})]})})},le=function(e){var t=e.buscar,a=e.setBuscar;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)(u.a,{children:[Object(m.jsx)(se,{}),Object(m.jsx)(ie,{buscar:t,setBuscar:a})]}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(R.a,{component:"h1",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0,children:"Bienvenido(a) al Sistema de Visualizaci\xf3n de Archivos de Vencer\xe1mica"}),Object(m.jsx)(R.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0,children:"Por favor, Inicie sesi\xf3n con su cuenta @venceramica.com."}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{align:"center",src:U,alt:"logo"})]})]})};function de(){var e=Object(n.useState)({name:"",enter:!1}),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(m.jsx)(E,{buscar:a,setBuscar:c,children:Object(m.jsx)(le,{buscar:a,setBuscar:c})})}var ue=function(){return Object(m.jsx)("div",{children:"Pagina de Practica."})};var je=function(){var e="/OMNIPAGE";return Object(m.jsx)(o.a,{children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{exact:!0,path:e+"/ver",component:ue}),Object(m.jsx)(s.a,{exact:!0,path:e,component:de})]})})},be=a(137),pe=(a(95),new be.a(b));i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(u.b,{instance:pe,children:Object(m.jsx)(je,{})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.7288405a.chunk.js.map