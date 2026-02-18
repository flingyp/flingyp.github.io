import{i as X}from"./chunk-353BL4L5-t05ly1Yi-BzS4aXZH.Cy_wEWko.js";import{S as c,a7 as j,a6 as q,a8 as E,a9 as G,ap as Y,ao as J,u as O,m as K,aB as U,aT as Z,aV as _,ab as tt,au as et,aD as at,aW as S,aX as nt,aY as z}from"./theme.Bx6bQvNF.js";import{I as rt}from"./treemap-75Q7IDZK-CIjD8Ibx-m39lfQc4.CrgjeXI-.js";import{d as I}from"./arc-aavUJmbb-BU898awq.BX6IVJai.js";import{g as it}from"./ordinal-DfAQgscy-BEJTu10r.vTmdWN-q.js";import"./framework.B-8aa_PR.js";import"./baseUniq-CZHCFN8s-CxpD0JS7.MVS_uOoO.js";import"./basePickBy-XITLGQxL-4VpGP9n9.Yo2GBvOn.js";import"./clone-CVDc7lii-BIt5BNUE.BKyN07XT.js";import"./init-DjUOC4st-C8Nwz6AJ.BTi8F14B.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,l=null,m=S(0),g=S(z),w=S(0);function i(e){var n,s=(e=nt(e)).length,u,$,h=0,p=new Array(s),r=new Array(s),x=+m.apply(this,arguments),v=Math.min(z,Math.max(-z,g.apply(this,arguments)-x)),f,A=Math.min(Math.abs(v)/s,w.apply(this,arguments)),C=A*(v<0?-1:1),d;for(n=0;n<s;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?p.sort(function(y,D){return a(r[y],r[D])}):l!=null&&p.sort(function(y,D){return l(e[y],e[D])}),n=0,$=h?(v-s*C)/h:0;n<s;++n,x=f)u=p[n],d=r[u],f=x+(d>0?d*$:0)+C,r[u]={data:e[u],index:n,value:d,startAngle:x,endAngle:f,padAngle:A};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:S(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:S(+e),i):g},i.padAngle=function(e){return arguments.length?(w=typeof e=="function"?e:S(+e),i):w},i}var pt=at.pie,R={sections:new Map,showData:!1},M=R.sections,W=R.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,W=R.showData,et()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),O.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=c(()=>M,"getSections"),mt=c(t=>{W=t},"setShowData"),ht=c(()=>W,"getShowData"),N={getConfig:ut,clear:dt,setDiagramTitle:J,getDiagramTitle:Y,setAccTitle:G,getAccTitle:E,setAccDescription:q,getAccDescription:j,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=c((t,a)=>{X(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:c(async t=>{const a=await rt("pie",t);O.debug(a),xt(a,N)},"parse")},St=c(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),wt=St,$t=c(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,m)=>m.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),vt=c((t,a,l,m)=>{O.debug(`rendering pie chart
`+t);const g=m.db,w=K(),i=U(g.getConfig(),w.pie),e=40,n=18,s=4,u=450,$=u,h=Z(a),p=h.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=w;let[x]=_(r.pieOuterStrokeWidth);x??(x=2);const v=i.textPosition,f=Math.min($,u)/2-e,A=I().innerRadius(0).outerRadius(f),C=I().innerRadius(f*v).outerRadius(f*v);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=$t(d),D=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],T=it(D);p.selectAll("mySlices").data(y).enter().append("path").attr("d",A).attr("fill",o=>T(o.data.label)).attr("class","pieCircle");let F=0;d.forEach(o=>{F+=o}),p.selectAll("mySlices").data(y).enter().append("text").text(o=>(o.data.value/F*100).toFixed(0)+"%").attr("transform",o=>"translate("+C.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const H=p.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",(o,b)=>{const k=n+s,V=k*T.domain().length/2,L=12*n,Q=b*k-V;return"translate("+L+","+Q+")"});H.append("rect").attr("width",n).attr("height",n).style("fill",T).style("stroke",T),H.data(y).append("text").attr("x",n+s).attr("y",n-s).text(o=>{const{label:b,value:k}=o.data;return g.getShowData()?`${b} [${k}]`:b});const P=Math.max(...H.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),B=$+e+n+s+P;h.attr("viewBox",`0 0 ${B} ${u}`),tt(h,u,B,i.useMaxWidth)},"draw"),Dt={draw:vt},Wt={parser:yt,db:N,renderer:Dt,styles:wt};export{Wt as diagram};
