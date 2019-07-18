const state = () => ({
  app: ['南宁']
})

const mutations = {
  add(state, text) {
    state.app.push(text)
  }
}

const actions = {
  add: ({commit}, text) => {
    commit('add', text)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
