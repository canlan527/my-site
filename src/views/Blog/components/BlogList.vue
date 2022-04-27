<template>
  <div class="bloglist-container" v-loading="isLoading">
    <div class="blog-bigImg" :style="bigImgStyle"></div>
    <ul class="blog-ul">
      <li class="blog-list-item" v-for="item in data.rows" :key="item.id" >
        <div class="blog-top">
          <div class="content">
            <a href="" class="title">{{item.title}}</a>
            <p class="abstract">
              {{ item.description }}
            </p>
          </div>
          <a href="" class="blog-item-img" v-if="item.thumb">
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
    <!-- 分页组件 -->
    <pager :current="current" :total="data.total" :limit="limit"
     :visibleNum="12" 
     @pageChange="handlePageChange"></pager>
  </div>
</template>

<script>
import pic from "@/assets/images/3.jpg";
import { getBlog } from "@/api/blog";
import Pager from '@/components/Pager';
import fetchData from '@/mixins/fetchData';
import blogBigImg from '@/assets/images/th.png';
export default {
  mixins: [fetchData({})],
  data() {
    return {
      pic,
      blogBigImg,
      current: 1
    };
  },
  components: {
    Pager,
  },
  computed: {
    limit() {
      if(this.data.rows) {
        return this.data.toal / this.data.rows.length;
      }
      
    },
    bigImgStyle() {
      return {
        background: `url(${blogBigImg}) center center no-repeat`
      }
    }
  },
  methods: {
    async fetchData() {
      return getBlog(1, 10, 3)
    },
    handlePageChange(newPage) {
      this.current = newPage;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.bloglist-container {
  max-width: 1024px;
  width: 100%;
  min-width: 600px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 30px;
  .blog-bigImg {
    width: 100%;
    height: 400px;
    border-radius:20px;
    min-width: 560px;
  }
  .blog-bigImg:hover {
    transform: translate(-5px,-5px);
    transition: 1s;
  }
  .blog-ul {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    min-width: 520px;
    .blog-list-item {
      width: 100%;
      min-width: 560px;
      min-height: 120px;
      background:#fff;
      border-bottom: 1px solid #f0f0f0;
      padding: 15px 20px;
      margin-bottom: 14px;
      box-shadow: 2px 2px 10px #f0f0f0;
      border-radius: 14px;
      box-sizing:border-box;
      .blog-top {
        width: 100%;
        display: flex;
        .content {
          width: 100%;
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
          margin: 20px 12px 0;
          img {
            width: 180px;
            height: 100px;
            border-radius: 8px;
          }
        }
      }

      .meta {
        width: 50%;
        min-width: 350px;
        height: 20%;
        padding:8px;
        color: @gray;
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-size:12px;
        cursor: pointer;
        .like {
          color: red;
        }
      }
    }
    .blog-list-item:hover {
      transform: translate(-5px,-5px);
      transition: 1s;
    }
  }
}
</style>
