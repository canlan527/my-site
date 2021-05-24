<template>
  <div id="app">
    <p>姓： {{lastName}}</p>
    <p>名： {{firstName}}</p>
    <p>全名： {{fullName}}</p>
    <p>全名： {{fullName}}</p>
    <p>全名： {{fullName}}</p>
    <p>全名： {{fullName}}</p>
    <p>全名： {{fullName}}</p>
    <p>全名： {{fullName}}</p>
    <p>全名： {{fullName}}</p>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
  name: 'App',
  data() {
    return {
      firstName:'贤重',
      lastName: '金'
    }
  },
  components: {
    Avatar,
  },
  computed: {
    fullName() {
      console.log('computed')
      return this.lastName + this.firstName
    }
  },
  methods: {
    getFullName() {
      console.log('函数调用了')
      return this.lastName + this.firstName
    }
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
