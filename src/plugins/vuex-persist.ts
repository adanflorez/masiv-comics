import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  key: 'comics',
  storage: window.localStorage
});

export default vuexLocal;
