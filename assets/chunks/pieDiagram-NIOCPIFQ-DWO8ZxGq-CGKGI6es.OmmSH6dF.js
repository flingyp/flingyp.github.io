import{i as K}from"./chunk-353BL4L5-xy92gJmW-DsDFHcGi.xma3uAgw.js";import{S as c,a7 as Q,a6 as U,a8 as X,a9 as Y,ap as Z,ao as j,u as z,m as q,aB as H,aT as J,aV as _,ab as tt,au as et,aD as at,aW as S,aX as nt,aY as O}from"./theme.DBvQz0PR.js";import{I as rt}from"./treemap-75Q7IDZK-SnVjud3P-WwNA3Y5D.C5bND7d-.js";import{d as B}from"./arc-Cn58oiF3-fcc35lCa.56t5l68V.js";import{g as it}from"./ordinal-DfAQgscy-BEJTu10r.vTmdWN-q.js";import"./framework.B-x_5eXW.js";import"./baseUniq-DRFSKfuj-B0UglZZz.CHG_fr3L.js";import"./basePickBy-CdA63Yk3-C10GSIx9.DgpUoCln.js";import"./clone-CXzvyaxT-CY47cZUA.BVcgqagM.js";import"./init-DjUOC4st-C8Nwz6AJ.BTi8F14B.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function st(){var t=lt,a=ot,l=null,m=S(0),g=S(O),w=S(0);function i(e){var n,s=(e=nt(e)).length,u,$,h=0,p=new Array(s),r=new Array(s),x=+m.apply(this,arguments),T=Math.min(O,Math.max(-O,g.apply(this,arguments)-x)),f,v=Math.min(Math.abs(T)/s,w.apply(this,arguments)),C=v*(T<0?-1:1),d;for(n=0;n<s;++n)(d=r[p[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?p.sort(function(y,A){return a(r[y],r[A])}):l!=null&&p.sort(function(y,A){return l(e[y],e[A])}),n=0,$=h?(T-s*C)/h:0;n<s;++n,x=f)u=p[n],d=r[u],f=x+(d>0?d*$:0)+C,r[u]={data:e[u],index:n,value:d,startAngle:x,endAngle:f,padAngle:v};return r}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,l=null,i):a},i.sort=function(e){return arguments.length?(l=e,a=null,i):l},i.startAngle=function(e){return arguments.length?(m=typeof e=="function"?e:S(+e),i):m},i.endAngle=function(e){return arguments.length?(g=typeof e=="function"?e:S(+e),i):g},i.padAngle=function(e){return arguments.length?(w=typeof e=="function"?e:S(+e),i):w},i}var pt=at.pie,R={sections:new Map,showData:!1},M=R.sections,W=R.showData,ct=structuredClone(pt),ut=c(()=>structuredClone(ct),"getConfig"),dt=c(()=>{M=new Map,W=R.showData,et()},"clear"),gt=c(({label:t,value:a})=>{M.has(t)||(M.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=c(()=>M,"getSections"),mt=c(t=>{W=t},"setShowData"),ht=c(()=>W,"getShowData"),L={getConfig:ut,clear:dt,setDiagramTitle:j,getDiagramTitle:Z,setAccTitle:Y,getAccTitle:X,setAccDescription:U,getAccDescription:Q,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},xt=c((t,a)=>{K(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:c(async t=>{const a=await rt("pie",t);z.debug(a),xt(a,L)},"parse")},St=c(t=>`
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
`,"getStyles"),wt=St,$t=c(t=>{const a=[...t.entries()].map(l=>({label:l[0],value:l[1]})).sort((l,m)=>m.value-l.value);return st().value(l=>l.value)(a)},"createPieArcs"),Tt=c((t,a,l,m)=>{z.debug(`rendering pie chart
`+t);const g=m.db,w=q(),i=H(g.getConfig(),w.pie),e=40,n=18,s=4,u=450,$=u,h=J(a),p=h.append("g");p.attr("transform","translate("+$/2+","+u/2+")");const{themeVariables:r}=w;let[x]=_(r.pieOuterStrokeWidth);x??(x=2);const T=i.textPosition,f=Math.min($,u)/2-e,v=B().innerRadius(0).outerRadius(f),C=B().innerRadius(f*T).outerRadius(f*T);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+x/2).attr("class","pieOuterCircle");const d=g.getSections(),y=$t(d),A=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],D=it(A);p.selectAll("mySlices").data(y).enter().append("path").attr("d",v).attr("fill",o=>D(o.data.label)).attr("class","pieCircle");let F=0;d.forEach(o=>{F+=o}),p.selectAll("mySlices").data(y).enter().append("text").text(o=>(o.data.value/F*100).toFixed(0)+"%").attr("transform",o=>"translate("+C.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const P=p.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",(o,b)=>{const k=n+s,E=k*D.domain().length/2,I=12*n,G=b*k-E;return"translate("+I+","+G+")"});P.append("rect").attr("width",n).attr("height",n).style("fill",D).style("stroke",D),P.data(y).append("text").attr("x",n+s).attr("y",n-s).text(o=>{const{label:b,value:k}=o.data;return g.getShowData()?`${b} [${k}]`:b});const N=Math.max(...P.selectAll("text").nodes().map(o=>(o==null?void 0:o.getBoundingClientRect().width)??0)),V=$+e+n+s+N;h.attr("viewBox",`0 0 ${V} ${u}`),tt(h,u,V,i.useMaxWidth)},"draw"),At={draw:Tt},Wt={parser:yt,db:L,renderer:At,styles:wt};export{Wt as diagram};
