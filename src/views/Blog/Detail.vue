<template>
  <Layout>
    <div class="main-container" ref="mainContainer" v-loading="isLoading">
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
  mounted() {
    this.$refs.mainContainer.addEventListener('scroll', this.handleScroll)
  },
  // 在组件加载完数据，刷新后让锚点自动跳转到对应位置
  updated() {
    const hash = location.hash
    location.hash = '';
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  destroyed() {
    this.$refs.mainContainer && this.$refs.mainContainer.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    async fetchData() {
      return await getBlog(this.$route.params.id)
    },
    handleScroll() {
      // 在滚动的过程中不断派发 mainScroll 事件，让订阅的一边处理， 数据 this.$refs.mainContainer 并没有用到，这是暂时传递，看看以后是否会用到。
      this.$bus.$emit('mainScroll', this.$refs.mainContainer)
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