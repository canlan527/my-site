<template>
  <img class="avatar-container" :src="url" alt="" :style="{
    width: size + 'px',
    height: size + 'px'
  }">
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 150,
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>