(this.webpackJsonpaparuweb=this.webpackJsonpaparuweb||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),i=n.n(s),l=(n(11),n(2)),r=n(4),o=n.n(r),d=n(3),j=n(0),b=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),r=i[0],b=i[1],u=Object(c.useState)({}),h=Object(l.a)(u,2),O=h[0],x=h[1],f=Object(c.useState)(null),v=Object(l.a)(f,2),m=v[0],p=v[1],g=Object(c.useState)(null),C=Object(l.a)(g,2),S=C[0],y=C[1],w=Object(d.a)(Object(d.a)({},O),{},{id:null,name:null,autoId:null,auto:null}),k=function(){b([]),fetch("/Drivers/with-auto").then((function(e){return e.json()})).then((function(e){return b(e)})).catch(console.log)},T=function(e,t){y(t),null!==e&&x(r[e]),fetch("/Autos").then((function(e){return e.json()})).then((function(e){return a(e)})).catch(console.log).then((function(){return m.open()}))},E=function(){a([]),m.close()};return Object(c.useEffect)((function(){var e=document.querySelector("div.modal.changeDriver");o.a.Modal.init(e,{dismissible:!1,onCloseEnd:function(e){x(w),y(null)}});var t=o.a.Modal.getInstance(e);p(t);var n=document.querySelector("select.auto-select");o.a.FormSelect.init(n),k()}),[]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("h3",{children:[Object(j.jsx)("span",{children:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u0438"}),Object(j.jsx)("span",{children:"\xa0\xa0"}),Object(j.jsx)("a",{onClick:function(){return T(null,"create")},class:"btn btn-floating orange",children:Object(j.jsx)("i",{class:"material-icons",children:"add"})})]}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\u0418\u043c\u044f"}),Object(j.jsx)("th",{children:"\u041c\u0430\u0448\u0438\u043d\u0430"}),Object(j.jsx)("th",{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"})]})}),Object(j.jsx)("tbody",{children:r.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.name},"td1_".concat(e.id)),Object(j.jsx)("td",{children:e.auto?Object(j.jsxs)("span",{class:"new badge orange","data-badge-caption":"",children:[e.auto.brand," ",e.auto.model]}):null},"td2_".concat(e.id)),Object(j.jsxs)("td",{children:[Object(j.jsx)("a",{onClick:function(){return T(t,"update")},class:"btn btn-floating orange",children:Object(j.jsx)("i",{class:"material-icons",children:"edit"})},"edit_".concat(e.id)),Object(j.jsx)("span",{children:"\xa0\xa0"}),Object(j.jsx)("a",{onClick:function(){return t=e.id,void fetch("/Drivers/".concat(t),{method:"DELETE"}).then((function(e){return e.text()})).then((function(e){return k()})).catch(console.log);var t},class:"btn btn-floating red",children:Object(j.jsx)("i",{class:"material-icons",children:"delete"})})]},"td3_".concat(e.id))]},"tr".concat(e.id))}))})]}),Object(j.jsxs)("div",{class:"modal changeDriver ",children:[Object(j.jsxs)("div",{class:"modal-content",children:[Object(j.jsxs)("h4",{children:["create"==S?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"," \u043c\u0430\u0448\u0438\u043d\u0443"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{class:"input-field col s12 ",children:[Object(j.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f",id:"driver_name",type:"text",value:O.name||"",class:"validate",onChange:function(e){x(Object(d.a)(Object(d.a)({},O),{},{name:e.target.value}))}}),Object(j.jsx)("label",{for:"driver_name",children:"\u0418\u043c\u044f"})]}),Object(j.jsxs)("div",{class:"input-field col s12",children:[Object(j.jsx)("label",{for:"auto-select",children:"\u041c\u0430\u0448\u0438\u043d\u0430"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("select",{class:"auto-select browser-default",id:"auto-select",onChange:function(e){return x(Object(d.a)(Object(d.a)({},O),{},{autoId:parseInt(e.target.value)}))},children:[Object(j.jsx)("option",{value:"",children:"\u0411\u0435\u0437 \u043c\u0430\u0448\u0438\u043d\u044b"}),n.map((function(e){return Object(j.jsxs)("option",{selected:e.id===O.autoId,value:e.id,children:[e.brand," ",e.model]})}))]})]})]})]}),Object(j.jsxs)("div",{class:"modal-footer",children:[Object(j.jsx)("a",{onClick:E,class:"btn btn-flat",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(j.jsx)("a",{onClick:function(){var e={name:O.name,autoId:O.autoId};"create"==S?function(e){fetch("/Drivers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){k(),E()})).catch((function(e){return console.log}))}(e):"update"==S&&function(e,t){fetch("/Drivers/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.text()})).then((function(e){k(),E()})).catch((function(e){return console.log}))}(O.id,e)},class:"btn orange ".concat(O.name?"":"disabled"),children:"create"==S?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})]})},u=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({}),i=Object(l.a)(s,2),r=i[0],b=i[1],u=Object(c.useState)(null),h=Object(l.a)(u,2),O=h[0],x=h[1],f=Object(c.useState)(null),v=Object(l.a)(f,2),m=v[0],p=v[1],g={brand:null,model:null},C=function(){a([]),fetch("/Autos/with-drivers").then((function(e){return e.json()})).then((function(e){return a(e)})).catch(console.log)},S=function(e,t){p(t),null!==e&&b(n[e]),O.open()},y=function(){O.close()};return Object(c.useEffect)((function(){var e=document.querySelector("div.modal.changeAuto");o.a.Modal.init(e,{dismissible:!1,onCloseEnd:function(e){b(g),p(null)}});var t=o.a.Modal.getInstance(e);x(t),C()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h3",{children:[Object(j.jsx)("span",{children:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438"}),Object(j.jsx)("span",{children:"\xa0\xa0"}),Object(j.jsx)("a",{onClick:function(){return S(null,"create")},class:"btn btn-floating orange",children:Object(j.jsx)("i",{class:"material-icons",children:"add"})})]}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\u0411\u0440\u0435\u043d\u0434"}),Object(j.jsx)("th",{children:"\u041c\u043e\u0434\u0435\u043b\u044c"}),Object(j.jsx)("th",{children:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u0438"}),Object(j.jsx)("th",{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"})]})}),Object(j.jsx)("tbody",{children:n.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.brand}),Object(j.jsx)("td",{children:e.model}),Object(j.jsx)("td",{children:e.drivers.length>0?e.drivers.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{class:"new badge orange","data-badge-caption":"",children:e.name}),Object(j.jsx)("span",{children:"\xa0"})]})})):null}),Object(j.jsxs)("td",{children:[Object(j.jsx)("a",{onClick:function(){return S(t,"update")},class:"btn btn-floating orange",children:Object(j.jsx)("i",{class:"material-icons",children:"edit"})},"edit_".concat(e.id)),Object(j.jsx)("span",{children:"\xa0\xa0"}),Object(j.jsx)("a",{onClick:function(){return t=e.id,void fetch("/Autos/".concat(t),{method:"DELETE"}).then((function(e){return e.text()})).then((function(e){C()})).catch((function(e){return console.log}));var t},class:"btn btn-floating red",children:Object(j.jsx)("i",{class:"material-icons",children:"delete"})})]})]})}))})]}),Object(j.jsxs)("div",{class:"modal changeAuto ",children:[Object(j.jsxs)("div",{class:"modal-content",children:[Object(j.jsxs)("h4",{children:["create"==m?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"," \u043c\u0430\u0448\u0438\u043d\u0443"]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{class:"input-field col s12 ",children:[Object(j.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0431\u0440\u0435\u043d\u0434 \u043c\u0430\u0448\u0438\u043d\u044b",id:"driver_name",type:"text",value:r.brand||"",class:"validate",onChange:function(e){b(Object(d.a)(Object(d.a)({},r),{},{brand:e.target.value}))}}),Object(j.jsx)("label",{for:"driver_name",children:"\u0411\u0440\u0435\u043d\u0434"})]}),Object(j.jsxs)("div",{class:"input-field col s12 ",children:[Object(j.jsx)("input",{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u043e\u0434\u0435\u043b\u044c \u043c\u0430\u0448\u0438\u043d\u044b",id:"driver_name",type:"text",value:r.model||"",class:"validate",onChange:function(e){b(Object(d.a)(Object(d.a)({},r),{},{model:e.target.value}))}}),Object(j.jsx)("label",{for:"driver_name",children:"\u041c\u043e\u0434\u0435\u043b\u044c"})]})]})]}),Object(j.jsxs)("div",{class:"modal-footer",children:[Object(j.jsx)("a",{onClick:y,class:"btn btn-flat",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(j.jsx)("a",{onClick:function(){var e={brand:r.brand,model:r.model};"create"==m?function(e){fetch("/Autos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){C(),y()})).catch((function(e){return console.log}))}(e):"update"==m&&function(e,t){fetch("/Autos/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.text()})).then((function(e){C(),y()})).catch((function(e){return console.log}))}(r.id,e)},class:"btn orange ".concat(r.brand||r.model?"":"disabled"),children:"create"==m?"\u0421\u043e\u0437\u0434\u0430\u0442\u044c":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})]})};n(14);var h=function(){var e=Object(c.useState)("drivers"),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){o.a.Tabs.init(document.querySelector("ul.tabs"))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("nav",{class:"orange nav-extended",role:"navigation",children:[Object(j.jsx)("div",{class:"nav-wrapper container",children:Object(j.jsx)("a",{id:"logo-container",href:"#",class:"brand-logo",children:"Aparu"})}),Object(j.jsx)("div",{class:"row",children:Object(j.jsx)("div",{className:"nav-content",children:Object(j.jsx)("div",{class:"col s12",children:Object(j.jsxs)("ul",{class:"tabs tabs-transparent",children:[Object(j.jsx)("li",{class:"tab col s6",children:Object(j.jsx)("a",{onClick:function(){return a("drivers")},children:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u0438"})}),Object(j.jsx)("li",{class:"tab col s6",children:Object(j.jsx)("a",{onClick:function(){return a("autos")},children:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438"})})]})})})})]}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"section",children:[Object(j.jsx)("div",{className:"row"}),"drivers"==n?Object(j.jsx)(b,{}):"autos"==n?Object(j.jsx)(u,{}):null]})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.d21370f6.chunk.js.map