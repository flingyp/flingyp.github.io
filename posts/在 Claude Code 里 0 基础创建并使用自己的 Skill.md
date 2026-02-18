# 在 Claude Code CLI 里 0 基础创建并使用自己的 Skill

手把手 10 分钟就能做出第一个技能，复制粘贴就能用

## 目标

让你在终端里打一行命令，就能让 Claude 自动按你的模板生成周报、API 文档、测试用例……完全不用每次都写长长的 prompt。

## 前提（只需满足这 3 点）

1. 你已经能正常运行 `claude`（终端输入 claude 能进聊天界面）
2. 你是 Pro / Max / Team / Enterprise 用户（免费账号没有 Skill 功能）
3. 你用的是 Mac / Linux / Windows 的 WSL（普通 Windows 也行）

## 一键完成全部操作（最快 3 分钟）

在终端里直接复制粘贴下面整段命令，一次性创建好你的第一个 Skill：

```bash
# 1. 进入你当前项目（随便哪个文件夹都行）
cd /path/to/your/project     # 改成你自己的项目路径，或者直接新建一个空文件夹

# 2. 创建技能文件夹和文件（直接运行下面 5 行）
mkdir -p .claude/skills/week-report
cat > .claude/skills/week-report/SKILL.md << 'EOF'
---
name: 周报生成器
description: 自动生成周报，支持中文，带任务清单、问题、计划
version: 1.0
---

# 周报生成技能（直接调用这个技能就能生成美美的周报）

## 你只需要做的事
- 把本周完成、问题、下周计划发给我（可以直接复制钉钉/企业微信内容）
- 我会自动整理成标准格式并输出 Markdown

## 输出模板
**本周完成**
- ...

**阻塞&问题**
- ...

**下周计划
- ...

**需要支持**
- ...

EOF

# 3. 重启一下 claude 让它加载新技能
claude

```

完成！现在你已经在项目里创建了一个叫“周报生成器”的 Skill。

## 真正使用（就打这一句话）

回到 claude 聊天界面，直接打：

```
用周报生成器帮我写这周的周报：
本周完成了登录页和支付接口对接
卡在了一个第三方 SDK 的兼容性问题
下周准备做用户中心和权限系统
需要 UI 姐姐出设计稿

```

Claude 就会自动套用你刚才写的模板，秒出漂亮周报！

## 再做 3 个最常用的小白 Skill（复制粘贴就行）

## Skill 2：API 文档生成器

```bash
mkdir -p .claude/skills/api-doc
cat > .claude/skills/api-doc/SKILL.md << 'EOF'
---
name: API文档生成器
description: 把代码或接口描述转成标准 OpenAPI Markdown 文档
---

把你的接口代码或接口描述发给我，我会自动生成：
- 接口名称、路径、方法
- 请求参数、请求体、返回值
- 示例请求和响应

直接发代码或文字说明就行！
EOF

```

## Skill 3：代码测试用例生成器

```bash
mkdir -p .claude/skills/write-test
cat > .claude/skills/write-test/SKILL.md << 'EOF'
---
name: 单元测试生成器
description: 自动为 Python/JS/Go 函数写 pytest 或 jest 测试用例
---

把你的函数代码贴给我，我会：
1. 分析函数逻辑
2. 自动写出边界 case、正常 case、异常 case
3. 输出完整的测试文件

支持语言：Python、TypeScript、JavaScript、Go
EOF

```

## Skill 4：Git 提交信息生成器

```bash
mkdir -p .claude/skills/git-commit
cat > .claude/skills/git-commit/SKILL.md << 'EOF'
---
name: Git提交信息生成器
description: 按照 Conventional Commits 标准生成 git commit 消息
---

运行 git diff 后把改动发给我，或者直接告诉我改了什么，我会生成：
feat: / fix: / docs: / refactor: / chore: 等标准格式
EOF

```

## 小白总结：以后想加新技能就 3 步

1. 在项目里创建文件夹

   `.claude/skills/你想的名字/`

2. 在里面新建 [SKILL.md](http://skill.md/) 文件，格式必须是：

```yaml
---
name: 技能名字（中文英文都行）
description: 简短说明什么时候用（这句话最重要！）
---
这里写详细说明、模板、步骤……
```

1. 保存 → 退出 claude → 再进一次就自动生效

## 进阶一句话（想更强就执行这行）

```bash
# 让 Claude 帮你生成任意技能（最省事）
claude -p "帮我用 skill-creator 创建一个‘产品需求文档PRD生成器’的技能，输出到 .claude/skills/prd-writer 文件夹"

```

这样 Claude 会自动问你几个问题，然后直接生成完整技能文件夹，你什么都不用写！

从现在起，你再也不用每次都复制长长的 prompt 了

一个技能，永久复用，团队共享，爽！
