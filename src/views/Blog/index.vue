<template>
  <Layout>
    <div class="blog-list-container" ref="bloglistContainer">
      <blog-list class="blog-list" @scrollTop="handleScrollTop"></blog-list>
    </div>
    <div class="blog-bg-img" :style="blogListStyle"></div>
    <template #right>
      <blog-category></blog-category>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./components/BlogCategory.vue";
import BlogList from "./components/BlogList.vue";
import blogBigImg from "@/assets/images/th.png";

export default {
  data() {
    return {
      blogBigImg,
    };
  },
  created() {
    // console.log(this.$route)
  },
  computed: {
    blogListStyle() {
      return {
        background: `url(${blogBigImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        filter: "blur(55px)",
        zIndex: "-1",
      };
    },
  },
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
  methods: {
    handleScrollTop() {
      console.log(1);
      this.$refs.bloglistContainer.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.blog-list-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.blog-bg-img {
  float: left;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
