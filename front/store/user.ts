interface UserObj {
  name: string;
  image: string;
}

export const state = () => ({
  name: '',
  image: '',
  isLogin: false
})

export const getters = {
  getName: (state: any) => state.name,
  getImage: (state: any) => state.image,
  getIsLogin: (state: any) => state.isLogin,
}

export const mutations = {
  setUser(state: any, user: UserObj) {
    state.name = user.name
    state.image = user.image
    state.isLogin =  true
  },
  clearUser(state: any) {
    state.name = ''
    state.image = ''
    state.isLogin =  false
  },
}

export const actions = {
  setUser( { commit }: { commit: any }, user: UserObj) {
    commit('setUser', user)
  },
  clearUser( { commit }: { commit: any } ) {
    commit('clearUser')
  }
}