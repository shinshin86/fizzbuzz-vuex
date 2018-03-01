const Vue = require('vue')
const Vuex = require('vuex')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: [],
  },
  actions: {
    fizzbuzz ({commit, state}) {
      if(state.list.length === 0)
        state.list.push[1]

      const num = state.list.length
      commit('fizzbuzz', fzConvert(num+1))
    }
  },
  mutations: {
    fizzbuzz(state, num) {
      state.list.push(num)
    }
  },
  getters: {
    fzList:(state) => {
      return state.list
    },
    fzTail:(state) => {
      return state.list[state.list.length - 1]
    }
  }
})

const fzConvert = (count) => {
  let res = ''
  if (count % 3 == 0)
    res += "Fizz"
  if (count % 5 == 0)
    res += "Buzz"
  if (res.length == 0)
    return count
  return res
}

module.exports = store
