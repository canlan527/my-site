<template>
  <div class="site-aside-container">
    <avatar :url="pic" :size="140"></avatar>
    <h1>对长亭晚の小窝</h1>
    <div class="site-bottom">
      <slider-menu></slider-menu>
      <contact
        :github="github"
        :email="email"
        :qq="qq"
        :weixin="weixin"
      ></contact>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import SliderMenu from "./SliderMenu/menu";
import pic from "@/assets/images/3.jpg";
export default {
  name: "SiteAside",
  components: {
    Avatar,
    Contact,
    SliderMenu,
  },
  data() {
    return {
      pic,
      github: "canlan527",
      email: "canlan527@gmail.com",
      qq: "1481086138",
      weixin: "梧桐细雨",
    };
  },
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