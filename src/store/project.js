import { getProject } from '@/api/project';

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
  actions: {
    async fetchProject(ctx) {
      ctx.commit('setLoading', true);
      const res = await getProject();
      console.log(res)
      ctx.commit('setData', res);
      ctx.commit('setLoading', false);
    }
  },
}