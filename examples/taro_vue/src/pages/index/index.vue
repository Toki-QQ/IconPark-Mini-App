<template>
  <view class="index">
    <text class="welcome">{{ msg }}</text>
    <text class="app-name">IconPark-Mini-App</text>
    <text class="subhead"
      >You can use it just like the official IconPark(ByteDance).</text
    >

    <view class="usage">
      <text class="title">Single Icon</text>
      <view class="code">
        <text
          >import Like from "@iconpark-mini-app/taro-vue/lib/icons/Like";</text
        >
        <text>{{ singleIconText }}</text>
      </view>
      <view class="icon">
        <Like
          size="48"
          :fill="['#E57373', '#EF9A9A', '#FFFFFF', '#FFFFFF']"
          theme="multi-color"
        />
      </view>
    </view>

    <view class="usage">
      <text class="title">Full Icons Provider</text>
      <view class="code">
        <text
          >import { IconPark } from "@iconpark-mini-app/taro-vue/lib/all";</text
        >
        <text>{{ allIconsProviderText }}</text>
      </view>
      <view class="icon">
        <IconPark type="github" size="32" fill="#BDBDBD" :stroke-width="2" />
        <IconPark
          type="weixin-mini-app"
          size="32"
          fill="#81C784"
          :stroke-width="2"
        />
        <IconPark type="bytedance" size="32" fill="#4DD0E1" :stroke-width="2" />
        <IconPark type="alipay" size="32" fill="#64B5F6" :stroke-width="2" />
        <IconPark type="browser" size="32" fill="#9575CD" :stroke-width="2" />
      </view>
    </view>
    <view> </view>
  </view>
</template>

<script lang="ts" setup>
import "./index.less";

import { ref } from "vue";
import Like from "@iconpark-mini-app/taro-vue/lib/icons/Like";
import { IconPark } from "@iconpark-mini-app/taro-vue/lib/all";

const msg = ref<string>("Welcome to use");

let singleIconText = `<Like size="48" :fill="['#E53935', '#EF9A9A', '#FFFFFF', '#FFFFFF']" theme="multi-color" />`;
let allIconsProviderText = `<IconPark type="github" size="32" fill="#BDBDBD" :stroke-width="2" />
        <IconPark type="weixin-mini-app" size="32" fill="#81C784" :stroke-width="2" />
        <IconPark type="bytedance" size="32" fill="#4DD0E1" :stroke-width="2" />
        <IconPark type="alipay" size="32" fill="#64B5F6" :stroke-width="2" />
        <IconPark type="browser" size="32" fill="#9575CD" :stroke-width="2" />`;
</script>
