import{_ as a,c as i,o as n,at as l}from"./chunks/framework.B-8aa_PR.js";const c=JSON.parse('{"title":"在 Claude Code CLI 里 0 基础创建并使用自己的 Skill","description":"","frontmatter":{},"headers":[],"relativePath":"posts/在 Claude Code 里 0 基础创建并使用自己的 Skill.md","filePath":"posts/在 Claude Code 里 0 基础创建并使用自己的 Skill.md","lastUpdated":1771408012000}'),p={name:"posts/在 Claude Code 里 0 基础创建并使用自己的 Skill.md"};function e(t,s,h,k,d,F){return n(),i("div",null,s[0]||(s[0]=[l(`<h1 id="在-claude-code-cli-里-0-基础创建并使用自己的-skill" tabindex="-1">在 Claude Code CLI 里 0 基础创建并使用自己的 Skill <a class="header-anchor" href="#在-claude-code-cli-里-0-基础创建并使用自己的-skill" aria-label="Permalink to &quot;在 Claude Code CLI 里 0 基础创建并使用自己的 Skill&quot;">​</a></h1><p>手把手 10 分钟就能做出第一个技能，复制粘贴就能用</p><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>让你在终端里打一行命令，就能让 Claude 自动按你的模板生成周报、API 文档、测试用例……完全不用每次都写长长的 prompt。</p><h2 id="前提-只需满足这-3-点" tabindex="-1">前提（只需满足这 3 点） <a class="header-anchor" href="#前提-只需满足这-3-点" aria-label="Permalink to &quot;前提（只需满足这 3 点）&quot;">​</a></h2><ol><li>你已经能正常运行 <code>claude</code>（终端输入 claude 能进聊天界面）</li><li>你是 Pro / Max / Team / Enterprise 用户（免费账号没有 Skill 功能）</li><li>你用的是 Mac / Linux / Windows 的 WSL（普通 Windows 也行）</li></ol><h2 id="一键完成全部操作-最快-3-分钟" tabindex="-1">一键完成全部操作（最快 3 分钟） <a class="header-anchor" href="#一键完成全部操作-最快-3-分钟" aria-label="Permalink to &quot;一键完成全部操作（最快 3 分钟）&quot;">​</a></h2><p>在终端里直接复制粘贴下面整段命令，一次性创建好你的第一个 Skill：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 进入你当前项目（随便哪个文件夹都行）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/your/project</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 改成你自己的项目路径，或者直接新建一个空文件夹</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 创建技能文件夹和文件（直接运行下面 5 行）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .claude/skills/week-report</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .claude/skills/week-report/SKILL.md</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">---</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name: 周报生成器</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">description: 自动生成周报，支持中文，带任务清单、问题、计划</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">version: 1.0</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 周报生成技能（直接调用这个技能就能生成美美的周报）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">## 你只需要做的事</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 把本周完成、问题、下周计划发给我（可以直接复制钉钉/企业微信内容）</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 我会自动整理成标准格式并输出 Markdown</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">## 输出模板</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">**本周完成**</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">**阻塞&amp;问题**</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">**下周计划</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">**需要支持**</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 重启一下 claude 让它加载新技能</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span></span></code></pre></div><p>完成！现在你已经在项目里创建了一个叫“周报生成器”的 Skill。</p><h2 id="真正使用-就打这一句话" tabindex="-1">真正使用（就打这一句话） <a class="header-anchor" href="#真正使用-就打这一句话" aria-label="Permalink to &quot;真正使用（就打这一句话）&quot;">​</a></h2><p>回到 claude 聊天界面，直接打：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>用周报生成器帮我写这周的周报：</span></span>
<span class="line"><span>本周完成了登录页和支付接口对接</span></span>
<span class="line"><span>卡在了一个第三方 SDK 的兼容性问题</span></span>
<span class="line"><span>下周准备做用户中心和权限系统</span></span>
<span class="line"><span>需要 UI 姐姐出设计稿</span></span></code></pre></div><p>Claude 就会自动套用你刚才写的模板，秒出漂亮周报！</p><h2 id="再做-3-个最常用的小白-skill-复制粘贴就行" tabindex="-1">再做 3 个最常用的小白 Skill（复制粘贴就行） <a class="header-anchor" href="#再做-3-个最常用的小白-skill-复制粘贴就行" aria-label="Permalink to &quot;再做 3 个最常用的小白 Skill（复制粘贴就行）&quot;">​</a></h2><h2 id="skill-2-api-文档生成器" tabindex="-1">Skill 2：API 文档生成器 <a class="header-anchor" href="#skill-2-api-文档生成器" aria-label="Permalink to &quot;Skill 2：API 文档生成器&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .claude/skills/api-doc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .claude/skills/api-doc/SKILL.md</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">---</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name: API文档生成器</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">description: 把代码或接口描述转成标准 OpenAPI Markdown 文档</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">把你的接口代码或接口描述发给我，我会自动生成：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 接口名称、路径、方法</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 请求参数、请求体、返回值</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 示例请求和响应</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">直接发代码或文字说明就行！</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre></div><h2 id="skill-3-代码测试用例生成器" tabindex="-1">Skill 3：代码测试用例生成器 <a class="header-anchor" href="#skill-3-代码测试用例生成器" aria-label="Permalink to &quot;Skill 3：代码测试用例生成器&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .claude/skills/write-test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .claude/skills/write-test/SKILL.md</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">---</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name: 单元测试生成器</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">description: 自动为 Python/JS/Go 函数写 pytest 或 jest 测试用例</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">把你的函数代码贴给我，我会：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1. 分析函数逻辑</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2. 自动写出边界 case、正常 case、异常 case</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3. 输出完整的测试文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">支持语言：Python、TypeScript、JavaScript、Go</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre></div><h2 id="skill-4-git-提交信息生成器" tabindex="-1">Skill 4：Git 提交信息生成器 <a class="header-anchor" href="#skill-4-git-提交信息生成器" aria-label="Permalink to &quot;Skill 4：Git 提交信息生成器&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .claude/skills/git-commit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .claude/skills/git-commit/SKILL.md</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">---</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name: Git提交信息生成器</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">description: 按照 Conventional Commits 标准生成 git commit 消息</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">运行 git diff 后把改动发给我，或者直接告诉我改了什么，我会生成：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">feat: / fix: / docs: / refactor: / chore: 等标准格式</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre></div><h2 id="小白总结-以后想加新技能就-3-步" tabindex="-1">小白总结：以后想加新技能就 3 步 <a class="header-anchor" href="#小白总结-以后想加新技能就-3-步" aria-label="Permalink to &quot;小白总结：以后想加新技能就 3 步&quot;">​</a></h2><ol><li><p>在项目里创建文件夹</p><p><code>.claude/skills/你想的名字/</code></p></li><li><p>在里面新建 <a href="http://skill.md/" target="_blank" rel="noreferrer">SKILL.md</a> 文件，格式必须是：</p></li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">技能名字（中文英文都行）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">简短说明什么时候用（这句话最重要！）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">这里写详细说明、模板、步骤……</span></span></code></pre></div><ol><li>保存 → 退出 claude → 再进一次就自动生效</li></ol><h2 id="进阶一句话-想更强就执行这行" tabindex="-1">进阶一句话（想更强就执行这行） <a class="header-anchor" href="#进阶一句话-想更强就执行这行" aria-label="Permalink to &quot;进阶一句话（想更强就执行这行）&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 让 Claude 帮你生成任意技能（最省事）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;帮我用 skill-creator 创建一个‘产品需求文档PRD生成器’的技能，输出到 .claude/skills/prd-writer 文件夹&quot;</span></span></code></pre></div><p>这样 Claude 会自动问你几个问题，然后直接生成完整技能文件夹，你什么都不用写！</p><p>从现在起，你再也不用每次都复制长长的 prompt 了</p><p>一个技能，永久复用，团队共享，爽！</p>`,30)]))}const o=a(p,[["render",e]]);export{c as __pageData,o as default};
