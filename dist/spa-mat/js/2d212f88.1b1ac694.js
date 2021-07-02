(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d212f88"],{ab4e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{id:"users"}},[s("q-table",{ref:"table",attrs:{columns:t.columns,data:t.listUsers,"row-key":"name",color:"secondary"},scopedSlots:t._u([{key:"top-right",fn:function(e){return[s("AddUser",{attrs:{propsUserEdit:t.userEdit},on:{resetId:function(e){t.userEdit=""}}})]}},{key:"body",fn:function(e){return[s("q-tr",{staticClass:"cursor-pointer",attrs:{props:e},nativeOn:{click:function(s){t.viewActions(e.row)}}},[s("q-td",{key:"id"},[t._v("\n          "+t._s(e.row.id)+"\n        ")]),s("q-td",{key:"avatar"},[s("img",{staticClass:"avatar",attrs:{src:e.row.avatar,alt:""}})]),s("q-td",{key:"name"},[t._v("\n          "+t._s(e.row.first_name)+" "+t._s(e.row.last_name)+" \n        ")]),s("q-td",{key:"email"},[t._v("\n          "+t._s(e.row.email)+"\n        ")])],1)]}}])})],1)},i=[];a._withStripped=!0;var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-btn",{attrs:{color:"cyan",glossy:"",icon:"add",label:"CADASTRAR USUÁRIO"},nativeOn:{click:function(e){t.modalOpen=!t.modalOpen}}}),[s("q-modal",{attrs:{"content-css":{minWidth:"50vw",minHeight:"60vh"}},on:{hide:function(e){t.resetData()}},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[s("q-modal-layout",[s("q-toolbar",{attrs:{slot:"header",color:"cyan",glossy:""},slot:"header"},[s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"keyboard_arrow_left"}}),s("q-toolbar-title",[t._v("\n            "+t._s(t.propsUserEdit>0?"Editar usuário":"Adicionar usuário")+"\n          ")])],1),s("form",{staticClass:"q-pa-lg",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("q-field",[s("q-input",{attrs:{"float-label":"Nome"},model:{value:t.user.first_name,callback:function(e){t.$set(t.user,"first_name",e)},expression:"user.first_name"}})],1),s("q-field",[s("q-input",{attrs:{"float-label":"Sobrenome"},model:{value:t.user.last_name,callback:function(e){t.$set(t.user,"last_name",e)},expression:"user.last_name"}})],1),s("q-field",[s("q-input",{attrs:{"float-label":"Email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),s("q-btn",{staticClass:"float-right q-mt-lg",attrs:{type:"submit",color:"cyan",glossy:""}},[t._v("Salvar")])],1)],1)],1)]],2)},n=[];r._withStripped=!0;var o={props:["propsUserEdit"],data:function(){return{modalOpen:!1}},watch:{propsUserEdit:function(){this.propsUserEdit.id>0&&(this.$store.commit("users/setEdit",this.propsUserEdit),this.modalOpen=!0)}},methods:{submit:function(){var t=this,e={first_name:this.user.first_name,last_name:this.user.last_name,email:this.user.email,avatar:"https://reqres.in/img/faces/2-image.jpg",__index:this.user.__index};this.propsUserEdit.id>0?this.$store.dispatch("users/put",[this.user,this.propsUserEdit.id]).then(function(){t.$store.commit("users/setList",[]),t.resetData()}):this.$store.dispatch("users/add",e).then(function(){t.$store.commit("users/setList",[]),t.resetData()})},resetData:function(){this.modalOpen=!1,this.$emit("resetId");var t=this.$store.state.users.user;t.first_name="",t.last_name="",t.email=""}},computed:{user:function(){return this.$store.state.users.user}}},l=o,u=s("2877"),c=Object(u["a"])(l,r,n,!1,null,null,null);c.options.__file="AddUser.vue";var d=c.exports,m={components:{AddUser:d},data:function(){return{userEdit:"",actionSubmit:"",columns:[{name:"id",field:function(t){return t["id"]},align:"left",label:"#",sortable:!0},{name:"avatar",field:function(t){return t["avatar"]},align:"left",label:"Foto",sortable:!0},{name:"name",field:function(t){return t["first_name"]},align:"left",label:"Nome",sortable:!0},{name:"email",field:function(t){return t["email"]},align:"left",label:"Email",sortable:!0}]}},methods:{viewActions:function(t){var e=this,s=this;this.$q.actionSheet({title:t.first_name+" "+t.last_name,dismissLabel:"Quit",actions:[{label:"Excluir",color:"negative",icon:"fas fa-minus-circle",handler:function(){var e=JSON.parse(localStorage.getItem("listUsers"))||[];e.splice(t.__index,1),localStorage.setItem("listUsers",JSON.stringify(e)),s.$store.commit("users/setList",[])}},{label:"Editar",color:"primary",icon:"edit",handler:function(){s.userEdit=t}}]}).then(function(t){e.$q.notify({message:"Ação ".concat(t.label," foi executada"),timeout:4e3,type:"positive",color:"positive",textColor:"black",icon:"fas fa-minus-circle",detail:"Os dados foram modificados",position:"top-right"})}).catch(function(){e.$q.notify({message:"A ação foi cancelada",timeout:4e3,type:"negative",color:"negative",textColor:"black",icon:"fas fa-minus-circle",detail:"Nenhuma alteração foi feita",position:"top-right"})})}},computed:{listUsers:function(){return this.$store.state.users.listUsers}},mounted:function(){this.$store.dispatch("users/list")}},f=m,p=Object(u["a"])(f,a,i,!1,null,null,null);p.options.__file="list.vue";e["default"]=p.exports}}]);