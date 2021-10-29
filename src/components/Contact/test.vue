<template>
  <div class="test-container">
     <contact :github="github" :email="email" :qq="qq" :weixin="weixin"></contact>
  </div>
</template>

<script>
import Contact from './'
export default {
  name: 'App',
  data() {
    return {
      github: 'canlan527',
      email: 'canlan527@gmail.com',
      qq: '1481086138',
      weixin: '是个废物'
    }
  },
  mounted() {
  },
  components: {
    Contact,
  },
}
</script>

<style lang="less" scoped>
.test-container {
  width: 300px;
  background-color:#333;
}
</style>