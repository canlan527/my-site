<template>
  <ul class="list-level-container">
    <li class="list-level-item" v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ isActive: item.isActive }">{{
        item.name
      }}</span>
      <span
        v-if="item.aside"
        class="aside-span"
        :class="{ isActive: item.isActive }"
        @click="handleClick(item)"
        >{{ item.aside }}</span
      >
      <ListLevel :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListLevel",
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isActive) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.list-level-container {
  list-style: none;
  padding: 0;
  font-size: 20px;
  .list-level-container {
    margin-left: 1em;
    padding: 6px 0;
  }

  .aside-span {
    margin-left: 14px;
    color: @gray;
  }
  .isActive {
    color: #fff;
  }
}
</style>
