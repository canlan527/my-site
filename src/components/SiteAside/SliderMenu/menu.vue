<template>
  <ul class="slider-menu-container">
    <li v-for="item in menu" :key="item.type">
      <a :href="item.path" :class="{selected: isSelected(item)}">
        <icons :type="item.type"></icons>
        <span>{{item.text}}</span>
      </a>
    </li>
     
  </ul>
</template>

<script>
import Icons from '@/components/Icons'

export default {
  name: 'slider-menu',
  components: {
    Icons,
  },
  data() {
    return {
      iconType: ['home', 'blog', 'about', 'code', 'chat'],
      menu: [
        {
          type: 'home',
          text: '首页',
          path: '/'
        },
        {
          type: 'blog',
          text: '文章',
          path: '/blog',
          startWith: true,
        },
        {
          type: 'about',
          text: '关于我',
          path: '/about'
        },
        {
          type: 'code',
          text: '项目&效果',
          path: '/project'
        },
        {
          type: 'chat',
          text: '留言板',
          path: '/message'
        },
      ]
    }
  },
  methods: {
    isSelected(item) {
      let path = item.path.toLowerCase();  // 菜单的链接地址
      let curPathname = location.pathname.toLowerCase(); // 当前浏览器访问的地址
      if(item.startWith) {
        return curPathname.startsWith(path)
      }else {
        return curPathname === path
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.slider-menu-container {
  width: 260px;
  background-color: transparent;
  li {
    width: 100%;
    height: 40px;
    color: @gray;
    line-height: 40px;
    a {
      display: inline-block;
      width: 100%;
      height: 40px;
      color: @gray;
      
      &.selected{
        cursor: pointer;
        color: #fff;
        background: rgba(255,255,255,0.3)
      }
      &:hover {
        cursor: pointer;
        color: #fff;
        background: rgba(255,255,255,0.1)
      }
    }
    
  }
  .icon-container {
    margin: 0 20px;
  }
}
</style>