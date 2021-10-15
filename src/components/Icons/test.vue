<template>
  <div id="app">
    <div class="box">
      <icons type="home"></icons>
      <icons type="arrowDown"></icons>
      <icons type="error"></icons>
      <icons type="close"></icons>
      <icons type="warn"></icons>
      <icons type="info"></icons>
      <icons type="blog"></icons>
      <icons type="code"></icons>
      <icons type="about"></icons>
      <icons type="weixin"></icons>
      <icons type="mail"></icons>
      <icons type="qq"></icons>
      <icons type="arrowUp"></icons>
      <icons type="weixin"></icons>
      <icons type="empty"></icons>
      <icons type="chat"></icons>
    </div>
  </div>
</template>

<script>
import Icons from '@/components/Icons'

export default {
  name: 'App',
  components: {
    Icons,
  },
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
   display: flex;
    align-items:center;
    justify-content:space-around;
  .box {
    width: 400px;
    height:100px;
    background-color: #fff;
    font-size: 24px;
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content:space-around;
  }
}
</style>
