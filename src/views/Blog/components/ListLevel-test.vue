<template>
  <list-level :list="list" @select="handleSelct"></list-level>
</template>

<script>
import ListLevel from './ListLevel.vue'
export default {
  data() {
    return {
      list: [
        {name: '1-1', isActive: false},
        {name: '2-1', isActive: false},
        {name: '3-1', isActive: true, children: [
          {name: '3-1-1', isActive: false},
          {name: '3-1-2', isActive: false},
        ]},
        {name: '4-1', isActive: false}
      ],
    }
  },
  components: { ListLevel },
  methods: {
    handleSelct(item) {
      console.log(item)
    }
  }
}
</script>

<style>

</style>