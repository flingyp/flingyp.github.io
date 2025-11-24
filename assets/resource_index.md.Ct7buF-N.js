import{r as so,u as co,g as lo,c as po,a as uo,b as ho}from"./chunks/Image.Bs-VNajv.js";import{c as y,a as h,b as n,k as mo,l as go,N as bo,d as vo,m as fo,n as wo,o as xo,p as m,q as S,u as Co,h as E,s as O,i as So,t as z}from"./chunks/fade-in-scale-up.cssr.Cz_DbaZZ.js";import{ab as d,d as j,a3 as zo,h as A,c as $,o as I,j as a,F as yo,B as ko,b as Po,w as F,G as k,k as w,a as f,t as N,n as _o,_ as Io}from"./chunks/framework.B-x_5eXW.js";import"./chunks/theme.C1KYXfnq.js";const jo=so("close",()=>d("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},d("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},d("g",{fill:"currentColor","fill-rule":"nonzero"},d("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),To=y("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[h("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),n("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),mo("disabled",[n("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),n("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),n("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),n("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),n("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),h("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),h("round",[n("&::before",`
 border-radius: 50%;
 `)])]),Lo=j({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(o){return go("-base-close",To,zo(o,"clsPrefix")),()=>{const{clsPrefix:l,disabled:p,absolute:e,round:i,isButtonTag:r}=o;return d(r?"button":"div",{type:r?"button":void 0,tabindex:p||!o.focusable?-1:0,"aria-disabled":p,"aria-label":"close",role:r?void 0:"button",disabled:p,class:[`${l}-base-close`,e&&`${l}-base-close--absolute`,p&&`${l}-base-close--disabled`,i&&`${l}-base-close--round`],onMousedown:b=>{o.focusable||b.preventDefault()},onClick:o.onClick},d(bo,{clsPrefix:l},{default:()=>d(jo,null)}))}}}),Bo={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function Mo(o){const{primaryColor:l,borderRadius:p,lineHeight:e,fontSize:i,cardColor:r,textColor2:c,textColor1:b,dividerColor:u,fontWeightStrong:s,closeIconColor:t,closeIconColorHover:g,closeIconColorPressed:P,closeColorHover:x,closeColorPressed:T,modalColor:L,boxShadow1:B,popoverColor:M,actionColor:C}=o;return Object.assign(Object.assign({},Bo),{lineHeight:e,color:r,colorModal:L,colorPopover:M,colorTarget:l,colorEmbedded:C,colorEmbeddedModal:C,colorEmbeddedPopover:C,textColor:c,titleTextColor:b,borderColor:u,actionColor:C,titleFontWeight:s,closeColorHover:x,closeColorPressed:T,closeBorderRadius:p,closeIconColor:t,closeIconColorHover:g,closeIconColorPressed:P,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:B,borderRadius:p})}const Oo={common:vo,self:Mo},Fo=n([y("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[xo({background:"var(--n-color-modal)"}),h("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),h("content-segmented",[n(">",[m("content",{paddingTop:"var(--n-padding-bottom)"})])]),h("content-soft-segmented",[n(">",[m("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),h("footer-segmented",[n(">",[m("footer",{paddingTop:"var(--n-padding-bottom)"})])]),h("footer-soft-segmented",[n(">",[m("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[y("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[m("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),m("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),m("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),m("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),m("content","flex: 1; min-width: 0;"),m("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),m("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),y("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),h("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),h("action-segmented",[n(">",[m("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),h("content-segmented, content-soft-segmented",[n(">",[m("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),h("footer-segmented, footer-soft-segmented",[n(">",[m("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),h("embedded",`
 background-color: var(--n-color-embedded);
 `)]),fo(y("card",`
 background: var(--n-color-modal);
 `,[h("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),wo(y("card",`
 background: var(--n-color-popover);
 `,[h("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),No={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},$o=Object.assign(Object.assign({},E.props),No),Ao=j({name:"Card",props:$o,slots:Object,setup(o){const l=()=>{const{onClose:s}=o;s&&po(s)},{inlineThemeDisabled:p,mergedClsPrefixRef:e,mergedRtlRef:i}=Co(o),r=E("Card","-card",Fo,Oo,o,e),c=co("Card",i,e),b=A(()=>{const{size:s}=o,{self:{color:t,colorModal:g,colorTarget:P,textColor:x,titleTextColor:T,titleFontWeight:L,borderColor:B,actionColor:M,borderRadius:C,lineHeight:R,closeIconColor:V,closeIconColorHover:W,closeIconColorPressed:q,closeColorHover:G,closeColorPressed:H,closeBorderRadius:D,closeIconSize:U,closeSize:J,boxShadow:K,colorPopover:Y,colorEmbedded:X,colorEmbeddedModal:Z,colorEmbeddedPopover:Q,[O("padding",s)]:oo,[O("fontSize",s)]:eo,[O("titleFontSize",s)]:no},common:{cubicBezierEaseInOut:to}}=r.value,{top:ro,left:io,bottom:ao}=lo(oo);return{"--n-bezier":to,"--n-border-radius":C,"--n-color":t,"--n-color-modal":g,"--n-color-popover":Y,"--n-color-embedded":X,"--n-color-embedded-modal":Z,"--n-color-embedded-popover":Q,"--n-color-target":P,"--n-text-color":x,"--n-line-height":R,"--n-action-color":M,"--n-title-text-color":T,"--n-title-font-weight":L,"--n-close-icon-color":V,"--n-close-icon-color-hover":W,"--n-close-icon-color-pressed":q,"--n-close-color-hover":G,"--n-close-color-pressed":H,"--n-border-color":B,"--n-box-shadow":K,"--n-padding-top":ro,"--n-padding-bottom":ao,"--n-padding-left":io,"--n-font-size":eo,"--n-title-font-size":no,"--n-close-size":J,"--n-close-icon-size":U,"--n-close-border-radius":D}}),u=p?So("card",A(()=>o.size[0]),b,o):void 0;return{rtlEnabled:c,mergedClsPrefix:e,mergedTheme:r,handleCloseClick:l,cssVars:p?void 0:b,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{segmented:o,bordered:l,hoverable:p,mergedClsPrefix:e,rtlEnabled:i,onRender:r,embedded:c,tag:b,$slots:u}=this;return r==null||r(),d(b,{class:[`${e}-card`,this.themeClass,c&&`${e}-card--embedded`,{[`${e}-card--rtl`]:i,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:l,[`${e}-card--hoverable`]:p}],style:this.cssVars,role:this.role},S(u.cover,s=>{const t=this.cover?z([this.cover()]):s;return t&&d("div",{class:`${e}-card-cover`,role:"none"},t)}),S(u.header,s=>{const{title:t}=this,g=t?z(typeof t=="function"?[t()]:[t]):s;return g||this.closable?d("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},d("div",{class:`${e}-card-header__main`,role:"heading"},g),S(u["header-extra"],P=>{const x=this.headerExtra?z([this.headerExtra()]):P;return x&&d("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},x)}),this.closable&&d(Lo,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),S(u.default,s=>{const{content:t}=this,g=t?z(typeof t=="function"?[t()]:[t]):s;return g&&d("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},g)}),S(u.footer,s=>{const t=this.footer?z([this.footer()]):s;return t&&d("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},t)}),S(u.action,s=>{const t=this.action?z([this.action()]):s;return t&&d("div",{class:`${e}-card__action`,role:"none"},t)}))}}),Eo={class:"container mx-auto px-4 py-8"},Ro={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"},Vo={class:"relative flex items-start space-x-4"},Wo={class:"flex items-center justify-center relative flex-shrink-0 rounded-lg p-2 bg-gradient-to-br from-gray-50/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-700/90 group-hover:from-blue-50/90 group-hover:to-purple-50/90 dark:group-hover:from-blue-900/20 dark:group-hover:to-purple-900/20 transition-all duration-500"},qo={class:"flex-1 min-w-0 py-0.5"},Go={class:"flex items-center justify-between"},Ho=["href"],Do={class:"!m-0 text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300"},Uo=j({__name:"Resource",props:{options:{}},setup(o){const l=o;return(p,e)=>(I(),$("div",Eo,[a("div",Ro,[(I(!0),$(yo,null,ko(l.options,i=>(I(),Po(w(Ao),{key:i.name,class:_o(["group relative transition-all duration-500 hover:-translate-y-1",["bg-white/80 dark:bg-[#1a1a1a]/80","backdrop-blur-xl","border border-gray-200/50 dark:border-gray-800/50","hover:shadow-lg hover:shadow-gray-200/20 dark:hover:shadow-gray-800/20"]]),bordered:!1},{default:F(()=>[a("div",Vo,[a("div",Wo,[k(w(uo),{src:i.icon,alt:i.name,class:"w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110","preview-disabled":""},null,8,["src","alt"])]),a("div",qo,[a("div",Go,[a("a",{href:i.url,target:"_blank",class:"text-[15px] font-medium truncate transition-colors duration-300 no-underline flex items-center text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"},[f(N(i.name)+" ",1),e[0]||(e[0]=a("div",{class:"flex items-center ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"},[a("svg",{class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[a("path",{"fill-rule":"evenodd",d:"M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z","clip-rule":"evenodd"})])],-1))],8,Ho)]),k(w(ho),{placement:"bottom",trigger:"hover"},{trigger:F(()=>[a("p",Do,N(i.description),1)]),default:F(()=>[f(" "+N(i.description),1)]),_:2},1024)])])]),_:2},1024))),128))])]))}}),_=Io(Uo,[["__scopeId","data-v-245fb161"]]),v=[{name:"文档（前端相关）",options:[{name:"Vue3 中文官网",description:"Vue.js - 渐进式的 JavaScript 框架",url:"https://cn.vuejs.org",icon:"https://cn.vuejs.org/logo.svg"},{name:"React 中文官网",description:"用于构建 Web 和原生交互界面的库",url:"https://zh-hans.react.dev",icon:"https://zh-hans.reactjs.org/favicon.ico"},{name:"Nuxt",description:"Nuxt：直观的Vue框架·Nuxt",url:"https://nuxt.com",icon:"https://nuxt.com/icon.png"},{name:"VueUse",description:"Vue 组合式函数的集合",url:"https://vueuse.org",icon:"https://vueuse.org/favicon.ico"},{name:"TailwindCSS",description:"Tailwind CSS - 只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。 | TailwindCSS中文文档 | TailwindCSS中文网",url:"https://www.tailwindcss.cn",icon:"https://www.tailwindcss.cn/favicons/favicon.ico"},{name:"UnoCSS",description:"UnoCSS：即时按需原子CSS引擎",url:"https://unocss.dev",icon:"https://unocss.dev/favicon.ico"},{name:"微信开放文档",description:"微信官方文档 | 微信开放文档",url:"https://developers.weixin.qq.com/doc",icon:"https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico"},{name:"微信开放平台",description:"微信开放平台",url:"https://open.weixin.qq.com",icon:"https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico"},{name:"微信公众平台",description:"微信公众平台",url:"https://mp.weixin.qq.com",icon:"https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico"},{name:"shadcn-vue",description:"Beautifully designed components built with Radix Vue and Tailwind CSS.",url:"https://www.shadcn-vue.com/",icon:"https://www.shadcn-vue.com/favicon.ico"}]},{name:"文档（后端相关）",options:[{name:"Nest.js 中文网",description:"Nest 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的框架。 它使用渐进式 JavaScript，使用 TypeScript 构建，并结合了 OOP（面向对象编程）、FP（函数式编程）和 FRP（函数式反应式编程）的元素。",url:"https://docs.nestjs.cn/",icon:"https://nestjs.inode.club/favicon.ico"}]},{name:"工具网站",options:[{name:"Logo DIY",description:"Simple Logo Diy: 简易logo制作",url:"https://imxiaolong.com/logodiy",icon:"https://imxiaolong.com/logodiy/images/logo.png"},{name:"Favicon.ico图标生成器 | 一键免费制作ico图标 - 标小智",description:"输入字母或者汉字一键生成透明ICO图标。免费下载多尺寸和分辨率的Favicon.ico图标自动为浏览器提供最佳适配版本的Favicon展示。",url:"https://www.logosc.cn/logo/favicon",icon:"https://www.logosc.cn/img/logo-icons/favicon.png?v=1"},{name:"Can I use",description:"Can I Use 提供最新的浏览器支持表，用于支持桌面和移动Web浏览器上的前端Web技术。",url:"https://caniuse.com/",icon:"https://caniuse.com/img/favicon-128.png"},{name:"TinyPNG",description:"加速您网站的访问并节约带宽。TinyPNG 将您的 WebP、PNG 和 JPEG 图片压缩50-80%。同时保留PNG的透明度。",url:"https://tinify.cn",icon:"https://tinify.cn/images/favicon.ico"},{name:"Json.cn",description:"json,json在线解析,json格式化,json格式验证,json转xml,xml转json,json压缩,json转义,js混淆加密,JSON转实体,json在线,JSON校验,json tools,主机评测,主机测评,新手教程,技术博客,电子工具",url:"https://www.json.cn",icon:"https://www.json.cn/r/img/favicon/favicon.ico"},{name:"极简插件",description:"极简插件是一个优质Chrome插件下载商店，收录热门好用的Chrome插件扩展，国内最方便的Chrome插件下载网站。一键下载谷歌扩展插件，无套路下载插件。",url:"https://chrome.zzzmh.cn",icon:"https://chrome.zzzmh.cn/favicon.ico"},{name:"iLovePDF",description:"iLovePDF | 为PDF爱好者提供的PDF文件在线处理工具",url:"https://www.ilovepdf.com/zh-cn",icon:"https://www.ilovepdf.com/img/app-icon.png"},{name:"iLoveIMG",description:"iLoveIMG | 图像文件在线编辑工具",url:"https://www.iloveimg.com/zh-cn",icon:"https://www.ilovepdf.com/img/app-icon.png"},{name:"Markdown Live Preview",description:"Markdown Live Preview",url:"https://markdownlivepreview.com",icon:"https://markdownlivepreview.com/favicon.png"},{name:"App Uploader",description:"APP开发助手 iOS APP上架到App Store的辅助工具，解决iOS APP上架繁琐费时的情况，帮助跨平台APP开发者上架苹果应用,在没有配置Mac苹果机的情况，实现iOS证书申请，创建iOS开发者证书、iOS发布证书等各类证书，iOS开发者在Windows、Linux或Mac系统中上传IPA到App Store,简化iOS APP上架流程！在任何电脑中轻松快速上架你的APP",url:"https://www.applicationloader.net/",icon:"https://www.applicationloader.net/statics/images/appuploader_logo.png"},{name:"Online Convert",description:"在线转换器 - 免费转换视频、图像、音频和文档",url:"https://www.online-convert.com/",icon:"https://www.online-convert.com/favicon.ico"},{name:"MacWk",description:"MacWk - 精品mac软件下载",url:"https://macwk.cn/",icon:"https://macwk.cn/wp-content/uploads/2023/07/macwkico.png"},{name:"Green Wall",description:"Review the contributions you have made on GitHub over the years.",url:"https://green-wall.leoku.dev/",icon:"https://green-wall.leoku.dev/favicon.svg"},{name:"Cursor 中文使用文档",description:"什么是 Cursor Cursor 是一个新兴的、AI 驱动的集成开发环境（IDE），专为现代软件开发而设计。它结合了传统 IDE 的功能与先进的 AI 技术，旨在提高开发者的生产力和代码质量。",url:"https://www.cursor.com/favicon.svg",icon:"https://cursor.document.top/"},{name:"图片背景消除",description:"在线抠图软件_图片去除背景 | remove.bg – remove.bg",url:"https://www.remove.bg/zh",icon:"https://www.remove.bg/favicon.ico"},{name:"放屁音乐网",description:"放屁网在线音乐搜索，可以在线免费下载全网MP3付费歌曲、流行音乐、经典老歌等。曲库完整，更新迅速，试听流畅，支持高品质|无损音质~",url:"https://www.fangpi.net/",icon:"https://www.fangpi.net/favicon.ico"},{name:"MagicEraser.Pro",description:"轻松从在线照片中删除物体、人物、文本",url:"https://magiceraser.pro/zh",icon:"https://magiceraser.pro/favicon.ico"}]},{name:"AI 应用",options:[{name:"ChatGPT",description:"ChatGPT 是一个免费使用的人工智能系统。使用它进行引人入胜的对话，获得洞察力，自动化任务，并见证人工智能的未来，所有这些都在一个地方。",url:"https://chat.openai.com",icon:"https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png"},{name:"豆包 - 抖音旗下 AI 智能助手",description:"豆包是你的AI 聊天智能对话问答助手，写作文案翻译情感陪伴编程全能工具。豆包为你答疑解惑，提供灵感，辅助创作，也可以和你畅聊任何你感兴趣的话题。",url:"https://www.doubao.com/",icon:"https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png"},{name:"扣子-AI 智能体开发平台",description:"扣子是新一代 AI 大模型智能体开发平台。整合了插件、长短期记忆、工作流、卡片等丰富能力，扣子能帮你低门槛、快速搭建个性化或具备商业价值的智能体，并发布到豆包、飞书等各个平台。",url:"https://www.coze.cn",icon:"https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png"},{name:"Phind",description:"Phind 是一个专为开发者和技术问题优化的搜索引擎。它利用“大型AI语言模型”来生成答案，这些答案基于互联网上的信息，但同时使用多个来源。这种方法帮助 Phind 确定哪些信息是有用的，甚至可以抓取代码片段来协助用户。Phind 的网站上没有太多信息，但这可能是因为它本质上就是一个优化的搜索引擎，不需要通过长篇的解释来装饰。它的目的是简单而有效，智能而帮助用户解决问题。",url:"https://www.phind.com/",icon:"https://www.phind.com/images/favicon.png"},{name:"Kimi.ai",description:"Kimi是一款学生和职场人的新质生产力工具，帮你解读论文，策划方案，创作小说，写代码查BUG，多语言翻译，有问题问Kimi，一键解决你的所有难题",url:"https://kimi.moonshot.cn/",icon:"https://statics.moonshot.cn/kimi-chat/favicon.ico"},{name:"腾讯元宝",description:"腾讯元宝是基于腾讯混元大模型的AI应用，可以帮你写作绘画文案翻译编程搜索阅读总结的全能助手",url:"https://yuanbao.tencent.com/",icon:"https://yuanbao.tencent.com/logo.png"}]},{name:"休闲娱乐",options:[]}],Qo=JSON.parse('{"title":"资源导航网","description":"","frontmatter":{},"headers":[],"relativePath":"resource/index.md","filePath":"resource/index.md","lastUpdated":1763969036000}'),Jo={name:"resource/index.md"},oe=j({...Jo,setup(o){const l=v[v.findIndex(r=>r.name==="文档（前端相关）")],p=v[v.findIndex(r=>r.name==="文档（后端相关）")],e=v[v.findIndex(r=>r.name==="工具网站")],i=v[v.findIndex(r=>r.name==="AI 应用")];return(r,c)=>(I(),$("div",null,[c[0]||(c[0]=a("h1",{id:"资源导航网",tabindex:"-1"},[f("资源导航网 "),a("a",{class:"header-anchor",href:"#资源导航网","aria-label":'Permalink to "资源导航网"'},"​")],-1)),c[1]||(c[1]=a("h2",{id:"前端文档",tabindex:"-1"},[f("前端文档 "),a("a",{class:"header-anchor",href:"#前端文档","aria-label":'Permalink to "前端文档"'},"​")],-1)),k(_,{options:w(l).options},null,8,["options"]),c[2]||(c[2]=a("h2",{id:"后端文档",tabindex:"-1"},[f("后端文档 "),a("a",{class:"header-anchor",href:"#后端文档","aria-label":'Permalink to "后端文档"'},"​")],-1)),k(_,{options:w(p).options},null,8,["options"]),c[3]||(c[3]=a("h2",{id:"工具网站",tabindex:"-1"},[f("工具网站 "),a("a",{class:"header-anchor",href:"#工具网站","aria-label":'Permalink to "工具网站"'},"​")],-1)),k(_,{options:w(e).options},null,8,["options"]),c[4]||(c[4]=a("h2",{id:"ai-应用网站",tabindex:"-1"},[f("AI 应用网站 "),a("a",{class:"header-anchor",href:"#ai-应用网站","aria-label":'Permalink to "AI 应用网站"'},"​")],-1)),k(_,{options:w(i).options},null,8,["options"])]))}});export{Qo as __pageData,oe as default};
