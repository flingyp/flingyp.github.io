import{_ as s,c as n,o as a,a as e}from"./app.2b9bb4cb.js";const C=JSON.parse('{"title":"\u5DE5\u7A0B\u5316\u4E4B\u89C4\u8303\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"ESLint + Prettier \u4EE3\u7801\u4E66\u5199\u89C4\u8303","slug":"eslint-prettier-\u4EE3\u7801\u4E66\u5199\u89C4\u8303"},{"level":3,"title":"\u96C6\u6210 ESlint","slug":"\u96C6\u6210-eslint"},{"level":3,"title":"\u96C6\u6210 Prettier","slug":"\u96C6\u6210-prettier"},{"level":3,"title":"\u5904\u7406 ESlint \u548C Prettier \u7684\u51B2\u7A81","slug":"\u5904\u7406-eslint-\u548C-prettier-\u7684\u51B2\u7A81"},{"level":2,"title":"Husky + Lint-Staged \u4EE3\u7801\u63D0\u4EA4\u89C4\u8303","slug":"husky-lint-staged-\u4EE3\u7801\u63D0\u4EA4\u89C4\u8303"},{"level":3,"title":"husky","slug":"husky"},{"level":3,"title":"lint-staged","slug":"lint-staged"},{"level":2,"title":"Commitlint + Commitizen \u4FE1\u606F\u683C\u5F0F\u63D0\u4EA4\u89C4\u8303","slug":"commitlint-commitizen-\u4FE1\u606F\u683C\u5F0F\u63D0\u4EA4\u89C4\u8303"},{"level":3,"title":"Commitlint","slug":"commitlint"},{"level":3,"title":"Commitizen","slug":"commitizen"},{"level":2,"title":"Standard Version \u751F\u6210\u65E5\u5FD7\u6587\u4EF6","slug":"standard-version-\u751F\u6210\u65E5\u5FD7\u6587\u4EF6"}],"relativePath":"frontend/Engineering/CodeStandard.md"}'),l={name:"frontend/Engineering/CodeStandard.md"},t=e(`<h1 id="\u5DE5\u7A0B\u5316\u4E4B\u89C4\u8303\u5316" tabindex="-1">\u5DE5\u7A0B\u5316\u4E4B\u89C4\u8303\u5316 <a class="header-anchor" href="#\u5DE5\u7A0B\u5316\u4E4B\u89C4\u8303\u5316" aria-hidden="true">#</a></h1><h2 id="eslint-prettier-\u4EE3\u7801\u4E66\u5199\u89C4\u8303" tabindex="-1">ESLint + Prettier \u4EE3\u7801\u4E66\u5199\u89C4\u8303 <a class="header-anchor" href="#eslint-prettier-\u4EE3\u7801\u4E66\u5199\u89C4\u8303" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>ESLint \u914D\u5408 Prettier \u6765\u89C4\u8303\u9879\u76EE\u4E2D\u7684\u4EE3\u7801</p></div><h3 id="\u96C6\u6210-eslint" tabindex="-1">\u96C6\u6210 ESlint <a class="header-anchor" href="#\u96C6\u6210-eslint" aria-hidden="true">#</a></h3><ol><li><p>\u5B89\u88C5\uFF1A<code>pnpm install eslint -D</code></p></li><li><p>\u5728\u9879\u76EE\u7EC8\u7AEF\u4E2D\u6267\u884C\uFF1A<code>npx eslint --init</code> \u53BB\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6\uFF0C\u5B83\u4F1A\u95EE\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ol><li><p>How would you like to use ESLint? \uFF08\u4F60\u60F3\u5982\u4F55\u4F7F\u7528 ESLint?\uFF09</p></li><li><p>To check syntax, find problems, and enforce code style\uFF08\u68C0\u67E5\u8BED\u6CD5\u3001\u53D1\u73B0\u95EE\u9898\u5E76\u5F3A\u5236\u6267\u884C\u4EE3\u7801\u98CE\u683C\uFF09</p></li><li><p>What type of modules does your project use?\uFF08\u4F60\u7684\u9879\u76EE\u4F7F\u7528\u54EA\u79CD\u7C7B\u578B\u7684\u6A21\u5757?\uFF09</p><ul><li>\u9009\u62E9\u7B2C\u4E00\u4E2A</li></ul></li><li><p>JavaScript modules (import/export)</p></li><li><p>Which framework does your project use? \uFF08\u4F60\u7684\u9879\u76EE\u4F7F\u7528\u54EA\u79CD\u6846\u67B6?\uFF09</p></li><li><p>Does your project use TypeScript?\uFF08\u4F60\u7684\u9879\u76EE\u662F\u5426\u4F7F\u7528 TypeScript\uFF1F\uFF09</p></li><li><p>Where does your code run?\uFF08\u4F60\u7684\u4EE3\u7801\u5728\u54EA\u91CC\u8FD0\u884C?\uFF09</p></li><li><p>How would you like to define a style for your project?\uFF08\u4F60\u60F3\u600E\u6837\u4E3A\u4F60\u7684\u9879\u76EE\u5B9A\u4E49\u98CE\u683C\uFF1F\uFF09</p><p>Use a popular style guide\uFF08\u4F7F\u7528\u4E00\u79CD\u6D41\u884C\u7684\u98CE\u683C\u6307\u5357\uFF09</p></li><li><p>Which style guide do you want to follow?\uFF08\u4F60\u60F3\u9075\u5FAA\u54EA\u4E00\u79CD\u98CE\u683C\u6307\u5357?\uFF09</p><p>Airbnb</p></li><li><p>What format do you want your config file to be in?\uFF08\u4F60\u5E0C\u671B\u4F60\u7684\u914D\u7F6E\u6587\u4EF6\u662F\u4EC0\u4E48\u683C\u5F0F?\uFF09</p></li><li><p>Would you like to install them now with npm?\uFF08\u4F60\u60F3\u73B0\u5728\u5C31\u7528 NPM \u5B89\u88C5\u5B83\u4EEC\u5417?\uFF09</p></li></ol></li><li><p>\u6267\u884C\u5B8C\u64CD\u4F5C\u540E\uFF0C\u4F1A\u81EA\u52A8\u5B89\u88C5\u5BF9\u5E94\u7684\u63D2\u4EF6\u5E76\u4E14\u751F\u6210\u914D\u7F6E\u6587\u4EF6</p></li><li><p>\u521B\u5EFA .eslintignore \u6587\u4EF6</p></li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">*.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">*.md</span></span>
<span class="line"><span style="color:#A6ACCD;">*.woff</span></span>
<span class="line"><span style="color:#A6ACCD;">*.ttf</span></span>
<span class="line"><span style="color:#A6ACCD;">.vscode</span></span>
<span class="line"><span style="color:#A6ACCD;">.idea</span></span>
<span class="line"><span style="color:#A6ACCD;">dist</span></span>
<span class="line"><span style="color:#A6ACCD;">/public</span></span>
<span class="line"><span style="color:#A6ACCD;">/docs</span></span>
<span class="line"><span style="color:#A6ACCD;">.husky</span></span>
<span class="line"><span style="color:#A6ACCD;">.local</span></span>
<span class="line"><span style="color:#A6ACCD;">/bin</span></span>
<span class="line"><span style="color:#A6ACCD;">Dockerfile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u96C6\u6210-prettier" tabindex="-1">\u96C6\u6210 Prettier <a class="header-anchor" href="#\u96C6\u6210-prettier" aria-hidden="true">#</a></h3><ol><li><p>\u5B89\u88C5\uFF1A<code>pnpm install prettier -D</code></p></li><li><p>\u914D\u7F6E Prettier \u914D\u7F6E\u6587\u4EF6\uFF1A\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA <code>.prettierrc</code> \u6587\u4EF6\uFF0C\u53EF\u4EE5<a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noopener noreferrer">\u53C2\u8003\u6587\u6863</a></p></li><li><p>\u6CE8\uFF1AVSCode \u7F16\u8F91\u5668\u4F7F\u7528 Prettier \u914D\u7F6E\u9700\u8981\u4E0B\u8F7D\u63D2\u4EF6 Prettier - Code formatter\u3002 \u52FE\u9009\u4FDD\u5B58\u540E\u683C\u5F0F\u5316\uFF0C\u5E76\u4E14\u9009\u62E9\u683C\u5F0F\u5316\u6587\u6863\u65B9\u5F0F\u4E3A prettierrc</p></li><li><p>\u521B\u5EFA <code>.prettierignore</code> \u6587\u4EF6</p></li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/dist/*</span></span>
<span class="line"><span style="color:#A6ACCD;">.local</span></span>
<span class="line"><span style="color:#A6ACCD;">.output.js</span></span>
<span class="line"><span style="color:#A6ACCD;">/node_modules/**</span></span>
<span class="line"><span style="color:#A6ACCD;">**/*.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">**/*.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">/public/*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u5904\u7406-eslint-\u548C-prettier-\u7684\u51B2\u7A81" tabindex="-1">\u5904\u7406 ESlint \u548C Prettier \u7684\u51B2\u7A81 <a class="header-anchor" href="#\u5904\u7406-eslint-\u548C-prettier-\u7684\u51B2\u7A81" aria-hidden="true">#</a></h3><p>\u89E3\u51B3\u4E24\u8005\u51B2\u7A81\u95EE\u9898\u9700\u8981\u7528\u5230 eslint-plugin-prettier \u548C eslint-config-prettier</p><p>eslint-plugin-prettier\uFF1A\u4F1A\u5C06 Prettier \u7684\u89C4\u5219\u8BBE\u7F6E\u5230 ESlint \u7684\u89C4\u5219\u5F53\u4E2D</p><p>eslint-config-prettier\uFF1A\u5173\u95ED ESLint \u4E2D\u548C Prettier \u4E2D\u53D1\u751F\u51B2\u7A81\u7684\u89C4\u5219</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">  extends: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plugin:vue/essential</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">airbnb-base</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plugin:prettier/recommended</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u6DFB\u52A0prettier\u63D2\u4EF6 +</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="husky-lint-staged-\u4EE3\u7801\u63D0\u4EA4\u89C4\u8303" tabindex="-1">Husky + Lint-Staged \u4EE3\u7801\u63D0\u4EA4\u89C4\u8303 <a class="header-anchor" href="#husky-lint-staged-\u4EE3\u7801\u63D0\u4EA4\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u96C6\u6210\u4EE3\u7801\u63D0\u4EA4\u89C4\u8303\u4E3B\u8981\u662F\u56F4\u7ED5\u7740 Git Hooks \u7684\u94A9\u5B50\u53BB\u5DE5\u4F5C\uFF0C\u6240\u4EE5\u5148\u7B80\u5355\u7684\u4E86\u89E3\u4E86\u89E3 Git Hooks</p><p>pre-commit\uFF1A\u5728<code>git commit</code>\u4E4B\u524D\u6267\u884C</p><p>commit-msg\uFF1A\u5728<code>git commit</code>\u4E4B\u524D\u6267\u884C</p><p>post-merge\uFF1A\u5728<code>git commit</code>\u6267\u884C\u540E</p><p>pre-push\uFF1A\u5728 <code>git push</code> \u6267\u884C\u524D</p><h3 id="husky" tabindex="-1">husky <a class="header-anchor" href="#husky" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>husky \u53EF\u4EE5\u8BA9\u6211\u4EEC\u5411\u9879\u76EE\u4E2D\u65B9\u4FBF\u6DFB\u52A0 Git Hooks\u3002\u603B\u7ED3\u6765\u8BF4\u53EF\u4EE5\u64CD\u4F5C Git \u94A9\u5B50\u7684\u5DE5\u5177</p></div><p>\u5B89\u88C5 husky\uFF1A<code>npx husky-init &amp;&amp; npm install</code></p><p>\u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u540E\u4F1A\u5728\u6211\u4EEC\u7684\u6839\u76EE\u5F55\u4E0B\u751F\u6210<code>.husky</code>\u6587\u4EF6\u5939\uFF0C\u8FD9\u91CC\u9762\u88C5\u7684\u5C31\u662F<code>git hook</code>\u7684\u94A9\u5B50\u51FD\u6570\u6267\u884C\u6587\u4EF6\uFF0C<code>pre-commit</code>\u94A9\u5B50\u662F\u5728\u63D0\u4EA4\u4FE1\u606F\u524D\u6267\u884C\u7684\uFF0C\u5373\u5728\u6211\u4EEC<code>git commit</code>\u7684\u65F6\u5019\u89E6\u53D1</p><p>\u540C\u65F6\u4F1A\u5728<code>package.json</code>\u7684 <code>scripts</code> \u4E2D\u751F\u6210\u4E00\u6761\u65B0\u7684\u547D\u4EE4\uFF1A<code>&quot;prepare&quot;: &quot;husky install&quot;</code></p><h3 id="lint-staged" tabindex="-1">lint-staged <a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>lint-staged \u53EA\u68C0\u6D4B\u90A3\u4E9B\u52A0\u5165\u7F13\u51B2\u533A\u7684\u6587\u4EF6\uFF0C\u672C\u5730\u6682\u5B58\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177</p></div><p>\u5B89\u88C5 lint-staged\uFF1A<code>pnpm install lint-staged -D</code></p><p>\u6CE8\uFF1A\u53EF\u4EE5\u901A\u8FC7 <code>npx mrm@2 lint-staged</code> \u8FD9\u4E2A\u547D\u4EE4\u4F1A\u540C\u65F6\u5E2E\u4F60\u5B89\u88C5 husky \u548C lint-staged\uFF0C\u5E76\u505A\u597D\u914D\u7F6E</p><p>\u63A5\u4E0B\u6765\u6DFB\u52A0 package.json \u6587\u4EF6\u6DFB\u52A0\u4EE3\u7801\uFF1A</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u68C0\u67E5 src \u6240\u6709\u76EE\u5F55\u4E0B js,jsx,ts,tsx,json \u6587\u4EF6\uFF0C\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lint-staged</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">src/**/*.{js,jsx,ts,tsx,json}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prettier --write</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git add</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre></div><p>\u518D\u4FEE\u6539 pre-commit \u6587\u4EF6</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/sh</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">dirname </span><span style="color:#89DDFF;">&quot;$</span><span style="color:#A6ACCD;">0</span><span style="color:#89DDFF;">&quot;)</span><span style="color:#C3E88D;">/_/husky.sh</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">npx lint-staged</span></span>
<span class="line"></span></code></pre></div><p>\u518D\u8FDB\u884C\u6D4B\u8BD5 \u5F53\u6211\u4EEC <code>git commit -m &#39;xx&#39;</code> \u7684\u65F6\u5019 \u4F1A\u5148\u53BB\u6267\u884C <code>npx lint-staged</code></p><h2 id="commitlint-commitizen-\u4FE1\u606F\u683C\u5F0F\u63D0\u4EA4\u89C4\u8303" tabindex="-1">Commitlint + Commitizen \u4FE1\u606F\u683C\u5F0F\u63D0\u4EA4\u89C4\u8303 <a class="header-anchor" href="#commitlint-commitizen-\u4FE1\u606F\u683C\u5F0F\u63D0\u4EA4\u89C4\u8303" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>commitlint \u89C4\u8303\u56E2\u961F\u9075\u5B88\u63D0\u4EA4\u4FE1\u606F\u7684\u7EA6\u5B9A\uFF0C\u4FE1\u606F\u68C0\u67E5\u5DE5\u5177</p><p>commitizen \u53EF\u4EE5\u8F85\u52A9\u6211\u4EEC\uFF0C\u5E2E\u52A9\u6211\u4EEC\u586B\u5199\u89C4\u8303\u7684 commit \u4FE1\u606F</p></div><h3 id="commitlint" tabindex="-1">Commitlint <a class="header-anchor" href="#commitlint" aria-hidden="true">#</a></h3><p>\u5B89\u88C5\uFF1A<code>pnpm install @commitlint/cli @commitlint/config-conventional -D</code></p><p>\u6267\u884C\u547D\u4EE4 <code>echo &quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}&quot; &gt; commitlint.config.js</code> \u4F1A\u5728\u6839\u76EE\u5F55\u521B\u5EFA commitlint.config.js \u914D\u7F6E\u6587\u4EF6</p><p>\u6CE8\u610F\u4F7F\u7528\u4E0A\u9762\u8FD9\u6761\u547D\u4EE4\u521B\u5EFA\u7684\u914D\u7F6E\u6587\u4EF6\u4E0D\u662F utf8 \u683C\u5F0F\u7684\uFF0C\u5728\u8FDB\u884C <code>git commit</code>\u7684\u65F6\u5019\u56DE\u62A5\uFF1A<code>SyntaxError: Invalid or unexpected token</code>\u7684\u9519\u8BEF\u3002</p><p>\u6240\u4EE5\u6700\u597D\u7684\u65B9\u5F0F\u5C31\u662F\u81EA\u5DF1\u624B\u52A8\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u5199\u5165\u4E0A\u9762\u8FD9\u4E2A\u4EE3\u7801\uFF1A<code>module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}</code></p><p>commit \u6D88\u606F\u7684\u4E66\u5199\u683C\u5F0F\uFF1A <code>type(\u5FC5\u586B): description</code></p><table><thead><tr><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>revert</td><td>\u56DE\u6EDA\u5230\u4E0A\u4E00\u4E2A\u7248\u672C</td></tr><tr><td>feat</td><td>\u65B0\u589E\u529F\u80FD</td></tr><tr><td>fix</td><td>\u4FEE\u590D bug</td></tr><tr><td>docs</td><td>\u4FEE\u6539\u6587\u6863</td></tr><tr><td>test</td><td>\u6D4B\u8BD5\u7528\u4F8B\u7684\u4FEE\u6539</td></tr><tr><td>refactor</td><td>\u4EE3\u7801\u91CD\u6784\uFF0C\u672A\u65B0\u589E\u4EFB\u4F55\u529F\u80FD\u548C\u4FEE\u590D\u4EFB\u4F55 bug</td></tr><tr><td>build</td><td>\u6539\u53D8\u6784\u5EFA\u6D41\u7A0B\uFF0C\u65B0\u589E\u4F9D\u8D56\u5E93\u3001\u5DE5\u5177\u7B49\uFF08\u4F8B\u5982 webpack \u4FEE\u6539)</td></tr><tr><td>style</td><td>\u4EC5\u4EC5\u4FEE\u6539\u4E86\u7A7A\u683C\u3001\u7F29\u8FDB\u7B49\uFF0C\u4E0D\u6539\u53D8\u4EE3\u7801\u903B\u8F91</td></tr><tr><td>perf</td><td>\u6539\u5584\u6027\u80FD\u548C\u4F53\u73B0\u7684\u4FEE\u6539</td></tr><tr><td>chore</td><td>\u4FEE\u6539\u6784\u5EFA\u6D41\u7A0B\u6216\u5DE5\u5177</td></tr><tr><td>ci</td><td>\u81EA\u52A8\u5316\u6D41\u7A0B\u914D\u7F6E\u4FEE\u6539</td></tr></tbody></table><h3 id="commitizen" tabindex="-1">Commitizen <a class="header-anchor" href="#commitizen" aria-hidden="true">#</a></h3><p>\u5B89\u88C5\uFF1A<code>npm install commitizen cz-conventional-changelog -D</code></p><p>\u8BBE\u7F6E\u4E00\u6761\u811A\u672C\uFF1A<code>npm set-script commit &quot;git-cz&quot;</code></p><p>\u914D\u7F6E package.json \u7684\u63D0\u4EA4\u4FE1\u606F\uFF1A</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">config</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">commitizen</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">cz-conventional-changelog</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4E4B\u540E\u53EA\u540C \u6267\u884C\u811A\u672C commit \u53BB\u586B\u5199 commit \u4FE1\u606F</p><h2 id="standard-version-\u751F\u6210\u65E5\u5FD7\u6587\u4EF6" tabindex="-1">Standard Version \u751F\u6210\u65E5\u5FD7\u6587\u4EF6 <a class="header-anchor" href="#standard-version-\u751F\u6210\u65E5\u5FD7\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u81EA\u52A8\u4FEE\u6539\u7248\u672C\uFF0C\u751F\u6210 <a href="http://CHANGELOG.md" target="_blank" rel="noopener noreferrer">CHANGELOG.md</a> \u65E5\u5FD7\u6587\u4EF6</p></div><p>\u5B89\u88C5\uFF1A<code>pnpm install standard-version -D</code></p><p>\u6DFB\u52A0\u811A\u672C\u547D\u4EE4\uFF1A</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">release</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">standard-version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u53D1\u7248</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">first-release</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm run release -- --first-release</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u7B2C\u4E00\u6B21\u53D1\u7248</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,54),p=[t];function o(c,i,r,d,D,y){return a(),n("div",null,p)}var m=s(l,[["render",o]]);export{C as __pageData,m as default};