// 公共的远程获取数据的代码
export default function(defaultValue) {
  return {
    data() {
      return {
        data: defaultValue,
        isLoading: true
      }
    },
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  }
}