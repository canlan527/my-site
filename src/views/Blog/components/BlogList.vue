<template>
  <div class="bloglist-container" v-loading="isLoading">
    <div class="blog-bigImg" :style="bigImgStyle"></div>
    <ul class="blog-ul">
      <li
        class="blog-list-item"
        v-for="item in data.rows"
        :key="item.id"
        @click="goToBlogDetail(item)"
      >
        <div class="blog-top">
          <div class="content">
            <a class="title">{{ item.title }}</a>
            <p class="abstract">
              {{ item.description }}
            </p>
          </div>
          <a class="blog-item-img" v-if="item.thumb">
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </a>
        </div>

        <div class="meta">
          <span class="like">❤️ {{ item.scanNumber }}</span>
          <span class="comment-count">评论：{{ item.commentNumber }}</span>
          <span class="blog-cate" @click.stop="gotoCate(item)"
            >分类：{{ item.category.name }}</span
          >
          <span class="meta-time">时间：{{ fmtDate(item.createDate) }}</span>
        </div>
      </li>
    </ul>
    <!-- 空数据缺省 -->
    <empty v-if="!isLoading && data.rows.length === 0" text="暂无数据"></empty>
    <!-- 分页组件 -->
    <pager
      v-if="data.rows.length > 0"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNum="10"
      @pageChange="handlePageChange"
    ></pager>
  </div>
</template>

<script>
import Empty from "@/components/Empty";
import pic from "@/assets/images/3.jpg";
import { getBlogList } from "@/api/blog";
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";
import blogBigImg from "@/assets/images/th.png";
import { fmtDate } from "@/utils";

export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      pic,
      blogBigImg,
      current: 1,
    };
  },
  components: {
    Pager,
    Empty,
  },
  created() {
    console.log(this.routeInfo);
  },
  computed: {
    routeInfo() {
      return {
        page: +this.$route.query.page || 1,
        limit: +this.$route.query.limit || 10,
        cateId: +this.$route.params.cateId || -1, // -1 代表全部列表，不是某一分类
      };
    },
    bigImgStyle() {
      return {
        background: `url(${blogBigImg}) center center no-repeat`,
      };
    },
  },
  watch: {
    async $route(newVal) {
      if (newVal) {
        this.isLoading = true;
        this.data = await this.fetchData();
        this.isLoading = false;
        this.$emit("scrollTop");
      }
    },
  },
  methods: {
    fmtDate,
    async fetchData() {
      return getBlogList({
        page: this.routeInfo.page,
        limit: this.routeInfo.limit,
        cateId: this.routeInfo.cateId,
      });
    },
    /**
     * 跳转页码，需要改动路由参数page
     * cateId, limit 不变
     * 根据是否在分类列表 cateId 是否是 -1，来跳转不同的路由名称
     */
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.cateId == -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "cateBlog",
          query,
          params: this.routeInfo.cateId,
        });
      }
    },
    // 跳转对应的文章分类路由
    gotoCate(item) {
      console.log(item);
      this.$router.push({
        name: "cateBlog",
        params: { cateId: item.category.id },
      });
    },
    // 跳转到博客详情
    goToBlogDetail(item) {
      this.$router.push({
        name: "blogDetail",
        params: { id: item.id },
      });
    },
  },
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
  position: relative;
  .blog-bigImg {
    width: 100%;
    height: 400px;
    border-radius: 20px;
    min-width: 560px;
  }
  .blog-bigImg:hover {
    transform: translate(-5px, -5px);
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
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      padding: 15px 20px;
      margin-bottom: 14px;
      box-shadow: 2px 2px 10px #f0f0f0;
      border-radius: 14px;
      box-sizing: border-box;
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
        padding: 8px;
        color: @gray;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        cursor: pointer;
        .like {
          color: red;
        }
      }
    }
    .blog-list-item:hover {
      transform: translate(-5px, -5px);
      transition: 1s;
    }
  }
  .empty-container {
    margin-top: 470px;
  }
}
</style>
