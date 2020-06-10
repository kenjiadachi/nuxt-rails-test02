export const state = () => ({
  message: ''
})

export const getters = {
  getMessage: (state: any) => state.message,
  existsMessage: (state: any) => state.message !== ''
}

export const mutations = {
  setMessage(state: any, message: string) {
    state.message = message
  },
  clearMessage(state: any) {
    state.message = ''
  },
}

export const actions = {
  setMessage( { commit }: { commit: any }, message: string) {
    commit('setMessage', message)
  },
  clearMessage( { commit }: { commit: any } ) {
    commit('clearMessage')
  }
}