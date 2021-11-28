import { ActionContext, ActionTree } from 'vuex';
import { LoadingState } from '.';
import loadingTypes from './types';

const actions: ActionTree<LoadingState, unknown> = {
  /**
   * Action that call SHOW_LOADING mutation
   *
   * @param {ActionContext<SLoadingStatetate, unknown>}
   */
  showLoading: ({ commit }: ActionContext<LoadingState, unknown>) => {
    commit(loadingTypes.mutations.SHOW_LOADING);
  },
  /**
   * Action that call HIDE_LOADING mutation
   *
   * @param {ActionContext<SLoadingStatetate, unknown>}
   */
  hideLoading: ({ commit }: ActionContext<LoadingState, unknown>) => {
    commit(loadingTypes.mutations.HIDE_LOADING);
  }
};

export default actions;
