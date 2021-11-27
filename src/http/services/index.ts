import { AxiosInstance } from 'axios';
import api from '../axios';

class ComicServices {
  getComic(): Promise<AxiosInstance> {
    return api.get('/615/info.0.json');
  }
}

const comicServices = new ComicServices();
export default comicServices;
