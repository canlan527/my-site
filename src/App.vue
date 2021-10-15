<template>
  <div id="app">
    <icons type="home"></icons>
    <icons type="arrowDown"></icons>
    <avatar url="https://avatars.githubusercontent.com/u/36915498?v=4"></avatar>
    <avatar url="https://avatars.githubusercontent.com/u/36915498?v=4" :size="50"></avatar>
    
    <pager :current="current" :total="80" :limit="3" :visibleNum="10" @pageChange="handlePageChange"></pager>
  </div>
</template>

<script>
import Icons from '@/components/Icons'
import Avatar from '@/components/Avatar'
import Pager from '@/components/Pager'

export default {
  name: 'App',
  data() {
    return {
      current: 2,
    }
  },
  mounted() {
    
  },
  components: {
    Icons,
    Avatar,
    Pager,
  },
  computed: {
    
  },
  methods: {
   handlePageChange(newPage) {
     console.log(newPage)
     this.current = newPage
   }
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
