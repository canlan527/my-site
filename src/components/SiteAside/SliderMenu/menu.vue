<template>
  <nav class="slider-menu-container">
    <router-link v-for="item in menu" :key="item.type"
      :exact="item.exact" :to="{ name: item.name }" active-class="selected" exact-active-class=""> 
      <icons :type="item.type"></icons>
      <span>{{item.text}}</span>
    </router-link>
  </nav>
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
          name: 'Home',
          exact: true,
        },
        {
          type: 'blog',
          text: '文章',
          name: 'Blog',
          exact: false,
        },
        {
          type: 'about',
          text: '关于我',
          name: 'About',
          exact: true,
        },
        {
          type: 'code',
          text: '项目&效果',
          name: 'Project',
          exact: true,
        },
        {
          type: 'chat',
          text: '留言板',
          name: 'Message',
          exact: true
        },
      ]
    }
  },
  // methods: {
  //   isSelected(item) {
  //     let path = item.path.toLowerCase();  // 菜单的链接地址
  //     let curPathname = location.pathname.toLowerCase(); // 当前浏览器访问的地址
  //     if(item.startWith) {
  //       return curPathname.startsWith(path)
  //     }else {
  //       return curPathname === path
  //     }
  //   }
  // }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.slider-menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    &.selected{
      background: rgba(255, 255, 255,0.2);
    }
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    .icon-container {
      margin-right: 12px;
    }
  }
}
</style>