<template>
  <div class="message-area-container" ref="containerRef">
    <data-form v-on="$listeners"></data-form>
    <h3>
      {{ title }}
      <span>({{ subTitle }})</span>
    </h3>
    <data-list :list="list"></data-list>
    <Empty v-if="list.length === 0 && !isListLoading" text="暂无数据"></Empty>
    <div class="loading" v-loading="isListLoading"></div>
    <div class="none-data" v-if="noneData && list.length > 0">
      没有更多了...
    </div>
  </div>
</template>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";
import Empty from "@/components/Empty";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: Number,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
    noneData: {
      type: Boolean,
    },
  },
  data() {
    return {
      // isLoading: true,
    };
  },
  components: { DataForm, DataList, Empty },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.message-area-container {
  width: 100%;
  min-height: 700px;
  position: relative;
  .loading {
    width: 100%;
    height: 60px;
    position: relative;
  }
  .none-data {
    color: @gray;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .empty-container {
    margin-top: 200px;
  }
}
</style>
