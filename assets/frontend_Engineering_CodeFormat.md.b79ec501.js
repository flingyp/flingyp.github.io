import{_ as s,c as n,o as a,X as e}from"./chunks/framework.6e839c56.js";const _=JSON.parse('{"title":"关于代码格式化","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/Engineering/CodeFormat.md","filePath":"frontend/Engineering/CodeFormat.md"}'),l={name:"frontend/Engineering/CodeFormat.md"},p=e(`<h1 id="关于代码格式化" tabindex="-1">关于代码格式化 <a class="header-anchor" href="#关于代码格式化" aria-label="Permalink to &quot;关于代码格式化&quot;">​</a></h1><p>关于代码格式化要解决两个问题</p><ul><li>解决不同编辑器的代码保存不一致问题</li><li>保证团队的代码风格一致性</li></ul><h2 id="editorconfig" tabindex="-1">EditorConfig <a class="header-anchor" href="#editorconfig" aria-label="Permalink to &quot;EditorConfig&quot;">​</a></h2><p><a href="https://editorconfig.org/" target="_blank" rel="noreferrer">EditorConfig</a> 是可以统一在不同编辑器中处理同一个项目的多个开发人员维护一致的编码样式。许多编辑器也内置对它的支持或者是通过加入插件支持</p><p><code>.editorconfig</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;"># EditorConfig is awesome: https://EditorConfig.org</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># top-most EditorConfig file</span></span>
<span class="line"><span style="color:#dbd7caee;">root = true</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># Unix-style newlines with a newline ending every file</span></span>
<span class="line"><span style="color:#dbd7caee;">[*]</span></span>
<span class="line"><span style="color:#dbd7caee;">end_of_line = lf</span></span>
<span class="line"><span style="color:#dbd7caee;">insert_final_newline = true</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># Matches multiple files with brace expansion notation</span></span>
<span class="line"><span style="color:#dbd7caee;"># Set default charset</span></span>
<span class="line"><span style="color:#dbd7caee;">[*.{js,py}]</span></span>
<span class="line"><span style="color:#dbd7caee;">charset = utf-8</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># 4 space indentation</span></span>
<span class="line"><span style="color:#dbd7caee;">[*.py]</span></span>
<span class="line"><span style="color:#dbd7caee;">indent_style = space</span></span>
<span class="line"><span style="color:#dbd7caee;">indent_size = 4</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># Tab indentation (no size specified)</span></span>
<span class="line"><span style="color:#dbd7caee;">[Makefile]</span></span>
<span class="line"><span style="color:#dbd7caee;">indent_style = tab</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># Indentation override for all JS under lib directory</span></span>
<span class="line"><span style="color:#dbd7caee;">[lib/**.js]</span></span>
<span class="line"><span style="color:#dbd7caee;">indent_style = space</span></span>
<span class="line"><span style="color:#dbd7caee;">indent_size = 2</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"># Matches the exact files either package.json or .travis.yml</span></span>
<span class="line"><span style="color:#dbd7caee;">[{package.json,.travis.yml}]</span></span>
<span class="line"><span style="color:#dbd7caee;">indent_style = space</span></span>
<span class="line"><span style="color:#dbd7caee;">indent_size = 2</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;"># EditorConfig is awesome: https://EditorConfig.org</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># top-most EditorConfig file</span></span>
<span class="line"><span style="color:#393a34;">root = true</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Unix-style newlines with a newline ending every file</span></span>
<span class="line"><span style="color:#393a34;">[*]</span></span>
<span class="line"><span style="color:#393a34;">end_of_line = lf</span></span>
<span class="line"><span style="color:#393a34;">insert_final_newline = true</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Matches multiple files with brace expansion notation</span></span>
<span class="line"><span style="color:#393a34;"># Set default charset</span></span>
<span class="line"><span style="color:#393a34;">[*.{js,py}]</span></span>
<span class="line"><span style="color:#393a34;">charset = utf-8</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># 4 space indentation</span></span>
<span class="line"><span style="color:#393a34;">[*.py]</span></span>
<span class="line"><span style="color:#393a34;">indent_style = space</span></span>
<span class="line"><span style="color:#393a34;">indent_size = 4</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Tab indentation (no size specified)</span></span>
<span class="line"><span style="color:#393a34;">[Makefile]</span></span>
<span class="line"><span style="color:#393a34;">indent_style = tab</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Indentation override for all JS under lib directory</span></span>
<span class="line"><span style="color:#393a34;">[lib/**.js]</span></span>
<span class="line"><span style="color:#393a34;">indent_style = space</span></span>
<span class="line"><span style="color:#393a34;">indent_size = 2</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"># Matches the exact files either package.json or .travis.yml</span></span>
<span class="line"><span style="color:#393a34;">[{package.json,.travis.yml}]</span></span>
<span class="line"><span style="color:#393a34;">indent_style = space</span></span>
<span class="line"><span style="color:#393a34;">indent_size = 2</span></span></code></pre></div><h2 id="eslint" tabindex="-1">ESlint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;ESlint&quot;">​</a></h2><p>ESlint 主要用于做代码规范的检测，有时候也会搭配着Prettier来使用。但是其实ESlint的自动修复其实也有格式化的作用</p><ul><li>可以看看antfu的文章关于<a href="https://antfu.me/posts/why-not-prettier-zh" target="_blank" rel="noreferrer">为什么我不使用 Prettier</a></li></ul>`,10),o=[p];function t(i,c,r,d,y,f){return a(),n("div",null,o)}const h=s(l,[["render",t]]);export{_ as __pageData,h as default};
