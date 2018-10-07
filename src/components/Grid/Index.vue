<template>
  <div class="Grid">
    <Row v-for='(row, index) in array' :key="'row'+index" :row="row"/>
  </div>
</template>

<script>
import Row from '@/components/Grid/Row.vue'

export default {
  name: 'Index',
  data: function () {
    return {
      array: [],
      state: false
    }
  },
  components: {
    Row
  },
  created () {},
  mounted () {
    this.array = this.generateArray()
  },
  methods: {
    cellClick () {
      // if (u.target['data-attribute'].bombe) {
      //   u.target.className = `${u.target.className} red`
      //   setTimeout(() => {
      //     if (confirm('Loose! Relaunching')) app.launch(app)
      //     app.data.menuContent[1].score = 0
      //   }, 100)
      // } else {
      //   checkCase(u)
      // }
    },
    launch (app) {
      // const plateau = document.getElementById('app')
      // plateau.innerHTML = ''
      // app.uiManager.setMenu(app)
      // app.grid.GenerateBomb(array.length, array[0].length)
      // app.grid.setNumber(app.grid.AdjacentBomb)
      // array.forEach((e, i) => {
      //   const parent = app.grid.row(e, i, plateau)
      //   e.forEach((secondElement, secondIndex) => {
      //     app.grid.col(e, parent, i, secondIndex)
      //   })
      // })
    },
    generateArray () {
      let array = []
      for (let rowIndex = 0; rowIndex < 11; rowIndex++) {
        let row = []
        for (let colIndex = 0; colIndex < 22; colIndex++) {
          row.push({
            bombe: false,
            value: 0
          })
        }
        array.push(row)
      }
      return array
    }
  }
}
</script>

<style scoped lang="scss">
.Grid {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
