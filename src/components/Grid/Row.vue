<template>
  <div class="Row" :style="`height: calc(80% / ${getY})`">
    <Cell v-for='(cell, index) in row' :key="'cell'+index" :cell="cell"/>
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
      'getY'
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
  min-height: 64px;
}
</style>
