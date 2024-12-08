import{n as u,c as f,o as l,p,f as h,e as i,q as m}from"./light.I2ZYMJLM.js";import{L as v,a7 as $,d as b,a4 as y,a2 as M}from"./framework.H5EfqC1G.js";function g(a,t,s){if(!t)return;const n=u(),e=v(f,null),r=()=>{const o=s.value;t.mount({id:o===void 0?a:o+a,head:!0,anchorMetaName:l,props:{bPrefix:o?`.${o}-`:void 0},ssr:n,parent:e==null?void 0:e.styleMountTarget}),e!=null&&e.preflightStyleDisabled||p.mount({id:"n-global",head:!0,anchorMetaName:l,ssr:n,parent:e==null?void 0:e.styleMountTarget})};n?r():$(r)}const S=h("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[i("svg",`
 height: 1em;
 width: 1em;
 `)]),P=b({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(a){g("-base-icon",S,y(a,"clsPrefix"))},render(){return M("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),{cubicBezierEaseIn:c,cubicBezierEaseOut:d}=m;function C({transformOrigin:a="inherit",duration:t=".2s",enterScale:s=".9",originalTransform:n="",originalTransition:e=""}={}){return[i("&.fade-in-scale-up-transition-leave-active",{transformOrigin:a,transition:`opacity ${t} ${c}, transform ${t} ${c} ${e&&`,${e}`}`}),i("&.fade-in-scale-up-transition-enter-active",{transformOrigin:a,transition:`opacity ${t} ${d}, transform ${t} ${d} ${e&&`,${e}`}`}),i("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${n} scale(${s})`}),i("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${n} scale(1)`})]}export{P as N,C as f};
