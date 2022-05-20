<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <blog-detail :blog="data" v-if="data"></blog-detail>
      <blog-comment v-if="!isLoading"></blog-comment>
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
import { getBlog } from '@/api/blog'
import BlogComment from './components/BlogComment.vue'

export default {
  mixins: [fetchData({})],
  data() {
    return {
      blogId: -1, 
    }
  },
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment,
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id)
    },
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
  width: 220px;
  height:100%;
  padding: 22px;
  box-sizing: border-box;
}
.blog-detail-container {
  padding-bottom: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
</style>