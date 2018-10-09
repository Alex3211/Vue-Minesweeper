<template>
  <div class="Cell"
   :style="`width: calc(100% / ${getX})`"
   :class="{
     green: (this.cell.used && this.cell.value >= 0 && !this.cell.bombe),
     red: (this.cell.used && this.cell.value === 0 && this.cell.bombe),
     first: cell.value === 1,
     second: cell.value === 2,
     third: cell.value === 3,
     hidden: cell.value === 0
    }"
    @click="cellClick"
    v-html="(cell.value !== 0 && cell.used) ? cell.value : ''"/>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters([
      'array',
      'getX',
      'getGameBreak',
      'getLoading'
    ]),
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
    cellClick () {
      if (!this.cell.used && !this.getGameBreak && !this.getLoading) {
        this.$store.dispatch('setClick', { id: this.cell.id })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Cell {
  background: #F9F9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 1px solid black;
  color: #F9F9F9;
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
    background-color: #bebebe;
    -webkit-transition: background-color 0.2s linear;
    -ms-transition: background-color 0.2s linear;
    transition: background-color 0.2s linear;
    &.first {
      color: #0000FF;
    }
    &.second {
      color: #008200;
    }
    &.third {
      color: #FF0000;
    }
    &.hidden {
      color: #bebebe;
    }
  }
}
</style>
