<template>
  <div id="app">
    <Avatar url='https://portrait.gitee.com/uploads/avatars/user/1623/4871556_canlan0711_1578976114.png!avatar200' size="50"></Avatar>
    <Avatar url='https://portrait.gitee.com/uploads/avatars/user/1623/4871556_canlan0711_1578976114.png!avatar200' size="120"></Avatar>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
  name: 'App',
  components: {
    Avatar,
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
