import{i as P}from"./chunk-353BL4L5-xy92gJmW-DsDFHcGi.DKN5H_as.js";import{S as n,a6 as B,a7 as v,ap as S,ao as z,a8 as W,a9 as F,aB as m,aT as T,ab as E,au as D,aC as A,aD as I,u as x}from"./theme.B1sdK41g.js";import{I as R}from"./treemap-75Q7IDZK-SnVjud3P-WwNA3Y5D.CTeAYfeh.js";import"./framework.B-x_5eXW.js";import"./baseUniq-DRFSKfuj-B0UglZZz.C_H-WQbm.js";import"./basePickBy-CdA63Yk3-C10GSIx9.B-UKW_vv.js";import"./clone-CXzvyaxT-CY47cZUA.Cq5R-QII.js";var $={packet:[]},w=structuredClone($),H=I.packet,L=n(()=>{const t=m({...H,...A().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),Y=n(()=>w.packet,"getPacket"),M=n(t=>{t.length>0&&w.packet.push(t)},"pushWord"),N=n(()=>{D(),w=structuredClone($)},"clear"),u={pushWord:M,getPacket:Y,getConfig:L,clear:N,setAccTitle:F,getAccTitle:W,setDiagramTitle:z,getDiagramTitle:S,getAccDescription:v,setAccDescription:B},V=1e4,X=n(t=>{P(t,u);let e=-1,o=[],i=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,bits:d,label:k}of t.blocks){if(a!==void 0&&r!==void 0&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a??(a=e+1),a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);if(d===0)throw new Error(`Packet block ${a} is invalid. Cannot have a zero bit field.`);for(r??(r=a+(d??1)-1),d??(d=r-a+1),e=r,x.debug(`Packet block ${a} - ${e} with label ${k}`);o.length<=s+1&&u.getPacket().length<V;){const[c,p]=j({start:a,end:r,bits:d,label:k},i,s);if(o.push(c),c.end+1===i*s&&(u.pushWord(o),o=[],i++),!p)break;({start:a,end:r,bits:d,label:k}=p)}}u.pushWord(o)},"populate"),j=n((t,e,o)=>{if(t.start===void 0)throw new Error("start should have been set during first phase");if(t.end===void 0)throw new Error("end should have been set during first phase");if(t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);if(t.end+1<=e*o)return[t,void 0];const i=e*o-1,s=e*o;return[{start:t.start,end:i,label:t.label,bits:i-t.start},{start:s,end:t.end,label:t.label,bits:t.end-s}]},"getNextFittingBlock"),q={parse:n(async t=>{const e=await R("packet",t);x.debug(e),X(e)},"parse")},G=n((t,e,o,i)=>{const s=i.db,a=s.getConfig(),{rowHeight:r,paddingY:d,bitWidth:k,bitsPerRow:c}=a,p=s.getPacket(),l=s.getDiagramTitle(),h=r+d,b=h*(p.length+1)-(l?0:r),g=k*c+2,f=T(e);f.attr("viewbox",`0 0 ${g} ${b}`),E(f,b,g,a.useMaxWidth);for(const[y,C]of p.entries())J(f,C,y,a);f.append("text").text(l).attr("x",g/2).attr("y",b-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),J=n((t,e,o,{rowHeight:i,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:d,showBits:k})=>{const c=t.append("g"),p=o*(i+a)+a;for(const l of e){const h=l.start%d*r+1,b=(l.end-l.start+1)*r-s;if(c.append("rect").attr("x",h).attr("y",p).attr("width",b).attr("height",i).attr("class","packetBlock"),c.append("text").attr("x",h+b/2).attr("y",p+i/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!k)continue;const g=l.end===l.start,f=p-2;c.append("text").attr("x",h+(g?b/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",g?"middle":"start").text(l.start),g||c.append("text").attr("x",h+b).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),Q={draw:G},U={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},Z=n(({packet:t}={})=>{const e=m(U,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),ot={parser:q,db:u,renderer:Q,styles:Z};export{ot as diagram};
