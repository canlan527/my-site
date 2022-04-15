<template>
  <div class="loading-container">
    <img :src="loadingUrl" alt="">
  </div>
</template>

<script>
import loadingUrl from '@/assets/images/loading.svg'
export default {
data() {
  return {
    loadingUrl,
  }
}
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.loading-container {
  .self-center();
}
</style>