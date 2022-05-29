export default function(refname) {
  return {
    mounted() {
      this.$bus.$on('setMainScroll', this.handleSetMainScroll);
      this.$refs[refname].addEventListener('scroll', this.handleMainScroll)
    },
    beforeDestroy() {
      this.$bus.$emit('mainScroll');
      this.$refs[refname].removeEventListener('scroll', this.handleMainScroll);
      this.$bus.$off('setMainScroll');
    },
    methods: {
      handleMainScroll() {
        // 在滚动的过程中不断派发 mainScroll 事件，让订阅的一边处理， 数据 this.$refs[refname] 并没有用到，这是暂时传递，看看以后是否会用到。
        this.$bus.$emit('mainScroll', this.$refs[refname])
      },
      // 设置滚动条滚动的高度值
      handleSetMainScroll(top) {
        this.$refs[refname].scrollTop = top
      }
    }
  }
}