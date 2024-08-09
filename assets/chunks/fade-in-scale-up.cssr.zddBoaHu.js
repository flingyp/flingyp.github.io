import{n as u,c as f,o as c,p,f as h,e as t,q as m}from"./light.Cb0_Gdeo.js";import{O as b,a9 as $,d as v,a5 as y,a4 as M}from"./framework.DgbPds4s.js";function S(a,i,o){if(!i)return;const n=u(),e=b(f,null),r=()=>{const s=o.value;i.mount({id:s===void 0?a:s+a,head:!0,anchorMetaName:c,props:{bPrefix:s?`.${s}-`:void 0},ssr:n}),e!=null&&e.preflightStyleDisabled||p.mount({id:"n-global",head:!0,anchorMetaName:c,ssr:n})};n?r():$(r)}const g=h("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[t("svg",`
 height: 1em;
 width: 1em;
 `)]),P=v({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(a){S("-base-icon",g,y(a,"clsPrefix"))},render(){return M("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),{cubicBezierEaseIn:l,cubicBezierEaseOut:d}=m;function C({transformOrigin:a="inherit",duration:i=".2s",enterScale:o=".9",originalTransform:n="",originalTransition:e=""}={}){return[t("&.fade-in-scale-up-transition-leave-active",{transformOrigin:a,transition:`opacity ${i} ${l}, transform ${i} ${l} ${e&&","+e}`}),t("&.fade-in-scale-up-transition-enter-active",{transformOrigin:a,transition:`opacity ${i} ${d}, transform ${i} ${d} ${e&&","+e}`}),t("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${n} scale(${o})`}),t("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${n} scale(1)`})]}export{P as N,C as f};
