import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
const store = new vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
})
export default store
