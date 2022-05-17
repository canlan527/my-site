<template>
  <div class="blog-toc-container">
    <h3>文章目录</h3>
    <list-level :list="blogToc" @select="handleSelect"></list-level>
  </div>
</template>

<script>
import ListLevel from './ListLevel.vue'

export default {
  props: {
    blogToc: {
      type: Array,
      required: true
    }
  },
  components: {
    ListLevel,
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor
    }
  }
}
</script>

<style lang="less" scoped>
.blog-toc-container {
  font-size: 14px;
  /deep/.list-level-container .list-level-item {
    span:hover {
      cursor: pointer;
    }
  }
}
</style>