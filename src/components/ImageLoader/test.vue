<template>
  <div class="test-container">
<ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
  @load="handleLoad"
/>
  </div>
</template>

<script>
import ImageLoader from "./"
  export default {
    name: 'test',
    components: {
      ImageLoader
    },
    methods: {
      handleLoad() {
        // alert('image has been already loaded')
      }
    }
  }
</script>

<style lang="less" scoped>
.test-container {
  width:700px;
  height: 500px;
  border: 1px solid #333;

}
</style>