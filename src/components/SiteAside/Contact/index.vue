<template>
  <div class="concat-container">
    <ul>
      <li>
        <a target="_blank" :href="data.github">
          <icons type="github"></icons>
          <span>{{ data.githubName }}</span>
        </a>
      </li>
      <li>
        <a>
          <icons type="mail"></icons>
          <span>{{ data.mail }}</span>
        </a>
      </li>
      <li>
        <a
          :href="
            `tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`
          "
        >
          <icons type="qq"></icons>
          <span>{{ data.qq }}</span>
        </a>
      </li>
      <li>
        <a>
          <icons type="weixin"></icons>
          <span>{{ data.weixin }}</span>
          <div class="img">
            <img :src="data.weixinQrCode" alt="" />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icons from "@/components/Icons";
import { mapState } from "vuex";
export default {
  name: "Contact",
  components: {
    Icons,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.concat-container {
  width: 100%;
  background-color: transparent;
  padding-bottom: 12px;
  box-sizing: border-box;
  ul {
    padding-top: 26px;
  }
  li {
    font-size: 20px;
    height: 22px;
    color: @gray;
    padding-left: 20px;
    position: relative;
    &:hover {
      color: @primary;
    }
    &:hover .img {
      transform: scaleY(1);
      transition: 0.3s;
    }
    margin-bottom: 22px;
    .img {
      width: 150px;
      height: 150px;
      padding: 20px;
      background-color: #fff;
      position: absolute;
      top: -200px;
      bottom: 22px;
      transform: scaleY(0);
      transform-origin: center bottom;
      border-radius: 4px;
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        background: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        bottom: -4px;
      }
      img {
        width: 150px;
        height: 150px;
      }
    }
  }

  .icon-container {
    margin-right: 8px;
  }
}
</style>
