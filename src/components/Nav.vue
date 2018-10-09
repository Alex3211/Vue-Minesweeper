<template>
  <div class="menu">
    <div class="btn" v-for="(menu, index) in menuContent" :key="'menu'+index">
      {{(menu.fv === 'Score') ? `${menu.fv} ${score}` : (menu.fv === 'rejouer') ? `${menu.fv}` : ''}}
      <div v-show="menu.fv === 'Longueur'"> <input v-model="XModel" type="number" name="a" id="e"> </div>
      <div v-show="menu.fv === 'Largeur'"> <input v-model="YModel" type="number" name="a" id="e"> </div>
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
        return this.getX + 1
      }
    },
    YModel: {
      set: function (val) {
        this.$store.dispatch('setY', { y: val })
      },
      get: function () {
        return this.getY + 1
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
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #626468;
  }
  .btn:hover {
    font-size: 24px;
    cursor: pointer;
    color: #626468;
  }
}
</style>
