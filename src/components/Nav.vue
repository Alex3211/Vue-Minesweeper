<template>
  <div class="Nav">

  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
#menu {
  width: 100%;
  height: 10vh;
  display: flex;
  min-height: 64px;
  background: #1d1d25;
}

.btn {
  height: 100%;
  width: 20%;
  font-size: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #626468;
}

.btn:hover {
  font-size: 24px;
  cursor: pointer;
  color: #626468;
}
</style>
