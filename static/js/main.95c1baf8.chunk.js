(this["webpackJsonpnzbbtef-prototype"]=this["webpackJsonpnzbbtef-prototype"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.9e343206.svg"},function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=(t(16),t(3)),s=t(4),i=t(6),m=t(5),u=t(2),d=t(7),p=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleChange=t.handleChange.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.props.onFieldChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nzbbtef"},"NZBBTEF"),r.a.createElement("input",{className:"form-control",id:"nzbbtef",type:"text",name:"nzbbtef",value:this.props.value,onChange:this.handleChange})))}}]),a}(n.Component),h=(t(17),function(e){var a=e.token;return r.a.createElement("div",{className:"col-sm-auto my-2",key:"".concat(a.line,":").concat(a.col)},r.a.createElement("div",{className:"card ".concat(a.type)},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"token"},r.a.createElement("div",{className:"value"},r.a.createElement("strong",null,a.value)),a.colour?r.a.createElement("div",{className:"colour"},a.colour):r.a.createElement("div",{className:"metadata"},r.a.createElement("small",null,a.type," (",a.col,")"))),a.tokenised&&r.a.createElement(E,{tokens:a.tokenised}))))}),E=function(e){var a=e.tokens;return r.a.createElement("div",{className:"form-row my-n2"},a.map((function(e){return"WS"!==e.type&&r.a.createElement(h,{token:e,key:"".concat(e.line,":").concat(e.col)})})))},b=E,g={Metal:"M",Uncoloured:"M","Pale Orange":"PO","Neon Orange":"NO","Fluoro Orange":"NO","Pale Pink":"PP","Neon Pink":"NP","Fluoro Pink":"NP","Hot Pink":"NP","Dark Pink":"CP","Pale Blue":"PB","Light Blue":"LB","Medium Blue":"B","Dark Blue":"DB","Neon Green":"NG","Fluoro Green":"NG","Light Green":"LG","Lime Green":"LG","Pale Green":"PG","Medium Green":"G","Dark Green":"DG","Light Purple":"LPu",Black:"K",Grey:"Gr",White:"W",Red:"R",Orange:"O",Yellow:"Y",Pink:"P",Crimson:"CP",Purple:"Pu",Blue:"B",Green:"G",Lime:"LG",Brown:"Br"},N={metal:"M",uncoloured:"M",paleorange:"PO",neonorange:"NO",fluoroorange:"NO",palepink:"PP",neonpink:"NP",fluoropink:"NP",hotpink:"NP",crimson:"CP",darkpink:"CP",lightpurple:"LPu",paleblue:"PB",lightblue:"LB",mediumblue:"B",darkblue:"DB",neongreen:"NG",fluorogreen:"NG",lightgreen:"LG",limegreen:"LG",palegreen:"PG",mediumgreen:"G",darkgreen:"DG",black:"K",grey:"Gr",white:"W",red:"R",orange:"O",yellow:"Y",pink:"P",purple:"Pu",blue:"B",lime:"LG",green:"G",brown:"Br"},f=function(e,a){return Object.keys(a).reduce((function(e,t){return e.replace(new RegExp("\\b".concat(t,"\\b"),"gi"),a[t])}),e)},v=function(e){return f(f(e,g),N)},y=t(1),k=y.compile({symbol:{match:/\S+\son\s/,value:function(e){return e.match(/\S+/)[0]}},symbolColour:/^[a-zA-Z]+/,bandColour:/[a-zA-Z]+$/,WS:/[ \t]+/,error:y.error}),B=y.compile({bandColour:/^[a-zA-Z]+/,inscription:{match:/\(\S+\)/,value:function(e){return e.match(/[^()]+/)[0]}},error:y.error}),P=y.compile({symbolBand:/\w+\s\S+\son\s\w+/,partSeparator:/\/\//,bandSeparator:/\//,legSeparator:/-/,idBand:/[a-zA-Z]*\(\S+\)/,colouredBand:/[a-zA-Z]+/,WS:/[ \t]+/,error:y.error}),O=function(e){return P.reset(e),Array.from(P).map((function(e){switch(e.type){case"symbolBand":return k.reset(e.value),Object.assign({},e,{type:"tokenisedSymbolBand"},{tokenised:Array.from(k)});case"idBand":return B.reset(e.value),Object.assign({},e,{type:"tokenisedIdBand"},{tokenised:Array.from(B)});default:return e}}))},G=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={nzbbtef:""},t.handleNZBBTEFChange=t.handleNZBBTEFChange.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleNZBBTEFChange",value:function(e){this.setState({nzbbtef:e})}},{key:"render",value:function(){var e=v(this.state.nzbbtef),a=O(e);return r.a.createElement("div",{className:"nzbbtef"},r.a.createElement("section",{className:"my-5"},r.a.createElement("h2",null,"1. Input"),r.a.createElement("p",null,"Enter a band combo in NZBBTEF format."),r.a.createElement(p,{onFieldChange:this.handleNZBBTEFChange,value:this.state.nzbbtef})),r.a.createElement("section",{className:"my-5"},r.a.createElement("h2",null,"2. Colour Transformation"),r.a.createElement("p",null,"The first step is to convert long colour names into short colour names.",r.a.createElement("br",null),"This is so that colours with two words (e.g. Dark Green) can be appropriately processed."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 mb-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},e?r.a.createElement("samp",null,e):r.a.createElement("span",null,"No input specified")))),r.a.createElement("div",{className:"col-md-4 small"},r.a.createElement("ol",null,r.a.createElement("li",null,"Colours can be written as one or two words (Pale Blue or PaleBlue)"),r.a.createElement("li",null,"Colour names are case insensitive"),r.a.createElement("li",null,"Colour names will not feature elsewhere (e.g. as symbols or as inscriptions)"))))),r.a.createElement("section",{className:"my-5"},r.a.createElement("h2",null,"3. Tokenisation"),r.a.createElement("p",null,"The second step is to recognise the constituent parts in order to figure out the structure of the band combo."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 mb-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},a&&a.length>0?r.a.createElement(b,{tokens:a}):r.a.createElement("span",null,"No input specified")))),r.a.createElement("div",{className:"col-md-4"}))),r.a.createElement("section",{className:"my-5"},r.a.createElement("h2",null,"4. Colour Validation"),r.a.createElement("em",null,"TODO")),r.a.createElement("section",{className:"my-5"},r.a.createElement("h2",null,"5. Separator Validation"),r.a.createElement("em",null,"TODO")),r.a.createElement("section",{className:"my-5"},r.a.createElement("h2",null,"6. Structure Creation"),r.a.createElement("em",null,"TODO")))}}]),a}(n.Component),w=t(10),C=t.n(w);var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"bg-light py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:C.a,alt:"NZBBTEF",className:"mb-3"}),r.a.createElement("h1",null,"Prototype"),r.a.createElement("p",{className:"lead"},"New Zealand Bird Band Text Exchange Format"),r.a.createElement("ul",{className:"list-unstyled mb-0"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://gist.github.com/georgemoon/0c06e7ad0004ae9c47dd4ac0e1b425d5"},"Working Document")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/electricmagnetic/nzbbtef-prototype"},"Prototype Repository"))))),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement(G,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.95c1baf8.chunk.js.map