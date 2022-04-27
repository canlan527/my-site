<template>
  <div class="pager-container">
    <a :class="{'active': current===1}" @click="handleClick(1)">首页</a>
    <a @click="handleClick(current-1)" :class="{'disabled': current===1}">上一页</a>
    <a :class="{'active': current===n }" 
      @click="handleClick(n)" v-for="(n, i) in pageNumber" :key="i">{{n}}</a>
    <a @click="handleClick(current+1)" :class="{'disabled': current===totalPage}">下一页</a>
    <a :class="{'active': current===totalPage}"
      @click="handleClick(totalPage)"
    >尾页</a>
  </div>
</template>

<script>
export default {
  name: 'Pager',
  props: {
    current: {
      type: Number,         
      default: 8
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    visibleNum: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.limit)
    },
    minVisible() {
      let min = this.current - Math.floor(this.visibleNum / 2)
      if(min < 1) {
        min = 1
      }
      return min
    },
    maxVisible() {
      let max = this.minVisible + this.visibleNum - 1
      if(max > this.totalPage) {
        max = this.totalPage
      }
      return max
    },
    pageNumber() {
      const numList = []
      for(let i = this.minVisible; i <= this.maxVisible; i++) {
        numList.push(i)
      }
      return numList
    }
  },
  methods: {
    handleClick(newPage) {
      if(newPage<1) {
        newPage = 1
      }

      if(newPage>this.totalPage) {
        newPage = this.totalPage
      }
      if(newPage === this.current) {
        return
      }
      this.$emit('pageChange', newPage)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.pager-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 10px;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
    &.disabled{
      color: @lightWords;
      cursor: not-allowed;
    }
  }
  // a:hover {
  //   font-size: 14px;
  // }
}



</style>>
