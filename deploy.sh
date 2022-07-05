#!/usr/bin/env sh

# 忽略错误
set -e

# 1. 提交源码到指定仓库
git add -A
git commit -m 'flingyp-code-record'
git push -f git@github.com:flingyp/vitepress-flingyp-blog-code.git main


# 2.打包
npm run build

# 进入待发布的目录
cd .vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Update Blog'

# 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:flingyp/flingyp.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages


cd -