<template>
  <div class="blog-detail-container">
    <h1>{{blog.title}}</h1>
    <div class="blog-side-info">
      <span>浏览：{{blog.scanNumber}}</span>
      <a href="#data-form">评论：{{blog.commentNumber}}</a>
      <span>{{ fmtDate(blog.createDate) }}</span>
      <a v-if="blog.category" @click="goCategory(blog.category)">{{blog.category.name}}</a>
    </div>
    <div class="content markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import fmtDate from '@/utils/fmtDate'
import '@/styles/markdown.css'
import 'highlight.js/styles/vs.css'

export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  methods: {
    fmtDate,
    goCategory(blog) {
      this.$router.push({
        name: 'cateBlog', 
        params: { cateId: blog.id}
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.blog-detail-container {
  .blog-side-info {
    width: 100%;
    font-size: 12px;
    color: @gray;
    span, a {
      margin-right: 16px;
    }
    a{
      cursor: pointer;
    }
  }
  .content {
    margin: 18px 0;
  }
}
</style>