(window.webpackJsonp=window.webpackJsonp||[]).push([["97a8"],{"58S6":function(a,e,t){"use strict";var n=t("0iUn"),i=t("sLSF"),r=t("MI3g"),o=t("a7VT"),s=t("Tit0"),c=t("q1tI"),l=t.n(c),h=t("MX0m"),d=t.n(h),u=t("YFqc"),m=t.n(u),p=t("E4MH"),g=t.n(p),k=""===g.a.assetPrefix?"/":g.a.assetPrefix,f=function(a){function e(a){return Object(n.default)(this,e),Object(r.default)(this,Object(o.default)(e).call(this,a))}return Object(s.default)(e,a),Object(i.default)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:"jsx-".concat(b.__hash)+" back-link-area"},l.a.createElement(m.a,{href:{pathname:k}},l.a.createElement("a",{className:"jsx-".concat(b.__hash)+" back-link"},l.a.createElement("span",{"aria-hidden":"true",className:"jsx-".concat(b.__hash)+" glyphicon glyphicon-arrow-left"}),"Back")),l.a.createElement(d.a,{id:b.__hash},b))}}]),e}(l.a.Component),b=[".back-link-area.jsx-1897475842{display:inline-block;}",".back-link.jsx-1897475842{color:#d9d9d9;background:rgba(0,0,0,0.25);display:block;padding:8px;text-align:center;border-radius:4px;}",".back-link.jsx-1897475842:hover{-webkit-text-decoration:none;text-decoration:none;color:#262626;background:rgba(255,255,255,0.75);}",".glyphicon.jsx-1897475842{margin-right:4px;}"];b.__hash="1897475842",e.a=f},"83+m":function(a,e,t){"use strict";e.a=[{path:"YokohamaStation",description:"Yokohama Station (横浜駅 Yokohama-eki) is a major interchange railway station in Nishi-ku, Yokohama, Japan. It is the busiest station in Kanagawa Prefecture and the fifth-busiest in the world as of 2013,[1] serving 760 million passengers a year.",title:"Yokohama Station",img:"photo-1543932950-76d6b4a4d557.jpg"},{path:"MinatoMirai21",description:"Minato Mirai 21 (みなとみらい21 Minato Mirai Nijūichi), often known as simply Minato Mirai and abbreviated as MM, is the central business district of Yokohama, Japan. Initially developed in the 1980s, Minato Mirai 21 was designed as a large master-planned development and new urban center planned to connect Yokohama's traditionally important areas and commercial centers of Kannai and the Yokohama Station area.",title:"Minato Mirai 21",img:"DSCF5767_TP_V.jpg"},{path:"RedBrickWarehouses",description:"The Yokohama Red Brick Warehouse (横浜赤レンガ倉庫 Yokohama Akarenga Sōko) is a historical building that is used as a complex that includes a shopping mall, banquet hall, and event venues.",title:"Red Brick Warehouses",img:"C778_rtsaretaakarenga_TP_V.jpg"},{path:"YokohamaPortOpeningMemorialHall",description:"Yokohama City Port Opening Memorial Hall is a historical building located in the Kannai area of Naka Ward, Yokohama City, Kanagawa Prefecture. Important cultural property of the country.",title:"Yokohama Port Opening Memorial Hall",img:"Yokohama_Port_Opening_Memorial_Hall.jpg"},{path:"YokohamaChinatown",description:"Yokohama Chinatown (Japanese: 横浜中華街, yokohama chūkagai; Simplified Chinese: 横滨中华街; Traditional Chinese: 橫濱中華街; Pinyin: Héngbīn Zhōnghuá Jiē; Cantonese Jyutping: Waang4 ban1 zung1 waa4 gaai1) is located in Yokohama, Japan, which is located just south of Tokyo. ",title:"Yokohama Chinatown",img:"photo-1530569243640-22bea3e23e1b.jpg"}]},Xj6D:function(a,e,t){"use strict";t.r(e);var n=t("0iUn"),i=t("sLSF"),r=t("MI3g"),o=t("a7VT"),s=t("Tit0"),c=t("q1tI"),l=t.n(c),h=t("MX0m"),d=t.n(h),u=t("83+m"),m=t("fjZz"),p=t("58S6"),g=function(a){function e(a){return Object(n.default)(this,e),Object(r.default)(this,Object(o.default)(e).call(this,a))}return Object(s.default)(e,a),Object(i.default)(e,[{key:"render",value:function(){return l.a.createElement("div",{className:"jsx-".concat(k.__hash)+" descrition-box"},l.a.createElement("h1",{className:"jsx-".concat(k.__hash)},this.props.title),l.a.createElement("p",{className:"jsx-".concat(k.__hash)},this.props.description),l.a.createElement(d.a,{id:k.__hash},k))}}]),e}(l.a.Component),k=[".descrition-box.jsx-1227358860{padding:24px;background:rgba(0,0,0,0.9);max-width:440px;border-radius:4px;}","h1.jsx-1227358860{margin-top:0;}","p.jsx-1227358860{margin-bottom:0;}"];k.__hash="1227358860";var f=g,b=t("E4MH"),_=t.n(b);t.d(e,"detail",function(){return x});var j=""===_.a.assetPrefix?"/":_.a.assetPrefix,x=function(a){function e(a){var t;return Object(n.default)(this,e),(t=Object(r.default)(this,Object(o.default)(e).call(this,a))).state={},t}return Object(s.default)(e,a),Object(i.default)(e,[{key:"render",value:function(){var a=this.getAreaData(this.props.query.name);return null!==a?(this.setAreaData(a),this.renderDefault()):this.renderError()}},{key:"getAreaData",value:function(a){var e=u.a.filter(function(e){return e.path===a});return e.length>0?e[0]:null}},{key:"setAreaData",value:function(a){return this.state.path=a.path,this.state.description=a.description,this.state.title=a.title,this.state.img=a.img,this.state}},{key:"renderDefault",value:function(){return l.a.createElement("div",{style:{backgroundImage:"url( ".concat(this.getBackgroundImagePath()," )")},className:"jsx-".concat(v.__hash)+" pageRoot"},l.a.createElement(m.a,null),l.a.createElement("div",{className:"jsx-".concat(v.__hash)+" container"},l.a.createElement("div",{className:"jsx-".concat(v.__hash)+" back-link-wrap"},l.a.createElement(p.a,null)),l.a.createElement(f,{title:this.state.title,description:this.state.description})),l.a.createElement(d.a,{id:v.__hash},v))}},{key:"renderError",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,null),l.a.createElement("div",{className:"jsx-".concat(v.__hash)+" container"},l.a.createElement("div",{className:"jsx-".concat(v.__hash)+" back-link-wrap"},l.a.createElement(p.a,null)),l.a.createElement("p",{className:"jsx-".concat(v.__hash)},"Sorry page data is not found."),l.a.createElement(d.a,{id:v.__hash},v)))}},{key:"getBackgroundImagePath",value:function(){return j+"static/img/background/"+this.state.img}}],[{key:"getInitialProps",value:function(a){return{query:a.query}}}]),e}(l.a.Component),v=[".pageRoot.jsx-3407894255{background-size:cover;background-position:center;background-attachment:fixed;}",".container.jsx-3407894255{padding-top:24px;}",".back-link-wrap.jsx-3407894255{margin-bottom:12px;}"];v.__hash="3407894255";e.default=x},vUjY:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail",function(){var a=t("Xj6D");return{page:a.default||a}}])}},[["vUjY","5d41","9da1"]]]);