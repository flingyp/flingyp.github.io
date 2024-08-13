import{_ as n,c as s,o as a,V as e}from"./chunks/framework.DgbPds4s.js";const g=JSON.parse('{"title":"代码格式化","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/Engineering/CodeFormat.md","filePath":"frontend/Engineering/CodeFormat.md","lastUpdated":1723545507000}'),t={name:"frontend/Engineering/CodeFormat.md"},p=e(`<h1 id="代码格式化" tabindex="-1">代码格式化 <a class="header-anchor" href="#代码格式化" aria-label="Permalink to &quot;代码格式化&quot;">​</a></h1><h2 id="eslint-prettier" tabindex="-1">ESLint &amp; Prettier <a class="header-anchor" href="#eslint-prettier" aria-label="Permalink to &quot;ESLint &amp; Prettier&quot;">​</a></h2><p>ESlint 主要用于做代码规范的检测，有时候也会搭配着 Prettier 来使用。但是其实 ESlint 的自动修复功能其实也有起到格式化的作用</p><ul><li>可以看看 antfu 的文章关于 <a href="https://antfu.me/posts/why-not-prettier-zh" target="_blank" rel="noreferrer">为什么我不使用 Prettier</a></li></ul><h2 id="editorconfig" tabindex="-1">EditorConfig <a class="header-anchor" href="#editorconfig" aria-label="Permalink to &quot;EditorConfig&quot;">​</a></h2><p>关于代码格式化主要解决两个问题</p><ul><li>解决不同编辑器的代码格式化不一致的问题</li><li>保证团队项目的代码风格一致性</li></ul><p>而 <a href="https://editorconfig.org/" target="_blank" rel="noreferrer">EditorConfig</a> 是可以统一在不同编辑器中处理同一个项目的多个开发人员维护一致的编码样式。许多编辑器也内置对它的支持或者是通过加入插件支持</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># EditorConfig helps developers define and maintain consistent</span></span>
<span class="line"><span># coding styles between different editors and IDEs</span></span>
<span class="line"><span># editorconfig.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># We recommend you to keep these unchanged</span></span>
<span class="line"><span>end_of_line = lf</span></span>
<span class="line"><span>charset = utf-8</span></span>
<span class="line"><span>trim_trailing_whitespace = true</span></span>
<span class="line"><span>insert_final_newline = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Change these settings to your own preference</span></span>
<span class="line"><span>indent_style = space</span></span>
<span class="line"><span>indent_size = 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*.{ts,tsx,js,jsx,json,css,scss,yml,yaml,html,vue,md}]</span></span>
<span class="line"><span>indent_size = 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[*.md]</span></span>
<span class="line"><span>trim_trailing_whitespace = false</span></span></code></pre></div>`,9),i=[p];function l(r,o,c,d,h,_){return a(),s("div",null,i)}const m=n(t,[["render",l]]);export{g as __pageData,m as default};
