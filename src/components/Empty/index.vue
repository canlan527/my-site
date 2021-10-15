<template>
  <div class="empty-container">
    <div class="empty-content">
      <icons type="empty" class="icon"></icons>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Icons from "@/components/Icons"
  export default {
    name: "Empty",
    props: {
      text: {
        type: String,
        default: ""
      }
    },
    components: {
      Icons
    }
  }
</script>

<style lang="less" scoped>
@import "~@/styles/var";

.empty-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .empty-content {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .icon {
      font-size: 100px;
      color: @lightWords;
    }
    p {
      color: @lightWords;
      font-size: 26px;
    }
  }
}
</style>