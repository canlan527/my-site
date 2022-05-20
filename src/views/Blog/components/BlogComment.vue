<template>
  <div class="blog-comment-container">
    <message-area :title="title" :subTitle="total" :list="list"></message-area>
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea'
export default {
  props: {
    total: {
      type: Number,
    },
    list: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      title: '评论列表', 
    }
  },
  created(){
    console.log(this.list)
  },
  watch: {
    list (val) {
      console.log(val)
    }
  },
  components: { 
    MessageArea,
  }
}
</script>

<style>

</style>