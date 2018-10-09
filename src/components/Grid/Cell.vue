<template>
  <div class="Cell" :style="`width: calc(100% / ${getX})`" :class="cellClass" @click="cellClick">
    <!-- {{cell.value}} -->
    <!-- {{cell.bombe}} -->
  </div>
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
      'getX'
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
      if (!this.cell.used) {
        this.$store.dispatch('setClick', { id: this.cell.id })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Cell {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: 1px solid black;
  color: grey;
  &:hover {
    cursor: pointer;
  }

  &.red {
    background-color: #e30613;
    -webkit-transition: background-color 0.2s linear;
    -ms-transition: background-color 0.2s linear;
    transition: background-color 0.2s linear;
    color: black;
  }

  &.green {
    background-color: #318eaf;
    -webkit-transition: background-color 0.2s linear;
    -ms-transition: background-color 0.2s linear;
    transition: background-color 0.2s linear;
    color: black;
  }
}
</style>
