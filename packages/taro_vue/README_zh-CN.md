# IconPark-Mini-App-Taro-Vue

<p align="center">
<img src="./iconpark-mini-app-taro-vue.png" >
<p></p>
<b>一个基于 IconPark 的 Taro.js 图标支持库。当您在使用 Vue 3 去开发基于 Taro 的跨平台小程序，同时您还想使用 IconPark 图标库的时候，本项目或许能给你提供帮助。它可以让你在开发小程序的时候，像在使用官方的 IconPark 图标库一样。</b>
<p>

<br/>

#### <a href="./README_zh-CN.md">English<a> &nbsp; | &nbsp; 简体中文

#### Github: https://github.com/Toki-QQ/IconPark-Mini-App

#### 提问或反馈: https://github.com/Toki-QQ/IconPark-Mini-App/issues

<br/>

# 本项目基于

#### IconPark （由字节跳动公司开发）

```bash
Github: https://github.com/bytedance/iconpark

npm: https://www.npmjs.com/package/@icon-park/svg
```

#### svg64 （由 scriptex 开发）

```bash
Github: https://github.com/scriptex/svg64

npm: https://www.npmjs.com/package/svg64
```

---

<br/>

# 使用方法

### 安装

```bash
npm install --save @iconpark-mini-app/taro-vue

# or

pnpm add @iconpark-mini-app/taro-vue
```

### 单图标 例子

```bash
<script setup>
    import Like from "@iconpark-mini-app/taro-vue/lib/icons/Like";
</script>


<template>
    <Like size="48" :fill="['#E53935', '#EF9A9A', '#FFFFFF', '#FFFFFF']" theme="multi-color" />
</template>
```

### 图标提供器 例子

```bash
<script setup>
    import { IconPark } from "@iconpark-mini-app/taro-vue/lib/all";
</script>


<template>
    <IconPark type="github" size="32" fill="#BDBDBD" :stroke-width="2" />
</template>
```

<br/>

# 感谢

<p align="center">
<img width="80" height="80" src="https://avatars.githubusercontent.com/u/4158466?s=200&v=4" >
</p>

### 字节跳动公司

###### https://github.com/bytedance

```bash
IconPark 图标库的开发者
```

#

<p align="center">
<img width="80" height="80" src="https://avatars.githubusercontent.com/u/4603539?v=4" >
</p>

### scriptex

###### https://github.com/scriptex

```bash
svg64 的开发者
```

#

<p align="center">
<img width="80" height="80" src="https://avatars.githubusercontent.com/u/110720510?s=200&v=4" >
</p>

### Turbo Snail

###### https://github.com/turbosnailcn

```bash
一个专注于软件研发的团队
```

#

<p align="center">
<img width="80" height="80" src="https://avatars.githubusercontent.com/u/57043221?v=4" >
</p>

### lankerened

###### https://github.com/turbosnailcn

```bash
一个教会了我很多的朋友
```

<br/>

# 最后

```bash
感谢您的使用，希望这个项目能让你拥有更好的开发体验。
```
