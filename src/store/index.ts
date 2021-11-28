import Vue from 'vue';
import Vuex from 'vuex';
import ComicModule from '@/store/comic';
import vuexLocal from '@/plugins/vuex-persist';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    comic: ComicModule
  },
  plugins: [vuexLocal.plugin]
});
