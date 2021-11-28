import { MutationTree } from 'vuex';
import { State } from '.';
// Types
import comicTypes from '@/store/comic/types';
// Interface
import IComic from '@/interfaces/comic';

const mutations: MutationTree<State> = {
  /**
   * Add comic to store
   *
   * @param {State} state
   * @param {IComic} comic
   */
  [comicTypes.mutations.SET_COMIC]: (state, comic: IComic): void => {
    state.comics.push({ num: comic.num, rating: 0 });
  },
  /**
   * Update rating of comic
   *
   * @param {State} state
   * @param {IComic} comic
   */
  [comicTypes.mutations.SET_COMIC_RATING]: (state, comic: IComic): void => {
    const index = state.comics.findIndex((item) => item.num == comic.num);
    if (index > -1) state.comics[index].rating = comic.rating;
  }
};

export default mutations;
