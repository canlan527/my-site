<template>
  <h1>Blog 分类id：{{$route.params.cateId}}</h1>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
  }
}
</script>

<style>

</style>