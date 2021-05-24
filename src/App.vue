<template>
  <div id="app">
    <icons type="home"></icons>
    <icons type="arrowDown"></icons>
  </div>
</template>

<script>
import Icons from '@/components/Icons'
export default {
  name: 'App',
  data() {
    return {
     
    }
  },
  components: {
    Icons
  },
  computed: {
    
  },
  methods: {
   
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
