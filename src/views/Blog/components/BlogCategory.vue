<template>
  <ul class="blog-category-container" v-loading="isLoading">
    <h3>文章分类</h3>
    <list-level :list="list" @select="handleSelect"></list-level>
  </ul>
</template>

<script>
import { getBlogType } from "@/api/blog";
import ListLevel from "./ListLevel.vue";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData([])],
  components: { ListLevel },
  data() {
    return {
      selectedItemId: -1,
    };
  },
  computed: {
    cateId() {
      return +this.$route.params.cateId || -1;
    },
    list() {
      const totleNumber = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const result = [
        {
          id: -1,
          name: "全部",
          articleCount: totleNumber,
          // isActive: true,
        },
        ...this.data,
      ];

      return result.map((it) => {
        return {
          ...it,
          isActive: it.id === this.cateId,
          aside: `${it.articleCount}篇`
        };
      });
    },
  },
  methods: {
    async fetchData() {
      return await getBlogType();
    },
    handleSelect(e) {
      console.log(e)
      const query = {
        page: 1,
        limit: 10,
      };
      if (e.id !== -1) {
        this.$router.push({
          name: "cateBlog",
          query,
          params: { cateId: e.id },
        });
      } else {
        this.$router.push({
          name: "Blog",
          query,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 180px;
  height: 100%;
  max-width: 180px;
  padding: 20px 12px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  /deep/.list-level-container .list-level-item {
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-size: 14px;
  }
}
</style>
