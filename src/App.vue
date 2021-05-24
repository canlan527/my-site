<template>
  <div id="app">
    <icons type="home"></icons>
    <icons type="arrowDown"></icons>
    <avatar url="https://avatars.githubusercontent.com/u/36915498?v=4"></avatar>
    <avatar url="https://avatars.githubusercontent.com/u/36915498?v=4" :size="50"></avatar>
  </div>
</template>

<script>
import Icons from '@/components/Icons'
import Avatar from '@/components/Avatar'
export default {
  name: 'App',
  data() {
    return {
     
    }
  },
  components: {
    Icons,
    Avatar
  },
  computed: {
    
  },
  methods: {
   
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
