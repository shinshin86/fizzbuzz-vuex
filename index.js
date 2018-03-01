const store = require('./fz')
for(let i = 0; i < 100; i++) {
  store.dispatch('fizzbuzz')
  console.log(store.getters.fzTail)
}
console.log(store.getters.fzList)

