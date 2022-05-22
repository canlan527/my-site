<template>
  <div class="message-area-container" ref="containerRef">
    <data-form v-on="$listeners"></data-form>
    <h3>
      {{title}}
      <span>({{subTitle}})</span>
    </h3>
    <data-list :list="list"></data-list>
    <div class="loading" v-loading="isListLoading"></div>
    <div class="none-data" v-if="noneData">没有更多了...</div>
  </div>
</template>

<script>
import DataForm from './DataForm.vue'
import DataList from './DataList.vue'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: Number,
      default: '',
    },
    list: {
      type: Array,
      default:() => [],
    },
    isListLoading: {
      type: Boolean,
      default:false,
    },
    noneData: {
      type: Boolean
    }
  },
  data() {
    return { 
      isLoading: true
    }
  },
  components: { DataForm, DataList },
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.loading {
  width: 100%;
  height:60px;
  position: relative;
}
.none-data {
  color: @gray;
  font-size: 12px;
  display:flex;
  align-items: center;
  justify-content:center;
}
</style>