<template>
  <div class="to-top-container" v-if="show" @click="goTop">
    Top
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  methods: {
    handleScroll(dom) {
      if(!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop > 1200 ? true : false;
      
    },
    goTop() {
      this.$bus.$emit('setMainScroll', 0)
    }
  },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.to-top-container {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: #fff;
  font-size:16px;
  background-color: rgba(0, 0, 0, .2);
  line-height: 70px;
  text-align: center;
  position:fixed;
  bottom: 50px;
  right:50px;
  z-index: 100;
  cursor: pointer;
}
</style>