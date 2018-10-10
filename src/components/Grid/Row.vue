<template>
      <transition-group name="list" class="Row" :style="`height: calc(100% / ${getY})`">
        <Cell v-for='(cell, index) in row' :key="'cell'+index+cell.y+cell.x" :cell="cell"/>
      </transition-group>
</template>

<script>
import Cell from '@/components/Grid/Cell.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Row',
  data: function () {
    return {}
  },
  props: {
    row: Array
  },
  created () {},
  mounted () {},
  computed: {
    ...mapGetters(['array', 'getY', 'getX'])
  },
  components: {
    Cell
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Row {
  display: flex;
  width: 100%;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
