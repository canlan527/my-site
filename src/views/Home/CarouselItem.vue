<template>
  <div class="carousel-item-container" ref="container" 
  @mousemove="handleMousemove" @mouseleave="handleMouseleave">
    <div class="carousel-img" ref="image">
      <ImageLoader
        @load="showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        :style="imagePosition"
      ></ImageLoader>
    </div>
    <!-- <div class="test">横坐标：{{this.mouseX}} 纵坐标：{{this.mouseY}}</div> -->
    <div class="title" ref="titleRef">{{ carousel.title }}</div>
    <div class="desc" ref="descRef">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  name: "carousel-item-container",
  components: {
    ImageLoader,
  },
  props: ["carousel"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 外层容器尺寸
      innerSize: null, // 内层图片尺寸
      mouseX: 0,
      mouseY: 0,
    };
  },
  created() {
    // console.log(this.carousel)
  },
  mounted() {
    this.titleWidth = this.$refs.titleRef.clientWidth;
    this.descWidth = this.$refs.descRef.clientWidth;
    this.setSize(); // 设置尺寸
    // 当拉伸改变页面视口宽高时，重新获取并设置尺寸
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    // 关闭组件前 注销事件
    window.removeEventListener("resize", this.resize);
  },
  computed: {
    imagePosition() {
      if(!this.containerSize || !this.innerSize) {
        return ;
      }
      const extraWidth =  this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;


      // x / this.mouseX = -extraWidth / this.containerSize.width
      // x  = -extraWidth / this.containerSize.width * this.mouseX
      const left = -extraWidth / this.containerSize.width * this.mouseX;
      const top = -extraHeight / this.containerSize.height * this.mouseY;

       
      // console.log(left, top)

      return {
        transform: `translate(${left}px, ${top}px)`,
        transition: `.3s`
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      }
    }
  },
  methods: {
    showWords() {
      const titleRef = this.$refs.titleRef;
      const descRef = this.$refs.descRef;
      titleRef.style.opacity = 1;
      titleRef.style.width = 0;
      titleRef.style.transition = "1s";
      titleRef.clientWidth; // 唤醒 width
      titleRef.style.width = this.titleWidth + "px";

      descRef.style.opacity = 1;
      descRef.style.width = 0;
      descRef.style.transition = "2s 1s";
      descRef.clientWidth;
      descRef.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      }
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      }

    },
    handleMousemove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      
      // console.log( this.mouseX,this.mouseY)
      // console.log(e.clientX, e.clientY)
    },
    handleMouseleave(e) {
      this.mouseX = this.containerSize.width / 2;
      this.mouseY = this.containerSize.height / 2;
    }
  },

};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 35px;
  position: relative;
  letter-spacing: 5px;
  overflow: hidden;
  .carousel-img {
    position: absolute;
    width: 110%;
    height: 110%;
    z-index: -1;
  }
  .test {
    position:absolute;
    top:0;
    left:0;
    font-size: 15px;
  }
  .title,
  .desc {
    .self-center();
    transform: translateY(-50%);
    top: calc(50% - 30px);
    left: 30px;
    text-shadow: 1px 0 0 rgba(255, 255, 255, 0.5),
      0 1px 0 rgba(255, 255, 255, 0.5), -1px 0 0 rgba(255, 255, 255, 0.5),
      0 -1px 0 rgba(255, 255, 255, 0.5);
    color: lighten(@gray, 20%);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .desc {
    font-size: 18px;
    top: calc(50% + 30px);
  }
}
</style>