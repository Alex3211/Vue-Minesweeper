<template>
  <div class="Row">
    <Cell v-for='(cell, index) in Row' :key="'cell'+index" :Cells="cell"/>
  </div>
</template>

<script>
import Cell from '@/components/Grid/Cell.vue'

export default {
  name: 'Row',
  data: function () {
    return {
      Row: []
    }
  },
  props: {
    row: Array
  },
  created () {
  },
  mounted () {
    this.Row = this.row
  },
  components: {
    Cell
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.Row {
  display: flex;
  height: calc(100% / 11);
  min-height: 64px;
}
</style>
