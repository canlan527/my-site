<template>
  <ul class="data-list-container">
    <li class="data-list-item" v-for="item in list" :key="item.id">
      <div class="avatar">
        <avatar :url="item.avatar" :size="60"></avatar>
      </div>
      <div class="info">
        <div class="info-top">
          <span class="nickname">{{item.nickname}}</span>
          <span class="time">{{fmtDate(item.createDate)}}</span>
        </div>
        <div class="content">{{item.content}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from '@/components/Avatar'
import { fmtDate } from '@/utils'

export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    }
  },
  components: {
    Avatar,
  },
  watch: {
    list: {
      handler(val) {
        console.log(val)
      },
      deep: true,
    }
  },
  methods: {
    fmtDate,
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
      .info-top {
        margin-bottom: 10px;
        color: darken(@success, 15%);
        display:flex;
        justify-content: space-between;
        align-items:center;
        .time {
          display: inline-block;
          color: @gray;
        }
      }
      .content {
        color: lighten(@words, 5%)
      }
    }
  }
}
</style>