import Vue from 'vue'
import Vuex from 'vuex'
import mixin from './mixin.js'

Vue.use(Vuex)
// penser a un systeme de jeu (replay, début/fin de partie avec win || loose)
export default new Vuex.Store({
  state: {
    array: [],
    score: 0
  },
  getters: {
    array: (state, getters) => {
      return state.array
    }
  },
  mutations: {
    generateArray (state) {
      let array = mixin.generateArray()
      array = mixin.GenerateBomb(array, 10, 21)
      array = mixin.setNumber(array, mixin.AdjacentBomb)
      state.array = array
      state.score = 0
    },
    setClick (state, payload) {
      // on passe le parametre used a true
      const newArray = state.array.map(row => row.map(col => {
        // col.used sert a mettre les couleurs, il faut mettre l'algo pour les cases adjacentes
        if (col.id === payload.id) col.used = !col.used
        return col
      }))
      state.array = newArray
    }
  },
  actions: {
    generateArray (context) {
      context.commit('generateArray')
    },
    setClick (context, payload) {
      context.commit('setClick', payload)
    }
  }
})
