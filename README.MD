# 介绍

vuePress个人博客，基于[vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing) 的一个vuePress主题实现，配置地址参考[这里](https://doc.xugaoyi.com/) node版本**v22.1.0**，走github自动提交和部署。


## 项目功能
* 一站式搜索
* 各种色系定制，支持深色模式、阅读模式
* 百度推送
* 自动识别docs下的目录并生成对应的导航菜单
* 评论系统
* github提交自动部署，支持在线修改和新增文章
* 可以批量快速修改.md文件的front matter
* demo模块插件，可查看demo、源码，以及跳转到codepen在线编辑


## 快速上手

```bash
# install dependency
npm install # or yarn install

# develop
npm run dev # or yarn dev，window系统运行npm run dev:win

# dev启动时可以在dev docs后面添加 --temp .temp来开启文件热更新
```

## 构建

本地window环境构建时需要运行 ```npm run build:win```，因为项目集成了GitHub 自动CI，每次提交代码时可以自动构建并部署，配置文件是```.github/workflows/ci.yml```，yml执行环境是ubuntu Linux环境，Linux环境需要使用export配置node options，```export NODE_OPTIONS=--openssl-legacy-provider```，而window环境使用set，所以运行```npm run deploy```命令时，注意区分环境手动更改build命令。