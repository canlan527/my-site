<template>
  <div class="image-loader-container">
    <img v-if="!allDone" :src="placeholder"  class="placeholder-image">
    <img :src="src" @load="handleLoaded" :style="imageStyle">
  </div>
</template>

<script>
  export default {
    name: 'ImageLoader',
    props: {
      src: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        default:500
      }
    },
    data() {
      return {
        flag: false,
        allDone: false,
      }
    },
    computed: {
      imageStyle() {
        let opacity = 0
        if(this.flag) {
          opacity = 1;
        }
        return {
          opacity,
          transition: `${this.duration}ms`
        }
      }
    },
    methods: {
      handleLoaded() {
        this.flag = true
        setTimeout(() => {
          this.allDone = true
          this.$emit('load')
        },this.duration)
      }
    }
  }
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.image-loader-container {
  width: 100%; 
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
  }
  .placeholder-image {
    filter: blur(2vw);
  }
}
</style>
