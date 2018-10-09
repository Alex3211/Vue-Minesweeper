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
  width: 90vw;
  height: 80vh;
  padding: 0;
  margin: 5vh 5vw;
  -webkit-box-shadow: 0px 0px 15px 1px rgba(255,255,255,1);
-moz-box-shadow: 0px 0px 15px 1px rgba(255,255,255,1);
box-shadow: 0px 0px 15px 1px rgba(255,255,255,1);
}
</style>
