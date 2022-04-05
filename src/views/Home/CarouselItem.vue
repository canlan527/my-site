<template>
  <div class="carousel-item-container">
    <div class="carousel-img">
      <ImageLoader @load="showWords" :src="carousel.bigImg" :placeholder="carousel.midImg"></ImageLoader>
    </div>
    <div class="title" ref="titleRef">{{carousel.title}}</div>
    <div class="desc" ref="descRef">{{carousel.description}}</div>      
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
  name: 'carousel-item-container',
  components: {
    ImageLoader,
  },
  props: ['carousel'],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    }
  },
  created() {
    // console.log(this.carousel)
  },
  mounted() {
    this.titleWidth = this.$refs.titleRef.clientWidth;
    this.descWidth = this.$refs.descRef.clientWidth;
  },
  computed: {

  },
  methods: {
    showWords() {
      const titleRef = this.$refs.titleRef;
      const descRef = this.$refs.descRef;
      titleRef.style.opacity = 1;
      titleRef.style.width = 0;
      titleRef.style.transition = '1s';
      titleRef.clientWidth; // 唤醒 width
      titleRef.style.width = this.titleWidth + 'px';

      descRef.style.opacity = 1;
      descRef.style.width = 0;
      descRef.style.transition = '2s 1s';
      descRef.clientWidth;
      descRef.style.width = this.descWidth + 'px';
    },
  }

}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';
.carousel-item-container{
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 35px;
  position: relative;
  letter-spacing:5px;

  .carousel-img{
    width: 100%;
    height: 100%;
  }
  .title, .desc {
    .self-center(); 
    transform: translateY(-50%);
    top: calc(50% - 30px);
    left:30px;
    text-shadow: 1px 0 0 rgba(255, 255, 255, 0.5), 0 1px 0 rgba(255, 255, 255, 0.5),-1px 0 0 rgba(255, 255, 255, 0.5), 0 -1px 0 rgba(255, 255, 255, 0.5);
    color: lighten(@gray, 20%);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .desc{
    font-size: 18px;
    top: calc(50% + 30px);
    
  }
}
</style>