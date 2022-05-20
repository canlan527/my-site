<template>
  <div class="message-area-container">
    <data-form v-on="$listeners"></data-form>
    <h3>
      {{title}}
      <span>({{subTitle}})</span>
    </h3>
    <data-list :list="list"></data-list>
    <div class="loading" v-loading="isListLoading"></div>
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
    }
  },
  created() {
    console.log(this.list)
  },
  watch: {
    list (val) {
      console.log(val)
    }
  },
  methods: {
  },
  components: { DataForm, DataList },

}
</script>

<style lang="less" scoped>

</style>