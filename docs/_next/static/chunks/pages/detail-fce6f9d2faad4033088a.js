(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{3064:function(t,a,e){var n=e(7757),i=e(8926),o=e(6470);t.exports={assetPrefix:"/YokohamaLandscape/",exportPathMap:function(){var t=i(n.mark((function t(a,e){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.dev,e.dir,e.outDir,e.distDir,e.buildId,t.abrupt("return",{"/":{page:"/"},"/about/index":{page:"/about"},"/detail/index":{page:"/detail"}});case 2:case"end":return t.stop()}}),t)})));return function(a,e){return t.apply(this,arguments)}}(),sassOptions:{includePaths:[o.join("/","styles")]}}},3194:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return v},detail:function(){return w}});var n=e(5893),i=e(5671),o=e(3144),r=e(4783),s=e(5778),c=e(1120),h=e(5988),u=e(7294),l=e(7808),p=e(1528),d=e(2552);function m(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=(0,c.Z)(t);if(a){var i=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)}}var f=function(t){(0,r.Z)(e,t);var a=m(e);function e(t){return(0,i.Z)(this,e),a.call(this,t)}return(0,o.Z)(e,[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"jsx-".concat(k.__hash)+" u-descriptionBox",children:[(0,n.jsxs)("h1",{className:"jsx-".concat(k.__hash),children:[" ",this.props.title," "]}),(0,n.jsxs)("p",{className:"jsx-".concat(k.__hash),children:[this.props.description," ",(0,n.jsx)("br",{className:"jsx-".concat(k.__hash)})," ",this.props.annotation]}),(0,n.jsx)("hr",{className:"jsx-".concat(k.__hash)}),(0,n.jsxs)("p",{className:"jsx-".concat(k.__hash),children:["Text Source ",(0,n.jsx)("br",{className:"jsx-".concat(k.__hash)}),(0,n.jsx)("a",{target:"_blank",rel:"nofollow noopener",href:this.props.authText,className:"jsx-".concat(k.__hash),children:this.props.authText})]}),(0,n.jsxs)("p",{className:"jsx-".concat(k.__hash),children:["Photo Source ",(0,n.jsx)("br",{className:"jsx-".concat(k.__hash)}),(0,n.jsx)("a",{target:"_blank",rel:"nofollow noopener",href:this.props.authImg,className:"jsx-".concat(k.__hash),children:this.props.authImg})]}),(0,n.jsx)(h.default,{id:k.__hash,children:k})]})}}]),e}(u.Component),k=[".u-descriptionBox.jsx-2227792642{padding:24px 24px 14px;background:rgba(0,0,0,0.75);max-width:480px;word-break:break-all;}",".u-descriptionBox.jsx-2227792642 h1.jsx-2227792642{margin-top:0;}"];k.__hash="2227792642";var g=f,x=e(3064),_=e.n(x);function j(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=(0,c.Z)(t);if(a){var i=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)}}var y=""===_().assetPrefix?"/":_().assetPrefix,w=function(t){(0,r.Z)(e,t);var a=j(e);function e(t){var n;return(0,i.Z)(this,e),(n=a.call(this,t)).state={},n}return(0,o.Z)(e,[{key:"render",value:function(){return this.state.path?this.renderDefault():this.renderError()}},{key:"getAreaData",value:function(t){var a=l.Z.filter((function(a){return a.path===t}));return a.length>0?a[0]:null}},{key:"setAreaData",value:function(t){return this.setState(t),this.state}},{key:"renderDefault",value:function(){return(0,n.jsxs)("div",{className:"jsx-".concat(b.__hash)+" "+h.default.dynamic([["91297699",[this.getBackgroundImagePath()]]]),children:[(0,n.jsx)(p.Z,{title:this.state.title}),(0,n.jsxs)("div",{className:"jsx-".concat(b.__hash)+" "+h.default.dynamic([["91297699",[this.getBackgroundImagePath()]]])+" container",children:[(0,n.jsx)("div",{className:"jsx-".concat(b.__hash)+" "+h.default.dynamic([["91297699",[this.getBackgroundImagePath()]]])+" l-backLinkWrap",children:(0,n.jsx)(d.Z,{})}),(0,n.jsx)(g,{title:this.state.title,description:this.state.description,authText:this.state.authText,authImg:this.state.authImg,annotation:this.state.annotation})]}),(0,n.jsx)(h.default,{id:b.__hash,children:b}),(0,n.jsx)(h.default,{id:"91297699",dynamic:[this.getBackgroundImagePath()],children:["body{background-image:url(".concat(this.getBackgroundImagePath(),");background-size:cover;background-position:center;background-attachment:fixed;}")]})]})}},{key:"renderError",value:function(){return(0,n.jsxs)("div",{children:[(0,n.jsx)(p.Z,{}),(0,n.jsxs)("div",{className:"jsx-".concat(b.__hash)+" container",children:[(0,n.jsx)("div",{className:"jsx-".concat(b.__hash)+" l-backLinkWrap",children:(0,n.jsx)(d.Z,{})}),(0,n.jsx)("p",{className:"jsx-".concat(b.__hash),children:"Sorry page data is not found."}),(0,n.jsx)(h.default,{id:b.__hash,children:b})]})]})}},{key:"getBackgroundImagePath",value:function(){return y+"static/img/background/"+this.state.img}},{key:"componentDidMount",value:function(){var t=this.props.query.name?this.props.query.name:location.search.replace("?name=",""),a=this.getAreaData(t);null!==a&&this.setAreaData(a)}}],[{key:"getInitialProps",value:function(t){return{query:t.query}}}]),e}(u.Component),b=[".container.jsx-2705690754{padding-top:24px;padding-bottom:24px;}",".l-backLinkWrap.jsx-2705690754{margin-bottom:12px;}"];b.__hash="2705690754";var v=w},2552:function(t,a,e){"use strict";var n=e(5893),i=e(5671),o=e(3144),r=e(4783),s=e(5778),c=e(1120),h=e(5988),u=e(7294),l=e(1664),p=e(3064),d=e.n(p);function m(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=(0,c.Z)(t);if(a){var i=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)}}var f=""===d().assetPrefix?"/":d().assetPrefix,k=function(t){(0,r.Z)(e,t);var a=m(e);function e(t){return(0,i.Z)(this,e),a.call(this,t)}return(0,o.Z)(e,[{key:"render",value:function(){return(0,n.jsxs)("div",{className:"jsx-".concat(g.__hash)+" l-backLink",children:[(0,n.jsx)(l.default,{href:{pathname:f},children:(0,n.jsxs)("a",{className:"jsx-".concat(g.__hash),children:[(0,n.jsx)("span",{"aria-hidden":"true",className:"jsx-".concat(g.__hash)+" glyphicon glyphicon-chevron-left"}),"Back"]})}),(0,n.jsx)(h.default,{id:g.__hash,children:g})]})}}]),e}(u.Component),g=[".l-backLink.jsx-3308142017{display:inline-block;}",".l-backLink.jsx-3308142017 a.jsx-3308142017{color:#d9d9d9;background:rgba(0,0,0,0.9);display:block;padding:8px;text-align:center;border-radius:4px;}",".l-backLink.jsx-3308142017 a.jsx-3308142017:hover{-webkit-text-decoration:none;text-decoration:none;color:#262626;background:rgba(255,255,255,0.75);}",".l-backLink.jsx-3308142017 a.jsx-3308142017 .glyphicon.jsx-3308142017{margin-right:4px;}"];g.__hash="3308142017",a.Z=k},1528:function(t,a,e){"use strict";var n=e(5893),i=e(5671),o=e(3144),r=e(4783),s=e(5778),c=e(1120),h=e(7294),u=e(9008);function l(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=(0,c.Z)(t);if(a){var i=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)}}var p=function(t){(0,r.Z)(e,t);var a=l(e);function e(t){return(0,i.Z)(this,e),a.call(this,t)}return(0,o.Z)(e,[{key:"render",value:function(){return(0,n.jsxs)(u.default,{children:[(0,n.jsx)("title",{children:this.props.title}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"})]})}}]),e}(h.Component);p.defaultProps={title:"Yokohama Landscape"},a.Z=p},7808:function(t,a){"use strict";a.Z=[{path:"YokohamaStation",description:"Yokohama Station (\u6a2a\u6d5c\u99c5 Yokohama-eki) is a major interchange railway station in Nishi-ku, Yokohama, Japan. It is the busiest station in Kanagawa Prefecture and the fifth-busiest in the world as of 2013,[1] serving 760 million passengers a year.",title:"Yokohama Station",img:"photo-1543932950-76d6b4a4d557.jpg",authImg:"https://unsplash.com/photos/O2UgB8l3EG8",authText:"https://en.wikipedia.org/wiki/Yokohama_Station",annotation:""},{path:"MinatoMirai21",description:"Minato Mirai 21 (\u307f\u306a\u3068\u307f\u3089\u304421 Minato Mirai Nij\u016bichi), often known as simply Minato Mirai and abbreviated as MM, is the central business district of Yokohama, Japan. Initially developed in the 1980s, Minato Mirai 21 was designed as a large master-planned development and new urban center planned to connect Yokohama's traditionally important areas and commercial centers of Kannai and the Yokohama Station area.",title:"Minato Mirai 21",img:"DSCF5767_TP_V.jpg",authImg:"https://www.pakutaso.com/20160338061post-7109.html",authText:"https://en.wikipedia.org/wiki/Minato_Mirai_21",annotation:""},{path:"RedBrickWarehouses",description:"The Yokohama Red Brick Warehouse (\u6a2a\u6d5c\u8d64\u30ec\u30f3\u30ac\u5009\u5eab Yokohama Akarenga S\u014dko) is a historical building that is used as a complex that includes a shopping mall, banquet hall, and event venues.",title:"Red Brick Warehouses",img:"C778_rtsaretaakarenga_TP_V.jpg",authImg:"https://www.pakutaso.com/20121246360post-2272.html",authText:"https://en.wikipedia.org/wiki/Yokohama_Red_Brick_Warehouse",annotation:""},{path:"YokohamaChinatown",description:"Yokohama Chinatown (Japanese: \u6a2a\u6d5c\u4e2d\u83ef\u8857, yokohama ch\u016bkagai; Simplified Chinese: \u6a2a\u6ee8\u4e2d\u534e\u8857; Traditional Chinese: \u6a6b\u6ff1\u4e2d\u83ef\u8857; Pinyin: H\xe9ngb\u012bn Zh\u014dnghu\xe1 Ji\u0113; Cantonese Jyutping: Waang4 ban1 zung1 waa4 gaai1) is located in Yokohama, Japan, which is located just south of Tokyo. ",title:"Chinatown",img:"photo-1530569243640-22bea3e23e1b.jpg",authImg:"https://unsplash.com/photos/68XG8uaM7d4",authText:"https://en.wikipedia.org/wiki/Yokohama_Chinatown",annotation:""},{path:"Motomachi",description:"Motomachi (\u5143\u753a) is a district of Naka Ward in Yokohama, Japan, located immediately west of Yamate and east of Chinatown. It consists mainly of the Motomachi Shopping Street, a five-block long stretch of boutiques and shops, well known in Japan for its cosmopolitan atmosphere, original fashion, and Western influence.",title:"Motomachi",img:"MotomachiYokohama.jpg",authImg:"https://en.wikipedia.org/wiki/Motomachi,_Yokohama#/media/File:MotomachiYokohama.JPG",authText:"https://en.wikipedia.org/wiki/Motomachi,_Yokohama",annotation:""},{path:"YokohamaBayBridge",description:"The Yokohama Bay Bridge (\u6a2a\u6d5c\u30d9\u30a4\u30d6\u30ea\u30c3\u30b8 Yokohama Bei Buridji) is an 860 metres (2,820 ft) cable stayed bridge in Yokohama, Japan. Opened September 27, 1989, it crosses Tokyo Bay with a span of 460 metres (1,510 feet). The toll is \xa5600. The bridge is part of the Bayshore Route of the Shuto Expressway.",title:"Bay Bridge",img:"_DSC1332_TP_V.jpg",authImg:"https://www.pakutaso.com/20170134018post-10032.html",authText:"https://en.wikipedia.org/wiki/Yokohama_Bay_Bridge",annotation:""},{path:"YamashitaPark",description:"Yamashita Park (\u5c71\u4e0b\u516c\u5712 Yamashita K\u014den) is a public park in Naka Ward, Yokohama, Japan, famous for its waterfront views of the Port of Yokohama.",title:"Yamashita Park",img:"1280px-Hikawamaru_from_Osanbashi_Pier.jpg",authImg:"https://en.wikipedia.org/wiki/Yamashita_Park#/media/File:Hikawamaru_from_Osanbashi_Pier.JPG",authText:"https://en.wikipedia.org/wiki/Yamashita_Park",annotation:""},{path:"YokohamaPortOpeningMemorialHall",description:"Yokohama City Port Opening Memorial Hall is a historical building located in the Kannai area of Naka Ward, Yokohama City, Kanagawa Prefecture. Important cultural property of the country.",title:"Port Opening Memorial Hall",img:"Yokohama_Port_Opening_Memorial_Hall.jpg",authImg:"https://ja.wikipedia.org/wiki/\u30d5\u30a1\u30a4\u30eb:Yokohama_Port_Opening_Memorial_Hall_(8459934101).jpg",authText:"https://ja.wikipedia.org/wiki/\u6a2a\u6d5c\u5e02\u958b\u6e2f\u8a18\u5ff5\u4f1a\u9928",annotation:"displayed TEXT in this page is made by [original Text from Wikipedia(JP) + Google Translate]."}]},446:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail",function(){return e(3194)}])}},function(t){t.O(0,[254,774,888,179],(function(){return a=446,t(t.s=a);var a}));var a=t.O();_N_E=a}]);