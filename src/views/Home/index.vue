<template>
  <div class="home-container" ref="homeContainerRef">
    <h1>主页</h1>
    <button @click="handleClick">click</button>
    <div class="list">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleClick() {
      // console.log('123')
      this.$showMessage({
        content: "Hello",
        type: 'success',
        container: this.$refs.homeContainerRef,
        callback: function() {
          console.log('完成！！！！')
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  background-color:tan;
  height:100vh;

}
</style>