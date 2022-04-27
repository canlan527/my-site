<template>
  <ul class="blog-category-container">
    <h3>分类</h3>
    <list-level :list="data" @select="handleSelect"></list-level>
  </ul>
</template>

<script>
import { getBlogType } from '@/api/blog'
import ListLevel from "./ListLevel.vue";
import fetchData from "@/mixins/fetchData";
export default {
  mixins: [fetchData([])],
  components: { ListLevel },
  methods: {
    async fetchData () {
      return await getBlogType()
    },
    handleSelect(e) {
      
      // console.log(e)
      // this.data.forEach(item => {
      //   if(item.id === e.id) {
      //     console.log(item)
      //     item.isActive =  true;
      //   } 
      // })
    }
  }
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 180px;
  max-width: 180px;
  padding: 20px 12px;
  box-sizing: border-box;
  text-align: center;
  /deep/.list-level-container .list-level-item {
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 14px;
  }
}
</style>