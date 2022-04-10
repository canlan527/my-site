<template>
  <div class="home-container" ref="homeContainerRef"
    @wheel="handleWheel"
    @transitionend="handleTransitionEnd"
  >
    <ul class="carousel-container" ref="carousel" :style="marginTop">
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item"></CarouselItem>
      </li>
    </ul>
    <div class="icon icon-up" v-show="index > 0" @click="switchTo(index - 1)">
      <Icon type="arrowUp"></Icon>
    </div>
    <div class="icon icon-down" v-show="index < this.banners.length - 1"
      @click="switchTo(index + 1)" >
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in banners"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icons";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      index: 0,
      containerHeight: 0,
      switching: false, // 是否正在滚动banner
    };
  },
  components: {
    CarouselItem,
    Icon,
  },
  computed: {
    marginTop() {
      return {
        "margin-top": -this.index * this.containerHeight + "px",
      };
    },
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    this.containerHeight = this.$refs.carousel.clientHeight;
    window.addEventListener("resize", this.handleResize, false);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize, false);
  },
  methods: {
    // 切换轮播图下标
    switchTo(i) {
      this.index = i;
    },
    // 鼠标滚轮事件
    handleWheel(e) {
      if (!this.switching && e.deltaY < -15 && this.index > 0) {
        // 向上滚动
        console.log("向上滚动");
        this.switching = true;
        this.index--;
      } else if (!this.switching && e.deltaY > 15 && this.index < this.banners.length - 1 ) {
        // 向下滚动
        console.log("向下滚动");
        this.switching = true;
        this.index++;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.carousel.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";

@gap: 25px;
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  // width: 400px;
  // height: 300px;
  // overflow: visible;
  // border: 2px solid tan;
  // margin: 100px auto;

}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  transform: translateX(-50%);
  font-size: 35px;
  color: @gray;
  cursor: pointer;
  &.icon-up {
    top: @gap;
    animation: jump-up 5s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 5s infinite;
  }
  @keyframes jump-up {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: @gap;
  li {
    width: 5px;
    height: 5px;
    background: #333;
    border: 2px solid @dark;
    border-radius: 50%;
    margin-bottom: @gap;
    cursor: pointer;
    &.active {
      background-color: #fff;
    }
  }
}
</style>