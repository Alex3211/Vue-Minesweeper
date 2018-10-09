<template>
  <div class="menu">
    <div class="btn" v-for="(menu, index) in menuContent" :key="'menu'+index" @click=" (menu.fv === 'rejouer') ? $store.dispatch('generateArray') : null">
      <div v-if="menu.fv === 'Score'">{{`${menu.fv} ${score}`}}</div>
      <div v-if="menu.fv === 'rejouer'">{{`${menu.fv}`}}</div>
      <input v-show="menu.fv === 'Longueur'" v-model="XModel" type="number" name="a" id="e">
      <input v-show="menu.fv === 'Largeur'" v-model="YModel" type="number" name="a" id="e">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Nav',
  props: {
    msg: String
  },
  data: function () {
    return {
      menuContent: [
        {
          fv: 'Score',
          value: 0
        },
        {
          fv: 'rejouer'
        },
        {
          fv: 'Longueur'
        },
        {
          fv: 'Largeur'
        },
        {
          fv: ''
        }
      ]
    }
  },
  mounted () {
    this.x = this.getX
    this.y = this.getY
  },
  computed: {
    ...mapGetters(['array', 'getX', 'getY', 'score', 'getLoading']),
    XModel: {
      set: function (val) {
        this.$store.dispatch('setX', { x: val })
      },
      get: function () {
        return this.getX
      }
    },
    YModel: {
      set: function (val) {
        this.$store.dispatch('setY', { y: val })
      },
      get: function () {
        return this.getY
      }
    }

  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  display: flex;
  height: 10vh;
  background: #1d1d25;
  .btn {
    width: 20%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #626468;
  }
  .btn:hover {
    font-size: 24px;
    cursor: pointer;
    color: #8e9094;
  }
  input {
    padding: 0px 43%;
    height: 100%;
    width: 100%;
    border: none;
    background: #262631;
    color: white;
  }
}
</style>
