<template>
  <div class="avatar">
    <avatar url="https://avatars.githubusercontent.com/u/36915498?v=4"></avatar>
    <avatar url="https://avatars.githubusercontent.com/u/36915498?v=4" :size="50"></avatar>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  name: 'test',
  components: {
    Avatar,
  },
}
</script>

<style lang="less">

</style>
