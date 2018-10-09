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
    loading: false,
    settings: {
      y: 20,
      x: 50
    },
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
    },
    getGameBreak: (state, getters) => {
      return state.gameBreak
    }
  },
  mutations: {
    generateArray(state) {
      state.array = []
      state.score = 0
      state.win = false
      state.gameBreak = false
      let array = mixin.generateArray(state.settings.y, state.settings.x)
      array = mixin.GenerateBomb(array, state.settings.y, state.settings.x)
      array = mixin.setNumber(array, mixin.AdjacentBomb)
      state.array = array
      state.score = 0
    },
    setClick(state, payload) {
      const result = mixin.CheckCase(payload, state.array, mixin.CheckCase, false)
      state.win = result.win
      state.gameBreak = result.gameBreak
      state.score = state.score + result.score
      state.array = result.array
    },
    setX(state, payload) {
      state.loading = true
      state.settings.x = payload.x
      state.loading = false
    },
    setY(state, payload) {
      state.loading = true
      state.settings.y = payload.y
      state.loading = false
    },
    setLoading(state) {
      state.loading = !state.loading
    },
  },
  actions: {
    generateArray(context) {
      context.commit('generateArray')
    },
    setClick(context, payload) {
      context.commit('setLoading')
      context.commit('setClick', payload)
      context.commit('setLoading')
    },
    setX(context, payload) {
      context.commit('setLoading')
      context.commit('setX', payload)
      context.commit('generateArray', payload)
      context.commit('setLoading')
    },
    setY(context, payload) {
      context.commit('setLoading')
      context.commit('setY', payload)
      context.commit('generateArray', payload)
      context.commit('setLoading')
    },
    resetGame(context, payload) {
      context.commit('setLoading')
      context.commit('generateArray', payload)
      context.commit('setLoading')
    },
    setLoading(context, payload) {
      context.commit('setLoading')
    }
  }
})