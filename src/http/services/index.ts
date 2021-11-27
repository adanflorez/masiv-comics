import Response from '@/interfaces/response';
import api from '../axios';

class ComicServices {
  getComic(): Promise<Response> {
    return api.get('/2500/info.0.json');
  }
}

const comicServices = new ComicServices();
export default comicServices;
