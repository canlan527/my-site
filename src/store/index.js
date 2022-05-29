import Vuex from 'vuex';
import Vue from 'vue';
import banner from './banner';
import setting from './setting';
import about from './about';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    banner,
    setting,
    about,
  }
})

export default store;