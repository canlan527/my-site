<template>
  <div class="blog-toc-container">
    <h3>文章目录</h3>
    <list-level :list="listWithActive" @select="handleSelect"></list-level>
  </div>
</template>

<script>
import ListLevel from './ListLevel.vue'
import { debounce } from '@/utils'

export default {
  props: {
    blogToc: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeAnchor: ''
    }
  },
  created() {
    // 事件总线订阅 mainScroll 事件，处理事件函数 setActiveItem,这里并没有用到传递过来的 mainContainer dom对象
    // 事件触发太频繁，使用工具库debounce
    this.debounceActiveItem = debounce(this.setActiveItem, 200)
    this.$bus.$on('mainScroll', this.debounceActiveItem)
  },
  destroyed() {
    this.$bus.$off('mainScroll', this.debounceActiveItem)
  },
  components: {
    ListLevel,
  },
  computed: {
    // 返回带有isActive属性的list数组，isActive根据activeAnchor判断true/false
    listWithActive() {
      const maplist =(list = []) => {
        return list.map(item => ({
            ...item,
            isActive: this.activeAnchor === item.anchor,
            children: maplist(item.children)
          }))
      }
      return maplist(this.blogToc)
    },
    // 递归 toc 中的 anchor，扁平的推到数组里，返回dom数组
    tocDoms() {
      const doms = [];
      const maplist =(list) => {
        for(const dom of list) {
          doms.push(document.getElementById(dom.anchor))
          if(dom.children && dom.children.length > 0) {
            maplist(dom.children)
          }
        }
      }
      maplist(this.blogToc)
      return doms;
    }
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor
    },
    // 处理目录被激活的状态
    setActiveItem() {
      this.activeAnchor = ''
      const ds = 200; // 固定范围值
      for(let dom of this.tocDoms) {
        if(!dom) {
          continue;
        }
        let top = dom.getBoundingClientRect().top; // 获取 dom 距离顶部的 top 值
        if((top >= 0 && top <= ds)) { // top值如果在范围内，设置激活锚点id
          this.activeAnchor = dom.id;
          return;
        } else if(top > ds) { // 在范围下方
          return;
        } else { // 在范围上方
          this.activeAnchor = dom.id;
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.blog-toc-container {
  font-size: 14px;
  /deep/.list-level-container .list-level-item {
    span:hover {
      cursor: pointer;
    }
  }
  /deep/.list-level-container .list-level-item .isActive {
    color: tan;
  }
}
</style>