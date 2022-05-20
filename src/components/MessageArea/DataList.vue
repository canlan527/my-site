<template>
  <ul class="data-list-container">
    <li class="data-list-item" v-for="item in list" :key="item.id">
      <div class="avatar">
        <img :src="item.avatar" class="img">
      </div>
      <div class="info">
        <div class="nickname">{{item.nickname}}</div>
        <div class="content">{{item.content}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    }
  },
  watch: {
    list: {
      handler(val) {
        console.log(val)
      },
      deep: true,
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.data-list-container {
  width: 100%;
  height: 100%;
  .data-list-item {
    width: 100%;
    height:140px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    border-bottom: 1px dashed @gray;
    &:last-of-type {
      border-bottom: none;
    }
    .avatar {
      width: 60px;
      height: 60px;
      border-radius:50%;
      margin: 0 14px 0 0;
      .img {
        width: 100%;
        height: 100%;
        border-radius:50%;
        display:inline-block;
      }
    }
    .info {
      flex: 1;
      font-size: 14px;
      .nickname {
        margin-bottom: 10px;
        color: lighten(@words, 5%)
      }
      .content {
        color: lighten(@words, 5%)
      }
    }
  }
}
</style>