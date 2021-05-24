<template>
  <i class="iconfont" :class="icon"></i>
</template>

<script>
const mapList = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
}
export default {
  name:'Icon',
  props:{
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
     return mapList[this.type]
    }
  }
}
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont {
  color:inherit;
  font-size: inherit;
}
</style>>