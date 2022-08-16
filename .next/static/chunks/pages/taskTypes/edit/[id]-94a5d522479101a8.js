(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[272],{5165:function(a,b,c){"use strict";var d=c(8999),e=c(5591),f=c(846),g=c(7294),h=c(5893),i=function(a){var b=a.children,c=a.id,i=a.onClick,j=a.label;return(0,h.jsx)(f.z,{color:"brand",icon:void 0!==c&&c?(0,h.jsx)(d.I,{}):(0,h.jsx)(e.m,{}),type:"button",onClick:i,label:j||g.Children.toArray(b)[0]})};b.Z=i},345:function(a,b,c){"use strict";var d=c(7812),e=c(9499),f=c(975),g=c(211),h=c(846),i=c(9019),j=c(4689),k=c(9459),l=c(4923),m=c(8769),n=c(5709),o=c(7294),p=c(585),q=c(7403),r=c(6018),s=c(5893);function t(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function u(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?t(Object(c),!0).forEach(function(b){(0,e.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var v={id:0,name:"(no parent)"},w=function(a){var b=a.update,c=a.id,e=a.parent_id,t=(0,o.useContext)(p.Z),w=t.base.table("task_types"),x=(0,o.useState)({valid:!1}),y=x[0],z=x[1],A=(0,o.useState)(w.createData({parent_id:void 0===e?null:e,unit:"seconds"})),B=A[0],C=A[1],D=(0,o.useState)([]),E=D[0],F=D[1];(0,o.useEffect)(function(){c&&t.getTaskType(c).then(function(a){return a?(console.log("record is ",a),C(t.base.table("task_types").createData(u(u({},a.data),{},{unit:"seconds"})))):b(!1)});var a=t.base.stream({tableName:"task_types"},function(a){F(a.map(function(a){return a.data}))});return t.pollTaskTypes(),function(){a.unsubscribe()}},[t,c]);var G=(0,o.useMemo)(function(){return[v].concat((0,d.Z)(E)).filter(function(a){return!!a})},[E]);return G&&B?(0,s.jsxs)(f.x,{pad:"large",fill:!0,overflow:"scroll",children:[(0,s.jsxs)(g.X,{level:2,children:[c?"Edit Task Type":"Create a new TaskType",(0,s.jsx)("div",{style:{float:"right"},children:(0,s.jsx)(h.z,{plain:!0,icon:(0,s.jsx)(n.x,{}),onClick:function(){return b(!1)}})})]}),(0,s.jsxs)(i.l,{style:{minWidth:"80vw",minHeight:"80vh"},value:B,onValidate:z,onChange:C,validate:"change",onSubmit:function(a){var d=a.value,e=d.interval,f=d.unit;switch(e=Number.parseInt(d.interval,10),f){case"minutes":e*=60;break;case"hours":e*=3600}delete d.unit,t.saveTaskType(u(u({},d),{},{interval:e}),c).then(function(){return b(!0)})},children:[(0,s.jsx)(j.W,{validate:function(a){return!!(!c&&a&&t.hasTaskType(a))&&{property:"name",message:"Name must be unique.",status:"error"}},name:"name",htmlFor:"name-input-id",label:"Name",children:(0,s.jsx)(k.o,{id:"name-input-id",name:"name"})}),G.length>1?(0,s.jsx)(j.W,{label:"Parent",name:"parent_id",htmlFor:"parent-id-input",children:(0,s.jsx)(l.P,{id:"parent-id-input",name:"parent_id",labelKey:"name",value:B.parent_id||0,valueKey:{key:"id",reduce:!0},onChange:function(a){var b=a.value;C(u(u({},B),{},{parent_id:b}))},options:G,children:function(a,b,c,d){var e=d.selected;return(0,s.jsx)(q.Z,{selected:e,label:a.name})}})}):"",(0,s.jsxs)(f.x,{direction:"row",fill:"horizontal",gap:"medium",align:"stretch",children:[(0,s.jsx)(f.x,{width:"50%",children:(0,s.jsx)(j.W,{name:"interval",htmlFor:"interval-input-id",label:"Interval",children:(0,s.jsx)(m.K,{type:"number",id:"interval-input-id",name:"interval"})})}),(0,s.jsx)(f.x,{width:"50%",children:(0,s.jsx)(j.W,{name:"unit",htmlFor:"interval-units-input-id",label:"Unit",children:(0,s.jsx)(l.P,{defaultValue:"seconds",name:"unit",options:["seconds","minutes","hours"],id:"interval-units-input-id"})})})]}),(0,s.jsx)(j.W,{name:"notes",htmlFor:"notes-input-id",label:"Notes",children:(0,s.jsx)(m.K,{id:"notes-input-id",name:"notes"})}),(0,s.jsx)(f.x,{direction:"row",gap:"medium",children:(0,s.jsx)(r.Z,{id:c,valid:y.valid})})]})]}):""};b.Z=w},4150:function(a,b,c){"use strict";var d=c(9517),e=c(975);c(7294);var f=c(9521),g=c(5893),h=(0,f.default)(d.x).withConfig({displayName:"FormLabel__TextStyled",componentId:"sc-fqmd0f-0"})(["text-transform:uppercase;"]),i=function(a){var b=a.children,c=a.color;return(0,g.jsx)(e.x,{gridArea:"label",children:(0,g.jsx)(h,{color:void 0===c?"input":c,children:b})})};i.defaultProps={color:"brand"},b.Z=i},4137:function(a,b,c){"use strict";var d=c(9499),e=c(7294),f=c(3523),g=c(5631),h=c(975),i=c(9517),j=c(4150),k=c(7300),l=c(5893);function m(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function n(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?m(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):m(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var o=function(a){var b=a.label,c=a.children,d=(0,e.useContext)(f.b),m="small"===d?k.dh:k.IT,o=c;return Array.isArray(c)&&1===c.length&&(o=c[0]),(0,l.jsxs)(g.r,n(n({},m),{},{children:[(0,l.jsx)(h.x,{gridArea:"label",children:(0,l.jsx)(j.Z,{children:b})}),(0,l.jsx)(h.x,{gridArea:"info",children:["string","number"].includes(typeof o)?(0,l.jsx)(i.x,{children:o}):o})]}))};b.Z=o},7403:function(a,b,c){"use strict";var d=c(975),e=c(9517);c(7294);var f=c(5893),g=function(a){var b=a.selected,c=a.label;return(0,f.jsx)(d.x,{pad:"2px",children:(0,f.jsx)(e.x,{weight:b?"bold":"normal",children:c})})};b.Z=g},6018:function(a,b,c){"use strict";var d=c(6074),e=c(5591),f=c(846),g=c(5893),h=function(a){var b=a.id,c=a.valid,h=a.saving;return(0,g.jsx)(f.z,{disabled:h||!c,type:"submit",icon:b?(0,g.jsx)(d.v,{}):(0,g.jsx)(e.m,{}),primary:!0,label:"Submit"})};b.Z=h},7300:function(a,b,c){"use strict";c.d(b,{"$S":function(){return p},BG:function(){return g},I1:function(){return m},IT:function(){return j},JK:function(){return o},dh:function(){return k}});var d=c(9499);function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?e(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var g={align:"center",direction:"row",fill:"horizontal",justify:"stretch",gap:"medium",pad:"small"},h={direction:"row",gap:"small",justify:"stretch",align:"center",fill:"horizontal"},i=f(f({},h),{},{pad:{top:"0.5rem",right:"2px",left:"2px",bottom:"0.5rem"}}),j={columns:["6rem","1fr"],rows:["auto"],justify:"stretch",align:"center",fill:"horizontal",areas:[{name:"label",start:[0,0],end:[0,0]},{name:"info",start:[1,0],end:[1,0]}]},k={rows:["auto","auto"],columns:["auto"],justify:"stretch",align:"center",fill:"horizontal",areas:[{name:"label",start:[0,0],end:[0,0]},{name:"info",start:[0,1],end:[0,1]}]},l={rows:["auto","auto","auto"],columns:["1fr","1fr","1fr","1fr","1fr","1fr","20rem"],gap:"small",fill:"horizontal",areas:[{name:"id",start:[0,0],end:[2,0]},{name:"name",start:[3,0],end:[5,0]},{name:"order",start:[0,1],end:[1,1]},{name:"interval",start:[2,1],end:[3,1]},{name:"control",start:[6,0],end:[6,1]},{name:"notes",start:[0,2],end:[5,2]}]},m={align:"center",direction:"column",fill:"horizontal",justify:"stretch",gap:"0"},n={large:{rows:["auto","auto"],columns:["2fr","2fr","1fr","`1fr","3fr","20rem"],gap:"small",fill:"horizontal",areas:[{name:"id",start:[0,0],end:[0,0]},{name:"name",start:[1,0],end:[1,0]},{name:"order",start:[2,0],end:[2,0]},{name:"interval",start:[3,0],end:[3,0]},{name:"control",start:[4,0],end:[4,1]},{name:"notes",start:[0,1],end:[3,1]}]},medium:l,small:{rows:["auto","auto","auto","auto","auto","auto"],columns:["1fr"],justify:"stretch",align:"stretch",fill:"horizontal",areas:[{name:"id",start:[0,0],end:[0,0]},{name:"name",start:[0,1],end:[0,1]},{name:"order",start:[0,2],end:[0,2]},{name:"interval",start:[0,3],end:[0,3]},{name:"notes",start:[0,4],end:[0,4]},{name:"control",start:[0,5],end:[0,5]}]}},o=function(a){return n[a]||l},p=function(a){return"small"===a?i:h}},9342:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return q}});var d=c(9499),e=c(3523),f=c(975),g=c(5631),h=c(7294),i=c(7300),j=c(4137),k=c(5893);function l(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function m(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?l(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):l(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function n(a){var b=a.name,c=a.item,d=a.children,g=(0,h.useContext)(e.b),l=(0,h.useMemo)(function(){return(0,i.$S)(g)},[g]);return(0,k.jsx)(f.x,m(m({gridArea:b},l),{},{children:(0,k.jsx)(j.Z,{label:b,children:h.Children.toArray(d).length?d:c[b]})}))}function o(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function p(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?o(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var q=function(a){var b=a.current,c=a.children,d=(0,h.useContext)(e.b),j=(0,h.useMemo)(function(){return(0,i.JK)(d)},[d]),l=(0,h.useMemo)(function(){return(0,i.$S)(d)},[d]);return b?(0,k.jsx)(f.x,p(p({},i.BG),{},{background:"ticket-bg",border:{color:"ticket",size:"1px"},margin:{bottom:"1rem",top:"1rem"},children:(0,k.jsxs)(g.r,p(p({},j),{},{children:[(0,k.jsx)(n,{name:"id",item:b}),(0,k.jsx)(n,{name:"name",item:b}),(0,k.jsx)(n,{name:"order",item:b}),(0,k.jsx)(n,{name:"interval",item:b}),(0,k.jsx)(n,{name:"notes",item:b}),(0,k.jsx)(f.x,p(p({gridArea:"control"},l),{},{direction:"row-reverse",children:(0,k.jsx)(f.x,{direction:"row",children:c})}))]}))})):null}},8530:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return I}});var d=c(9499),e=c(3523),f=c(4915),g=c(975),h=c(211),i=c(9517),j=c(5631),k=c(846),l=c(5009),m=c(1163),n=c(7294),o=c(3627),p=c(7),q=c(8254),r=c.n(q),s=c(1664),t=c.n(s);c(4975),c(4150);var u=c(7300),v=c(345),w=c(9342),x=c(4137),y=c(6984),z=c(5893),A=function(a){var b=a.onClick,c=a.children;return(0,z.jsx)(k.z,{color:"button-danger",label:n.Children.toArray(c)[0],onClick:b,icon:(0,z.jsx)(y.n,{pad:"2px",color:"button-danger"})})},B=A,C=c(585),D=c(5165),E=function(a){var b=a.children,c=a.onClick;return(0,z.jsx)(k.z,{color:"brand",icon:(0,z.jsx)(o.R,{}),type:"button",onClick:c,label:n.Children.toArray(b)[0]})},F=E;function G(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function H(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?G(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):G(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var I=function(){var a=(0,n.useState)([]),b=a[0],c=a[1],d=(0,n.useState)(null),q=d[0],s=d[1],y=(0,n.useState)(!1),A=y[0],E=y[1],G=(0,n.useState)(!1),I=G[0],J=G[1],K=(0,n.useState)([]),L=K[0],M=K[1],N=(0,n.useContext)(C.Z),O=(0,m.useRouter)(),P=O.query.id,Q=n.useContext(e.b),R=(0,n.useMemo)(function(){return(0,u.$S)(Q)},[Q]),S=(0,n.useMemo)(function(){return(0,u.JK)(Q)},[Q]),T=(0,n.useMemo)(function(){return{addChild:function(a,b,c){N.saveTaskType({parent_id:a,name:b,notes:c})},deleteTaskType:function(a){N.deleteTaskType(a).then(function(){a===P&&O.push("/")})}}},[N,P]);return((0,n.useEffect)(function(){var a=N.base.stream({tableName:"task_types"},function(a){c(a.map(function(a){return a.data}))});return N.pollTaskTypes(),function(){a.unsubscribe()}},[P,N]),(0,n.useEffect)(function(){P&&b&&(s(b.find(function(a){return a.id===P})),M(b.filter(function(a){return a.parent_id===P})))},[P,b]),q)?(console.log("current: ",q),(0,z.jsxs)(g.x,H(H({},u.I1),{},{children:[(0,z.jsxs)(g.x,{direction:"row",align:"center",fill:"horizontal",alignContent:"start",gap:"medium",pad:"medium",children:[(0,z.jsxs)(h.X,{level:1,children:[(0,z.jsx)(t(),{href:"/taskTypes",children:(0,z.jsx)(i.x,{size:"inherit",color:"link",children:"Task Types"})}),'/ "',q.name,'"']}),(0,z.jsxs)(i.x,{weight:"normal",children:["( ",P,")"]})]}),(0,z.jsx)(w.default,{id:P,local:T,current:q,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(B,{onClick:function(){return T.deleteTaskType(P)}}),(0,z.jsx)(D.Z,{id:q.id,onClick:function(){return E(!0)}}),q.parent_id?(0,z.jsx)(F,{onClick:function(){return O.push("/taskTypes/edit/".concat(q.parent_id))}}):""]})}),r()(L,"order","name").map(function(a,b){return(0,z.jsx)(g.x,H(H({},u.BG),{},{background:b%2==0?"stripe":"white",children:(0,z.jsxs)(j.r,H(H({},S),{},{children:[(0,z.jsx)(g.x,H(H({gridArea:"id"},R),{},{children:(0,z.jsx)(x.Z,{label:"ID",children:(0,z.jsx)(t(),{href:a.id,children:(0,z.jsxs)(i.x,{truncate:!0,children:[a.order,": ",a.id]})})})})),(0,z.jsx)(g.x,H(H({gridArea:"name"},R),{},{children:(0,z.jsx)(x.Z,{label:"Name",children:a.name})})),(0,z.jsx)(g.x,H(H({gridArea:"notes"},R),{},{children:(0,z.jsx)(x.Z,{label:"Notes",children:a.notes})})),(0,z.jsx)(g.x,H(H({gridArea:"control"},R),{},{gap:"small",align:"center",direction:"row-reverse",children:(0,z.jsxs)(g.x,{direction:"row",children:[(0,z.jsx)(k.z,{size:"small",onClick:function(){return N.demoteTaskType(a.id)},icon:(0,z.jsx)(o.R,{pad:"2px"})}),(0,z.jsx)(B,{onClick:function(){return N.deleteTaskType(a.id)}}),(0,z.jsx)(k.z,{size:"small",onClick:function(){return N.promoteTaskType(a.id)},icon:(0,z.jsx)(p.I,{pad:"2px"})})]})}))]}))}),"".concat(a.id,"_").concat(b))}),A&&(0,z.jsx)(l.m,{children:(0,z.jsx)(v.Z,{id:P,update:function(){E(!1)}})}),I&&(0,z.jsx)(l.m,{children:(0,z.jsx)(v.Z,{parent_id:P,update:function(){J(!1)}})})]}))):(0,z.jsx)(f.$,{})}},957:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/taskTypes/edit/[id]",function(){return c(8530)}])}},function(a){a.O(0,[517,389,762,783,254,116,774,888,179],function(){var b;return a(a.s=957)}),_N_E=a.O()}])