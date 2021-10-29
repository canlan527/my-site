<template>
  <div id="app">
    <site-aside></site-aside>
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  mounted() {
  },
  components: {
    SiteAside,
  },
}
</script>

<style lang="less">
#app {
  width: 100vw;
  height: 100%;
  .site-aside-container {
    width: 260px;
    height: 100vh;
    background: #333;
  }
  

}
</style>
