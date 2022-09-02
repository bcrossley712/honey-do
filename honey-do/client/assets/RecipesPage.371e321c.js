import{h as u,u as k,L as C,c as f,a as d,o as a,b as r,d as t,e as p,k as B,j as I,v as V,s as g,F as h,m as j,w as v,f as F,t as L,y as N,z as P}from"./vendor.7fc07221.js";import{l as _,t as A,A as m,_ as M,g as q,P as R}from"./index.4f3044c9.js";class z{constructor(e){this.id=e.id,this.name=e.name,this.servings=e.yields,this.slug=e.slug,this.imageUrl=e.thumbnail_url,this.ingredients=e.sections[0].components.map(c=>c.ingredient.name)}}const y={from:"0",size:"80",q:""};class D{async getRecipes(e){_.log(e),y.q=e;let s=(await A.get("",{params:y})).data.results.filter(l=>l.compilations);_.log("[getRecipes]",s),m.recipes=s.map(l=>new z(l))}}const O=new D;var T="/assets/undraw_searching_re_3ra9.8b774584.svg";const U={setup(){const i=u(!1),e=u(""),c=k();return C(async()=>{try{c.name=="Recipes"&&await q.getGroup(c.params.id)}catch(s){_.error(s),R.toast(s.message,"error")}}),{loading:i,editable:e,activeRecipe:f(()=>m.activeRecipe),recipes:f(()=>m.recipes),async getRecipes(){try{i.value=!0,await O.getRecipes(e.value),i.value=!1}catch(s){_.error(s),R.toast(s.message,"error")}}}}},n=i=>(N("data-v-54f3541b"),i=i(),P(),i),E={class:"container-fluid"},G={class:"row"},Q={class:"col-10 offset-1 text-center p-2"},H=n(()=>t("h2",null,"Recipe Search",-1)),J=n(()=>t("button",{title:"Search",class:"btn btn-secondary elevation-2 mdi mdi-magnify ms-1"},null,-1)),K=n(()=>t("span",null,"Click recipe to see more info",-1)),W={class:"d-flex justify-content-center"},X={key:0,class:"half-circle-spinner darken-30"},Y=n(()=>t("div",{class:"circle circle-1"},null,-1)),Z=n(()=>t("div",{class:"circle circle-2"},null,-1)),$=[Y,Z],ee={class:"row"},se={key:0,src:T,class:"img-fluid mt-2",alt:""};function te(i,e,c,s,l,ie){const b=d("LogoBanner"),w=d("Recipe"),x=d("RecipeForm"),S=d("OffCanvas");return a(),r(h,null,[t("div",E,[p(b),t("div",G,[t("div",Q,[H,t("form",{onSubmit:e[1]||(e[1]=B((...o)=>s.getRecipes&&s.getRecipes(...o),["prevent"])),class:"mb-3 d-flex"},[I(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.editable=o),type:"text",class:"form-control",name:"recipe-search",id:"recipe-search","aria-describedby":"helpId",placeholder:"Chicken soup...",required:""},null,512),[[V,s.editable]]),J],32),K])]),t("div",W,[s.loading?(a(),r("div",X,$)):g("",!0)]),t("div",ee,[(a(!0),r(h,null,j(s.recipes,o=>(a(),r("div",{class:"col-10 offset-1",key:o.id},[p(w,{recipe:o},null,8,["recipe"])]))),128))]),s.recipes.length<5?(a(),r("img",se)):g("",!0)]),p(S,{id:"recipe"},{title:v(()=>[F(L(s.activeRecipe.name),1)]),body:v(()=>[p(x)]),_:1})],64)}var ae=M(U,[["render",te],["__scopeId","data-v-54f3541b"]]);export{ae as default};
