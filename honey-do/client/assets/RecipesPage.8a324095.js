import{h as w,u as x,K as S,c as f,a as c,o as p,b as d,d as i,e as n,k,j as C,v as B,F as g,m as F,w as _,f as V,t as j}from"./vendor.ad55b28b.js";import{l,t as A,A as m,_ as L,g as M,P as u}from"./index.6102586f.js";class N{constructor(e){this.id=e.id,this.name=e.name,this.servings=e.yields,this.slug=e.slug,this.imageUrl=e.thumbnail_url,this.ingredients=e.sections[0].components.map(s=>s.ingredient.name)}}const h={from:"0",size:"80",q:""};class P{async getRecipes(e){l.log(e),h.q=e;let t=(await A.get("",{params:h})).data.results.filter(a=>a.compilations);l.log("[getRecipes]",t),m.recipes=t.map(a=>new N(a))}}const q=new P,D={setup(){const o=w(""),e=x();return S(async()=>{try{e.name=="Recipes"&&await M.getGroup(e.params.id)}catch(s){l.error(s),u.toast(s.message,"error")}}),{editable:o,activeRecipe:f(()=>m.activeRecipe),recipes:f(()=>m.recipes),async getRecipes(){try{u.toast(`Searching for ${o.value}, please stand by...`,"info"),await q.getRecipes(o.value)}catch(s){l.error(s),u.toast(s.message,"error")}}}}},O={class:"container-fluid"},T={class:"row"},U={class:"col-10 offset-1 text-center p-2"},z=i("h6",null,"Recipe Search",-1),E=i("button",{title:"Search",class:"btn btn-secondary mdi mdi-magnify ms-1"},null,-1),G=i("span",null,"Click recipe to see more info",-1),I={class:"row"};function K(o,e,s,t,a,Q){const v=c("LogoBanner"),R=c("Recipe"),b=c("RecipeForm"),y=c("OffCanvas");return p(),d(g,null,[i("div",O,[n(v),i("div",T,[i("div",U,[z,i("form",{onSubmit:e[1]||(e[1]=k((...r)=>t.getRecipes&&t.getRecipes(...r),["prevent"])),class:"mb-3 d-flex"},[C(i("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>t.editable=r),type:"text",class:"form-control",name:"recipe-search",id:"recipe-search","aria-describedby":"helpId",placeholder:"Chicken soup...",required:""},null,512),[[B,t.editable]]),E],32),G])]),i("div",I,[(p(!0),d(g,null,F(t.recipes,r=>(p(),d("div",{class:"col-10 offset-1",key:r.id},[n(R,{recipe:r},null,8,["recipe"])]))),128))])]),n(y,{id:"recipe"},{title:_(()=>[V(j(t.activeRecipe.name),1)]),body:_(()=>[n(b)]),_:1})],64)}var W=L(D,[["render",K]]);export{W as default};