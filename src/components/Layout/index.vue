<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%; 
  height: 100%;
  display: flex;
  .left, .right {
    flex: 0 0 auto; // 表示 不能增长 不可压缩 保持宽度
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto; // 表示 能增长 可压缩 保持宽度
    overflow: hidden;
  }
}
</style>