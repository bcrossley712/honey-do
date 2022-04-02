import{h as A,u as L,i as B,c as r,a as l,o as t,b as s,e as d,d as e,s as u,F as f,m as h,w as y,y as G,z as N,f as I}from"./vendor.7fc07221.js";import{_ as F,P as g,i as p,A as i,l as v,g as P,s as R}from"./index.56e8ea63.js";var V="/assets/undraw_diary_re_4jpc.f8b5ed41.svg";const H={setup(){const _=A({}),a=L();return B(async()=>{try{a.name=="Items"&&(await P.getGroup(a.params.id),await p.getItems(a.params.id),R.joinRoom("group-"+a.params.id))}catch(o){v.error(o),g.toast(o.message,"error")}}),{editable:_,route:a,activeRecipe:r(()=>i.activeRecipe),item:r(()=>i.items),groceryItems:r(()=>i.items.filter(o=>o.type=="grocery")),hardwareItems:r(()=>i.items.filter(o=>o.type=="hardware")),officeItems:r(()=>i.items.filter(o=>o.type=="office")),cleaningItems:r(()=>i.items.filter(o=>o.type=="cleaning")),account:r(()=>i.account),member:r(()=>i.members),group:r(()=>i.activeGroup),async deleteAllItems(){try{await g.confirm("Delete the whole list?")&&(await p.deleteAllItems(i.items),g.toast("List Cleared","success"))}catch(o){v.error(o),g.toast(o.message,"error")}}}}},m=_=>(G("data-v-6062c2f3"),_=_(),N(),_),O={class:"container-fluid d-flex flex-column",style:{"min-height":"94vh"}},E={class:"row max-height"},M=m(()=>e("div",{class:"col-12 d-flex justify-content-center text-center"},[e("h2",null,"Shopping List")],-1)),z={key:0},D=m(()=>e("h4",null,"Grocery Items",-1)),T=[D],q={key:0},J=m(()=>e("h4",null,"Hardware Items",-1)),K=[J],Q={key:0},U=m(()=>e("h4",null,"Cleaning Items",-1)),W=[U],X={key:0},Y=m(()=>e("h4",null,"Office Items",-1)),Z=[Y],$={key:0,src:V,class:"img-fluid",alt:""},ee={class:"row px-2 fixed-buttons w-100"},te={class:"col-12"},se={class:"d-flex justify-content-between align-items-center mb-2"},oe=m(()=>e("h6",{class:"bg-secondary rounded"},[e("button",{class:"btn elevation-2","data-bs-toggle":"modal","data-bs-target":"#new-item"},[I(" Add Items "),e("i",{class:"mdi mdi-plus",title:"Add item"})])],-1)),ne=m(()=>e("button",{class:"btn",title:"clear list"},[e("i",{class:"selectable mdi mdi-cancel"}),I(" Clear List ")],-1)),ce=[ne],ie=I("New Item");function re(_,a,o,n,ae,le){const w=l("LogoBanner"),b=l("GroceryItem"),x=l("HardwareItem"),k=l("CleaningItems"),j=l("OfficeItems"),C=l("ItemForm"),S=l("Modal");return t(),s("div",O,[d(w),e("div",E,[e("div",null,[M,e("div",null,[n.groceryItems.length>0?(t(),s("div",z,T)):u("",!0),(t(!0),s(f,null,h(n.groceryItems,c=>(t(),s("div",{class:"d-flex justify-content-between my-2",key:c.id},[d(b,{groceryItems:c},null,8,["groceryItems"])]))),128))]),e("div",null,[n.hardwareItems.length>0?(t(),s("div",q,K)):u("",!0),(t(!0),s(f,null,h(n.hardwareItems,c=>(t(),s("div",{class:"d-flex justify-content-between my-2",key:c.id},[d(x,{hardwareItems:c},null,8,["hardwareItems"])]))),128))]),e("div",null,[n.cleaningItems.length>0?(t(),s("div",Q,W)):u("",!0),(t(!0),s(f,null,h(n.cleaningItems,c=>(t(),s("div",{class:"d-flex justify-content-between my-2",key:c.id},[d(k,{cleaningItems:c},null,8,["cleaningItems"])]))),128))]),e("div",null,[n.officeItems.length>0?(t(),s("div",X,Z)):u("",!0),(t(!0),s(f,null,h(n.officeItems,c=>(t(),s("div",{class:"d-flex justify-content-between my-2",key:c.id},[d(j,{officeItems:c},null,8,["officeItems"])]))),128))])]),n.item.length<5?(t(),s("img",$)):u("",!0)]),e("div",ee,[e("div",te,[e("div",se,[oe,n.group.creatorId==n.account.id?(t(),s("h6",{key:0,class:"bg-secondary rounded px-1",onClick:a[0]||(a[0]=c=>n.deleteAllItems())},ce)):u("",!0)])])]),d(S,{id:"new-item"},{title:y(()=>[ie]),body:y(()=>[d(C)]),_:1})])}var _e=F(H,[["render",re],["__scopeId","data-v-6062c2f3"]]);export{_e as default};
