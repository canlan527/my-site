<template>
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <blog-detail :blog="data" v-if="data"></blog-detail>
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
export default {
  mixins: [fetchData({})],
  components: {
    Layout,
    BlogDetail,
    BlogToc,
  },
  mounted() {
    console.log(this.data)
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id)
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