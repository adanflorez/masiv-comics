import actions from './actions';
import mutations from './mutations';

const namespaced = true;

export interface LoadingState {
  show: boolean;
}

const state: LoadingState = {
  show: false
};

export default {
  namespaced,
  state,
  mutations,
  actions
};
