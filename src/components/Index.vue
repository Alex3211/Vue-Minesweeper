<template>
  <div class="Index">
    <Nav/>
    <Grid/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Grid from '@/components/Grid/Index.vue'

export default {
  name: 'Index',
  components: {
    Nav,
    Grid
  }
}
</script>

<style scoped lang="scss">

</style>
