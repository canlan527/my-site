<template>
  <div class="concat-container">
    <ul>
      <li>
        <a href="https://github.com/">
          <icons type="github"></icons>
          <span>{{ github }}</span>
        </a>
      </li>
      <li>
        <a>
          <icons type="mail"></icons>
          <span>{{ email }}</span>
        </a>
      </li>
      <li>
        <a href="tencent://message/?Menu=yes&uin=1481086136&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
          <icons type="qq"></icons>
          <span>{{ qq }}</span>
        </a>
      </li>
      <li>
        <a>
          <icons type="weixin"></icons>
          <span>{{ weixin }}</span>
          <div class="img">
            <img :src="weixinPic" alt="">
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icons from "@/components/Icons"
import weixinPic from "@/assets/images/weixin.jpg"

  export default {
    name: "Concat",
    components: {
      Icons,
    },
    props: {
      github: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      qq: {
        type: String,
        required: true,
      },
      weixin: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        weixinPic:weixinPic
      }
    }
  }
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
      transition:.3s;
    }
    margin-bottom: 22px;
    .img {
      width:150px;
      height: 150px;
      padding:20px;
      background-color: #fff;
      position: absolute;
      top:-200px;
      bottom:22px;
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
        bottom:-4px;
      }
      img {
        width:150px;
        height: 150px;
      }
    }
  }

  .icon-container {
    margin-right: 8px;
  }
}
</style>