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
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogToc from "./components/BlogToc.vue";
import fetchData from "@/mixins/fetchData";
import scrollToTop from "@/mixins/scrollToTop";
import { getBlog } from "@/api/blog";
import BlogComment from "./components/BlogComment.vue";
import { setTitle } from "@/utils";

export default {
  mixins: [fetchData({}), scrollToTop("mainContainer")],
  data() {
    return {
      blogId: -1,
    };
  },
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment,
  },
  // 在组件加载完数据，刷新后让锚点自动跳转到对应位置
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },

  methods: {
    async fetchData() {
      const res = await getBlog(this.$route.params.id);
      if (!res) {
        this.$router.push("/404");
        return;
      }
      setTitle.setRouteTitle(res.title);
      return res;
    },
  },
};
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
  height: 100%;
  padding: 22px;
  box-sizing: border-box;
}
.blog-detail-container {
  padding-bottom: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
</style>
