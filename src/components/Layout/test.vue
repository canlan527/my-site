<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">
          左边栏区域，宽度适应内容，溢出隐藏
        </div>
      </template>
      <div class="main">
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
        主区域，宽度占满剩余空间，溢出隐藏
      </div>
      <template #right>
        <div class="right">
          右边栏区域，宽度适应内容，溢出隐藏
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './'
export default {
  name: "test",
  components: {
    Layout,
  }
}
</script>

<style lang="less" scoped>
.test-container {
  width: 60%;
  height: 600px;
  border: 2px solid;
  white-space: nowrap;
  .left {
    width: 260px;
    height: 100%;
    background-color: tan;
  }
  .main {
    width: 100%;
    height: 100%;
    background: pink;
  }
  .right {
    width: 150px;
    height: 100%;
    background:lightcyan;
  }
}
</style>