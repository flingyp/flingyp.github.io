import{_ as s,c as n,o as a,a as e}from"./app.b33afe52.js";const b=JSON.parse('{"title":"\u5173\u4E8E\u4EE3\u7801\u683C\u5F0F\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"EditorConfig","slug":"editorconfig","link":"#editorconfig","children":[]},{"level":2,"title":"ESlint","slug":"eslint","link":"#eslint","children":[]}],"relativePath":"frontend/Engineering/CodeFormat.md"}'),l={name:"frontend/Engineering/CodeFormat.md"},p=e(`<h1 id="\u5173\u4E8E\u4EE3\u7801\u683C\u5F0F\u5316" tabindex="-1">\u5173\u4E8E\u4EE3\u7801\u683C\u5F0F\u5316 <a class="header-anchor" href="#\u5173\u4E8E\u4EE3\u7801\u683C\u5F0F\u5316" aria-hidden="true">#</a></h1><p>\u5173\u4E8E\u4EE3\u7801\u683C\u5F0F\u5316\u8981\u89E3\u51B3\u4E24\u4E2A\u95EE\u9898</p><ul><li>\u89E3\u51B3\u4E0D\u540C\u7F16\u8F91\u5668\u7684\u4EE3\u7801\u4FDD\u5B58\u4E0D\u4E00\u81F4\u95EE\u9898</li><li>\u4FDD\u8BC1\u56E2\u961F\u7684\u4EE3\u7801\u98CE\u683C\u4E00\u81F4\u6027</li></ul><h2 id="editorconfig" tabindex="-1">EditorConfig <a class="header-anchor" href="#editorconfig" aria-hidden="true">#</a></h2><p><a href="https://editorconfig.org/" target="_blank" rel="noreferrer">EditorConfig</a> \u662F\u53EF\u4EE5\u7EDF\u4E00\u5728\u4E0D\u540C\u7F16\u8F91\u5668\u4E2D\u5904\u7406\u540C\u4E00\u4E2A\u9879\u76EE\u7684\u591A\u4E2A\u5F00\u53D1\u4EBA\u5458\u7EF4\u62A4\u4E00\u81F4\u7684\u7F16\u7801\u6837\u5F0F\u3002\u8BB8\u591A\u7F16\u8F91\u5668\u4E5F\u5185\u7F6E\u5BF9\u5B83\u7684\u652F\u6301\u6216\u8005\u662F\u901A\u8FC7\u52A0\u5165\u63D2\u4EF6\u652F\u6301</p><p><code>.editorconfig</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;"># EditorConfig is awesome: https://EditorConfig.org</span></span>
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
<span class="line"><span style="color:#dbd7caee;">indent_size = 2</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393a34;"># EditorConfig is awesome: https://EditorConfig.org</span></span>
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
<span class="line"><span style="color:#393a34;">indent_size = 2</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h2 id="eslint" tabindex="-1">ESlint <a class="header-anchor" href="#eslint" aria-hidden="true">#</a></h2><p>ESlint \u4E3B\u8981\u7528\u4E8E\u505A\u4EE3\u7801\u89C4\u8303\u7684\u68C0\u6D4B\uFF0C\u6709\u65F6\u5019\u4E5F\u4F1A\u642D\u914D\u7740Prettier\u6765\u4F7F\u7528\u3002\u4F46\u662F\u5176\u5B9EESlint\u7684\u81EA\u52A8\u4FEE\u590D\u5176\u5B9E\u4E5F\u6709\u683C\u5F0F\u5316\u7684\u4F5C\u7528</p><ul><li>\u53EF\u4EE5\u770B\u770Bantfu\u7684\u6587\u7AE0\u5173\u4E8E<a href="https://antfu.me/posts/why-not-prettier-zh" target="_blank" rel="noreferrer">\u4E3A\u4EC0\u4E48\u6211\u4E0D\u4F7F\u7528 Prettier</a></li></ul>`,10),o=[p];function t(c,i,r,d,y,f){return a(),n("div",null,o)}const _=s(l,[["render",t]]);export{b as __pageData,_ as default};
