import { getBanners } from '@/api/banner'

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    }
  },
  actions:{
    async fetchData(ctx, payload) {
      if(ctx.state.data.length) {
        return;
      }
      ctx.commit('setLoading', true);
      const res = await getBanners()
      ctx.commit('setData', res);
      ctx.commit('setLoading', false);
    }
  }
}