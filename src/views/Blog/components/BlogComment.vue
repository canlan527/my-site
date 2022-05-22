<template>
  <div class="blog-comment-container" >
    <h2 id="data-form">发表评论</h2>
    <message-area ref="msgRef" @submit="handleSubmit" :title="title" :subTitle="data.total" :list="data.rows" :isListLoading="isLoading" :noneData="noneData"></message-area>
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
      page:1,
      limit: 10,
      noneData: false,
    }
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.handleScroll)
  },
  computed: {
    // 是否有更多数据
    hasMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
    async fetchData() {
      return await getCommentlist(this.$route.params.id, this.page, this.limit)
    },
   // 加载更多数据
    async fetchMore() {
      if(!this.hasMore) {
        this.noneData = true;
        return;
      }
      this.isLoading = true;
      this.page ++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    async handleSubmit(formData, callback) {
      const resp = await addComment({blogId: this.$route.params.id, ...formData}) 
      this.data.rows.unshift(resp)
      this.data.total ++;
      callback('评论成功')
    },
    handleScroll(dom) {
      if(this.isLoading || !dom) {
        return;
      }
     const ds = 100; // 设置底部范围值
     const dec = Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight)
     if(dec <= ds) {
       this.fetchMore()
     }
     
    }
  },
  components: { 
    MessageArea,
  }
}
</script>

<style lang="less" scoped>

</style>