<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <blog-detail :blog="data" v-if="data"></blog-detail>
      <blog-comment :total="total" :list="commentList"></blog-comment>
    </div>
    <template #right> 
      <div class="blog-toc" v-loading="isLoading">
        <blog-toc :blogToc="data.toc" v-if="data.toc"></blog-toc>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import BlogDetail from './components/BlogDetail.vue'
import BlogToc from './components/BlogToc.vue'
import fetchData from '@/mixins/fetchData'
import { getBlog, getCommentlist } from '@/api/blog'
import BlogComment from './components/BlogComment.vue'
export default {
  mixins: [fetchData({})],
  data() {
    return {
      blogId: -1, 
      total: 0,
      commentList: [],
      _commentlist: [],
    }
  },
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment,
  },
  async created() {
    this.blogId = this.$route.params.id;
    const {list, total} = await this.fetchList()
    this.commentList = list,
    this.total = total
  },
  watch: {
    commentList: {
      handler(val) {  
        if(val) {
          console.log(val)
        }
      },
      deep: true,
    }
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id)
    },
    async fetchList() {
      const res = await getCommentlist(this.blogId)
      return {
        list: res.rows,
        total: res.total
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main-container {
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 22px;
  position: relative;
  scroll-behavior: smooth;
}
.blog-toc {
  position: relative;
  width: 300px;
  height:100%;
  padding: 22px;
  box-sizing: border-box;
}
</style>