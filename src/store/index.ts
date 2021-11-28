import Vue from 'vue';
import Vuex from 'vuex';
// Modules
import ComicModule from '@/store/comic';
import LoadingModule from '@/store/loading';
// Vuex-persist
import vuexLocal from '@/plugins/vuex-persist';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    comic: ComicModule,
    loading: LoadingModule
  },
  plugins: [vuexLocal.plugin]
});
