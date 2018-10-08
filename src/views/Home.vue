<template>
    <Index msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Index from '@/components/Index.vue'

export default {
  name: 'home',
  components: {
    Index
  }
}
</script>

<style lang="scss" scoped>
.Index {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
