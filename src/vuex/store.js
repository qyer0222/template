import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
const store = new vuex.Store({
  state: {
    count: 100
  },
  getters: {
    doneTodos: state => {
      return state.count + 10
    },
    countTodos: state => {
      return state.count
    }
  },
  actions: {
    // actionA ({ commit }) {
    //   return new Promise((resolve, reject) => {
    //       commit('decrement')
    //       resolve()
    //   })
    // },
    // actionB (context,payload) {
    //   return new Promise((resolve, reject) => {
    //     context.commit('increment',payload)
    //       resolve()
    //   })
    // },
    // actionC ({dispatch,commit},payload) {
    //   return dispatch('actionB',payload).then(() => {
    //        commit('increment',payload);
    //   })
    // },
    decrement (context) {
      context.commit('decrement')
    },
    increment (context, payload) {
      context.commit('increment', payload)
    }
  },
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    },
    decrement (state) {
      state.count--
    }
  }
})
export default store
