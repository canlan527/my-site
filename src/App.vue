<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <site-aside></site-aside>
        </div>
      </template>
      <div class="main">
        <router-view></router-view>
      </div>
    </Layout>

  </div>
</template>

<script>
import Layout from '@/components/Layout'
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
    Layout,
  },
}
</script>

<style lang="less">
@import '~@/styles/mixin.less';
.app-container {
  .self-fill(fixed);
  // background: tan;
  .aside {
    height:100%;
    background-color: #333;
  }
  .main {
    width:100%;
    height:100%;
  }
}
</style>
