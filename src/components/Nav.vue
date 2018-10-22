<template>
  <div class="container">
    <div class="btn"
      v-for="(menu, index) in menuContent"
      :key="'menu'+index"
      @click=" (menu.fv === 'rejouer') ? $store.dispatch('generateArray') : null">
        <div  v-if="menu.fv === 'Score'"><div class="text">{{`${menu.fv} ${score}`}}</div></div>
        <div v-if="menu.fv === 'rejouer'"><div class="text">{{`${menu.fv}`}}</div></div>
        <div class="input" v-show="menu.fv === 'Longueur'">
          X:
          <input v-model="XModel" min="10" max="40"  type="number" name="a" id="e">
        </div>
        <div class="input" v-show="menu.fv === 'Largeur'">
          Y:
          <input min="10" max="40"  v-model="YModel" type="number" name="a" id="e">
        </div>
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
    sleep (miliseconds) {
      var currentTime = new Date().getTime()

      while (currentTime + miliseconds >= new Date().getTime()) {}
    }
  }
}
</script>

<style scoped lang="scss">
// .menu {
//   width: 100%;
//   display: flex;
//   height: 10vh;
//   background: #1d1d25;
//   .btn {
//     width: 20%;
//     font-size: 20px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #626468;
//   }
//   .btn:hover {
//     font-size: 24px;
//     cursor: pointer;
//     color: #8e9094;
//   }
//   input {
//     padding: 0px 43%;
//     height: 100%;
//     width: 100%;
//     border: none;
//     background: #262631;
//     color: white;
//   }
// }

.container {
  z-index: 1;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: #5f5fc4;
  justify-content: flex-start;
  display: flex;
  position: relative;
  .btn {
    flex-basis: 50%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-weight: 600;
    align-items: center;
    color: rgba(255, 255, 255, 0.767);
    justify-content: space-around;
    border-width: 0px 0px 4px 0px;
    border-style: inset inset inset inset;
    border-color: #5252a5;
    .input {
      background-color: white;
      color: rgba(0, 0, 0, 0.5);
      border: 1px solid grey;
      padding: 5px;
      line-height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        border: 0;
        height: 100%;
      }
    }
  }
  .btn svg {
    font-size: 15px;
  }
  .marged svg {
    margin-right: 10px;
  }
  .btn:hover {
    cursor: pointer;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.527);
    border-width: 0px 0px 4px 0px;
    border-style: inset inset inset inset;
    border-color: rgba(40, 52, 147, 0.527);
  }
  .btn.active {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.95);
    border-width: 0px 0px 4px 0px;
    border-style: inset inset inset inset;
    border-color: rgb(63, 63, 131);
    .triangle {
      position: absolute;
      bottom: -2px;
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-top: 4px solid rgb(63, 63, 131);
    }
  }
  .btn .text {
    line-height: 2px;
    font-size: 14px;
    font-weight: 200;
  }
  .btn_noclick {
    cursor: default;
  }
  .btn_noclick:hover {
    cursor: default;
  }
}
</style>
