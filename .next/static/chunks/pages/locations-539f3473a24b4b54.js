(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{2203:function(a,b,c){"use strict";var d=c(9499),e=c(9359),f=c(4915),g=c(5170),h=c(5893);function i(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}var j=function(a){var b=a.data,c=a.cols,j=a.tableParams;return b?(0,h.jsx)(e.w,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?i(Object(c),!0).forEach(function(b){(0,d.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({fill:!0,sort:!0,columns:c,data:b},void 0===j?{}:j)):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.$,{}),(0,h.jsx)(g.n,{size:"small",children:"Loading..."})]})};b.Z=j},5165:function(a,b,c){"use strict";var d=c(8999),e=c(5591),f=c(846),g=c(7294),h=c(5893),i=function(a){var b=a.children,c=a.id,i=a.onClick,j=a.label;return(0,h.jsx)(f.z,{color:"brand",icon:void 0!==c&&c?(0,h.jsx)(d.I,{}):(0,h.jsx)(e.m,{}),type:"button",onClick:i,label:j||g.Children.toArray(b)[0]})};b.Z=i},7131:function(a,b,c){"use strict";c.d(b,{Z:function(){return r}});var d=c(975),e=c(211),f=c(9019),g=c(4689),h=c(4923),i=c(8769),j=c(7294),k=c(585),l=c(846),m=c(5709),n=c(5893),o=function(a){var b=a.onClick;return(0,n.jsx)(l.z,{plain:!0,icon:(0,n.jsx)(m.x,{}),onClick:b})},p=c(7403),q=c(6018),r=function(a){var b=a.id,c=a.update,l=(0,j.useContext)(k.Z),m=l.base.table("tasks"),r=(0,j.useState)([]),s=r[0],t=r[1],u=(0,j.useState)(m.createData({})),v=u[0],w=u[1],x=(0,j.useState)({valid:!1}),y=x[0],z=x[1];return(0,j.useEffect)(function(){b&&l.getTask(b).then(function(a){return(console.log("retrieved record for id",a),a)?(console.log("record is ",a),w(l.base.table("task_types").createData(a.data))):c(!1)});var a=l.base.stream({tableName:"task_types"},function(a){t(a.map(function(a){return a.data}))});return l.pollTaskTypes(),function(){a.unsubscribe()}},[l,b]),(0,n.jsxs)(d.x,{pad:"large",fill:!0,children:[(0,n.jsxs)(d.x,{direction:"row",align:"between",children:[(0,n.jsx)(e.X,{level:2,children:"Create a new Task"}),(0,n.jsx)(o,{onClick:function(){return c(!1)}})]}),(0,n.jsxs)(f.l,{style:{minWidth:"80vw",minHeight:"80vh"},value:v,onValidate:z,validate:"change",onChange:w,onSubmit:function(a){var d=a.value;l.saveTask(d,b).then(function(){return c(!0)})},children:[(0,n.jsx)(g.W,{name:"task_type_id",htmlFor:"task_type-input-id",label:"Type",children:(0,n.jsx)(h.P,{id:"task_type-input-id",options:s,labelKey:"name",valueKey:{key:"id",reduce:!0},name:"task_type_id",children:function(a,b,c,d){var e=d.selected;return(0,n.jsx)(p.Z,{selected:e,label:a.name})}})}),(0,n.jsx)(g.W,{name:"notes",htmlFor:"notes-input-id",label:"Notes",children:(0,n.jsx)(i.K,{id:"notes-input-id",name:"notes"})}),(0,n.jsx)(d.x,{direction:"row",gap:"medium",children:(0,n.jsx)(q.Z,{id:b,valid:y.valid})})]})]})}},7403:function(a,b,c){"use strict";var d=c(975),e=c(9517);c(7294);var f=c(5893),g=function(a){var b=a.selected,c=a.label;return(0,f.jsx)(d.x,{pad:"2px",children:(0,f.jsx)(e.x,{weight:b?"bold":"normal",children:c})})};b.Z=g},6018:function(a,b,c){"use strict";var d=c(6074),e=c(5591),f=c(846),g=c(5893),h=function(a){var b=a.id,c=a.valid,h=a.saving;return(0,g.jsx)(f.z,{disabled:h||!c,type:"submit",icon:b?(0,g.jsx)(d.v,{}):(0,g.jsx)(e.m,{}),primary:!0,label:"Submit"})};b.Z=h},4432:function(a,b,c){"use strict";var d=c(975),e=c(211),f=c(3512),g=c(1664),h=c.n(g),i=c(5165),j=c(5893),k=function(a){var b=a.label,c=a.level,g=a.children,k=a.onCreate,l=a.createId,m=a.createLabel;return(0,j.jsxs)(d.x,{justify:"between",align:"center",direction:"row",fill:"horizontal",gap:"small",children:[(0,j.jsx)(h(),{href:"/",children:(0,j.jsx)(f.S,{})}),(0,j.jsx)(e.X,{level:void 0===c?1:c,children:b}),(0,j.jsx)(d.x,{direction:"row-reverse",fill:"horizontal",children:k?(0,j.jsx)(i.Z,{onClick:k,label:void 0===m?"":m,id:l}):g})]})};b.Z=k},1701:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return an}});var d=c(6835),e=c(7294),f=c(4915),g=c(975),h=c(9213),i=c(4920),j=c(9517),k=c(211),l=c(846),m=c(5009),n=c(7484),o=c.n(n),p=c(4110),q=c.n(p),r=c(158),s=c(8517),t=c(585),u=c(7131),v=c(4432),w=c(2203),x=c(5893),y=function(a){var b=a.children;return(0,x.jsx)(j.x,{style:{whiteSpace:"nowrap"},children:b})},z=e.createContext(null),A=function(a){var b=a.iso3,c=a.onClick,d=(0,e.useContext)(z);return b&&"null"!==b?d&&d.get(b)>1?(0,x.jsx)(l.z,{onClick:c,size:"small",color:"grid-button",primary:!0,label:(0,x.jsxs)(y,{children:["".concat(b," (").concat(d.get(b),")")," "]})}):(0,x.jsxs)(y,{children:[b," ",d.get(b)]}):(0,x.jsx)(j.x,{children:"(none)"})},B=c(7812),C=c(2777),D=c(2262),E=c(5959),F=c(3553),G=c(7247),H=c(8935),I=c(6486),J=c.n(I);c(9947);var K=c(5268),L=c(1276),M=c(1614),N=c(2241),O=c(3946),P=c(4542),Q=s._G.binaryOperator;K.P6Y.rgb2hex([.33,.25,0]);var R=K.P6Y.rgb2hex([.5,0,0]),S=K.P6Y.rgb2hex([.25,.125,0]);function T(a,b,c){var d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:1;return d*J().clamp((a-b)/(c-b),0,1)}var U=function(a){(0,E.Z)(i,a);var b,c,h=(b=i,c=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(b){return!1}}(),function(){var a,d=(0,G.Z)(b);if(c){var e=(0,G.Z)(this).constructor;a=Reflect.construct(d,arguments,e)}else a=d.apply(this,arguments);return(0,F.Z)(this,a)});function i(a){var b;return(0,C.Z)(this,i),(b=h.call(this,a)).myRef=e.createRef(),b.state={height:"50vh"},b}return(0,D.Z)(i,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentDidUpdate",value:function(a){var b=a.size,c=b.width,d=b.height,e=this.props.size;(e.width&&e.height&&c!==e.width||d!==e.height)&&(this.app||this.init(),this.draw())}},{key:"componentWillUnmount",value:function(){this.unmounted=!0}},{key:"width",get:function(){return this.props.size?this.props.size.width:0}},{key:"height",get:function(){return this.props.size?this.props.size.height:0}},{key:"degToXY",value:function(a,b){var c=(0,d.Z)(this.extent,4),e=c[0],f=c[1],g=c[2],h=c[3],i=T(b,e,g,this.width),j=this.height-T(a,f,h,this.height);return{x:i,y:j}}},{key:"drawFill",value:function(){var a=this.props.size,b=a.width,c=a.height;this.filler.clear(),this.filler.beginFill(K.P6Y.rgb2hex([1,.5,0])).drawRect(0,0,b,c).endFill()}},{key:"drawGrid",value:function(){var a=this;this.lines.clear(),this.lines.lineStyle(1,K.P6Y.rgb2hex([1,1,1]),.125);for(var b=-90;b<=90;b+=10){var c=this.degToXY(b,-180),e=this.degToXY(b,180);this.lines.moveTo(c.x,c.y).lineTo(e.x,e.y)}for(var f=-180;f<=180;f+=10){var g=this.degToXY(-90,f),h=this.degToXY(90,f);this.lines.moveTo(g.x,g.y).lineTo(h.x,h.y)}this.lines.lineStyle(2,K.P6Y.rgb2hex([1,1,1]),.25),[[[-180,0],[180,0]],[[0,-90],[0,90]]].forEach(function(b){var c=(0,d.Z)(b,2),e=(0,d.Z)(c[0],2),f=e[0],g=e[1],h=(0,d.Z)(c[1],2),i=h[0],j=h[1],k=a.degToXY(g,f),l=a.degToXY(j,i);a.lines.moveTo(k.x,k.y).lineTo(l.x,l.y)})}},{key:"drawLocs",value:function(){var a=this;if(this.locationContainer.removeChildren(),this.props.locations){var b=new K.TCu,c=0;this.props.locations.forEach(function(d){var e=d.latitude,f=d.longitude;if(!(Number.isNaN(e)||Number.isNaN(f))){var g=a.degToXY(e,f);b.beginFill(K.P6Y.rgb2hex([1,1,1])),b.drawCircle(g.x,g.y,1.5),++c>20&&(a.locationContainer.addChild(b),b=new K.TCu,c=0)}}),c&&this.locationContainer.addChild(b)}}},{key:"drawHex",value:function(a){var b=this,c=new K.TCu;c.lineStyle(1,R);var d=a.joins?a.joins.get("locHexes"):null;a.data.shapes.forEach(function(e){if(!(e.width>200)){var f=b.degToXY.apply(b,(0,B.Z)(e.points[e.points.length-1]));d&&d.length>0&&c.beginFill(S),c.moveTo(f.x,f.y),e.points.forEach(function(a){var d=b.degToXY.apply(b,(0,B.Z)(a));c.lineTo(d.x,d.y)}),a.joins&&a.joins.hasKey("locHexes")&&a.joins.get("locHexes").length>0&&c.endFill()}}),this.hexContainer.addChild(c)}},{key:"drawHexes",value:function(){var a=this;if(this.model){var b=Date.now(),c=this.model.base.table("hexes").query({tableName:"hexes",where:{field:"level",test:Q.eq,against:2},joins:[{joinName:"locHexes"}]});console.log("join took ",Date.now()-b,"ms"),console.log("hexes:",this.model.base.table("hexes").data.size),console.log("locations:",this.model.base.table("locations").data.size),c.forEach(function(b){2===b.data.level&&a.drawHex(b)})}}},{key:"draw",value:function(){this.app&&(this.extent=this.map.getView().calculateExtent(this.map.getSize()),this.drawFill(),this.drawHexes(),this.drawGrid(),this.drawLocs(),this.app.render())}},{key:"init",value:function(){!this.app&&this.myRef.current&&this.height&&(this.app=new K.MxU({width:this.props.size.width,height:this.props.size.height,backgroundAlpha:0,resizeTo:this.myRef.current}),this.filler=new K.TCu,this.filler.alpha=0,this.app.stage.addChild(this.filler),this.hexContainer=new K.W20,this.app.stage.addChild(this.hexContainer),this.lines=new K.TCu,this.app.stage.addChild(this.lines),this.locationContainer=new K.W20,this.app.stage.addChild(this.locationContainer),this.myRef.current.appendChild(this.app.view),this.drawMap(),this.draw(),this.myRef.current.appendChild(this.app.view))}},{key:"drawMap",value:function(){this.map=new M.Z({target:"map-image",layers:[new O.Z({source:new P.Z({url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"})})],view:new N.ZP({center:[0,0],zoom:0,extent:[-180,-90,180,90],projection:"EPSG:4326"})})}},{key:"render",value:function(){var a=this;if(!this.props.hexes)return(0,x.jsx)(f.$,{size:"large"});var b=this.props.size,c=b.height,d=b.width;return(0,x.jsx)(t.Z.Consumer,{children:function(b){return a.model=b,(0,x.jsx)(g.x,{fill:!0,style:{position:"relative",minHeight:"50vh"},children:(0,x.jsxs)(L.K,{guidingChild:1,interctiveChild:1,children:[(0,x.jsx)(g.x,{fill:!0,children:(0,x.jsx)("div",{id:"map-image",style:{width:"100%",height:"100%",border:"1px solid red"}})}),(0,x.jsx)(g.x,{children:(0,x.jsx)("div",{id:"hexes",ref:a.myRef,style:{width:d,height:c,overflow:"hidden",pointerEvents:"none"}})}),(0,x.jsxs)("div",{style:{position:"absolute",width:300,top:0,right:0},children:[(0,x.jsxs)("div",{children:["width: ",a.props.size.width]}),(0,x.jsxs)("div",{children:["height: ",a.props.size.height]})]})]})})}})}}]),i}(e.Component),V=(0,H.withSize)({monitorHeight:!0,monitorWidth:!0})(U),W=c(29),X=c(9499),Y=c(748),Z=c(7794),$=c.n(Z),_=c(9459);function aa(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function ab(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?aa(Object(c),!0).forEach(function(b){(0,X.Z)(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):aa(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function ac(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=ad(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(a){throw a},f:e}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function(){c=c.call(a)},n:function(){var a=c.next();return g=a.done,a},e:function(a){h=!0,f=a},f:function(){try{g||null==c.return||c.return()}finally{if(h)throw f}}}}function ad(a,b){if(a){if("string"==typeof a)return ae(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return ae(a,b)}}function ae(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}s._G.binaryOperator,K.P6Y.rgb2hex([.33,.25,0]);var af=K.P6Y.rgb2hex([.5,0,0]);K.P6Y.rgb2hex([.25,.125,0]);var ag=K.P6Y.rgb2hex([0,0,0]),ah=K.P6Y.rgb2hex([0,0,.4]),ai=K.P6Y.rgb2hex([1,0,0]),aj=K.P6Y.rgb2hex([0,.5,0,7]);function ak(a,b,c){var d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:1;return d*J().clamp((a-b)/(c-b),0,1)}var al=function(a){(0,E.Z)(i,a);var b,c,f,h=(b=i,c=function a(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(b){return!1}}(),function(){var a,d=(0,G.Z)(b);if(c){var e=(0,G.Z)(this).constructor;a=Reflect.construct(d,arguments,e)}else a=d.apply(this,arguments);return(0,F.Z)(this,a)});function i(a){var b;return(0,C.Z)(this,i),(b=h.call(this,a)).myRef=e.createRef(),b.changeCountry=b.changeCountry.bind((0,Y.Z)(b)),b.nextCountry=b.nextCountry.bind((0,Y.Z)(b)),b.beginWorkOnCurrentCountry=b.beginWorkOnCurrentCountry.bind((0,Y.Z)(b)),b.state={country:null,hexIndex:0,countryHexes:[]},b}return(0,D.Z)(i,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){this.unmounted=!0}},{key:"degToXY",value:function(a,b){if("object"==typeof a)return this.degToXY(a.lt,a.ln);var c=(0,d.Z)(this.extent,4),e=c[0],f=c[1],g=c[2],h=c[3],i=ak(b,e,g,this.width),j=this.height-ak(a,f,h,this.height);return{x:i,y:j}}},{key:"weighRect",value:function(){try{var a=this.getImageData();return J().chunk(a.data,4).map(function(a){var b=(0,d.Z)(a,4),c=b[0],e=(b[1],b[2],b[3]);return e*(255-c)}).reduce(function(a,b){return a+b},0)}catch(b){return 0}}},{key:"getImageData",value:function(){return this.app.renderer.plugins.extract.canvas(this.countryContainer).getContext("2d").getImageData(0,0,this.width,this.height)}},{key:"hexGraphics",value:function(a){var b=this,c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"line",d=arguments.length>2?arguments[2]:void 0,e=arguments.length>3&& void 0!==arguments[3]?arguments[3]:ag,f=new K.TCu;if(a.data.shapes.forEach(function(a){"line"===c?f.lineStyle(1,af):f.beginFill(e);var d=a.points.map(function(a){return b.degToXY(a)}),g=d[d.length-1];f.moveTo(g.x,g.y),d.forEach(function(a){f.lineTo(a.x,a.y)}),f.closePath(),f.endFill()}),d){var g=this.model.hexStrength(a,d);console.log("alpha = ",g),f.alpha=g}return f}},{key:"width",get:function(){return 1800}},{key:"height",get:function(){return 900}},{key:"drawCountryName",value:function(a){var b=a.name,c=a.latitude,d=a.longitude,e=new K.xvT(b,{fontFamily:"Arial",fontSize:20,fill:ah,align:"center"}),f=this.degToXY(c,d);return e.position=f,this.countryContainer.addChild(e),e}},{key:"drawCountry",value:function(a){var b=this,c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:ag,d=arguments.length>2&& void 0!==arguments[2]?arguments[2]:1,e=a.shapes,f=new K.W20;this.countryContainer.addChild(f),f.alpha=d;var g,h=new K.TCu,i=0,j=ac(e);try{for(j.s();!(g=j.n()).done;){var k=g.value;if(k.points.shape.length>3){h.beginFill(c);var l=k.points.shape.map(function(a){return b.degToXY(a.lt,a.ln)}),m=l[l.length-1];h.moveTo(m.x,m.y);var n,o=ac(l);try{for(o.s();!(n=o.n()).done;){var p=n.value;h.lineTo(p.x,p.y),i+=1}}catch(q){o.e(q)}finally{o.f()}h.endFill(),i>40&&(f.addChild(h),h=new K.TCu,i=0)}}}catch(r){j.e(r)}finally{j.f()}return f.addChild(h),f}},{key:"drawHex",value:function(a){var b=arguments.length>1&& void 0!==arguments[1]?arguments[1]:"line",c=arguments.length>2?arguments[2]:void 0;this.hexContainer.addChild(this.hexGraphics(a,b,c))}},{key:"drawHexes",value:function(){var a=this;this.props.hexes.forEach(function(b){a.drawHex(b)})}},{key:"drawFill",value:function(){this.filler.clear(),this.filler.beginFill(K.P6Y.rgb2hex([1,.5,0])).drawRect(0,0,this.width,this.height).endFill()}},{key:"drawGrid",value:function(){var a=this;this.lines.clear(),this.lines.lineStyle(1,K.P6Y.rgb2hex([1,1,1]),.125);for(var b=-90;b<=90;b+=10){var c=this.degToXY(b,-180),e=this.degToXY(b,180);this.lines.moveTo(c.x,c.y).lineTo(e.x,e.y)}for(var f=-180;f<=180;f+=10){var g=this.degToXY(-90,f),h=this.degToXY(90,f);this.lines.moveTo(g.x,g.y).lineTo(h.x,h.y)}this.lines.lineStyle(2,K.P6Y.rgb2hex([1,1,1]),.25),[[[-180,0],[180,0]],[[0,-90],[0,90]]].forEach(function(b){var c=(0,d.Z)(b,2),e=(0,d.Z)(c[0],2),f=e[0],g=e[1],h=(0,d.Z)(c[1],2),i=h[0],j=h[1],k=a.degToXY(g,f),l=a.degToXY(j,i);a.lines.moveTo(k.x,k.y).lineTo(l.x,l.y)})}},{key:"drawCountries",value:function(){var a=this;this.countryContainer.removeChildren(),this.props.countries.forEach(function(b){return a.drawCountryName(b.data)}),this.drawCountry(this.model.base.table("countries").getData("BRA"),ag),this.drawCountry(this.model.base.table("countries").getData("CAN"),ag)}},{key:"draw",value:function(){this.app&&(this.hexContainer.alpha=.15,this.extent=this.map.getView().calculateExtent(this.map.getSize()),this.drawFill(),this.drawHexes(),this.drawGrid(),this.drawCountries(),this.app.render())}},{key:"init",value:function(){!this.app&&this.myRef.current&&this.height&&(this.app=new K.MxU({width:this.width,height:this.height,backgroundAlpha:0,resizeTo:this.myRef.current,forceCanvas:!0}),this.filler=new K.TCu,this.filler.alpha=0,this.app.stage.addChild(this.filler),this.hexContainer=new K.W20,this.hexContainer.alpha=.15,this.app.stage.addChild(this.hexContainer),this.lines=new K.TCu,this.app.stage.addChild(this.lines),this.countryContainer=new K.W20,this.app.stage.addChild(this.countryContainer),this.myRef.current.appendChild(this.app.view),this.drawMap(),this.draw(),this.myRef.current.appendChild(this.app.view))}},{key:"drawMap",value:function(){this.map=new M.Z({target:"map-image",layers:[new O.Z({source:new P.Z({url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"})})],view:new N.ZP({center:[0,0],zoom:0,extent:[-180,-90,180,90],projection:"EPSG:4326"})})}},{key:"changeCountry",value:function(a){this.setState(function(b){return b.iso3=a.target.value,b})}},{key:"beginWorkOnCurrentCountry",value:function(){var a=this;this.hexContainer.removeChildren(),this.countryContainer.removeChildren(),this.app.render(),requestAnimationFrame(function(){a.setState(function(b){var c=a.model.base.table("countries").getData(b.iso3),d=a.model.findHexesAround(c);return b.countryHexes=d,b.country=c,ab(ab({},b),{},{countryHexes:d,hexIndex:0})},function(){a.workCountryHexes()})})}},{key:"workCountryHexes",value:function(){var a=this,b=this.state,c=b.countryHexes,d=b.hexIndex;d>=c.length?this.allHexesDone():this.setState({currentHex:c[d]},function(){a.workCurrentHex()})}},{key:"allHexesDone",value:function(){var a=this;this.drawCountryHexes(),this.app.render(),this.setState({drawnHexes:this.state.iso3}),setTimeout(function(){a.nextCountry()},1e3)}},{key:"drawCountryHexes",value:function(){var a=this,b=this.state,c=b.country,d=b.countryHexes;this.filler.clear(),this.hexContainer.alpha=1,this.hexContainer.removeChildren(),this.countryContainer.removeChildren(),this.drawCountry(c,ai,.2),d.filter(function(a){return a.data.countryShares.size>0}).forEach(function(b){a.drawHex(b,"fill",c.iso3)}),this.app.render()}},{key:"nextCountry",value:(f=(0,W.Z)($().mark(function a(){var b,c,d=this;return $().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return(b=this.state.country)&&(b.hexesDone=!0),a.next=4,this.model.pollCountries();case 4:c=this.model.base.query({tableName:"countries",where:function(a){var b=a.data,c=b.hexesDone,d=void 0!==c&&c,e=b.hex_shares,f=void 0===e?[]:e;return!d&&!f.length}}),console.log("remaining countries:",c.length),c.length?this.setState(function(a){var b=J().sortBy(c,function(a){return -1*a.data.population}).slice(0,10);return a.iso3=J().shuffle(b).pop().key,a},function(){return d.beginWorkOnCurrentCountry()}):console.log("---- all countries found");case 7:case"end":return a.stop()}},a,this)})),function(){return f.apply(this,arguments)})},{key:"findShareOfCurrentHex",value:function(){var a=this.state,b=a.country,c=a.currentHex;this.countryContainer.removeChildren();var d=this.drawCountry(b,!0),e=this.hexGraphics(c,"fill");return d.mask=new K.HI0(e),this.app.render(),this.weighRect(d,d.getBounds())}},{key:"workCurrentHex",value:function(){var a=this,b=this.state,c=b.country,d=b.currentHex;requestAnimationFrame(function(){var b=a.findShareOfCurrentHex();b?(d.data.countryShares.set(c.iso3,b),a.countryContainer.removeChildren(),d.data.countryShares.has("_BASE")?a.finishCurrentHex():a.findCurrentHexBase()):a.finishCurrentHex()})}},{key:"finishCurrentHex",value:function(){var a=this,b=this.state,c=b.countryHexes,d=b.hexIndex,e=b.iso3,f=b.currentHex;this.model.sendCurrentHexShare(e,f.key,f.data.countryShares.get(e),f.data.countryShares.get("_BASE_")),c.length===d+1?this.allHexesDone():this.setState({hexIndex:d+1},function(){a.workCountryHexes()})}},{key:"findCurrentHexBase",value:function(){var a=this;requestAnimationFrame(function(){var b=a.state.currentHex;a.countryContainer.removeChildren();var c=a.hexGraphics(b,"fill",null,aj);a.countryContainer.addChild(c),a.app.render();var d=a.weighRect(c.getBounds());b.data.countryShares.set("_BASE_",d),a.finishCurrentHex()})}},{key:"render",value:function(){var a=this,b=this.height,c=this.width,d=this.state,e=this.state.iso3;return(0,x.jsx)(t.Z.Consumer,{children:function(f){return a.model=f,(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(g.x,{direction:"row",gap:"medium",margin:"large",children:[(0,x.jsxs)(j.x,{children:["Country ",d.render||""]}),(0,x.jsx)(_.o,{name:"country",value:e||"",onChange:a.changeCountry}),(0,x.jsx)(l.z,{label:"Analyze",primary:!0,onClick:a.beginWorkOnCurrentCountry}),(0,x.jsx)(l.z,{label:"Next",primary:!0,onClick:a.nextCountry})]}),(0,x.jsx)(g.x,{fill:!0,style:{position:"relative",width:"".concat(c,"px"),height:"".concat(b,"px")},children:(0,x.jsxs)(L.K,{guidingChild:1,interctiveChild:1,children:[(0,x.jsx)(g.x,{fill:!0,children:(0,x.jsx)("div",{id:"map-image",style:{width:"".concat(c,"px"),height:"".concat(b,"px"),border:"1px solid red"}})}),(0,x.jsx)(g.x,{children:(0,x.jsx)("div",{id:"hexes",ref:a.myRef,style:{width:c,height:b,overflow:"hidden",pointerEvents:"none"}})})]})})]})}})}}]),i}(e.Component),am=r.kE.FormEnum;o().extend(q());var an=function(){var a=e.useState(!1),b=(0,d.Z)(a,2),c=b[0],n=b[1],o=e.useState(null),p=(0,d.Z)(o,2),q=p[0],s=p[1],y=e.useState(null),B=(0,d.Z)(y,2),C=B[0],D=B[1],E=e.useState(null),F=(0,d.Z)(E,2),G=F[0],H=F[1],I=e.useState(null),J=(0,d.Z)(I,2),K=J[0],L=J[1],M=(0,e.useContext)(t.Z),N=[{property:"iso3",header:"ISO",render:function(a){return(0,x.jsx)(A,{onClick:function(){return L(a.iso3)},iso3:a.iso3})}},{property:"name",header:"Name"},{property:"latitude",header:"Lat",size:"small"},{property:"longitude",header:"Lon",size:"small"},{property:"population",header:"Pop",size:"small"},{property:"hex_shares",header:"Hexes",size:"f",render:function(a){return a.hex_shares.length||0}}],O=(0,e.useMemo)(function(){return K?N.filter(function(a){return"iso3"!==a.property}):N},[K]);(0,e.useEffect)(function(){var a=M.base.stream({tableName:"countries"},function(a){s(a.map(function(a){return a.data}))}),b=M.base.stream({tableName:"hexes"},function(a){D(a)});M.pollHexes(),M.pollCountries();var c=M.base.stream({tableName:"countries"},function(a){H(a)});return function(){a.unsubscribe(),b.unsubscribe(),c.unsubscribe()}},[M]);var P=(0,e.useMemo)(function(){return Array.isArray(q)?q.reduce(function(a,b){return b.iso3&&a.set(b.iso3,1+(a.has(b.iso3)?a.get(b.iso3):0)),a},new Map):new Map},[q]),Q=(0,e.useMemo)(function(){return K?q.filter(function(a){return a.iso3===K}):q},K),R=(0,e.useMemo)(function(){var a,b,c;return K?(a=Q,b="province_state",c=(0,r.Ue)(new Map),Array.isArray(a)?a.reduce(function(a,d){var e=(0,r.Ue)(d);if(e.form===am.scalar)return c;var f=e.get(b);return a.hasKey(f)?a.set(f,a.get(f)+1):a.set(f,1),c},c).filter(function(a){return a>1}):c).size>1?"province_state":null:""},[K,Q]);return C?(0,x.jsx)(z.Provider,{value:P,children:(0,x.jsxs)(g.x,{pad:"large",children:[(0,x.jsx)(v.Z,{label:"Locations"}),(0,x.jsxs)(h.m,{children:[(0,x.jsxs)(i.O,{title:"data",children:[(0,x.jsx)(g.x,{margin:{top:"medium",bottom:"medium"},children:(0,x.jsxs)(j.x,{size:"small",children:[(0,x.jsx)("b",{children:"Subgroup"}),": ",R,", ",(0,x.jsx)("b",{children:"iso"}),": ",K]})}),(0,x.jsxs)(g.x,{align:"start",overflow:"auto",children:[K?(0,x.jsxs)(g.x,{fill:"horizontal",direction:"row",justify:"between",children:[(0,x.jsxs)(k.X,{level:"3",children:['Viewing locations in iso "',K,'"']}),(0,x.jsx)(l.z,{label:"View All ISOs",onClick:function(){return L(null)}})]}):null,(0,x.jsx)(w.Z,{data:Q,cols:O,count:P,tableParams:{groupBy:K?R:"iso3",pin:!0,step:200,sort:{direction:"asc",property:"uid"}}})]})]}),(0,x.jsx)(i.O,{title:"Map",children:(0,x.jsx)(g.x,{children:(0,x.jsx)(V,{hexes:C,locations:q})})}),(0,x.jsx)(i.O,{title:"Countries",children:(0,x.jsx)(g.x,{children:(0,x.jsx)(al,{hexes:C,locations:q,countries:G})})})]}),c&&(0,x.jsx)(m.m,{children:(0,x.jsx)(u.Z,{update:function(){n(!1)}})})]})}):(0,x.jsx)(f.$,{size:"large"})}},344:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/locations",function(){return c(1701)}])}},function(a){a.O(0,[166,662,517,389,762,652,783,752,810,774,888,179],function(){var b;return a(a.s=344)}),_N_E=a.O()}])