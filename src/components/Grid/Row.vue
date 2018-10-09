<template>
  <div class="Row" :style="`height: calc(90vh / ${Number(getY)+1})`">
    <Cell v-for='(cell, index) in row' :key="'cell'+index+cell.y+cell.x" :cell="cell"/>
  </div>
</template>

<script>
import Cell from '@/components/Grid/Cell.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Row',
  data: function () {
    return {
    }
  },
  props: {
    row: Array
  },
  created () {
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'array',
      'getY',
      'getX'
    ])
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
  width: 100%;
  // min-height: 64px;
}
</style>
