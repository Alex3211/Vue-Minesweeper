<template>
  <div class="Row">
    <Cell v-for='(cell, index) in row' :key="'cell'+index" :cell="cell"/>
  </div>
</template>

<script>
import Cell from '@/components/Grid/Cell.vue'

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
