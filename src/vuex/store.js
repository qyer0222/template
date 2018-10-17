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
