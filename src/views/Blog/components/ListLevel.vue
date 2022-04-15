<template>
  <ul class="list-level-container">
    <li class="list-level-item" v-for="(item, i) in list" :key="i" >
      <span @click="handleClick(item)" :class="{'isActive': item.isActive}">{{item.name}}</span>
      <ListLevel :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListLevel',
  props: {
    list: {
      type: Array,
    }
  },
  methods: {
    handleClick(item) {
      this.$emit('select', item)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

 .list-level-container {
   list-style: none;
   padding:0;
   font-size:20px;
   .list-level-container {
     margin-left: 1em;
     padding: 6px 0;
   }
   .isActive {
     color:@warn;
   }

 } 
</style>