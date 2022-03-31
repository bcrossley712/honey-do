import{r as ue,c as _,a as C,o as d,b as m,d as s,e as k,w as y,F as S,f as A,S as K,g as X,h as E,i as me,M as I,j as b,v as T,k as R,u as L,l as Q,m as G,t as f,n as M,p as O,q as Z,s as w,x as _e,y as V,z as H,A as pe,B as ge,C as F,D as he,E as fe,G as z,H as B,I as be,J as ve}from"./vendor.29af3d06.js";const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerpolicy&&(l.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?l.credentials="include":c.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(c){if(c.ep)return;c.ep=!0;const l=t(c);fetch(c.href,l)}};ye();const n=ue({user:{},account:{},recipes:[],activeRecipe:{},activeGroup:{},items:[],chores:[],notes:[],members:[],groups:[],activeGroup:{},searchResults:[],grouptoJoin:{},groupRequests:[],memberRequest:{}});var g=(r,e)=>{for(const[t,o]of e)r[t]=o;return r};const we={name:"App",setup(){return{appState:_(()=>n)}}},$e={class:"mb-5"},ke=A("New Group"),Ce=A(" Edit Account"),Ie=A("Request to join group");function xe(r,e,t,o,c,l){const a=C("Navbar"),h=C("router-view"),x=C("GroupForm"),U=C("Modal"),le=C("AccountForm"),de=C("JoinForm");return d(),m(S,null,[s("header",null,[k(a)]),s("main",$e,[k(h)]),k(U,{id:"new-group"},{title:y(()=>[ke]),body:y(()=>[k(x)]),_:1}),k(U,{id:"edit-account"},{title:y(()=>[Ce]),body:y(()=>[k(le)]),_:1}),k(U,{id:"join-group"},{title:y(()=>[Ie]),body:y(()=>[k(de)]),_:1})],64)}var Se=g(we,[["render",xe]]);class u{static async confirm(e="Are you sure?",t="You won't be able to revert this!",o="warning",c="Yes, delete it!"){try{return!!(await K.fire({title:e,text:t,icon:o,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",o="top-end",c=3e3,l=!0){K.fire({title:e,icon:t,position:o,timer:c,timerProgressBar:l,toast:!0,showConfirmButton:!1})}}const ee=window.location.origin.includes("localhost"),te=ee?"http://localhost:3000":"",Ae="dev-bcrossley712.us.auth0.com",Te="https://brian-dev.com",Me="omph0kyWMR2mKaoZphUvm7lVBfiDkRPf";function j(r,e){if(ee)console[r](`[${r}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(r){case"log":case"assert":return}console[r](`[${r}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const i={log(){j("log",arguments)},error(){j("error",arguments)},warn(){j("warn",arguments)},assert(){j("assert",arguments)},trace(){j("trace",arguments)}},p=X.create({baseURL:te,timeout:8e3}),ks=X.create({baseURL:"https://tasty.p.rapidapi.com/recipes/list",timeout:8e3,headers:{"X-RapidAPI-Host":"tasty.p.rapidapi.com","X-RapidAPI-Key":"9d0dc9db3fmsh9c8ab121e8123a7p1ddabajsnf4e1461ad73a"}});class Ee{async getAccount(){try{const e=await p.get("/account");n.account=e.data}catch(e){i.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getMyGroups(){const e=await p.get("/account/groups");i.log("[getMyGroups]",e.data),n.groups=e.data}async editAccount(e){const t=await p.put("account",e);i.log("[editAccount]",t.data),n.account=t.data}}const Y=new Ee,Re={setup(){const r=E({});return me(()=>{r.value=n.account}),{editable:r,async editAccount(){try{await Y.editAccount(r.value),I.getOrCreateInstance(document.getElementById("edit-account")).hide()}catch(e){i.error(e),u.toast(e.message,"error")}}}}},Ge=s("label",{for:"Group Name",class:"form-label"},"Name",-1),Oe=s("label",{for:"picture",class:"form-label"},"ImageUrl",-1),je=s("button",{class:"btn btn-success mt-2 elevation-2",title:"Edit Account"}," Edit Account ",-1);function Ne(r,e,t,o,c,l){return d(),m("form",{class:"mb-3",onSubmit:e[2]||(e[2]=R((...a)=>o.editAccount&&o.editAccount(...a),["prevent"]))},[Ge,b(s("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.name=a),type:"text",class:"form-control",name:"",id:"",placeholder:"Name...",required:""},null,512),[[T,o.editable.name]]),Oe,b(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.editable.picture=a),type:"text",class:"form-control",name:"",id:"",placeholder:"ImageUrl...",required:""},null,512),[[T,o.editable.picture]]),je],32)}var qe=g(Re,[["render",Ne]]),De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qe});class Pe{async createChore(e){const t=await p.post("api/chores",e);i.log("chore created",t.data),n.chores.push(t.data)}async getChores(e){const t=await p.get(`api/groups/${e}/chores`);i.log("got chores",t.data),n.chores=t.data}async markComplete(e){let t=n.chores.find(l=>l.id==e);t.isComplete=!t.isComplete;const o=await p.put(`api/chores/${e}`,t);i.log("chore marked complete",o.data);let c=n.chores.findIndex(l=>l.id==e);n.chores.splice(c,1,o.data)}async deleteChore(e){const t=await p.delete(`api/chores/${e}`);n.chores=n.chores.filter(o=>o.id!=e),i.log("chore deleted",t.data)}async resetChores(){await n.chores.filter(t=>t.isComplete==!0).forEach(t=>this.markComplete(t.id))}}const J=new Pe,Le={setup(){const r=E({}),e=L();return{editable:r,members:_(()=>n.members),async createChore(){try{r.value.groupId=e.params.id,await J.createChore(r.value),I.getOrCreateInstance(document.getElementById("new-chore")),r.value.body=""}catch(t){i.error(t),u.toast(t.message,"error")}}}}},Fe=["value"],ze={class:"d-flex"},Be=s("button",{class:"btn-rounded-end bg-success mdi mdi-check elevation-2",title:"Add Chore"},null,-1);function Ue(r,e,t,o,c,l){return d(),m("form",{onSubmit:e[2]||(e[2]=R((...a)=>o.createChore&&o.createChore(...a),["prevent"])),class:"mb-3"},[b(s("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.assignedTo=a),class:"form-select mb-2",default:"",name:"assignedTo",id:"assignedTo"},[(d(!0),m(S,null,G(o.members,a=>(d(),m("option",{key:a.id,value:a.id},[s("p",null,f(a.name),1)],8,Fe))),128))],512),[[Q,o.editable.assignedTo]]),s("div",ze,[b(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.editable.body=a),type:"text",class:"form-control",name:"",id:"","aria-describedby":"helpId",placeholder:"Add Chore here"},null,512),[[T,o.editable.body]]),Be])],32)}var Ve=g(Le,[["render",Ue]]),He=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ve});class Ye{async createItem(e){const t=await p.post("api/items",e);i.log("[createItems]",t.data),n.items.unshift(t.data)}async getItems(e){const t=await p.get("api/groups/"+e+"/items");i.log("[getItems]",t.data),n.items=t.data}async markComplete(e){let t=n.items.find(o=>o.id==e);t.isComplete=!t.isComplete,await p.put("api/items/"+e,t),i.log("item marked complete",t.isComplete)}async addAll(e,t){await e.forEach(o=>this.createItem({name:o,groupId:t}))}async deleteItem(e){await p.delete("api/items/"+e),n.items=n.items.filter(t=>t.id!=e)}async deleteAllItems(e){await e.forEach(t=>this.deleteItem(t.id))}}const $=new Ye,Je={props:{cleaningItems:{type:Object,required:!0}},setup(r){return{account:_(()=>n.account),member:_(()=>n.members),group:_(()=>n.activeGroup),async markComplete(e){try{await $.markComplete(e)}catch(t){i.error(t),u.toast(t.message,"error")}},async deleteItem(){try{let e=r.cleaningItems.id;i.log("swiping",e),await u.confirm("Are You Sure You Want To Delete?")&&(await $.deleteItem(e),u.toast("Item removed","success","top-end",1e3))}catch(e){i.error(e),u.toast(e.message,"error")}}}}},We={class:"justify-content-start"},Ke=["checked"];function Xe(r,e,t,o,c,l){const a=M("touch");return b((d(),m("span",null,[s("div",We,[s("div",{class:"form-check fs-5",onClick:e[0]||(e[0]=h=>o.markComplete(t.cleaningItems.id))},[s("input",{class:"form-check-input elevation-2",type:"checkbox",value:"",id:"flexCheckDefault",checked:t.cleaningItems.isComplete},null,8,Ke),s("label",{class:"form-check-label",style:O({textDecoration:t.cleaningItems.isComplete?"line-through":"inherit"})},f(t.cleaningItems.name),5)])])],512)),[[a,o.deleteItem,"swipe",{right:!0}]])}var Qe=g(Je,[["render",Xe]]),Ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe});const et={props:{groceryItems:{type:Object,required:!0}},setup(r){return{account:_(()=>n.account),member:_(()=>n.members),group:_(()=>n.activeGroup),async markComplete(e){try{await $.markComplete(e)}catch(t){i.error(t),u.toast(t.message,"error")}},async deleteItem(){try{let e=r.groceryItems.id;i.log("swiping",e),await u.confirm("Are You Sure You Want To Delete?")&&(await $.deleteItem(e),u.toast("Item removed","success","top-end",1e3))}catch(e){i.error(e),u.toast(e.message,"error")}}}}},tt={class:"d-flex justify-content-start w-100"},ot=["checked"];function rt(r,e,t,o,c,l){const a=M("touch");return b((d(),m("span",null,[s("div",tt,[s("div",{class:"form-check fs-5",onClick:e[0]||(e[0]=h=>o.markComplete(t.groceryItems.id))},[s("input",{class:"form-check-input elevation-2",type:"checkbox",value:"",id:"flexCheckDefault",checked:t.groceryItems.isComplete},null,8,ot),s("label",{class:"form-check-label",style:O({textDecoration:t.groceryItems.isComplete?"line-through":"inherit"})},f(t.groceryItems.name),5)])])],512)),[[a,o.deleteItem,"swipe",{right:!0}]])}var st=g(et,[["render",rt],["__scopeId","data-v-7a977cbe"]]),at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st});class nt{async getGroup(e){const t=await p.get("api/groups/"+e);i.log("get group",t.data),n.activeGroup=t.data}async createGroup(e){const t=await p.post("api/groups",e);return i.log("group created",t.data),n.groups.push(t.data),t.data}async groupSearch(e){const t=await p.get("api/groups",{params:e});i.log("[groupSearch]",t.data),n.searchResults=t.data}async deleteGroup(e){const t=p.delete("api/groups/"+e);i.log("[deleteGroup]",t.data),n.activeGroup={},n.groups=n.groups.filter(o=>o.id!=e)}}const oe=new nt,ct={setup(){const r=Z(),e=E({});return{editable:e,async createGroup(){try{let t=await oe.createGroup(e.value);I.getOrCreateInstance(document.getElementById("new-group")).hide(),r.push({name:"Home",params:{id:t.id}}),n.activeGroup=t,e.value={}}catch(t){i.error(t),u.toast(t.message,"error")}}}}},it=s("button",{class:"btn btn-success mt-2 align-self-end elevation-2",title:"Create Group"}," Create Group ",-1);function lt(r,e,t,o,c,l){return d(),m("form",{class:"mb-3 d-flex flex-column",onSubmit:e[1]||(e[1]=R((...a)=>o.createGroup&&o.createGroup(...a),["prevent"]))},[b(s("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.name=a),type:"text",class:"form-control",name:"",id:"","aria-describedby":"helpId",placeholder:"Name your Group!",required:""},null,512),[[T,o.editable.name]]),it],32)}var dt=g(ct,[["render",lt]]),ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dt});class mt{async getGroupMembers(e){const t=await p.get(`api/groups/${e}/members`);i.log("got group members",t.data),n.members=t.data}async getPendingMembers(e){const t=await p.get(`api/groups/${e}/members`,{params:{status:"pending"}});i.log("[getPendingMembers]",t.data),n.groupRequests=t.data}async createMember(e){const t=await p.post("api/members",e);i.log("[createMember]",t.data),n.members.push(t.data)}async acceptMember(e,t){const o=n.members.findIndex(l=>l.memberId==e),c=await p.put("api/members/"+e,t);i.log("[acceptMember]",c.data),n.memberRequest={},n.groupRequests=n.groupRequests.filter(l=>l.memberId!=e),o!=-1?n.members.splice(o,1,c.data):n.members.push(c.data)}async declineMember(e,t){const o=n.members.findIndex(l=>l.memberId==e),c=await p.put("api/members/"+e,t);i.log("[declineMember]",c.data),n.memberRequest={},n.groupRequests=n.groupRequests.filter(l=>l.memberId!=e),o!=-1&&n.members.splice(o,1,c.data)}}const N=new mt,_t={setup(){return{members:_(()=>n.members),account:_(()=>n.account),activeGroup:_(()=>n.activeGroup),acceptedMembers:_(()=>n.members.filter(r=>r.status=="accepted")),declinedMembers:_(()=>n.members.filter(r=>r.status=="declined")),async deleteGroup(){await u.confirm()&&(await oe.deleteGroup(n.activeGroup.id),I.getOrCreateInstance(document.getElementById("group-options")).hide(),u.toast("Group deleted","success"))},async changeStatus(r,e){try{const t={status:e,groupId:n.activeGroup.id};e=="declined"&&(await N.declineMember(r,t),u.toast("Member booted","success")),e=="accepted"&&(await N.acceptMember(r,t),u.toast("Member accepted","success"))}catch(t){i.error(t),u.toast(t.message,"error")}}}}},pt={class:"container-fluid"},gt={class:"row"},ht={class:"col-12"},ft={class:"text-center"},bt={key:0},vt={key:0},yt=s("br",null,null,-1),wt={class:"text-end"},$t=["onClick"],kt={key:1},Ct={key:0},It=s("br",null,null,-1),xt=["onClick"],St={class:"col-12 d-flex flex-column align-items-center p-3"};function At(r,e,t,o,c,l){return d(),m("div",pt,[s("div",gt,[s("div",ht,[s("h1",ft,f(o.activeGroup.name),1),o.acceptedMembers.length>1?(d(),m("h6",bt,"Accepted members:")):w("",!0),(d(!0),m(S,null,G(o.members,a=>(d(),m("ul",{key:a.id},[a.id!=o.account.id&&a.status=="accepted"?(d(),m("li",vt,[s("span",null,f(a.name),1),yt,s("span",wt,[s("button",{onClick:h=>o.changeStatus(a.memberId,"declined"),class:"btn btn-danger"}," Boot Member? ",8,$t)])])):w("",!0)]))),128)),o.declinedMembers.length>0?(d(),m("h6",kt,"Declined members:")):w("",!0),(d(!0),m(S,null,G(o.members,a=>(d(),m("ul",{key:a.id},[a.id!=o.account.id&&a.status=="declined"?(d(),m("li",Ct,[s("span",null,f(a.name),1),It,s("span",null,[s("button",{onClick:h=>o.changeStatus(a.memberId,"accepted"),class:"btn btn-success"}," Accept Member? ",8,xt)])])):w("",!0)]))),128))]),s("div",St,[s("button",{class:"btn btn-danger my-3",onClick:e[0]||(e[0]=(...a)=>o.deleteGroup&&o.deleteGroup(...a))}," Delete group? ")])])])}var Tt=g(_t,[["render",At]]),Mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tt});const Et={props:{hardwareItems:{type:Object,required:!0}},setup(r){return{account:_(()=>n.account),member:_(()=>n.members),group:_(()=>n.activeGroup),async markComplete(e){try{await $.markComplete(e)}catch(t){i.error(t),u.toast(t.message,"error")}},async deleteItem(){try{let e=r.hardwareItems.id;i.log("swiping",e),await u.confirm("Are You Sure You Want To Delete?")&&(await $.deleteItem(e),u.toast("Item removed","success","top-end",1e3))}catch(e){i.error(e),u.toast(e.message,"error")}}}}},Rt={class:"d-flex justify-content-start"},Gt=["checked"];function Ot(r,e,t,o,c,l){const a=M("touch");return b((d(),m("span",null,[s("div",Rt,[s("div",{class:"form-check fs-5",onClick:e[0]||(e[0]=h=>o.markComplete(t.hardwareItems.id))},[s("input",{class:"form-check-input elevation-2",type:"checkbox",value:"",id:"flexCheckDefault",checked:t.hardwareItems.isComplete},null,8,Gt),s("label",{class:"form-check-label",style:O({textDecoration:t.hardwareItems.isComplete?"line-through":"inherit"})},f(t.hardwareItems.name),5)])])],512)),[[a,o.deleteItem,"swipe",{right:!0}]])}var jt=g(Et,[["render",Ot]]),Nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jt});const qt={setup(){const r=E({}),e=L();return{editable:r,async createItem(){try{r.value.groupId=e.params.id,await $.createItem(r.value),r.value.name=""}catch(t){i.error(t),u.toast(t.message,"error")}}}}},Dt=_e('<option value="" selected disabled>Select one...</option><option value="grocery">Grocery</option><option value="hardware">Hardware</option><option value="cleaning">Cleaning</option><option value="office">Office</option>',5),Pt=[Dt],Lt={class:"input-group my-2"},Ft=s("div",{class:"input-group-append"},[s("button",{class:"btn-rounded-end bg-success elevation-2",id:"basic-addon2"},[s("i",{class:"mdi mdi-check"})])],-1);function zt(r,e,t,o,c,l){return d(),m("form",{onSubmit:e[2]||(e[2]=R(a=>o.createItem(),["prevent"]))},[b(s("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.type=a),class:"form-select",name:"",id:""},Pt,512),[[Q,o.editable.type]]),s("div",Lt,[b(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.editable.name=a),type:"text",class:"form-control",placeholder:"shopping item","aria-label":"shopping item","aria-describedby":"basic-addon2"},null,512),[[T,o.editable.name]]),Ft])],32)}var Bt=g(qt,[["render",zt]]),Ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bt});const Vt={setup(){return{groupToJoin:_(()=>n.grouptoJoin),async createMember(){const r={groupId:n.grouptoJoin.id,accountId:n.account.id};try{await N.createMember(r),u.toast("Your request has been sent","success"),n.searchResults=[],I.getOrCreateInstance(document.getElementById("join-group")).hide()}catch(e){i.error(e),u.toast(e.message,"error")}}}}},re=r=>(V("data-v-8d047772"),r=r(),H(),r),Ht={class:"container-fluid"},Yt={class:"row"},Jt={class:"col-12"},Wt=re(()=>s("h6",{class:"p-1"},"Group Name:",-1)),Kt={class:"p-1"},Xt={class:"col-12"},Qt=re(()=>s("h6",{class:"p-1"},"Group Creator:",-1)),Zt={class:"d-flex align-items-center p-1"},eo=["src"],to={class:"col-6 offset-6"};function oo(r,e,t,o,c,l){return d(),m("div",Ht,[s("div",Yt,[s("div",Jt,[Wt,s("h6",Kt,f(o.groupToJoin.name),1)]),s("div",Xt,[Qt,s("div",Zt,[s("img",{src:o.groupToJoin.picture,alt:"",class:"img-small px-1"},null,8,eo),s("h6",null,f(o.groupToJoin.creatorName),1)])]),s("div",to,[s("button",{onClick:e[0]||(e[0]=(...a)=>o.createMember&&o.createMember(...a)),class:"btn btn-primary"}," Request to join? ")])])])}var ro=g(Vt,[["render",oo],["__scopeId","data-v-8d047772"]]),so=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ro});const ao="modulepreload",se={},no="/",q=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${no}${o}`,o in se)return;se[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":ao,c||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),c)return new Promise((h,x)=>{a.addEventListener("load",h),a.addEventListener("error",x)})})).then(()=>e())};function co(r){switch(r){case"./pages/AccountPage.vue":return q(()=>import("./AccountPage.17119eef.js"),["assets/AccountPage.17119eef.js","assets/AccountPage.42239942.css","assets/vendor.29af3d06.js"]);case"./pages/ChoresPage.vue":return q(()=>import("./ChoresPage.bbfb87ad.js"),["assets/ChoresPage.bbfb87ad.js","assets/ChoresPage.56a6a111.css","assets/vendor.29af3d06.js"]);case"./pages/HomePage.vue":return q(()=>import("./HomePage.addbaac4.js"),["assets/HomePage.addbaac4.js","assets/HomePage.b4af102a.css","assets/vendor.29af3d06.js"]);case"./pages/ItemsPage.vue":return q(()=>import("./ItemsPage.c5017a94.js"),["assets/ItemsPage.c5017a94.js","assets/ItemsPage.fd35aa1c.css","assets/vendor.29af3d06.js"]);case"./pages/RecipesPage.vue":return q(()=>import("./RecipesPage.7fe8e37a.js"),["assets/RecipesPage.7fe8e37a.js","assets/RecipesPage.30b1ebfc.css","assets/vendor.29af3d06.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}function D(r){return()=>co(`./pages/${r}.vue`)}const io=[{path:"/group/:id/home",name:"Home",component:D("HomePage"),beforeEnter:F},{path:"/group/:id/items",name:"Items",component:D("ItemsPage"),beforeEnter:F},{path:"/group/:id/recipes",name:"Recipes",component:D("RecipesPage"),beforeEnter:F},{path:"/group/:id/chores",name:"Chores",component:D("ChoresPage"),beforeEnter:F},{path:"/",name:"Account",component:D("AccountPage"),beforeEnter:he}],W=pe({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:ge(),routes:io}),lo={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class uo{constructor(e=!1,t=te){}on(e,t){var o;return(o=this.socket)==null||o.on(e,t.bind(this)),this}onConnected(e){i.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){i.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(lo.authenticate,e)}onError(e){i.error("[SOCKET_ERROR]",e)}enqueue(e,t){i.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){i.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class mo extends uo{constructor(){super();this.on("error",this.onError)}onError(e){u.toast(e.message,"error")}}const ae=new mo,v=fe({domain:Ae,clientId:Me,audience:Te,useRefreshTokens:!0,onRedirectCallback:r=>{W.push(r&&r.targetUrl?r.targetUrl:window.location.pathname)}});v.on(v.AUTH_EVENTS.AUTHENTICATED,async function(){p.defaults.headers.authorization=v.bearer,p.interceptors.request.use(_o),n.user=v.user,await Y.getAccount(),ae.authenticate(v.bearer),await Y.getMyGroups(),n.groups.length==1&&(n.activeGroup=n.groups[0],W.push({name:"Home",params:{id:n.activeGroup.id}}))});async function _o(r){if(!v.isAuthenticated)return r;const e=v.identity.exp*1e3,t=e<Date.now(),o=e<Date.now()+1e3*60*60*12;return t?await v.loginWithPopup():o&&(await v.getTokenSilently(),p.defaults.headers.authorization=v.bearer,ae.authenticate(v.bearer)),r}const po={setup(){return{user:_(()=>n.user),account:_(()=>n.account),async login(){v.loginWithPopup()},async logout(){v.logout({returnTo:window.location.origin})}}}},ne=r=>(V("data-v-4cc5affa"),r=r(),H(),r),go={class:""},ho={key:1,class:"dropdown my-2 my-lg-0"},fo={title:"Account Options",class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},bo={key:0,class:"text-center d-flex flex-column"},vo=["src"],yo={class:"mx-3 text-dark lighten-30"},wo={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},$o=ne(()=>s("div",{class:"list-group-item list-group-item-action hoverable text-danger","data-bs-toggle":"modal","data-bs-target":"#edit-account"},[s("i",{class:"mdi mdi-pencil"}),A(" Edit Account ")],-1)),ko=ne(()=>s("i",{class:"mdi mdi-logout"},null,-1)),Co=A(" Logout "),Io=[ko,Co];function xo(r,e,t,o,c,l){return d(),m("span",go,[o.user.isAuthenticated?(d(),m("div",ho,[s("div",fo,[o.account.picture?(d(),m("div",bo,[s("img",{src:o.account.picture,alt:"account photo",height:"90",class:"rounded align-self-center"},null,8,vo),s("span",yo,f(o.account.name),1)])):w("",!0)]),s("div",wo,[$o,s("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...a)=>o.logout&&o.logout(...a))},Io)])])):(d(),m("button",{key:0,title:"Login",class:"btn selectable lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...a)=>o.login&&o.login(...a))}," Login "))])}var So=g(po,[["render",xo],["__scopeId","data-v-4cc5affa"]]),Ao=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:So}),To="/assets/honeydo_logo.3d90ff39.png";const Mo={setup(){return{}}},Eo={class:"row"},Ro=s("h1",{class:"bg-tertiary elevation-2 p-2"},[s("img",{src:To,alt:"",class:"img-fluid",style:{"max-height":"45px"}})],-1),Go=[Ro];function Oo(r,e,t,o,c,l){return d(),m("div",Eo,Go)}var jo=g(Mo,[["render",Oo]]),No=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jo});const qo={props:{member:{type:Object,required:!0}},setup(r){return{chores:_(()=>n.chores.filter(e=>e.assignedTo==r.member.id)),account:_(()=>n.account),group:_(()=>n.activeGroup),async markComplete(e){try{await J.markComplete(e)}catch(t){i.error(t),u.toast(t.message,"error")}},async deleteChore(e){try{await u.confirm("Delete this Chore?")&&(await J.deleteChore(e),u.toast("Chore Deleted!","success","top-end",1e3))}catch(t){i.error(t),u.toast(t.message,"error")}}}}},Do={key:0},Po={class:"rounded px-1"},Lo=["value"],Fo={class:"d-flex justify-content-between"},zo=["onClick"],Bo=["checked"],Uo=["onClick"];function Vo(r,e,t,o,c,l){return o.chores.length>0?(d(),m("div",Do,[s("h3",null,[s("span",Po,f(t.member.name),1)]),(d(!0),m(S,null,G(o.chores,a=>(d(),m("div",{class:"form-check mx-2",key:a.id,value:a.id},[s("div",Fo,[s("div",{onClick:h=>o.markComplete(a.id)},[s("input",{title:"Mark Chore Complete",type:"checkbox",class:"form-check-input fs-5 elevation-2",name:"Chore Name",id:"",checked:a.isComplete},null,8,Bo),s("label",{class:"form-check-label ms-2 mb-1 fs-5",for:"",style:O({textDecoration:a.isComplete?"line-through":"inherit"})},f(a.body),5)],8,zo),a.creatorId==o.account.id||o.group.creatorId==o.account.id?(d(),m("i",{key:0,onClick:h=>o.deleteChore(a.id),class:"mdi mdi-trash-can-outline ms-2 text-secondary"},null,8,Uo)):w("",!0)])],8,Lo))),128))])):w("",!0)}var Ho=g(qo,[["render",Vo]]),Yo=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ho});const Jo={setup(){return{}}},Wo={class:"modal fade bg-modal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},Ko={class:"modal-dialog modal-dialog-end",role:"document"},Xo={class:"modal-content"},Qo={class:"modal-header bg-secondary"},Zo={class:"modal-title"},er=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),tr={class:"modal-body bg-secondary lighten-20 rounded-bottom"};function or(r,e,t,o,c,l){return d(),m("div",Wo,[s("div",Ko,[s("div",Xo,[s("div",Qo,[s("h5",Zo,[z(r.$slots,"title")]),er]),s("div",tr,[z(r.$slots,"body")])])])])}var rr=g(Jo,[["render",or]]),sr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rr});const ar={setup(){return{user:_(()=>n.user),activeGroup:_(()=>n.activeGroup)}}},P=r=>(V("data-v-5357ba96"),r=r(),H(),r),nr={class:"navbar navbar-expand-lg navbar-dark bg-tertiary px-3 nav-sticky"},cr={key:0,class:"d-flex justify-content-end w-100"},ir={key:1,class:"d-flex justify-content-between w-100"},lr=P(()=>s("i",{class:"mdi mdi-format-list-bulleted fs-4"},null,-1)),dr=P(()=>s("i",{class:"mdi mdi-cart-outline fs-4"},null,-1)),ur=P(()=>s("i",{class:"mdi mdi-home"},null,-1)),mr=P(()=>s("i",{class:"mdi mdi-noodles fs-4"},null,-1)),_r=P(()=>s("i",{class:"mdi mdi-account fs-4"},null,-1));function pr(r,e,t,o,c,l){const a=C("Login"),h=C("router-link");return d(),m("nav",nr,[o.user.isAuthenticated?(d(),m("div",ir,[o.activeGroup.id?(d(),B(h,{key:0,class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Chores",params:{id:o.activeGroup.id}},title:"Chores"},{default:y(()=>[lr]),_:1},8,["to"])):w("",!0),o.activeGroup.id?(d(),B(h,{key:1,class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Items",params:{id:o.activeGroup.id}},title:"Shopping List"},{default:y(()=>[dr]),_:1},8,["to"])):w("",!0),o.activeGroup.id?(d(),B(h,{key:2,class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Home",params:{id:o.activeGroup.id}},title:"Home"},{default:y(()=>[ur]),_:1},8,["to"])):w("",!0),o.activeGroup.id?(d(),B(h,{key:3,class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Recipes",params:{id:o.activeGroup.id}},title:"Recipes"},{default:y(()=>[mr]),_:1},8,["to"])):w("",!0),k(h,{class:"navbar-brand p-0 text-center m-0 text-dark",to:{name:"Account"},title:"Account"},{default:y(()=>[_r]),_:1})])):(d(),m("div",cr,[k(a)]))])}var gr=g(ar,[["render",pr],["__scopeId","data-v-5357ba96"]]),hr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gr});class fr{async getNotes(e){const t=await p.get(`api/groups/${e}/notes`);i.log("[getNotes]",t.data),n.notes=t.data.reverse()}async createNote(e){const t=await p.post("api/notes",e);i.log("[createNote]",t.data),n.notes.unshift(t.data)}async deleteNotes(e){const t=await p.delete("api/notes/"+e);i.log(t.data),n.notes=n.notes.filter(o=>o.id!=e)}async deleteAllNotes(e){await e.forEach(t=>this.deleteNotes(t.id))}}const ce=new fr,br={setup(){const r=L(),e=E({});return{editable:e,async createNote(){try{e.value.groupId=r.params.id,await ce.createNote(e.value),I.getOrCreateInstance(document.getElementById("new-note")).hide(),e.value={}}catch(t){i.error(t),u.toast(t.message,"error")}}}}},vr=s("button",{class:"btn btn-success mt-2 align-self-end elevation-2",title:"Create Note"}," Create Note ",-1);function yr(r,e,t,o,c,l){return d(),m("form",{class:"mb-3 d-flex flex-column",onSubmit:e[1]||(e[1]=R((...a)=>o.createNote&&o.createNote(...a),["prevent"]))},[b(s("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.editable.body=a),type:"text",class:"form-control",name:"",id:"","aria-describedby":"helpId",placeholder:"Tell us..."},null,512),[[T,o.editable.body]]),vr],32)}var wr=g(br,[["render",yr]]),$r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wr});const kr={props:{note:{type:Object,required:!0}},setup(r){return{notes:_(()=>n.notes),account:_(()=>n.account),group:_(()=>n.activeGroup),async deleteNotes(){try{let e=r.note.id;await u.confirm()&&(await ce.deleteNotes(e),u.toast("Note Deleted","success","top-end",1e3))}catch(e){i.error(e),u.toast(e.message,"error")}},swipeRight(){i.log("swiping right")}}}},Cr={class:"row p-3"},Ir={class:"col-3"},xr=["src"],Sr={class:"col-9 rounded text-start elevation-2 d-flex justify-content-between"};function Ar(r,e,t,o,c,l){var x;const a=M("touch"),h=M("touch-class");return b((d(),m("span",null,[s("div",Cr,[s("div",Ir,[s("img",{src:(x=t.note.creator)==null?void 0:x.picture,alt:"",class:"img-fluid img-small rounded-circle"},null,8,xr)]),s("div",Sr,[s("div",null,[s("span",null,f(new Date(t.note.createdAt).toLocaleString()),1),s("p",null,f(t.note.body),1)])])])],512)),[[a,o.deleteNotes,"swipe",{right:!0}],[h,"active"]])}var Tr=g(kr,[["render",Ar],["__scopeId","data-v-917f0acc"]]),Mr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tr});const Er={setup(){return{}}},Rr={class:"offcanvas offcanvas-start",tabindex:"-1","aria-labelledby":"offcanvasExampleLabel"},Gr={class:"offcanvas-header"},Or={class:"offcanvas-title",id:"offcanvasExampleLabel"},jr=s("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),Nr={class:"offcanvas-body"};function qr(r,e,t,o,c,l){return d(),m("div",Rr,[s("div",Gr,[s("h5",Or,[z(r.$slots,"title")]),jr]),s("div",Nr,[z(r.$slots,"body")])])}var Dr=g(Er,[["render",qr]]),Pr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dr});const Lr={props:{officeItems:{type:Object,requierd:!0}},setup(r){return{account:_(()=>n.account),member:_(()=>n.members),group:_(()=>n.activeGroup),async markComplete(e){try{await $.markComplete(e)}catch(t){i.error(t),u.toast(t.message,"error")}},async deleteItem(){try{let e=r.officeItems.id;i.log("swiping",e),await u.confirm("Are You Sure You Want To Delete?")&&(await $.deleteItem(e),u.toast("Item removed","success","top-end",1e3))}catch(e){i.error(e),u.toast(e.message,"error")}}}}},Fr={class:"justify-content-start"},zr=["checked"];function Br(r,e,t,o,c,l){const a=M("touch");return b((d(),m("span",null,[s("div",Fr,[s("div",{class:"form-check fs-5",onClick:e[0]||(e[0]=h=>o.markComplete(t.officeItems.id))},[s("input",{class:"form-check-input elevation-2",type:"checkbox",value:"",id:"flexCheckDefault",checked:t.officeItems.isComplete},null,8,zr),s("label",{class:"form-check-label",style:O({textDecoration:t.officeItems.isComplete?"line-through":"inherit"})},f(t.officeItems.name),5)])])],512)),[[a,o.deleteItem,"swipe",{right:!0}]])}var Ur=g(Lr,[["render",Br]]),Vr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ur});const Hr={props:{recipe:{type:Object,required:!0}},setup(r){return Z(),{goTo(){n.activeRecipe=r.recipe}}}},Yr={class:"col-12 p-2 d-flex"},Jr=["src"],Wr={class:"p-2"};function Kr(r,e,t,o,c,l){return d(),m("div",{class:"row my-2 elevation-2 rounded bg-secondary selectable","data-bs-toggle":"offcanvas","data-bs-target":"#recipe",onClick:e[0]||(e[0]=(...a)=>o.goTo&&o.goTo(...a)),title:"Recipe Details"},[s("div",Yr,[s("img",{class:"img-fluid img-md",src:t.recipe.imageUrl,alt:"recipe image"},null,8,Jr),s("h6",Wr,f(t.recipe.name),1)])])}var Xr=g(Hr,[["render",Kr],["__scopeId","data-v-034de530"]]),Qr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xr});const Zr={setup(){const r=L();return{activeRecipe:_(()=>n.activeRecipe),async addIngredient(e){try{const t={name:e,groupId:r.params.id};await $.createItem(t),u.toast(`${t.name} added to list`,"success","top-end",1e3)}catch(t){i.error(t),u.toast(t.message,"error")}},async addAll(e){try{await $.addAll(e,r.params.id),u.toast("All ingredients added to list","success","top-end",1e3)}catch(t){i.error(t),u.toast(t.message,"error")}}}}},es={class:"container-fluid"},ts={class:"row"},os={class:"col-12"},rs=["src"],ss=["onClick"],as=s("i",{class:"mdi mdi-plus selectable",title:"Add Ingredient"},null,-1),ns={class:"col-12"},cs=["href"];function is(r,e,t,o,c,l){return d(),m("div",es,[s("div",ts,[s("div",os,[s("img",{src:o.activeRecipe.imageUrl,alt:"recipe image",class:"img-fluid rounded"},null,8,rs)]),s("i",{class:"mdi mdi-plus selectable fs-5 p-2",onClick:e[0]||(e[0]=a=>o.addAll(o.activeRecipe.ingredients))}," Add all to shopping list"),(d(!0),m(S,null,G(o.activeRecipe.ingredients,a=>(d(),m("div",{key:a.name,class:"col-12"},[s("p",{onClick:h=>o.addIngredient(a),class:"ps-2"},[as,A(" "+f(a),1)],8,ss)]))),128)),s("div",ns,[s("a",{target:"_blank",class:"btn-secondary btn",href:`https://tasty.co/recipe/${o.activeRecipe.slug}`},"Click for full recipe",8,cs)])])])}var ls=g(Zr,[["render",is]]),ds=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ls});const us={setup(){return{memberRequest:_(()=>n.memberRequest),async acceptMember(){try{const r={status:"accepted"};await N.acceptMember(n.memberRequest.memberId,r),u.toast("Member has been accepted","success"),I.getOrCreateInstance(document.getElementById("group-request")).hide()}catch(r){i.error(r),u.toast(r.message,"error")}},async declineMember(){try{const r={status:"declined"};await N.declineMember(n.memberRequest.memberId,r),u.toast("Member has been declined","error"),I.getOrCreateInstance(document.getElementById("group-request")).hide()}catch(r){i.error(r),u.toast(r.message,"error")}}}}},ms={class:"container-fluid"},_s={class:"row justify-content-center"},ps={class:"col-12 d-flex flex-column align-items-center"},gs=["src"],hs={class:"row"},fs={class:"col-12 d-flex justify-content-around"};function bs(r,e,t,o,c,l){return d(),m("div",ms,[s("div",_s,[s("div",ps,[s("h6",null,f(o.memberRequest.name),1),s("img",{src:o.memberRequest.picture,alt:"",class:"img-small"},null,8,gs)])]),s("div",hs,[s("div",fs,[s("button",{onClick:e[0]||(e[0]=(...a)=>o.acceptMember&&o.acceptMember(...a)),class:"btn btn-success"},"Accept"),s("button",{onClick:e[1]||(e[1]=(...a)=>o.declineMember&&o.declineMember(...a)),class:"btn btn-danger"},"Decline")])])])}var vs=g(us,[["render",bs],["__scopeId","data-v-43b8036d"]]),ys=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vs});function ws(r){Object.entries({"./components/AccountForm.vue":De,"./components/ChoreForm.vue":He,"./components/CleaningItems.vue":Ze,"./components/GroceryItem.vue":at,"./components/GroupForm.vue":ut,"./components/GroupOptionsForm.vue":Mt,"./components/HardwareItem.vue":Nt,"./components/ItemForm.vue":Ut,"./components/JoinForm.vue":so,"./components/Login.vue":Ao,"./components/LogoBanner.vue":No,"./components/MemberChores.vue":Yo,"./components/Modal.vue":sr,"./components/Navbar.vue":hr,"./components/NoteForm.vue":$r,"./components/Notes.vue":Mr,"./components/OffCanvas.vue":Pr,"./components/OfficeItems.vue":Vr,"./components/Recipe.vue":Qr,"./components/RecipeForm.vue":ds,"./components/RequestForm.vue":ys}).forEach(([t,o])=>{const c=o.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");r.component(c,o.default)})}const ie=be(Se);ws(ie);ie.use(ve).use(W).mount("#app");export{n as A,u as P,g as _,J as c,oe as g,$ as i,i as l,N as m,ce as n,ks as t};
