(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,n){t.exports=n("2f39")},"034f":function(t,e,n){"use strict";var a=n("fb1c"),r=n.n(a);r.a},"1e5d":function(t,e,n){},"2f39":function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"setList",function(){return X}),n.d(a,"setAdduser",function(){return Y}),n.d(a,"setUserModalAdd",function(){return Z}),n.d(a,"setEdit",function(){return tt}),n.d(a,"setPut",function(){return et});var r={};n.r(r),n.d(r,"list",function(){return ot}),n.d(r,"add",function(){return it}),n.d(r,"put",function(){return st});n("ac6a"),n("a114"),n("d14b"),n("df75"),n("1e5d"),n("7e6d");var o=n("2b0e"),i=n("e84f"),s=n("7051"),u=n("2040"),c=n("cf12"),f=n("46a9"),d=n("32a1"),l=n("f30c"),p=n("ce67"),m=n("482e"),b=n("52b5"),h=n("1180"),g=n("1e55"),v=n("506f"),Q=n("b8d9"),w=n("7d43"),S=n("c604"),_=n("66d7"),y=n("7b38"),x=n("62a9"),I=n("79e9"),U=n("5d8b"),L=n("0952"),J=n("9541"),T=n("91c8"),A=n("2a70"),N=n("1526"),O=n("133b"),P=n("0bae"),M=n("a9a0"),q=n("6780");o["a"].use(i["a"],{config:{},components:{QLayout:s["a"],QLayoutHeader:u["a"],QLayoutDrawer:c["a"],QPageContainer:f["a"],QPage:d["a"],QToolbar:l["a"],QToolbarTitle:p["a"],QBtn:m["a"],QIcon:b["a"],QList:h["a"],QListHeader:g["a"],QItem:v["a"],QItemMain:Q["a"],QItemSide:w["a"],QTable:S["a"],QTr:_["a"],QTd:y["a"],QTh:x["a"],QField:I["a"],QInput:U["a"],QModal:L["a"],QItemTile:J["a"],QItemSeparator:T["a"],QModalLayout:A["a"]},directives:{Ripple:N["a"]},plugins:{Notify:O["a"],ActionSheet:P["a"],Loading:M["a"],Dialog:q["a"]}});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},$=[];E._withStripped=!0;var j={name:"App"},k=j,B=(n("034f"),n("2877")),C=Object(B["a"])(k,E,$,!1,null,null,null);C.options.__file="App.vue";var D=C.exports,H=n("2f62"),R={},V=n("a709"),F=n("8d6f"),z=n("5781"),G={namespaced:!0,state:R,getters:V,mutations:F,actions:z},K={listUsers:[],user:[]},W=n("3a64"),X=function(t,e){e.length>0&&void 0===localStorage["listUsers"]&&(localStorage["listUsers"]=JSON.stringify(e)),t.listUsers=JSON.parse(localStorage.getItem("listUsers"))},Y=function(t,e){var n=JSON.parse(localStorage.getItem("listUsers"))||[];n.push(e),localStorage.setItem("listUsers",JSON.stringify(n))},Z=function(t,e){t.userModalAdd=!e},tt=function(t,e){t.user=e},et=function(t,e){var n=JSON.parse(localStorage.getItem("listUsers"))||[];n[e.__index].email=e.email,n[e.__index].first_name=e.first_name,n[e.__index].last_name=e.last_name,localStorage.setItem("listUsers",JSON.stringify(n))},nt=n("278c"),at=n.n(nt),rt=(n("551c"),n("4328")),ot=function(t){return new Promise(function(e,n){window.axios.get("api/users?page=1").then(function(n){t.commit("setList",n.data.data||[]),e()})})},it=function(t,e){return new Promise(function(n,a){window.axios.post("api/users",rt.stringify(e)).then(function(e){t.commit("setAdduser",e.data||[]),n()})})},st=function(t,e){var n=at()(e,2),a=n[0],r=n[1];return new Promise(function(e,n){window.axios.post("api/v1/customers/"+r+".json",rt.stringify(a)).then(function(n){t.commit("setPut",a||[]),e()})})},ut={namespaced:!0,state:K,getters:W,mutations:a,actions:r};o["a"].use(H["a"]);var ct=function(){var t=new H["a"].Store({modules:{example:G,users:ut}});return t},ft=n("8c4f"),dt=[{path:"/",component:function(){return n.e("4102bf14").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("769eb27e").then(n.bind(null,"8b24"))}}]},{path:"/usuarios/lista",component:function(){return n.e("4102bf14").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("2d212f88").then(n.bind(null,"ab4e"))}}]},{path:"/usuarios/login",component:function(){return n.e("4102bf14").then(n.bind(null,"f241"))},children:[{path:"",component:function(){return n.e("2d0af3ef").then(n.bind(null,"0e04"))}}]}];dt.push({path:"*",component:function(){return n.e("4b47640d").then(n.bind(null,"e51e"))}});var lt=dt;o["a"].use(ft["a"]);var pt=function(){var t=new ft["a"]({scrollBehavior:function(){return{y:0}},routes:lt,mode:"hash",base:""});return t},mt=function(){var t="function"===typeof ct?ct():ct,e="function"===typeof pt?pt({store:t}):pt;t.$router=e;var n={el:"#q-app",router:e,store:t,render:function(t){return t(D)}};return{app:n,store:t,router:e}},bt=n("bc3a"),ht=n.n(bt),gt=function(t){var e=t.Vue;e.prototype.$axios=window.axios=ht.a.create({baseURL:"".concat("https://reqres.in/")})},vt=mt(),Qt=vt.app,wt=vt.store,St=vt.router;[gt].forEach(function(t){t({app:Qt,router:St,store:wt,Vue:o["a"],ssrContext:null})}),new o["a"](Qt)},"3a64":function(t,e){},5781:function(t,e){},"7e6d":function(t,e,n){},"8d6f":function(t,e){},a709:function(t,e){},fb1c:function(t,e,n){}},[[0,"runtime","vendor"]]]);