import{V as r}from"./BQ1v-1nn.js";import{d as n,z as l,D as t,A as p,H as c,L as i,Q as d}from"./DIRjBTfL.js";const y=n({__name:"VFilterIconOrCounter",props:{appliedFilterCount:{default:0},pressed:{type:Boolean,default:!1}},setup(o){const s=o,a=l(()=>s.appliedFilterCount===0);return(e,m)=>a.value?(t(),p(r,{key:0,name:"filter"})):(t(),c("p",{key:1,class:d(["flex h-6 w-6 items-center justify-center rounded-sm",e.pressed?"bg-tx":"bg-secondary"])},i(e.appliedFilterCount),3))}});export{y as _};
