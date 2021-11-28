import IComic from '@/interfaces/comic';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const namespaced = true;

export interface State {
  comics: Array<IComic>;
  current: IComic;
}

const state: State = {
  comics: [],
  current: {}
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
