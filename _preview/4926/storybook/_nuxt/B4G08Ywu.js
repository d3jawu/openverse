import{u as h}from"./gEJdwIBZ.js";import{_ as y}from"./Cw9k70Tb.js";import{d as C,S as u,z as k,H as B,I as O,J as c,U as o,A as w,C as z,M as I,D as p}from"./DIRjBTfL.js";const E=Object.freeze({auto:"auto",10:"10",20:"20",30:"30",40:"40",50:"50",popover:"50",snackbar:"10","global-audio":"20"}),F=a=>Object.keys(E).includes(a.toString()),P=C({__name:"VPopover",props:{id:{},activateOnHover:{type:Boolean,default:void 0},hideOnEsc:{type:Boolean,default:void 0},hideOnClickOutside:{type:Boolean,default:void 0},autoFocusOnShow:{type:Boolean,default:void 0},autoFocusOnHide:{type:Boolean,default:void 0},placement:{},strategy:{},label:{},labelledBy:{},zIndex:{default:"popover"},clippable:{type:Boolean,default:!1},trapFocus:{type:Boolean,default:void 0}},emits:["open","close"],setup(a,{expose:f,emit:m}){const l=a;if(!F(l.zIndex))throw new Error(`Invalid z-index value in VPopover: ${l.zIndex}`);const v=m,t=u(!1),i=u(null),n=k(()=>{var e;return(e=i.value)!=null&&e.firstElementChild?i.value.firstElementChild:void 0}),{close:s,onTriggerClick:r,triggerA11yProps:g}=h({id:l.id,visibleRef:t,emit:v});return f({close:s}),(e,d)=>(p(),B("div",null,[O("div",{ref_key:"triggerContainerRef",ref:i,class:"flex w-min items-stretch whitespace-nowrap",onClick:d[0]||(d[0]=(...b)=>o(r)&&o(r)(...b))},[c(e.$slots,"trigger",{a11yProps:o(g),visible:t.value})],512),n.value?(p(),w(y,{key:0,id:e.id,"z-index":e.zIndex,visible:t.value,"trigger-element":n.value,placement:e.placement,strategy:e.strategy,clippable:e.clippable,"hide-on-esc":e.hideOnEsc,"hide-on-click-outside":e.hideOnClickOutside,"auto-focus-on-show":e.autoFocusOnShow,"auto-focus-on-hide":e.autoFocusOnHide,"trap-focus":e.trapFocus,hide:o(s),"aria-label":e.label,"aria-labelledby":e.labelledBy},{default:z(()=>[c(e.$slots,"default",{close:o(s)})]),_:3},8,["id","z-index","visible","trigger-element","placement","strategy","clippable","hide-on-esc","hide-on-click-outside","auto-focus-on-show","auto-focus-on-hide","trap-focus","hide","aria-label","aria-labelledby"])):I("",!0)]))}});export{P as _};
