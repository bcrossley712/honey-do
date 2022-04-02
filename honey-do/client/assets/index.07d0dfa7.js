import{r as me,c as _,a as C,o as l,b as u,d as r,e as $,w as y,F as A,f as T,S as ee,g as te,h as E,i as _e,M as I,j as b,v as M,k as G,u as B,l as oe,m as O,t as f,n as R,p as j,q as re,s as w,x as pe,y as J,z as K,A as he,B as ge,C as U,D as fe,E as be,G as ve,H as V,I as H,J as ye,K as we}from"./vendor.7fc07221.js";const ke=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const a of d.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerpolicy&&(d.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?d.credentials="include":i.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(i){if(i.ep)return;i.ep=!0;const d=t(i);fetch(i.href,d)}};ke();const n=me({user:{},account:{},recipes:[],activeRecipe:{},activeGroup:{},items:[],chores:[],notes:[],members:[],groups:[],activeGroup:{},searchResults:[],grouptoJoin:{},groupRequests:[],memberRequest:{}});var h=(s,e)=>{for(const[t,o]of e)s[t]=o;return s};const $e={name:"App",setup(){return{appState:_(()=>n)}}},Ce={class:"mb-5"},Ie=T("New Group"),xe=T(" Edit Account"),Se=T("Request to join group");function Ae(s,e,t,o,i,d){const a=C("Navbar"),g=C("router-view"),x=C("GroupForm"),S=C("Modal"),F=C("AccountForm"),z=C("JoinForm");return l(),u(A,null,[r("header",null,[$(a)]),r("main",Ce,[$(g)]),$(S,{id:"new-group"},{title:y(()=>[Ie]),body:y(()=>[$(x)]),_:1}),$(S,{id:"edit-account"},{title:y(()=>[xe]),body:y(()=>[$(F)]),_:1}),$(S,{id:"join-group"},{title:y(()=>[Se]),body:y(()=>[$(z)]),_:1})],64)}var Te=h($e,[["render",Ae]]);class m{static async confirm(e="Are you sure?",t="You won't be able to revert this!",o="warning",i="Yes, delete it!"){try{return!!(await ee.fire({title:e,text:t,icon:o,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:i})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",o="top-end",i=3e3,d=!0){ee.fire({title:e,icon:t,position:o,timer:i,timerProgressBar:d,toast:!0,showConfirmButton:!1})}}const se=window.location.origin.includes("localhost"),W=se?"http://localhost:3000":"",Me="dev-bcrossley712.us.auth0.com",Re="https://brian-dev.com",Ee="omph0kyWMR2mKaoZphUvm7lVBfiDkRPf";function N(s,e){if(se)console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(s){case"log":case"assert":return}console[s](`[${s}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const c={log(){N("log",arguments)},error(){N("error",arguments)},warn(){N("warn",arguments)},assert(){N("assert",arguments)},trace(){N("trace",arguments)}},p=te.create({baseURL:W,timeout:8e3}),Ms=te.create({baseURL:"https://tasty.p.rapidapi.com/recipes/list",timeout:1e4,headers:{"X-RapidAPI-Host":"tasty.p.rapidapi.com","X-RapidAPI-Key":"9d0dc9db3fmsh9c8ab121e8123a7p1ddabajsnf4e1461ad73a"}});class Ge{async getAccount(){try{const e=await p.get("/account");n.account=e.data}catch(e){c.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getMyGroups(){const e=await p.get("/account/groups");c.log("[getMyGroups]",e.data),n.groups=e.data}async editAccount(e){const t=await p.put("account",e);c.log("[editAccount]",t.data),n.account=t.data}}const X=new Ge,Oe={setup(){const s=E({});return _e(()=>{s.value=n.account}),{editable:s,async editAccount(){try{await X.editAccount(s.value),I.getOrCreateInstance(document.getElementById("edit-account")).hide()}catch(e){c.error(e),m.toast(e.message,"error")}}}}},je=r("label",{for:"Group Name",class:"form-label"},"Name",-1),Ne=r("label",{for:"picture",class:"form-label"},"ImageUrl",-1),qe=r("button",{class:"btn btn-success mt-2 elevation-2",title:"Edit Account"}," Edit Account ",-1);function De(s,e,t,o,i,d){return l(),u("form",{class:"mb-3",onSubmit:e[2]||(e[2]=G((...a)=>o.editAccount&&o.editAccount(...a),["prevent"]))},[je,b(r("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.name=a),type:"text",class:"form-control",name:"",id:"",placeholder:"Name...",required:""},null,512),[[M,o.editable.name]]),Ne,b(r("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.editable.picture=a),type:"text",class:"form-control",name:"",id:"",placeholder:"ImageUrl...",required:""},null,512),[[M,o.editable.picture]]),qe],32)}var Pe=h(Oe,[["render",De]]),Le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pe});class Fe{async createChore(e){const t=await p.post("api/chores",e);c.log("chore created",t.data)}async getChores(e){const t=await p.get(`api/groups/${e}/chores`);c.log("got chores",t.data),n.chores=t.data}async markComplete(e){let t=n.chores.find(i=>i.id==e);t.isComplete=!t.isComplete;const o=await p.put(`api/chores/${e}`,t);c.log("chore marked complete",o.data)}async deleteChore(e){const t=await p.delete(`api/chores/${e}`);n.chores=n.chores.filter(o=>o.id!=e),c.log("chore deleted",t.data)}async resetChores(){await n.chores.filter(t=>t.isComplete==!0).forEach(t=>this.markComplete(t.id))}}const Q=new Fe,ze={setup(){const s=E({}),e=B();return{editable:s,members:_(()=>n.members),async createChore(){try{s.value.groupId=e.params.id,await Q.createChore(s.value),I.getOrCreateInstance(document.getElementById("new-chore")),s.value.body=""}catch(t){c.error(t),m.toast(t.message,"error")}}}}},Be=["value"],Ue={class:"d-flex"},Ve=r("button",{class:"btn-rounded-end bg-success mdi mdi-check elevation-2",title:"Add Chore"},null,-1);function He(s,e,t,o,i,d){return l(),u("form",{onSubmit:e[2]||(e[2]=G((...a)=>o.createChore&&o.createChore(...a),["prevent"])),class:"mb-3"},[b(r("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.assignedTo=a),class:"form-select mb-2",default:"",name:"assignedTo",id:"assignedTo"},[(l(!0),u(A,null,O(o.members,a=>(l(),u("option",{key:a.id,value:a.id},[r("p",null,f(a.name),1)],8,Be))),128))],512),[[oe,o.editable.assignedTo]]),r("div",Ue,[b(r("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.editable.body=a),type:"text",class:"form-control",name:"",id:"","aria-describedby":"helpId",placeholder:"Add Chore here"},null,512),[[M,o.editable.body]]),Ve])],32)}var Ye=h(ze,[["render",He]]),Je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ye});class Ke{async createItem(e){const t=await p.post("api/items",e);c.log("[createItems]",t.data)}async getItems(e){const t=await p.get("api/groups/"+e+"/items");c.log("[getItems]",t.data),n.items=t.data}async markComplete(e){let t=n.items.find(o=>o.id==e);t.isComplete=!t.isComplete,await p.put("api/items/"+e,t),c.log("item marked complete",t.isComplete)}async addAll(e,t){await e.forEach(o=>this.createItem({name:o,groupId:t}))}async deleteItem(e){await p.delete("api/items/"+e),n.items=n.items.filter(t=>t.id!=e)}async deleteAllItems(e){await e.forEach(t=>this.deleteItem(t.id))}}const k=new Ke,We={props:{cleaningItems:{type:Object,required:!0}},setup(s){return{account:_(()=>n.account),member:_(()=>n.members),group:_(()=>n.activeGroup),async markComplete(e){try{await k.markComplete(e)}catch(t){c.error(t),m.toast(t.message,"error")}},async deleteItem(){try{let e=s.cleaningItems.id;c.log("swiping",e),await m.confirm("Are You Sure You Want To Delete?")&&(await k.deleteItem(e),m.toast("Item removed","success","top-end",1e3))}catch(e){c.error(e),m.toast(e.message,"error")}}}}},Xe={class:"justify-content-start"},Qe=["checked"];function Ze(s,e,t,o,i,d){const a=R("touch");return b((l(),u("span",null,[r("div",Xe,[r("div",{class:"form-check fs-5",onClick:e[0]||(e[0]=g=>o.markComplete(t.cleaningItems.id))},[r("input",{class:"form-check-input elevation-2",type:"checkbox",value:"",id:"flexCheckDefault",checked:t.cleaningItems.isComplete},null,8,Qe),r("label",{class:"form-check-label",style:j({textDecoration:t.cleaningItems.isComplete?"line-through":"inherit"})},f(t.cleaningItems.name),5)])])],512)),[[a,o.deleteItem,"swipe",{right:!0}]])}var et=h(We,[["render",Ze]]),tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:et});const ot={props:{groceryItems:{type:Object,required:!0}},setup(s){return{account:_(()=>n.account),member:_(()=>n.members),group:_(()=>n.activeGroup),async markComplete(e){try{await k.markComplete(e)}catch(t){c.error(t),m.toast(t.message,"error")}},async deleteItem(){try{let e=s.groceryItems.id;c.log("swiping",e),await m.confirm("Are You Sure You Want To Delete?")&&(await k.deleteItem(e),m.toast("Item removed","success","top-end",1e3))}catch(e){c.error(e),m.toast(e.message,"error")}}}}},rt={class:"d-flex justify-content-start w-100"},st=["checked"];function at(s,e,t,o,i,d){const a=R("touch");return b((l(),u("span",null,[r("div",rt,[r("div",{class:"form-check fs-5",onClick:e[0]||(e[0]=g=>o.markComplete(t.groceryItems.id))},[r("input",{class:"form-check-input elevation-2",type:"checkbox",value:"",id:"flexCheckDefault",checked:t.groceryItems.isComplete},null,8,st),r("label",{class:"form-check-label",style:j({textDecoration:t.groceryItems.isComplete?"line-through":"inherit"})},f(t.groceryItems.name),5)])])],512)),[[a,o.deleteItem,"swipe",{right:!0}]])}var nt=h(ot,[["render",at],["__scopeId","data-v-7a977cbe"]]),ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nt});class it{async getGroup(e){const t=await p.get("api/groups/"+e);c.log("get group",t.data),n.activeGroup=t.data}async createGroup(e){const t=await p.post("api/groups",e);return c.log("group created",t.data),n.groups.push(t.data),t.data}async groupSearch(e){const t=await p.get("api/groups",{params:e});c.log("[groupSearch]",t.data),n.searchResults=t.data}async deleteGroup(e){const t=p.delete("api/groups/"+e);c.log("[deleteGroup]",t.data),n.activeGroup={},n.groups=n.groups.filter(o=>o.id!=e)}}const ae=new it,lt={setup(){const s=re(),e=E({});return{editable:e,async createGroup(){try{let t=await ae.createGroup(e.value);I.getOrCreateInstance(document.getElementById("new-group")).hide(),s.push({name:"Home",params:{id:t.id}}),n.activeGroup=t,e.value={}}catch(t){c.error(t),m.toast(t.message,"error")}}}}},dt=r("button",{class:"btn btn-success mt-2 align-self-end elevation-2",title:"Create Group"}," Create Group ",-1);function ut(s,e,t,o,i,d){return l(),u("form",{class:"mb-3 d-flex flex-column",onSubmit:e[1]||(e[1]=G((...a)=>o.createGroup&&o.createGroup(...a),["prevent"]))},[b(r("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.name=a),type:"text",class:"form-control",name:"",id:"","aria-describedby":"helpId",placeholder:"Name your Group!",required:""},null,512),[[M,o.editable.name]]),dt],32)}var mt=h(lt,[["render",ut]]),_t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:mt});class pt{async getGroupMembers(e){const t=await p.get(`api/groups/${e}/members`);c.log("got group members",t.data),n.members=t.data}async getPendingMembers(e){const t=await p.get(`api/groups/${e}/members`,{params:{status:"pending"}});c.log("[getPendingMembers]",t.data),n.groupRequests=t.data}async createMember(e){const t=await p.post("api/members",e);c.log("[createMember]",t.data),n.members.push(t.data)}async acceptMember(e,t){const o=n.members.findIndex(d=>d.memberId==e),i=await p.put("api/members/"+e,t);c.log("[acceptMember]",i.data),n.memberRequest={},n.groupRequests=n.groupRequests.filter(d=>d.memberId!=e),o!=-1?n.members.splice(o,1,i.data):n.members.push(i.data)}async declineMember(e,t){const o=n.members.findIndex(d=>d.memberId==e),i=await p.put("api/members/"+e,t);c.log("[declineMember]",i.data),n.memberRequest={},n.groupRequests=n.groupRequests.filter(d=>d.memberId!=e),o!=-1&&n.members.splice(o,1,i.data)}}const q=new pt,ht={setup(){return{members:_(()=>n.members),account:_(()=>n.account),activeGroup:_(()=>n.activeGroup),acceptedMembers:_(()=>n.members.filter(s=>s.status=="accepted")),declinedMembers:_(()=>n.members.filter(s=>s.status=="declined")),async deleteGroup(){await m.confirm()&&(await ae.deleteGroup(n.activeGroup.id),I.getOrCreateInstance(document.getElementById("group-options")).hide(),m.toast("Group deleted","success"))},async changeStatus(s,e){try{const t={status:e,groupId:n.activeGroup.id};e=="declined"&&(await q.declineMember(s,t),m.toast("Member booted","success")),e=="accepted"&&(await q.acceptMember(s,t),m.toast("Member accepted","success"))}catch(t){c.error(t),m.toast(t.message,"error")}}}}},gt={class:"container-fluid"},ft={class:"row"},bt={class:"col-12"},vt={class:"text-center"},yt={key:0},wt={key:0},kt=r("br",null,null,-1),$t={class:"text-end"},Ct=["onClick"],It={key:1},xt={key:0},St=r("br",null,null,-1),At=["onClick"],Tt={class:"col-12 d-flex flex-column align-items-center p-3"};function Mt(s,e,t,o,i,d){return l(),u("div",gt,[r("div",ft,[r("div",bt,[r("h1",vt,f(o.activeGroup.name),1),o.acceptedMembers.length>1?(l(),u("h6",yt,"Accepted members:")):w("",!0),(l(!0),u(A,null,O(o.members,a=>(l(),u("ul",{key:a.id},[a.id!=o.account.id&&a.status=="accepted"?(l(),u("li",wt,[r("span",null,f(a.name),1),kt,r("span",$t,[r("button",{onClick:g=>o.changeStatus(a.memberId,"declined"),class:"btn btn-danger"}," Boot Member? ",8,Ct)])])):w("",!0)]))),128)),o.declinedMembers.length>0?(l(),u("h6",It,"Declined members:")):w("",!0),(l(!0),u(A,null,O(o.members,a=>(l(),u("ul",{key:a.id},[a.id!=o.account.id&&a.status=="declined"?(l(),u("li",xt,[r("span",null,f(a.name),1),St,r("span",null,[r("button",{onClick:g=>o.changeStatus(a.memberId,"accepted"),class:"btn btn-success"}," Accept Member? ",8,At)])])):w("",!0)]))),128))]),r("div",Tt,[r("button",{class:"btn btn-danger my-3",onClick:e[0]||(e[0]=(...a)=>o.deleteGroup&&o.deleteGroup(...a))}," Delete group? ")])])])}var Rt=h(ht,[["render",Mt]]),Et=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Rt});const Gt={props:{hardwareItems:{type:Object,required:!0}},setup(s){return{account:_(()=>n.account),member:_(()=>n.members),group:_(()=>n.activeGroup),async markComplete(e){try{await k.markComplete(e)}catch(t){c.error(t),m.toast(t.message,"error")}},async deleteItem(){try{let e=s.hardwareItems.id;c.log("swiping",e),await m.confirm("Are You Sure You Want To Delete?")&&(await k.deleteItem(e),m.toast("Item removed","success","top-end",1e3))}catch(e){c.error(e),m.toast(e.message,"error")}}}}},Ot={class:"d-flex justify-content-start"},jt=["checked"];function Nt(s,e,t,o,i,d){const a=R("touch");return b((l(),u("span",null,[r("div",Ot,[r("div",{class:"form-check fs-5",onClick:e[0]||(e[0]=g=>o.markComplete(t.hardwareItems.id))},[r("input",{class:"form-check-input elevation-2",type:"checkbox",value:"",id:"flexCheckDefault",checked:t.hardwareItems.isComplete},null,8,jt),r("label",{class:"form-check-label",style:j({textDecoration:t.hardwareItems.isComplete?"line-through":"inherit"})},f(t.hardwareItems.name),5)])])],512)),[[a,o.deleteItem,"swipe",{right:!0}]])}var qt=h(Gt,[["render",Nt]]),Dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qt});const Pt={setup(){const s=E({}),e=B();return{editable:s,async createItem(){try{s.value.groupId=e.params.id,await k.createItem(s.value),s.value.name=""}catch(t){c.error(t),m.toast(t.message,"error")}}}}},Lt=pe('<option value="" selected disabled>Select one...</option><option value="grocery">Grocery</option><option value="hardware">Hardware</option><option value="cleaning">Cleaning</option><option value="office">Office</option>',5),Ft=[Lt],zt={class:"input-group my-2"},Bt=r("div",{class:"input-group-append"},[r("button",{class:"btn-rounded-end bg-success elevation-2",id:"basic-addon2"},[r("i",{class:"mdi mdi-check"})])],-1);function Ut(s,e,t,o,i,d){return l(),u("form",{onSubmit:e[2]||(e[2]=G(a=>o.createItem(),["prevent"]))},[b(r("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.type=a),class:"form-select",name:"",id:""},Ft,512),[[oe,o.editable.type]]),r("div",zt,[b(r("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.editable.name=a),type:"text",class:"form-control",placeholder:"shopping item","aria-label":"shopping item","aria-describedby":"basic-addon2"},null,512),[[M,o.editable.name]]),Bt])],32)}var Vt=h(Pt,[["render",Ut]]),Ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vt});const Yt={setup(){return{groupToJoin:_(()=>n.grouptoJoin),async createMember(){const s={groupId:n.grouptoJoin.id,accountId:n.account.id};try{await q.createMember(s),m.toast("Your request has been sent","success"),n.searchResults=[],I.getOrCreateInstance(document.getElementById("join-group")).hide()}catch(e){c.error(e),m.toast(e.message,"error")}}}}},ne=s=>(J("data-v-8d047772"),s=s(),K(),s),Jt={class:"container-fluid"},Kt={class:"row"},Wt={class:"col-12"},Xt=ne(()=>r("h6",{class:"p-1"},"Group Name:",-1)),Qt={class:"p-1"},Zt={class:"col-12"},eo=ne(()=>r("h6",{class:"p-1"},"Group Creator:",-1)),to={class:"d-flex align-items-center p-1"},oo=["src"],ro={class:"col-6 offset-6"};function so(s,e,t,o,i,d){return l(),u("div",Jt,[r("div",Kt,[r("div",Wt,[Xt,r("h6",Qt,f(o.groupToJoin.name),1)]),r("div",Zt,[eo,r("div",to,[r("img",{src:o.groupToJoin.picture,alt:"",class:"img-small px-1"},null,8,oo),r("h6",null,f(o.groupToJoin.creatorName),1)])]),r("div",ro,[r("button",{onClick:e[0]||(e[0]=(...a)=>o.createMember&&o.createMember(...a)),class:"btn btn-primary"}," Request to join? ")])])])}var ao=h(Yt,[["render",so],["__scopeId","data-v-8d047772"]]),no=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ao});const co="modulepreload",ce={},io="/",D=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${io}${o}`,o in ce)return;ce[o]=!0;const i=o.endsWith(".css"),d=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${d}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":co,i||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),i)return new Promise((g,x)=>{a.addEventListener("load",g),a.addEventListener("error",x)})})).then(()=>e())};function lo(s){switch(s){case"./pages/AccountPage.vue":return D(()=>import("./AccountPage.737701a3.js"),["assets/AccountPage.737701a3.js","assets/AccountPage.3fd9010a.css","assets/vendor.7fc07221.js"]);case"./pages/ChoresPage.vue":return D(()=>import("./ChoresPage.fe713ecf.js"),["assets/ChoresPage.fe713ecf.js","assets/ChoresPage.66997cba.css","assets/vendor.7fc07221.js"]);case"./pages/HomePage.vue":return D(()=>import("./HomePage.9b913f2d.js"),["assets/HomePage.9b913f2d.js","assets/HomePage.50d362fe.css","assets/vendor.7fc07221.js"]);case"./pages/ItemsPage.vue":return D(()=>import("./ItemsPage.ce9bf305.js"),["assets/ItemsPage.ce9bf305.js","assets/ItemsPage.ecc5d985.css","assets/vendor.7fc07221.js"]);case"./pages/RecipesPage.vue":return D(()=>import("./RecipesPage.ffe1eb84.js"),["assets/RecipesPage.ffe1eb84.js","assets/RecipesPage.a24bed4e.css","assets/vendor.7fc07221.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function P(s){return()=>lo(`./pages/${s}.vue`)}const uo=[{path:"/group/:id/home",name:"Home",component:P("HomePage"),beforeEnter:U},{path:"/group/:id/items",name:"Items",component:P("ItemsPage"),beforeEnter:U},{path:"/group/:id/recipes",name:"Recipes",component:P("RecipesPage"),beforeEnter:U},{path:"/group/:id/chores",name:"Chores",component:P("ChoresPage"),beforeEnter:U},{path:"/",name:"Account",component:P("AccountPage"),beforeEnter:fe}],Z=he({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:ge(),routes:uo}),Y={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class mo{constructor(e=!1,t=W){this.socket=be(t||W),this.requiresAuth=e,this.queue=[],this.authenticated=!1,this.on(Y.connected,this.onConnected).on(Y.authenticated,this.onAuthenticated).on(Y.error,this.onError)}on(e,t){var o;return(o=this.socket)==null||o.on(e,t.bind(this)),this}onConnected(e){c.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){c.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(Y.authenticate,e)}onError(e){c.error("[SOCKET_ERROR]",e)}enqueue(e,t){c.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){c.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class _o extends mo{constructor(){super();this.on("error",this.onError).on("joined:room",this.joinedRoom).on("new:note",this.newNote).on("new:item",this.newItem).on("edit:item",this.editItem).on("new:chore",this.newChore).on("edit:chore",this.editChore).on("delete:chore",this.deleteChore)}joinRoom(e="general"){this.emit("join:room",{roomName:e})}joinedRoom(e){c.log("you have joined the room:",e.roomName)}newNote(e){c.log("[newNote:socket]",e),n.notes.unshift(e)}newItem(e){c.log("[new:item]",e),n.items.push(e)}editItem(e){c.log("[editItem:socket]",e);let t=n.items.findIndex(o=>o.id==e.id);n.items.splice(t,1,e)}newChore(e){c.log("[newChore:socket]",e),n.chores.unshift(e)}editChore(e){c.log("[editChore:socket]",e);let t=n.chores.findIndex(o=>o.id==e.id);n.chores.splice(t,1,e)}deleteChore(e){c.log("[delete:chore]",e),n.chores=n.chores.filter(t=>t.id!=e.id)}onError(e){m.toast(e.message,"error")}}const ie=new _o,v=ve({domain:Me,clientId:Ee,audience:Re,useRefreshTokens:!0,onRedirectCallback:s=>{Z.push(s&&s.targetUrl?s.targetUrl:window.location.pathname)}});v.on(v.AUTH_EVENTS.AUTHENTICATED,async function(){p.defaults.headers.authorization=v.bearer,p.interceptors.request.use(po),n.user=v.user,await X.getAccount(),ie.authenticate(v.bearer),await X.getMyGroups(),n.groups.length==1&&(n.activeGroup=n.groups[0],Z.push({name:"Home",params:{id:n.activeGroup.id}}))});async function po(s){if(!v.isAuthenticated)return s;const e=v.identity.exp*1e3,t=e<Date.now(),o=e<Date.now()+1e3*60*60*12;return t?await v.loginWithPopup():o&&(await v.getTokenSilently(),p.defaults.headers.authorization=v.bearer,ie.authenticate(v.bearer)),s}const ho={setup(){return{user:_(()=>n.user),account:_(()=>n.account),async login(){v.loginWithPopup()},async logout(){v.logout({returnTo:window.location.origin})}}}},le=s=>(J("data-v-4cc5affa"),s=s(),K(),s),go={class:""},fo={key:1,class:"dropdown my-2 my-lg-0"},bo={title:"Account Options",class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},vo={key:0,class:"text-center d-flex flex-column"},yo=["src"],wo={class:"mx-3 text-dark lighten-30"},ko={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},$o=le(()=>r("div",{class:"list-group-item list-group-item-action hoverable text-danger","data-bs-toggle":"modal","data-bs-target":"#edit-account"},[r("i",{class:"mdi mdi-pencil"}),T(" Edit Account ")],-1)),Co=le(()=>r("i",{class:"mdi mdi-logout"},null,-1)),Io=T(" Logout "),xo=[Co,Io];function So(s,e,t,o,i,d){return l(),u("span",go,[o.user.isAuthenticated?(l(),u("div",fo,[r("div",bo,[o.account.picture?(l(),u("div",vo,[r("img",{src:o.account.picture,alt:"account photo",height:"90",class:"rounded align-self-center"},null,8,yo),r("span",wo,f(o.account.name),1)])):w("",!0)]),r("div",ko,[$o,r("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...a)=>o.logout&&o.logout(...a))},xo)])])):(l(),u("button",{key:0,title:"Login",class:"btn selectable lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...a)=>o.login&&o.login(...a))}," Login "))])}var Ao=h(ho,[["render",So],["__scopeId","data-v-4cc5affa"]]),To=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ao}),Mo="/assets/honeydo_logo.3d90ff39.png";const Ro={setup(){return{}}},Eo={class:"row"},Go=r("h1",{class:"bg-tertiary elevation-2 p-2"},[r("img",{src:Mo,alt:"",class:"img-fluid",style:{"max-height":"45px"}})],-1),Oo=[Go];function jo(s,e,t,o,i,d){return l(),u("div",Eo,Oo)}var No=h(Ro,[["render",jo]]),qo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:No});const Do={props:{member:{type:Object,required:!0}},setup(s){return{chores:_(()=>n.chores.filter(e=>e.assignedTo==s.member.id)),account:_(()=>n.account),group:_(()=>n.activeGroup),async markComplete(e){try{await Q.markComplete(e)}catch(t){c.error(t),m.toast(t.message,"error")}},async deleteChore(e){try{await m.confirm("Delete this Chore?")&&(await Q.deleteChore(e),m.toast("Chore Deleted!","success","top-end",1e3))}catch(t){c.error(t),m.toast(t.message,"error")}}}}},Po={key:0},Lo={class:"rounded px-1"},Fo=["value"],zo={class:"d-flex justify-content-between"},Bo=["onClick"],Uo=["checked"],Vo=["onClick"];function Ho(s,e,t,o,i,d){return o.chores.length>0?(l(),u("div",Po,[r("h3",null,[r("span",Lo,f(t.member.name),1)]),(l(!0),u(A,null,O(o.chores,a=>(l(),u("div",{class:"form-check mx-2",key:a.id,value:a.id},[r("div",zo,[r("div",{onClick:g=>o.markComplete(a.id)},[r("input",{title:"Mark Chore Complete",type:"checkbox",class:"form-check-input fs-5 elevation-2",name:"Chore Name",id:"",checked:a.isComplete},null,8,Uo),r("label",{class:"form-check-label ms-2 mb-1 fs-5",for:"",style:j({textDecoration:a.isComplete?"line-through":"inherit"})},f(a.body),5)],8,Bo),a.creatorId==o.account.id||o.group.creatorId==o.account.id?(l(),u("i",{key:0,onClick:g=>o.deleteChore(a.id),class:"mdi mdi-trash-can-outline ms-2 text-secondary"},null,8,Vo)):w("",!0)])],8,Fo))),128))])):w("",!0)}var Yo=h(Do,[["render",Ho]]),Jo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yo});const Ko={setup(){return{}}},Wo={class:"modal fade bg-modal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},Xo={class:"modal-dialog modal-dialog-end",role:"document"},Qo={class:"modal-content"},Zo={class:"modal-header bg-secondary"},er={class:"modal-title"},tr=r("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),or={class:"modal-body bg-secondary lighten-20 rounded-bottom"};function rr(s,e,t,o,i,d){return l(),u("div",Wo,[r("div",Xo,[r("div",Qo,[r("div",Zo,[r("h5",er,[V(s.$slots,"title")]),tr]),r("div",or,[V(s.$slots,"body")])])])])}var sr=h(Ko,[["render",rr]]),ar=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:sr});const nr={setup(){return{user:_(()=>n.user),activeGroup:_(()=>n.activeGroup)}}},L=s=>(J("data-v-5357ba96"),s=s(),K(),s),cr={class:"navbar navbar-expand-lg navbar-dark bg-tertiary px-3 nav-sticky"},ir={key:0,class:"d-flex justify-content-end w-100"},lr={key:1,class:"d-flex justify-content-between w-100"},dr=L(()=>r("i",{class:"mdi mdi-format-list-bulleted fs-4"},null,-1)),ur=L(()=>r("i",{class:"mdi mdi-cart-outline fs-4"},null,-1)),mr=L(()=>r("i",{class:"mdi mdi-home"},null,-1)),_r=L(()=>r("i",{class:"mdi mdi-noodles fs-4"},null,-1)),pr=L(()=>r("i",{class:"mdi mdi-account fs-4"},null,-1));function hr(s,e,t,o,i,d){const a=C("Login"),g=C("router-link");return l(),u("nav",cr,[o.user.isAuthenticated?(l(),u("div",lr,[o.activeGroup.id?(l(),H(g,{key:0,class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Chores",params:{id:o.activeGroup.id}},title:"Chores"},{default:y(()=>[dr]),_:1},8,["to"])):w("",!0),o.activeGroup.id?(l(),H(g,{key:1,class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Items",params:{id:o.activeGroup.id}},title:"Shopping List"},{default:y(()=>[ur]),_:1},8,["to"])):w("",!0),o.activeGroup.id?(l(),H(g,{key:2,class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Home",params:{id:o.activeGroup.id}},title:"Home"},{default:y(()=>[mr]),_:1},8,["to"])):w("",!0),o.activeGroup.id?(l(),H(g,{key:3,class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Recipes",params:{id:o.activeGroup.id}},title:"Recipes"},{default:y(()=>[_r]),_:1},8,["to"])):w("",!0),$(g,{class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Account"},title:"Account"},{default:y(()=>[pr]),_:1})])):(l(),u("div",ir,[$(a)]))])}var gr=h(nr,[["render",hr],["__scopeId","data-v-5357ba96"]]),fr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gr});class br{async getNotes(e){const t=await p.get(`api/groups/${e}/notes`);c.log("[getNotes]",t.data),n.notes=t.data.reverse()}async createNote(e){const t=await p.post("api/notes",e);c.log("[createNote]",t.data)}async deleteNotes(e){const t=await p.delete("api/notes/"+e);c.log(t.data),n.notes=n.notes.filter(o=>o.id!=e)}async deleteAllNotes(e){await e.forEach(t=>this.deleteNotes(t.id))}}const de=new br,vr={setup(){const s=B(),e=E({});return{editable:e,async createNote(){try{e.value.groupId=s.params.id,await de.createNote(e.value),I.getOrCreateInstance(document.getElementById("new-note")).hide(),e.value={}}catch(t){c.error(t),m.toast(t.message,"error")}}}}},yr=r("button",{class:"btn btn-success mt-2 align-self-end elevation-2",title:"Create Note"}," Create Note ",-1);function wr(s,e,t,o,i,d){return l(),u("form",{class:"mb-3 d-flex flex-column",onSubmit:e[1]||(e[1]=G((...a)=>o.createNote&&o.createNote(...a),["prevent"]))},[b(r("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.body=a),type:"text",class:"form-control",name:"",id:"","aria-describedby":"helpId",placeholder:"Tell us..."},null,512),[[M,o.editable.body]]),yr],32)}var kr=h(vr,[["render",wr]]),$r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kr});const Cr={props:{note:{type:Object,required:!0}},setup(s){return{notes:_(()=>n.notes),account:_(()=>n.account),group:_(()=>n.activeGroup),async deleteNotes(){try{let e=s.note.id;await m.confirm()&&(await de.deleteNotes(e),m.toast("Note Deleted","success","top-end",1e3))}catch(e){c.error(e),m.toast(e.message,"error")}},swipeRight(){c.log("swiping right")}}}},Ir={key:0},xr={class:"row p-1"},Sr={class:"col-2 p-0"},Ar=["src"],Tr={class:"col-10 rounded text-start elevation-2 d-flex justify-content-between bg-white"},Mr={key:1},Rr={class:"row p-3"},Er={class:"col-10 rounded text-start elevation-2 d-flex justify-content-between bg-azureblue"},Gr={class:"col-2 d-flex justify-content-end p-0"},Or=["src"];function jr(s,e,t,o,i,d){var x,S,F,z;const a=R("touch"),g=R("touch-class");return b((l(),u("span",null,[t.note.creatorId==o.account.id?(l(),u("div",Ir,[r("div",xr,[r("div",Sr,[r("img",{src:(x=t.note.creator)==null?void 0:x.picture,alt:"",class:"img-fluid img-ex-small rounded-circle"},null,8,Ar)]),r("div",Tr,[r("div",null,[r("i",null,f((S=t.note.creator)==null?void 0:S.name),1),r("p",null,f(t.note.body),1)])])])])):(l(),u("div",Mr,[r("div",Rr,[r("div",Er,[r("div",null,[r("i",null,f((F=t.note.creator)==null?void 0:F.name),1),r("p",null,f(t.note.body),1)])]),r("div",Gr,[r("img",{src:(z=t.note.creator)==null?void 0:z.picture,alt:"",class:"img-fluid img-ex-small rounded-circle"},null,8,Or)])])]))],512)),[[a,o.deleteNotes,"swipe",{right:!0}],[g,"active"]])}var Nr=h(Cr,[["render",jr],["__scopeId","data-v-2fa7916b"]]),qr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nr});const Dr={setup(){return{}}},Pr={class:"offcanvas offcanvas-start",tabindex:"-1","aria-labelledby":"offcanvasExampleLabel"},Lr={class:"offcanvas-header"},Fr={class:"offcanvas-title",id:"offcanvasExampleLabel"},zr=r("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),Br={class:"offcanvas-body"};function Ur(s,e,t,o,i,d){return l(),u("div",Pr,[r("div",Lr,[r("h5",Fr,[V(s.$slots,"title")]),zr]),r("div",Br,[V(s.$slots,"body")])])}var Vr=h(Dr,[["render",Ur]]),Hr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vr});const Yr={props:{officeItems:{type:Object,requierd:!0}},setup(s){return{account:_(()=>n.account),member:_(()=>n.members),group:_(()=>n.activeGroup),async markComplete(e){try{await k.markComplete(e)}catch(t){c.error(t),m.toast(t.message,"error")}},async deleteItem(){try{let e=s.officeItems.id;c.log("swiping",e),await m.confirm("Are You Sure You Want To Delete?")&&(await k.deleteItem(e),m.toast("Item removed","success","top-end",1e3))}catch(e){c.error(e),m.toast(e.message,"error")}}}}},Jr={class:"justify-content-start"},Kr=["checked"];function Wr(s,e,t,o,i,d){const a=R("touch");return b((l(),u("span",null,[r("div",Jr,[r("div",{class:"form-check fs-5",onClick:e[0]||(e[0]=g=>o.markComplete(t.officeItems.id))},[r("input",{class:"form-check-input elevation-2",type:"checkbox",value:"",id:"flexCheckDefault",checked:t.officeItems.isComplete},null,8,Kr),r("label",{class:"form-check-label",style:j({textDecoration:t.officeItems.isComplete?"line-through":"inherit"})},f(t.officeItems.name),5)])])],512)),[[a,o.deleteItem,"swipe",{right:!0}]])}var Xr=h(Yr,[["render",Wr]]),Qr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xr});const Zr={props:{recipe:{type:Object,required:!0}},setup(s){return re(),{goTo(){n.activeRecipe=s.recipe}}}},es={class:"col-12 p-2 d-flex"},ts=["src"],os={class:"p-2"};function rs(s,e,t,o,i,d){return l(),u("div",{class:"row my-2 elevation-2 rounded bg-secondary selectable","data-bs-toggle":"offcanvas","data-bs-target":"#recipe",onClick:e[0]||(e[0]=(...a)=>o.goTo&&o.goTo(...a)),title:"Recipe Details"},[r("div",es,[r("img",{class:"img-fluid img-md",src:t.recipe.imageUrl,alt:"recipe image"},null,8,ts),r("h6",os,f(t.recipe.name),1)])])}var ss=h(Zr,[["render",rs],["__scopeId","data-v-034de530"]]),as=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ss});const ns={setup(){const s=B();return{activeRecipe:_(()=>n.activeRecipe),async addIngredient(e){try{const t={name:e,groupId:s.params.id};await k.createItem(t),m.toast(`${t.name} added to list`,"success","top-end",1e3)}catch(t){c.error(t),m.toast(t.message,"error")}},async addAll(e){try{await k.addAll(e,s.params.id),m.toast("All ingredients added to list","success","top-end",1e3)}catch(t){c.error(t),m.toast(t.message,"error")}}}}},cs={class:"container-fluid"},is={class:"row"},ls={class:"col-12"},ds=["src"],us=["onClick"],ms=r("i",{class:"mdi mdi-plus selectable",title:"Add Ingredient"},null,-1),_s={class:"col-12"},ps=["href"];function hs(s,e,t,o,i,d){return l(),u("div",cs,[r("div",is,[r("div",ls,[r("img",{src:o.activeRecipe.imageUrl,alt:"recipe image",class:"img-fluid rounded"},null,8,ds)]),r("i",{class:"mdi mdi-plus selectable fs-5 p-2",onClick:e[0]||(e[0]=a=>o.addAll(o.activeRecipe.ingredients))}," Add all to shopping list"),(l(!0),u(A,null,O(o.activeRecipe.ingredients,a=>(l(),u("div",{key:a.name,class:"col-12"},[r("p",{onClick:g=>o.addIngredient(a),class:"ps-2"},[ms,T(" "+f(a),1)],8,us)]))),128)),r("div",_s,[r("a",{target:"_blank",class:"btn-secondary btn",href:`https://tasty.co/recipe/${o.activeRecipe.slug}`},"Click for full recipe",8,ps)])])])}var gs=h(ns,[["render",hs]]),fs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gs});const bs={setup(){return{memberRequest:_(()=>n.memberRequest),async acceptMember(){try{const s={status:"accepted"};await q.acceptMember(n.memberRequest.memberId,s),m.toast("Member has been accepted","success"),I.getOrCreateInstance(document.getElementById("group-request")).hide()}catch(s){c.error(s),m.toast(s.message,"error")}},async declineMember(){try{const s={status:"declined"};await q.declineMember(n.memberRequest.memberId,s),m.toast("Member has been declined","error"),I.getOrCreateInstance(document.getElementById("group-request")).hide()}catch(s){c.error(s),m.toast(s.message,"error")}}}}},vs={class:"container-fluid"},ys={class:"row justify-content-center"},ws={class:"col-12 d-flex flex-column align-items-center"},ks=["src"],$s={class:"row"},Cs={class:"col-12 d-flex justify-content-around"};function Is(s,e,t,o,i,d){return l(),u("div",vs,[r("div",ys,[r("div",ws,[r("h6",null,f(o.memberRequest.name),1),r("img",{src:o.memberRequest.picture,alt:"",class:"img-small"},null,8,ks)])]),r("div",$s,[r("div",Cs,[r("button",{onClick:e[0]||(e[0]=(...a)=>o.acceptMember&&o.acceptMember(...a)),class:"btn btn-success"},"Accept"),r("button",{onClick:e[1]||(e[1]=(...a)=>o.declineMember&&o.declineMember(...a)),class:"btn btn-danger"},"Decline")])])])}var xs=h(bs,[["render",Is],["__scopeId","data-v-43b8036d"]]),Ss=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xs});function As(s){Object.entries({"./components/AccountForm.vue":Le,"./components/ChoreForm.vue":Je,"./components/CleaningItems.vue":tt,"./components/GroceryItem.vue":ct,"./components/GroupForm.vue":_t,"./components/GroupOptionsForm.vue":Et,"./components/HardwareItem.vue":Dt,"./components/ItemForm.vue":Ht,"./components/JoinForm.vue":no,"./components/Login.vue":To,"./components/LogoBanner.vue":qo,"./components/MemberChores.vue":Jo,"./components/Modal.vue":ar,"./components/Navbar.vue":fr,"./components/NoteForm.vue":$r,"./components/Notes.vue":qr,"./components/OffCanvas.vue":Hr,"./components/OfficeItems.vue":Qr,"./components/Recipe.vue":as,"./components/RecipeForm.vue":fs,"./components/RequestForm.vue":Ss}).forEach(([t,o])=>{const i=o.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");s.component(i,o.default)})}const ue=ye(Te);As(ue);ue.use(we).use(Z).mount("#app");export{n as A,m as P,h as _,Q as c,ae as g,k as i,c as l,q as m,de as n,ie as s,Ms as t};
