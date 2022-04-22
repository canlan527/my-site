<template>
  <Layout>
    <blog-list></blog-list>
    <template #right>
      <blog-category ></blog-category>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import BlogCategory from './components/BlogCategory.vue'
import BlogList from './components/BlogList.vue'
export default {
  created() {
    console.log(this.$route)
  },
  components: {
    Layout,
    BlogCategory,
    BlogList
  }
}
</script>

<style lang="less" scoped>
.bloglist-container {
  overflow-y: auto;
}
</style>