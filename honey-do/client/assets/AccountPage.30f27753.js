import{h as M,u as x,n as S,c as d,a as p,o as s,b as a,e as l,d as t,F as h,m as b,k as j,j as C,v as N,t as u,C as _,q as A,s as B,w as g,f}from"./vendor.ad55b28b.js";import{_ as I,A as n,m as L,g as R}from"./index.d9596563.js";const T={name:"Account",setup(){const c=M({});x();const i=S();return{editable:c,user:d(()=>n.user),account:d(()=>n.account),groups:d(()=>n.groups),searchResults:d(()=>n.searchResults),activeGroup:d(()=>n.activeGroup),members:d(()=>n.members),acceptedMembers:d(()=>n.members.filter(r=>r.status=="accepted")),declinedMembers:d(()=>n.members.filter(r=>r.status=="declined")),async goTo(r){n.activeGroup=r,i.push({name:"Home",params:{id:r.id}}),await L.getGroupMembers(r.id)},setGroup(r){n.grouptoJoin=r},async groupSearch(){try{await R.groupSearch(c.value),c.value={}}catch(r){logger.error(r),Pop.toast(r.message,"error")}}}}},m=c=>(A("data-v-21c34c21"),c=c(),B(),c),V={class:"container-fluid"},F={key:0},D={class:"row justify-content-center"},P={class:"col-4 d-flex justify-content-center"},q={class:"row"},O={class:"col-12 d-flex justify-content-around"},E=m(()=>t("button",{title:"New Group",class:"btn btn-secondary my-3 elevation-2","data-bs-target":"#new-group","data-bs-toggle":"modal"},[t("h5",{class:"m-0"},"New Group")],-1)),H={class:"dropdown"},J=m(()=>t("button",{title:"My Groups",class:"btn btn-secondary my-3 elevation-2",type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("h5",null,"My Groups")],-1)),U={class:"dropdown-menu","aria-labelledby":"dropdownMenu2"},z=["onClick"],K={class:"col-12"},Q={class:"row"},W={class:"col-12 text-center"},X=m(()=>t("h5",null,"Search Groups",-1)),Y=m(()=>t("button",{class:"btn btn-secondary elevation-2",title:"Search Groups"},[t("i",{class:"mdi mdi-magnify",title:"Search Group"})],-1)),Z={class:"col-12"},$=["onClick"],ee={key:0,class:"col-12"},te={class:"text-center"},oe=m(()=>t("h5",{class:"text-center"},"Membership options",-1)),se={key:0},ae=["data-bs-target"],re=f("Member Options"),ne={key:1},ce=["data-bs-target"],de=f("Member Options"),ie={key:1,class:"col-10 offset-1 rounded shadow bg-secondary text-center p-3 my-3"};function le(c,i,r,o,ue,_e){const w=p("LogoBanner"),k=p("Login"),v=p("MemberForm"),y=p("Modal");return s(),a("div",V,[l(w),o.user.isAuthenticated?(s(),a("div",F,[t("div",D,[t("div",P,[l(k)])]),t("div",q,[t("div",O,[E,t("div",H,[J,t("ul",U,[(s(!0),a(h,null,b(o.groups,e=>(s(),a("li",{key:e.id},[t("div",{class:"dropdown-item selectable",onClick:G=>o.goTo(e),title:"Go To Group"},u(e.name),9,z)]))),128))])])]),t("div",K,[t("div",Q,[t("div",W,[X,t("form",{class:"mb-3 d-flex align-items-center",onSubmit:i[1]||(i[1]=j((...e)=>o.groupSearch&&o.groupSearch(...e),["prevent"]))},[C(t("input",{type:"text",class:"form-control me-2",name:"group-search",id:"group-search","aria-describedby":"group search",placeholder:"Group Name...","onUpdate:modelValue":i[0]||(i[0]=e=>o.editable.search=e),required:""},null,512),[[N,o.editable.search]]),Y],32)]),t("div",Z,[t("ul",null,[(s(!0),a(h,null,b(o.searchResults,e=>(s(),a("li",{onClick:G=>o.setGroup(e),class:"selectable",key:e.id,"data-bs-target":"#join-group","data-bs-toggle":"modal"},u(e.name)+" | "+u(e.creatorName),9,$))),128))])])])]),o.activeGroup.creatorId==o.account.id?(s(),a("div",ee,[t("h5",te,u(o.activeGroup.name),1),oe,o.acceptedMembers.length>1?(s(),a("h6",se,"Accepted members")):_("",!0),(s(!0),a(h,null,b(o.members,e=>(s(),a("ul",{key:e.id},[e.id!=o.account.id&&e.status=="accepted"?(s(),a("li",{key:0,"data-bs-toggle":"modal","data-bs-target":`#m${e.id}`},u(e.name),9,ae)):_("",!0),l(y,{id:`m${e.id}`},{title:g(()=>[re]),body:g(()=>[l(v,{member:e},null,8,["member"])]),_:2},1032,["id"])]))),128)),o.declinedMembers.length>0?(s(),a("h6",ne,"Declined members")):_("",!0),(s(!0),a(h,null,b(o.members,e=>(s(),a("ul",{key:e.id},[e.id!=o.account.id&&e.status=="declined"?(s(),a("li",{key:0,"data-bs-toggle":"modal","data-bs-target":`#m${e.id}`},u(e.name),9,ce)):_("",!0),l(y,{id:`m${e.id}`},{title:g(()=>[de]),body:g(()=>[l(v,{member:e},null,8,["member"])]),_:2},1032,["id"])]))),128))])):_("",!0)])])):(s(),a("div",ie," Sign in to enjoy the features of our app. "))])}var he=I(T,[["render",le],["__scopeId","data-v-21c34c21"]]);export{he as default};
