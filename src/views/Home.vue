<template>
  <div class="home">
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
.grid {
  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
}
.nav {
  //     -webkit-box-shadow: 0px 0px 15px 1px rgba(255,255,255,1);
  // -moz-box-shadow: 0px 0px 15px 1px rgba(255,255,255,1);
  // box-shadow: 0px 0px 15px 1px rgba(255,255,255,1);
}
</style>
