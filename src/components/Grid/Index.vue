<template>
  <transition-group name="list" class="grid">
    <Row class="row" v-for='(row, index) in array' :key="'row'+index" :row="row" :style="`transition-delay: ${index+1} * 1000ms`"/>
  </transition-group>
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
.grid {
  display: block;
  width: 96vw;
  height: 86vh;
  padding: 0;
  margin: 2vh 2vw;
}
.list-enter-active, .list-leave-active {
  transition: all .25s;

}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
