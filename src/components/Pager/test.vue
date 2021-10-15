<template>
  <div class="test">
    <pager :current="current" :total="80" :limit="3" :visibleNum="10" @pageChange="handlePageChange"></pager>
  </div>
</template>

<script>
import Pager from './'

export default {
  name: 'App',
  data() {
    return {
      current: 2,
    }
  },
  components: {
    Pager,
  },
  methods: {
   handlePageChange(newPage) {
     this.current = newPage
   }
  }
}
</script>

