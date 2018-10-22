<template>
  <div class="home">
    <Nav class="nav"/>
    <Canvas ref="canvas" class="canvas">
      <Box v-for="(obj, index) of currentArray(array)" :key="index"
        :x1="calcWidth(false, obj, array[0].length)" :x2="calcWidth(true, obj, array[1].length)"
        :y1="calcHeight(false, obj, array.length)" :y2="calcHeight(true, obj, array.length)"
        :x="obj.x"
        :y="obj.y"
        :value="obj.value"
        :text-size="'14'"
        :debug="false">
      </Box>
    </Canvas>
  </div>
</template>

<script>
import Canvas from '@/components/Generic/Canvas.vue'
import Box from '@/components/Generic/Box.vue'
import Nav from '@/components/Nav.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  components: {
    Canvas,
    Box,
    Nav
  },
  data: function () {
    return {
      state: false,
      chartValues: [
        { val: 24, color: 'red', x: 0, y: 0 },
        { val: 32, color: 'blue', x: 0, y: 1 },
        { val: 66, color: 'rebeccapurple', x: 1, y: 0 },
        { val: 1, color: 'green', x: 1, y: 1 }
      ],
      colWidth: 0,
      colHeight: 0
    }
  },
  created () {
    this.$store.dispatch('generateArray')
  },
  mounted () {
    this.colWidth = this.colWidthToPix()
    this.colHeight = this.colHeightToPix()
  },
  computed: {
    ...mapGetters(['array'])
  },
  methods: {
    currentArray () {
      const tmp = []
      this.array.forEach(row => row.forEach(item => tmp.push(item)))
      return tmp
    },
    colWidthToPix () {
      return Math.floor(this.$refs.canvas.$el.clientWidth / this.array.length)
    },
    colHeightToPix (percent) {
      return Math.floor(this.$refs.canvas.$el.clientHeight / this.array.length)
    },
    calcWidth (isForX2, obj, length) {
      const x1 = (100 / length) * obj.x
      const x2 = x1 + (100 / length)
      console.log((isForX2) ? 'X2' : 'X1', (isForX2) ? x2 : x1)
      if (isForX2) {
        return x2
      }
      return x1
    },
    calcHeight (isForY2, obj, height) {
      const y1 = (100 / height) * obj.y
      const y2 = y1 + (100 / height)
      if (isForY2) {
        return y2
      }
      return y1
    }
  }
}
</script>

<style scoped lang="scss">
.canvas {
  width: 96vw;
  height: 86vh;
  padding: 0;
  margin: 2vh 2vw;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
.home {
  height: 100%;
}
</style>
