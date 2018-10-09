/* eslint-disable */
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
      y: 52,
      x: 52
    },
    loading: false
  },
  getters: {
    array: (state, getters) => {
      return state.array
    },
    score: (state, getters) => {
      return state.score
    },
    getX: (state, getters) => {
      return Number(state.settings.x)
    },
    getY: (state, getters) => {
      return Number(state.settings.y)
    },
    getLoading: (state, getters) => {
      return state.loading
    }
  },
  mutations: {
    generateArray (state) {
      state.loading = true
      state.array = []
      state.score = 0
      state.win = false
      state.gameBreak = false
      let array = mixin.generateArray(state.settings.y, state.settings.x)
      array = mixin.GenerateBomb(array, state.settings.y, state.settings.x)
      array = mixin.setNumber(array, mixin.AdjacentBomb)
      state.array = array
      state.score = 0
      state.loading = false
    },
    setClick (state, payload) {
      state.loading = true
      const result = mixin.CheckCase(payload, state.array, mixin.CheckCase, false)
      state.win = result.win
      state.gameBreak = result.gameBreak
      state.score = state.score + result.score
      state.array = result.array
      state.loading = false
    },
    setX (state, payload) {
      state.loading = true
      state.settings.x = payload.x
      state.loading = false
    },
    setY (state, payload) {
      state.loading = true
      state.settings.y = payload.y
      state.loading = false
    },
  },
  actions: {
    generateArray (context) {
      context.commit('generateArray')
    },
    setClick (context, payload) {
      context.commit('setClick', payload)
    },
    setX (context, payload) {
      context.commit('setX', payload)
      context.commit('generateArray', payload)
    },
    setY (context, payload) {
      context.commit('setY', payload)
      context.commit('generateArray', payload)
    },
    resetGame (context, payload) {
      new Promise((resolve, reject) => {
        resolve(context.commit('generateArray', payload))
      })
    }
  }
})
