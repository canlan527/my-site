<template>
  <div class="image-loader-container">
    <img :src="placeholder" :style="miniStyle" class="img-fake" />
    <img :src="src" :style="imageStyle" class="img-real"  ref="imageRef" />
  </div>
</template>

<script>
  export default {
    name: 'ImageLoader',
    props: {
      src: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      duration: {
        type: Number,
        default:500
      }
    },
    data() {
      return {
        flag: false
      }
    },
    mounted() {
      this.loadImage()
    },
    computed: {
      imageStyle() {
        const opacity = this.flag ? 'opacity: 0' : 'opacity: 1'
        return {
          opacity,
          transition: `all ${this.duration}ms`
        }
      },
      miniStyle() {
        const opacity = this.flag ? 'opacity: 1' : 'opacity: 0'
        return {
          opacity,
        }
      }
    },
    methods: {
      loadImage() {
        const img = this.$refs.imageRef
        this.flag = false
        img.onreadystatechange = function() {
           if(img.readyState=="complete"||img.readyState=="loaded"){
                this.flag = true
                this.$emit('load')
            }
        }
      },

    }
  }
</script>

<style lang="less" scoped>
.image-loader-container {
  width: 700px;
  height: 460px;
  position: relative;
  overflow: hidden;
  img{
    width:100%;
    height:100%;
    display: block;
  }
  .img-real {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .img-fake {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    filter: blur(2vw);
  }
}
</style>