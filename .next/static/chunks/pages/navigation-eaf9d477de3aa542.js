(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[208],{5170:function(a,b,c){"use strict";c.d(b,{n:function(){return o}});var d=c(7294),e=c(9521),f=c(6808),g=c(363),h=c(1755),i=(0,e.css)(["color:",";"],function(a){return(0,f.ut)(a.colorProp,a.theme)}),j=function(a){var b=a.size||"medium",c=a.theme.paragraph[b];return(0,e.css)(["font-size:",";line-height:",";max-width:",";"],c?c.size:b,c?c.height:"normal",a.fillProp?"none":c&&c.maxWidth)},k=(0,e.css)(["font-family:",";"],function(a){return a.theme.paragraph.font.family}),l=e.default.p.withConfig({displayName:"StyledParagraph",componentId:"sc-tbetod-0"})([""," "," "," "," "," "," ",""],g.$G,function(a){var b;return(b=a).maxLines&&(0,e.css)(["display:-webkit-box;-webkit-line-clamp:",";-webkit-box-orient:vertical;overflow:hidden;"],b.maxLines)},function(a){return j(a)},function(a){return a.textAlign&&g.jt},function(a){return a.colorProp&&i},function(a){return a.theme.paragraph.font&&a.theme.paragraph.font.family&&k},function(a){return a.theme.paragraph&&a.theme.paragraph.extend});l.defaultProps={},Object.setPrototypeOf(l.defaultProps,h.l);var m=["color","fill"];function n(){return(n=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var o=(0,d.forwardRef)(function(a,b){var c=a.color,e=a.fill,f=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,m);return d.createElement(l,n({ref:b,colorProp:c,fillProp:e},f))});o.displayName="Paragraph",o.prototype={}},1592:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return y}});var d=c(7294),e=c(1664),f=c.n(e),g=c(975),h=c(5170),i=c(1898),j=c(9521),k=c(1755),l=c(6808),m=c(363),n=function(a){if(a.size){var b=a.size||"medium",c=a.theme.text[b];return(0,j.css)(["font-size:",";line-height:",";"],c?c.size:b,c?c.height:"normal")}return(0,j.css)(["font-size:inherit;line-height:inherit;"])},o=j.default.a.withConfig({shouldForwardProp:function(a,b){return!["as","colorProp","focus","hasIcon","hasLabel","reverse"].includes(a)&&b(a)}}).withConfig({displayName:"StyledAnchor",componentId:"sc-1rp7lwl-0"})(["box-sizing:border-box;"," color:",";"," text-decoration:",";cursor:pointer;"," "," "," "," "," ",""],function(a){return n(a)},function(a){return(0,l.ut)(a.colorProp||a.theme.anchor.color,a.theme)},function(a){return a.weight?"font-weight: "+a.weight+";":a.theme.anchor.fontWeight&&"font-weight: "+a.theme.anchor.fontWeight+";"},function(a){return a.hasIcon?"none":a.theme.anchor.textDecoration},m.$G,function(a){return!a.disabled&&a.theme.anchor.hover&&(0,j.css)(["&:hover{"," "," ","}"],a.theme.anchor.hover.textDecoration&&"text-decoration: "+a.theme.anchor.hover.textDecoration+";",a.theme.anchor.hover.fontWeight&&"font-weight: "+a.theme.anchor.hover.fontWeight+";",a.theme.anchor.hover.extend)},function(a){return a.hasIcon&&!a.hasLabel&&"\n    padding: "+a.theme.global.edgeSize.small+";\n  "},function(a){return a.disabled&&"\n  opacity: 0.3;\n  cursor: default;\n  text-decoration: none;\n"},function(a){return a.focus&&(0,m.jq)()},function(a){return a.theme.anchor.extend});o.defaultProps={},Object.setPrototypeOf(o.defaultProps,k.l);var p=["a11yTitle","aria-label","children","color","disabled","gap","href","icon","label","onBlur","onClick","onFocus","reverse"];function q(){return(q=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var r=(0,d.forwardRef)(function(a,b){var c=a.a11yTitle,e=a["aria-label"],f=a.children,h=a.color,i=a.disabled,m=a.gap,n=a.href,r=a.icon,s=a.label,t=a.onBlur,u=a.onClick,v=a.onFocus,w=a.reverse,x=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,p),y=(0,d.useContext)(j.ThemeContext)||k.l.theme,z=(0,d.useState)(),A=z[0],B=z[1];(0,d.useEffect)(function(){(r||s)&&f&&console.warn("Anchor should not have children if icon or label is provided")},[f,r,s]);var C=r;r&&!r.props.color&&(C=(0,d.cloneElement)(r,{color:(0,l.ut)(h||y.anchor.color,y)}));var D=w?s:C,E=w?C:s;return d.createElement(o,q({},x,{ref:b,"aria-label":e||c,colorProp:h,disabled:i,hasIcon:!!r,focus:A,hasLabel:s,reverse:w,href:i?void 0:n,onClick:i?void 0:u,onFocus:function(a){B(!0),v&&v(a)},onBlur:function(a){B(!1),t&&t(a)}}),D&&E?d.createElement(g.x,{as:"span",direction:"row",align:"center",gap:m||y.anchor.gap,responsive:!1,style:{display:"inline-flex"}},D,E):D||E||f)});r.displayName="Anchor",r.propTypes={};var s=c(962);function t(){return(t=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var u=(0,d.forwardRef)(function(a,b){return d.createElement(s.x,t({ref:b,viewBox:"0 0 24 24",a11yTitle:"Tasks"},a),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1 3h22v4H1V3zm0 7h22v4H1v-4zm0 7h22v4H1v-4zM1 4h15v2H1V4zm0 7h5v2H1v-2zm0 7h10v2H1v-2z"}))});function v(){return(v=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}u.displayName="Tasks";var w=(0,d.forwardRef)(function(a,b){return d.createElement(s.x,v({ref:b,viewBox:"0 0 24 24",a11yTitle:"Map"},a),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M15 15h4l3 7H2l3-7h4m4-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8c0 5 6 10 6 10s6-5 6-10c0-3.417-2.686-6-6-6S6 4.583 6 8z"}))});w.displayName="Map";var x=c(5893),y=function(){return(0,x.jsxs)(g.x,{pad:"large",children:[(0,x.jsx)(h.n,{children:"An analytics engine describing the Covid pogress"}),(0,x.jsxs)(i.J,{direction:"column",align:"start",children:[(0,x.jsx)(f(),{href:"/taskTypes",passHref:!0,children:(0,x.jsx)(r,{label:"Task Types",icon:(0,x.jsx)(u,{})})}),(0,x.jsx)(f(),{href:"/tasks",passHref:!0,children:(0,x.jsx)(r,{label:"Tasks",icon:(0,x.jsx)(u,{})})}),(0,x.jsx)(f(),{href:"/locations",passHref:!0,children:(0,x.jsx)(r,{label:"Locations",icon:(0,x.jsx)(w,{})})})]})]})}},7434:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/navigation",function(){return c(1592)}])}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=7434)}),_N_E=a.O()}])