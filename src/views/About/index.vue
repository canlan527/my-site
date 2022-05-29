<template>
  <div class="about-container" v-loading="isLoading || !srcLoading">
    <iframe v-if="data" class="about-iframe" :src="data" @load="srcLoading = true"></iframe>
  </div>
</template>

<script>
import {mapState, mapAction} from 'vuex';

export default {
  data() {
    return {
      srcLoading: false, // iframe 加载完
    }
  },
  created() {
    this.$store.dispatch('about/fetchAbout')
  },
  computed: mapState('about', ['isLoading', 'data'])
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .about-iframe {
    width: 100%;
    height: 100%;
  }
}
</style>