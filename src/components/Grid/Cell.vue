<template>
  <div class="Cell"
   :style="`width: calc(100% / ${getX} + 18px); ${(cell.bombe) ? '' : ''}`"
   :class="{
     green: (this.cell.used && this.cell.value >= 0 && !this.cell.bombe),
     red: (this.cell.used && this.cell.value === 0 && this.cell.bombe),
     first: cell.value === 1,
     second: cell.value === 2,
     third: cell.value === 3,
     hidden: cell.value === 0
    }"
    @click="cellClick"
    @contextmenu.prevent="preventBomb(cell)">
    <div v-html="( (cell.value !== 0 && cell.used )) ? cell.value : ''" class="text" />
    <svg v-if='!cell.used && cell.block' xmlns="http://www.w3.org/2000/svg" height="601pt" version="1.1" viewBox="-30 0 601 601.85965" width="601pt">
      <g id="surface1">
        <path d="M 122.867188 142.832031 C 83.441406 142.792969 51.488281 110.839844 51.449219 71.417969 L 51.449219 61.214844 L 71.855469 61.214844 L 71.855469 71.417969 C 71.855469 99.585938 94.695312 122.429688 122.867188 122.429688 C 151.035156 122.429688 173.878906 99.585938 173.878906 71.417969 C 173.878906 31.972656 205.851562 0 245.292969 0 C 284.734375 0 316.710938 31.972656 316.710938 71.417969 L 316.710938 91.820312 L 296.304688 91.820312 L 296.304688 71.417969 C 296.304688 43.25 273.460938 20.40625 245.292969 20.40625 C 217.125 20.40625 194.28125 43.25 194.28125 71.417969 C 194.230469 110.839844 162.289062 142.792969 122.867188 142.832031 Z M 122.867188 142.832031 " style=" stroke:none;fill-rule:nonzero;fill:rgb(52.941176%,32.54902%,22.352941%);fill-opacity:1;" />
        <path d="M 357.519531 138.253906 L 357.519531 81.617188 L 255.496094 81.617188 L 255.496094 138.253906 C 128.996094 166.421875 49.296875 291.808594 77.464844 418.308594 C 105.632812 544.808594 231.019531 624.507812 357.519531 596.339844 C 484.019531 568.171875 563.71875 442.78125 535.550781 316.285156 C 515.757812 227.429688 446.371094 158.042969 357.519531 138.253906 Z M 357.519531 138.253906 " style=" stroke:none;fill-rule:nonzero;fill:rgb(87.058824%,29.803922%,23.529412%);fill-opacity:1;" />
        <path d="M 527.101562 287.164062 C 497.84375 448.191406 343.59375 555.007812 182.582031 525.75 C 160.085938 521.65625 138.140625 514.984375 117.171875 505.855469 C 193.691406 610.449219 340.511719 633.210938 445.109375 556.691406 C 529.328125 495.070312 562.742188 385.242188 527.101562 287.164062 Z M 527.101562 287.164062 " style=" stroke:none;fill-rule:nonzero;fill:rgb(78.823529%,27.058824%,21.176471%);fill-opacity:1;" />
        <path d="M 51.449219 0 L 71.855469 0 L 71.855469 30.605469 L 51.449219 30.605469 Z M 51.449219 0 " style=" stroke:none;fill-rule:nonzero;fill:rgb(99.215686%,71.372549%,18.431373%);fill-opacity:1;" />
        <path d="M 0.4375 51.011719 L 31.042969 51.011719 L 31.042969 71.417969 L 0.4375 71.417969 Z M 0.4375 51.011719 " style=" stroke:none;fill-rule:nonzero;fill:rgb(99.215686%,71.372549%,18.431373%);fill-opacity:1;" />
        <path d="M 92.257812 51.011719 L 122.867188 51.011719 L 122.867188 71.417969 L 92.257812 71.417969 Z M 92.257812 51.011719 " style=" stroke:none;fill-rule:nonzero;fill:rgb(99.215686%,71.372549%,18.431373%);fill-opacity:1;" />
        <path d="M 3.425781 17.414062 L 17.851562 2.988281 L 38.253906 23.386719 L 23.824219 37.816406 Z M 3.425781 17.414062 " style=" stroke:none;fill-rule:nonzero;fill:rgb(99.215686%,71.372549%,18.431373%);fill-opacity:1;" />
        <path d="M 85.035156 23.394531 L 105.433594 2.996094 L 119.863281 17.421875 L 99.460938 37.824219 Z M 85.035156 23.394531 " style=" stroke:none;fill-rule:nonzero;fill:rgb(99.215686%,71.372549%,18.431373%);fill-opacity:1;" />
        <path d="M 3.417969 105.011719 L 23.816406 84.609375 L 38.246094 99.039062 L 17.84375 119.441406 Z M 3.417969 105.011719 " style=" stroke:none;fill-rule:nonzero;fill:rgb(99.215686%,71.372549%,18.431373%);fill-opacity:1;" />
        <path d="M 336.441406 357.082031 L 276.574219 357.082031 C 259.667969 357.082031 245.96875 343.378906 245.96875 326.476562 C 245.96875 309.570312 259.667969 295.867188 276.574219 295.867188 L 367.722656 295.867188 L 367.722656 275.464844 L 316.710938 275.464844 L 316.710938 255.058594 L 296.304688 255.058594 L 296.304688 275.464844 L 276.574219 275.464844 C 248.40625 275.464844 225.5625 298.308594 225.5625 326.476562 C 225.5625 354.644531 248.40625 377.488281 276.574219 377.488281 L 336.441406 377.488281 C 353.347656 377.488281 367.050781 391.191406 367.050781 408.09375 C 367.050781 425 353.347656 438.703125 336.441406 438.703125 L 245.292969 438.703125 L 245.292969 459.105469 L 296.304688 459.105469 L 296.304688 479.511719 L 316.710938 479.511719 L 316.710938 459.105469 L 336.441406 459.105469 C 364.609375 459.105469 387.453125 436.261719 387.453125 408.09375 C 387.453125 379.925781 364.609375 357.082031 336.441406 357.082031 Z M 336.441406 357.082031 " style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" />
      </g>
    </svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mixin from '@/mixin.js'
export default {
  name: 'Cell',
  data: function () {
    return {}
  },
  props: {
    cell: Object
  },
  created () {},
  mounted () {},
  computed: {
    ...mapGetters(['array', 'getX', 'getGameBreak', 'getLoading']),
    cellClass: function () {
      if (this.cell.used && this.cell.value >= 0 && !this.cell.bombe) {
        return 'green'
      } else if (this.cell.used && this.cell.value === 0 && this.cell.bombe) {
        return 'red'
      } else {
        return ''
      }
    }
  },
  methods: {
    preventBomb (cell) {
      if (!cell.used) { cell.block = !cell.block }
    },
    Number (cell, array) {
      return mixin.getAdjacentCase(cell, array).map(e => !e.bomb).length
    },
    log (cell, array) {
    },
    cellClick () {
      if (!this.cell.used && !this.getGameBreak && !this.getLoading && !this.cell.block) {
        this.$store.dispatch('setClick', { id: this.cell.id })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Cell {
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #f9f9f9;
  svg {
    position: absolute;
    width: 4%;
    height: 4%;
  }
  .triangle {
    margin-left: -18px;
    -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    &:nth-child(2n) {
      -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      transform: rotate(180deg);
      .text {
        transform: rotate(180deg);
      }
    }
  }
  &:hover {
    cursor: pointer;
  }

  &.red {
    background-color: #e30613;
    -webkit-transition: background-color 0.2s linear;
    -ms-transition: background-color 0.2s linear;
    transition: background-color 0.2s linear;
    color: black;
    &.hidden {
      color: #e30613;
    }
  }

  &.green {
    background-color: #acacac;
    -webkit-transition: background-color 0.2s linear;
    -ms-transition: background-color 0.2s linear;
    transition: background-color 0.2s linear;
    &.first {
      color: #0000ff;
    }
    &.second {
      color: #008200;
    }
    &.third {
      color: #ff0000;
    }
    &.hidden {
      color: #bebebe;
    }
  }
}
</style>
