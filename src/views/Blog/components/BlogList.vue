<template>
  <div class="bloglist-container">
    <ul class="blog-ul">
      <li class="blog-list-item" v-for="item in data.rows" :key="item.id">
        <div class="blog-top">
          <div class="content">
            <a href="" class="title">{{item.title}}</a>
            <p class="abstract">
              {{ item.description }}
            </p>
          </div>
          <a href="" class="blog-item-img">
            <img :src="item.thumb" alt="" />
          </a>
        </div>

        <div class="meta">
          <span class="like">❤️ {{ item.scanNumber}}</span>
          <span class="comment-count">评论：{{item.commentNumber}}</span>
          <span class="blog-cate">分类：{{item.category.name}}</span>
          <span class="meta-time">时间：{{ item.createDate}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import pic from "@/assets/images/3.jpg";
import { getBlog } from "@/api/blog";
import fetchData from '@/mixins/fetchData';

export default {
  mixins: [fetchData([])],
  data() {
    return {
      pic,
    };
  },
  methods: {
    async fetchData() {
      return getBlog(1, 10, 3)
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.bloglist-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .blog-ul {
    width: 100%;
    height: 100%;
    padding: 12px;
    box-sizing: border-box;
    .blog-list-item {
      width: 100%;
      min-height: 120px;
      border-bottom: 1px solid #f0f0f0;
      // display: flex;
      // flex-direction: column;
      padding: 15px 2px 20px 0;
      margin-bottom: 14px;
      .blog-top {
        width: 100%;
        // height: 80%;
        display: flex;
        .content {
          width: 73%;
          // height: 100%;
          cursor: pointer;
          .title {
            color: @words;
            font-size: 24px;
            font-weight: bold;
          }
          .abstract {
            color: @gray;
            font-size: 14px;
          }
        }
        .blog-item-img {
          flex: 1;
          height: 100%;
          border-radius: 20px;
          display: inline-block;
          margin: 0 12px;
          img {
            width: 100%;
            height: 100px;
            border-radius: 8px;
          }
        }
      }

      .meta {
        width: 50%;
        height: 20%;
        padding:8px;
        color: @gray;
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-size:12px;
        cursor: pointer;
        // margin-bottom: 12px;
        .like {
          color: red;
        }
      }
    }
  }
}
</style>
