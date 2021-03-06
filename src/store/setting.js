import { getSetting } from '@/api/setting';
import {setTitle} from '@/utils'

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
      // 设置网站标题
      if(res.siteTitle) {
        setTitle.setSiteTitle(res.siteTitle)
      }
    }
  }
}