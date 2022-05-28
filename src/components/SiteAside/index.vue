<template>
  <div class="site-aside-container">
    <template v-if="data">
      <avatar :url="data.avatar" :size="140"></avatar>
      <h1>{{data.siteTitle}}</h1>
    </template>
    <div class="site-bottom">
      <slider-menu></slider-menu>
      <contact v-if="data"></contact>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import SliderMenu from "./SliderMenu/menu";
import { mapState } from "vuex";

export default {
  name: "SiteAside",
  components: {
    Avatar,
    Contact,
    SliderMenu,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
.site-aside-container {
  width: 100%;
  height: 100%;
  h1 {
    color: #fff;
    text-align: center;
  }
  .avatar-container {
    padding: 20px 0;
    margin: 0 auto;
  }
  .site-bottom {
    height: calc(100% - 180px - 200px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 0 30px 0;
    box-sizing: border-box;
    .slider-menu-container {
      margin-bottom: 12px;
      padding-bottom: 30px;
    }
  }
}
</style>
