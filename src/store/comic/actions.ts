import { ActionContext, ActionTree } from 'vuex';
import { State } from '.';
// Types
import comicTypes from '@/store/comic/types';
// Interface
import IComic from '@/interfaces/comic';

const actions: ActionTree<State, unknown> = {
  /**
   * Add or update comic if exists
   * @param {ActionContext<State, unknown>}
   * @param {IComic} comic
   */
  setComic: (
    { commit, getters }: ActionContext<State, unknown>,
    comic: IComic
  ) => {
    if (getters.comicExists(comic)) {
      commit(comicTypes.mutations.SET_COMIC_RATING, comic);
    } else {
      commit(comicTypes.mutations.SET_COMIC, comic);
    }
  }
};

export default actions;
