<template>
  <div class="empty-container">
      <icons type="empty"></icons>
      <p>{{ text }}</p>
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
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.empty-container {
  .self-center();
  color:@gray;
  text-align: center;
}
.icon-container {
  font-size: 72px;
}
</style>