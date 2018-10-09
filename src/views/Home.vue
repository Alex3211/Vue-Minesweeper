<template>
  <div class="Home">
    <Nav class="nav"/>
    <Grid class="grid"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Grid from '@/components/Grid/Index.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Grid
  }
}
</script>

<style scoped lang="scss">
.home {
  height: 100%;
}
</style>
