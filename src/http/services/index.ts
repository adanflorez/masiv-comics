import Response from '@/interfaces/response';
import api from '../axios';

class ComicServices {
  getComic(comicNum: string): Promise<Response> {
    return api.get(`/${comicNum}/info.0.json`);
  }
}

const comicServices = new ComicServices();
export default comicServices;
