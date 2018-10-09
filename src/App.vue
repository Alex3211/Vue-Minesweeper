<template>
  <div id="app">
    <Loader v-show="getLoading"/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loader from '@/components/Loader'

export default {
  name: 'App',
  components: {
    Loader
  },
  computed: {
    ...mapGetters(['getLoading'])
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
body,
#app {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background: #262631;
}
</style>
