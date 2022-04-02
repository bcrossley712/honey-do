import{u as R,i as A,c as i,a as d,o,b as a,d as e,e as l,t as S,F as u,m as v,s as m,w as p,y as G,z as M,f as g}from"./vendor.7fc07221.js";import{_ as C,A as r,P as h,n as b,l as x,g as F,m as y,s as B}from"./index.139be3f4.js";var I="/assets/undraw_sorting_thoughts_re_fgli.f3a4a729.svg";const P={name:"Home",setup(){const s=R();return A(async()=>{try{s.name=="Home"&&(await F.getGroup(s.params.id),await y.getGroupMembers(s.params.id),await y.getPendingMembers(s.params.id),await b.getNotes(s.params.id),B.joinRoom("group-"+s.params.id))}catch(c){x.error(c),h.toast(c.message,"error")}}),{activeGroup:i(()=>r.activeGroup),members:i(()=>r.members),notes:i(()=>r.notes),groupRequests:i(()=>r.groupRequests),account:i(()=>r.account),setRequest(c){r.memberRequest=c},async deleteAllNotes(){try{await h.confirm("Are You Sure You Want To Delete All Notes?")&&await b.deleteAllNotes(r.notes)}catch(c){x.error(c),h.toast(c.message,"error")}}}}},_=s=>(G("data-v-2a32c372"),s=s(),M(),s),j={class:"container-fluid d-flex flex-column",style:{"min-height":"94vh"}},H={class:"row px-2"},V={class:"row px-2"},D=_(()=>e("div",{class:"col-12 d-flex flex-column"},[e("h2",{class:"align-self-center"},"My Group Members")],-1)),L={class:"col-12 p-2 bg-secondary d-flex rounded elevation-2"},E=["src","title"],T={key:0,class:"row px-2"},Y=_(()=>e("div",{class:"col-12 d-flex flex-column"},[e("h3",{class:"align-self-center"},"Group Requests")],-1)),z={class:"col-12 p-2 bg-secondary d-flex rounded elevation-2"},W=["onClick","src","title"],J=_(()=>e("div",{class:"row px-2"},[e("div",{class:"col-12 d-flex flex-column"},[e("h3",{class:"align-self-center mt-2"},"Group Notes")])],-1)),K={class:"row px-2 flex-grow-1 overflow"},O={class:"col-12"},Q={key:1,src:I,class:"img-fluid",alt:""},U={class:"row px-2"},X={class:"col-12"},Z={class:"d-flex justify-content-between align-items-center mb-2"},$=_(()=>e("h6",{class:"bg-secondary rounded"},[e("button",{class:"btn elevation-2","data-bs-toggle":"modal","data-bs-target":"#new-note"},[g(" Add Note"),e("i",{class:"mdi mdi-plus",title:"Add Note"})])],-1)),ee={class:"bg-secondary rounded"},te=_(()=>e("i",{class:"mdi mdi-cancel"},null,-1)),se=g(" Delete All Notes "),oe=[te,se],ae=g("New Note"),ce=g("Add Member?");function ne(s,c,re,n,le,ie){const w=d("LogoBanner"),N=d("Notes"),k=d("NoteForm"),f=d("Modal"),q=d("RequestForm");return o(),a(u,null,[e("div",j,[l(w),e("div",H,[e("h1",null,S(n.activeGroup.name),1)]),e("div",V,[D,e("div",L,[(o(!0),a(u,null,v(n.members,t=>(o(),a("div",{key:t.id,class:"d-flex"},[t.status=="accepted"?(o(),a("img",{key:0,src:t.picture,alt:"",class:"img-small rounded-circle m-1",title:t.name},null,8,E)):m("",!0)]))),128))])]),n.groupRequests.length>=1?(o(),a("div",T,[Y,e("div",z,[(o(!0),a(u,null,v(n.groupRequests,t=>(o(),a("img",{onClick:de=>n.setRequest(t),"data-bs-toggle":"modal","data-bs-target":"#group-request",key:t.id,src:t.picture,alt:"",class:"img-small rounded-circle m-1",title:t.name},null,8,W))),128))])])):m("",!0),J,e("div",K,[e("div",O,[(o(!0),a(u,null,v(n.notes,t=>(o(),a("div",{key:t.id},[l(N,{note:t},null,8,["note"])]))),128))])]),n.notes.length<4?(o(),a("img",Q)):m("",!0),e("div",U,[e("div",X,[e("div",Z,[$,e("h6",ee,[n.activeGroup.creatorId==n.account.id?(o(),a("button",{key:0,class:"btn elevation-2",onClick:c[0]||(c[0]=t=>n.deleteAllNotes())},oe)):m("",!0)])])])])]),l(f,{id:"new-note"},{title:p(()=>[ae]),body:p(()=>[l(k)]),_:1}),l(f,{id:"group-request"},{title:p(()=>[ce]),body:p(()=>[l(q)]),_:1})],64)}var me=C(P,[["render",ne],["__scopeId","data-v-2a32c372"]]);export{me as default};