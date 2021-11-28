import Vue from 'vue';
import Vuex from 'vuex';
import ComicModule from '@/store/comic';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    comic: ComicModule
  }
});
