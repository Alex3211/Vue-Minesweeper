import Vue from 'vue'
import Vuex from 'vuex'
import mixin from './mixin.js'

Vue.use(Vuex)
// penser a un systeme de jeu (replay, début/fin de partie avec win || loose)
export default new Vuex.Store({
  state: {
    array: [],
    score: 0,
    win: false,
    gameBreak: false,
    settings: {
      y: 4,
      x: 4
    }
  },
  getters: {
    array: (state, getters) => {
      return state.array
    }
  },
  mutations: {
    generateArray (state) {
      let array = mixin.generateArray(state.settings.y, state.settings.x)
      array = mixin.GenerateBomb(array, state.settings.y, state.settings.x)
      array = mixin.setNumber(array, mixin.AdjacentBomb)
      state.array = array
      state.score = 0
    },
    setClick (state, payload) {
      // col.used sert a mettre les couleurs, il faut mettre l'algo pour les cases adjacentes
      const result = mixin.CheckCase(payload, state.array, mixin.CheckCase, false)
      state.win = result.win
      state.gameBreak = result.gameBreak
      state.score = state.score + result.score
      state.array = result.array
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
