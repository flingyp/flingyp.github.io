# 自动生成 CHANGELOG

## 介绍

`conventional-changelog` 和 `standard-version` 都是可以生成 CHANGELOG 文件的包，但是 `standard-version` 包还包括包版本更新、以及打 Tag 的功能。`conventional-changelog` 包只提供生成 CHANGELOG 的功能

## `conventional-changelog`

安装相关依赖

`pnpm add conventional-changelog conventional-changelog-cli conventional-changelog-custom-config compare-func -D`

在项目根目录创建 `changelog-option.js` 文件来自定义 CHANGELOG 内容格式

```javascript
const compareFunc = require('compare-func');

module.exports = {
  writerOpts: {
    transform: (commit, context) => {
      let discard = true;
      const issues = [];
      commit.notes.forEach((note) => {
        note.title = 'BREAKING CHANGES';
        discard = false;
      });
      if (commit.type === 'feat') {
        commit.type = '✨ Features | 新功能';
      } else if (commit.type === 'fix') {
        commit.type = '🐛 Bug Fixes | Bug 修复';
      } else if (commit.type === 'perf') {
        commit.type = '⚡ Performance Improvements | 性能优化';
      } else if (commit.type === 'revert' || commit.revert) {
        commit.type = '⏪ Reverts | 回退';
      } else if (discard) {
        return;
      } else if (commit.type === 'docs') {
        commit.type = '📝 Documentation | 文档';
      } else if (commit.type === 'style') {
        commit.type = '💄 Styles | 风格';
      } else if (commit.type === 'refactor') {
        commit.type = '♻ Code Refactoring | 代码重构';
      } else if (commit.type === 'test') {
        commit.type = '✅ Tests | 测试';
      } else if (commit.type === 'build') {
        commit.type = '👷‍ Build System | 构建';
      } else if (commit.type === 'ci') {
        commit.type = '🔧 Continuous Integration | CI 配置';
      } else if (commit.type === 'chore') {
        commit.type = '🎫 Chores | 其他更新';
      }

      if (commit.scope === '*') {
        commit.scope = '';
      }

      if (typeof commit.hash === 'string') {
        commit.hash = commit.hash.substring(0, 7);
      }

      if (typeof commit.subject === 'string') {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl;

        if (url) {
          url = `${url}/issues/`;
          // Issue URLs.
          commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue);
            return `[#${issue}](${url}${issue})`;
          });
        }

        if (context.host) {
          // User URLs.
          commit.subject = commit.subject.replace(
            /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
            (_, username) => {
              if (username.includes('/')) {
                return `@${username}`;
              }
              return `[@${username}](${context.host}/${username})`;
            },
          );
        }
      }

      // remove references that already appear in the subject
      commit.references = commit.references.filter((reference) => {
        if (issues.indexOf(reference.issue) === -1) {
          return true;
        }
        return false;
      });
      return commit;
    },
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    notesSort: compareFunc,
  },
};
```

添加脚本命令

```json
// -p custom-config 自定义风格
// -i CHANGELOG.md 输出的文件名称
// -r 从最新的版本生成多少个版本。如果为0，则整个更改日志将被重新生成，输出文件将被覆盖。默认值:1
// -n ./changelog-option.js 指定自定义配置
{
  "scripts": {
    "version": "conventional-changelog -p custom-config -i CHANGELOG.md -s -n ./changelog-option.js && git add CHANGELOG.md",
    "postversion": "git push --tags" // 在提交version变更后执行
  }
}
```

## `standard-version`

- 安装：`pnpm install standard-version -D`

添加脚本命令：

```json
{
  "scripts": {
    "release": "standard-version", // 发版
    "first-release": "pnpm run release -- --first-release" // 第一次发版
  }
}
```

### 手动控制版本更新

```json
{
  "script": {
    "release:changelog:major": "standard-version --release-as major", // 升级 major
    "release:changelog:minor": "standard-version --release-as minor", // 升级 minor
    "release:changelog:patch": "standard-version --release-as patch" // 升级 patch
  }
}
```

### 配置哪些 commit 消息写入 changelog

在自己项目根目录下创建配置文件 `.versionrc.json`

hidden 属性值控制是否将该类型的 commit 消息写入 changlog, 不填的情况下默认是:false

```json
{
  "types": [
    { "type": "feat", "section": "✨ Features | 新功能" },
    { "type": "fix", "section": "🐛 Bug Fixes | Bug 修复" },
    { "type": "init", "section": "🎉 Init | 初始化", "hidden": true },
    { "type": "docs", "section": "✏️ Documentation | 文档", "hidden": true },
    { "type": "style", "section": "💄 Styles | 风格", "hidden": true },
    { "type": "refactor", "section": "♻️ Code Refactoring | 代码重构" },
    {
      "type": "perf",
      "section": "⚡ Performance Improvements | 性能优化",
      "hidden": true
    },
    { "type": "test", "section": "✅ Tests | 测试", "hidden": true },
    { "type": "revert", "section": "⏪ Revert | 回退", "hidden": true },
    {
      "type": "build",
      "section": "📦‍ Build System | 打包构建",
      "hidden": true
    },
    {
      "type": "chore",
      "section": "🚀 Chore | 构建/工程依赖/工具",
      "hidden": true
    },
    {
      "type": "ci",
      "section": "👷 Continuous Integration | CI 配置",
      "hidden": true
    }
  ]
}
```
