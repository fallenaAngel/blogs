#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

push_addr=git@github.com:fallenaAngel/blogs.git # git提交地址，也可以手动设置，比如：push_addr=git@github.com:你的名字/仓库名称.git
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=master:gh-pages # 推送的分支

# 生成静态文件
npm run build:win

# 进入生成的文件夹
cd $dist_path

# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:fallenaAngel/blogs.git
else
  msg='来自github action的自动部署'
  githubUrl=https://fallenaAngel:${GITHUB_TOKEN}@github.com/fallenaAngel/blogs.git
  git config --global user.name "lidingding"
  git config --global user.email "1940864969@qq.com"
fi

git init
git add -A
git commit -m "deploy, $commit_info"
git push -f $push_addr $push_branch

cd -
rm -rf $dist_path
