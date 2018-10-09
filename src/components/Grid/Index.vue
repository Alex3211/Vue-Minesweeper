<template>
  <div class="Grid">
    <Row v-for='(row, index) in array' :key="'row'+index" :row="row"/>
  </div>
</template>

<script>
import Row from '@/components/Grid/Row.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data: function () {
    return {
      state: false
    }
  },
  components: {
    Row
  },
  created () {
    this.$store.dispatch('generateArray')
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'array'
    ])
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.Grid {
  width: 100vw;
  height: 90vh;
  padding: 0;
  margin: 0;
}
</style>
