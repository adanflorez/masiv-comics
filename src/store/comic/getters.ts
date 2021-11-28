import IComic from '@/interfaces/comic';
import { GetterTree } from 'vuex';
import { State } from '.';

const getters: GetterTree<State, unknown> = {
  /**
   * Returns comic or undefined
   *
   * @param {IComic} comic
   * @returns {IComic | undefined}
   */
  comicExists:
    (state) =>
    (comic: IComic): IComic | undefined => {
      const savedComic = state.comics.find((item) => item.num == comic.num);
      return savedComic;
    }
};

export default getters;
