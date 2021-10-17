<template>
  <div class="test-container">
    <concat :github="github" :email="email" :qq="qq" :weixin="weixin"></concat>
  </div>
</template>

<script>
import Concat from './'
  export default {
    components: {
      Concat
    },
    data() {
      return {
        github: 'canlan527',
        email: 'canlan527@gmail.com',
        qq: '1481086138',
        weixin: '是个废物'
      }
    }
  }
</script>

<style lang="less" scoped>
.test-container {
  width: 300px;
  background-color:#333;
}
</style>