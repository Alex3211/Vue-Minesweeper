<template>
  <div class="menu">
    <div class="btn" v-for="(menu, index) in menuContent" :key="'menu'+index">{{menu.fv}}</div>
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
          fv: ''
        },
        {
          fv: ''
        },
        {
          fv: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['array', 'getX', 'getY'])
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  height: 10vh;
  display: flex;
  min-height: 64px;
  background: #1d1d25;
  .btn {
    height: 100%;
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
