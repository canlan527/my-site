<template>
  <div class="test-container" style="position:relative;">
    <Loading v-if="isLoading"></Loading>
    <button @click="isLoading = !isLoading">切换显示/隐藏</button>
  </div>
</template>

<script>
import Loading from './index.vue'
export default {
  data() { 
    return {
      isLoading: true
    }
  },
  components: {
    Loading,
  }
}
</script>

<style>

</style>