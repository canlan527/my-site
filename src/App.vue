<template>
  <div id="app">
     <concat :github="github" :email="email" :qq="qq" :weixin="weixin"></concat>
  </div>
</template>

<script>
import Concat from '@/components/Concat'
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
    Concat,
  },
}
</script>

<style lang="less">
#app {
  width: 300px;
  background-color:#333;
  height: 400px;
  padding-top:200px;
}
</style>
