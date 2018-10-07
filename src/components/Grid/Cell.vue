<template>
  <div class="Cell">

  </div>
</template>

<script>
export default {
  name: 'Cell',
  data: function () {
    return {
      cell: []
    }
  },
  props: {
    Cells: Object
  },
  created () {},
  mounted () {
    this.cell = this.Cells
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.Cell {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  width: calc(100vw / 22);
  height: 100%;
  border: 1px solid black;
}
.Cell:hover {
  cursor: pointer;
}

.red {
  background: #e30613;
}

.green {
  background: #318eaf;
}
</style>
