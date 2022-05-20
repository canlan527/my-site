<template>
  <div class="blog-comment-container" >
    <h2 id="data-form">发表评论</h2>
    <message-area @submit="handleSubmit" :title="title" :subTitle="data.total" :list="data.rows" :isListLoading="isLoading"></message-area>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData'
import { getCommentlist, addComment } from '@/api/blog'
import MessageArea from '@/components/MessageArea'

export default {
  mixins: [fetchData({rows:[], total: 0})],
  data() {
    return {
      title: '评论列表', 
      isLoading: false,
    }
  },
  methods: {
    async fetchData() {
      return await getCommentlist(this.$route.params.id)
    },
    async handleSubmit(formData, callback) {
      const resp = await addComment({blogId: this.$route.params.id, ...formData}) 
      this.data.rows.unshift(resp)
      this.data.total ++;
      callback('评论成功')
    }
  },
  components: { 
    MessageArea,
  }
}
</script>

<style lang="less" scoped>

</style>