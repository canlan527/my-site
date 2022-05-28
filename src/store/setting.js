import { getSetting } from '@/api/setting';

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: {}
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
    async fetchSetting(ctx) {
      ctx.commit('setLoading', true);
      const res = await getSetting();
      ctx.commit('setData', res);
      ctx.commit('setLoading', false);

      if(res.favicon) {
        // <link rel="icon" href="/favicon.ico">
        // let link = document.querySelector('link[rel="icon"]');
        // if(link) {
        //   return;
        // }
        // link = document.createElement('link');
        // link.href = res.favatar
        // link.rel = "icon"
        // link.type = 'images/x-icon';
        // document.querySelector('head').appendChild(link);

        let link = document.querySelector('link[rel="shortcut icon"]');
        if(link) {
          return;
        }
        link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.type = 'images/x-icon';
        link.href = res.favicon;
        document.querySelector('head').appendChild(link);
      }
    }
  }
}