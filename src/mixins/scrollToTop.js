export default function() {
  return {
    mounted() {
      this.$bus.$on('setMainScroll', this.handleSetMainScroll);
      this.$refs.mainContainer.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
      this.$bus.$emit('mainScroll');
      this.$refs.mainContainer.removeEventListener('scroll', this.handleScroll);
      this.$bus.$off('setMainScroll');
    },
    methods: {
      handleScroll() {
        // 在滚动的过程中不断派发 mainScroll 事件，让订阅的一边处理， 数据 this.$refs.mainContainer 并没有用到，这是暂时传递，看看以后是否会用到。
        this.$bus.$emit('mainScroll', this.$refs.mainContainer)
      },
      // 设置滚动条滚动的高度值
      handleSetMainScroll(top) {
        this.$refs.mainContainer.scrollTop = top
      }
    }
  }
}