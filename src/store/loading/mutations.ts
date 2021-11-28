import { MutationTree } from 'vuex';
import { LoadingState } from '.';
import loadingTypes from './types';

const mutations: MutationTree<LoadingState> = {
  /**
   * Show loading
   *
   * @param {LoadingState} state
   */
  [loadingTypes.mutations.SHOW_LOADING]: (state: LoadingState): void => {
    state.show = true;
  },
  /**
   * Hide loading
   *
   * @param {LoadingState} state
   */
  [loadingTypes.mutations.HIDE_LOADING]: (state: LoadingState): void => {
    state.show = false;
  }
};

export default mutations;
