Quit smoking is a Taro&Taro UI Demo

目前Taro UI有onchange/oninput捕获不到的bug，如果是小程序用1.2.1，如果是H5用1.2.0

快更新啊Taro-ui~!


## 安装

需要安装 `Taro` 开发工具 `@tarojs/cli`

```bash
npm install -g @tarojs/cli
```

## 编译并预览

进入项目目录开始开发，可以选择小程序预览模式，或者 h5 预览模式，若使用微信小程序预览模式，则需要自行下载并打开微信开发者工具，选择预览项目根目录。

**微信小程序编译预览模式**

```bash
# npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
```

**H5 编译预览模式**

```bash
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
# npx用户也可以使用
$ npx taro build --type h5 --watch
```






# 技术栈

React + Taro + Taro UI + Dva(mobx目前兼容性不行) + Scss + ES6/ES7


## 适配进度

- [x] H5 -- 90%
- [x] 微信小程序 -- 95%
- [ ] 支付宝小程序 -- 25%
- [ ] 百度小程序 -- 25%
- [ ] React Native -- TaroUI跟不上我也很无奈啊
- [ ] 字节跳动小程序 -- 0%
- [ ] 快应用 -- 0%

## 目标功能

- [x] 前台 -- 完成
- [ ] 后台 -- 20%

# 业务介绍

目录结构

    ├── .temp                  // H5编译结果目录
    ├── .rn_temp               // RN编译结果目录
    ├── dist                   // 小程序编译结果目录
    ├── config                 // Taro配置目录
    │   ├── dev.js                 // 开发时配置
    │   ├── index.js               // 默认配置
    │   └── prod.js                // 打包时配置
    ├── screenshots            // 项目截图，和项目开发无关
    ├── site                   // H5静态文件（打包文件）
    ├── src                    // 源码目录
    │   ├── components             // 组件
    │   ├── config                 // 项目开发配置
    │   ├── images                 // 图片文件
    │   ├── models                 // redux models
    │   ├── pages                  // 页面文件目录
    │   │   └── home
    │   │       ├── index.js           // 页面逻辑
    │   │       ├── index.scss         // 页面样式
    │   │       └── service.js        // 页面api
    │   ├── styles             // 样式文件
    │   ├── utils              // 常用工具类
    │   ├── app.js             // 入口文件
    │   └── index.html
    ├── package.json
    └── template.js            // pages模版快速生成脚本,执行命令 npm run tep `文件名`






# 文档

### Taro开发文档

> https://nervjs.github.io/taro/docs/README.html

### dva开发文档

> https://dvajs.com

### Taro UI开发文档

> https://taro-ui.aotu.io

### 微信小程序开发文档

> https://developers.weixin.qq.com/miniprogram/dev





# 赞助

感谢支持真公益，我会及时更新赞助墙

<img src="wechatsponse.jpeg" width="200px" /> <img src="alipaysponse.jpeg" width="200px" />




