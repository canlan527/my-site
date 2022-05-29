<template>
  <div class="message-container" ref="msgRef">
    <h1 id="data-message">留下点来过的痕迹吧~ 有什么要对我说的呢？</h1>
    <MessageArea
      @submit="handleSubmit"
      :title="title"
      :subTitle="data.total"
      :list="data.rows"
      :noneData="noneData"
      :isListLoading="isLoading"
    ></MessageArea>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import scrollToTop from "@/mixins/scrollToTop";
import { getMessage, addMessage } from "@/api/message";

export default {
  mixins: [fetchData({ total: 0, rows: [] }), scrollToTop("msgRef")],
  data() {
    return {
      page: 1,
      limit: 10,
      title: "访客留言",
      subTitle: "留言",
      noneData: false,
      isLoading: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  components: {
    MessageArea,
  },
  computed: {
    // 是否有更多数据
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getMessage(this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await addMessage(formData);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("感谢您的留言~");
    },
    async fetchMore() {
      if (!this.hasMore) {
        this.noneData = true;
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    handleScroll(dom) {
      // console.log(dom);
      if (this.isLoading || !dom) {
        return;
      }
      const ds = 100; // 设置底部范围值
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= ds) {
        this.fetchMore();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 26px;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
  #data-message,
  .message-area-container {
    width: 700px;
    margin: 0 auto 20px;
  }
}
</style>
