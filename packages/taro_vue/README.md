# IconPark-Mini-App-Taro-Vue

<p align="center">
<img src="./iconpark-mini-app-taro-vue.png" >
<p></p>
<b>An iconpark provider for taro.js with vue.js. When you are developing cross-platform mini programs based on Taro using Vue 3 and want to use the IconPark library, this project may be helpful. It allows you to use just like the official IconPark library when developing mini programs.</b>
<p>

<br/>
<br/>

#### English &nbsp; | &nbsp; <a href="./README_zh-CN.md">简体中文<a>

#### Github: https://github.com/Toki-QQ/IconPark-Mini-App

#### Issues: https://github.com/Toki-QQ/IconPark-Mini-App/issues

<br/>
<br/>

# Base on

#### IconPark &nbsp;(ByteDance)

```bash
Github: https://github.com/bytedance/iconpark

npm: https://www.npmjs.com/package/@icon-park/svg
```

#### svg64 &nbsp;(scriptex)

```bash
Github: https://github.com/scriptex/svg64

npm: https://www.npmjs.com/package/svg64
```

---

<br/>
<br/>

# Usage

### Install

```bash
npm install --save @iconpark-mini-app/taro-vue

# or

pnpm add @iconpark-mini-app/taro-vue
```

### Single Icon Example

```bash
<script setup>
    import Like from "@iconpark-mini-app/taro-vue/lib/icons/Like";
</script>


<template>
    <Like size="48" :fill="['#E53935', '#EF9A9A', '#FFFFFF', '#FFFFFF']" theme="multi-color" />
</template>
```

### Full Icons Provider Example

```bash
<script setup>
    import { IconPark } from "@iconpark-mini-app/taro-vue/lib/all";
</script>


<template>
    <IconPark type="github" size="32" fill="#BDBDBD" :stroke-width="2" />
</template>
```

<br/>
<br/>

# Thanks

<p align="center">
<img width="80" height="80" src="https://avatars.githubusercontent.com/u/4158466?s=200&v=4" >
</p>

### Bytedance Inc.

###### https://github.com/bytedance

```bash
IconPark Developer
```

#

<p align="center">
<img width="80" height="80" src="https://avatars.githubusercontent.com/u/4603539?v=4" >
</p>

### scriptex

###### https://github.com/scriptex

```bash
svg64 Developer
```

#

<p align="center">
<img width="80" height="80" src="https://avatars.githubusercontent.com/u/110720510?s=200&v=4" >
</p>

### Turbo Snail

###### https://github.com/turbosnailcn

```bash
A team of software development
```

#

<p align="center">
<img width="80" height="80" src="https://avatars.githubusercontent.com/u/57043221?v=4" >
</p>

### lankerened

###### https://github.com/lankerened

```bash
My friend who taught a lot
```

<br/>
<br/>

# Finally

```bash
Thank you for using, and wish you have a good experience.
```
