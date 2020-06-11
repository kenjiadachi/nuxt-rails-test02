import createPersistedState from 'vuex-persistedstate'

export default ({ store }: {store: any}) => {
  createPersistedState({
    paths: ['user'],  // localStorageに保存したいstoreを入れる
  })(store);
};