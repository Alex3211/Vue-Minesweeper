<div class="loader"></div>
<template>
  <div class="content">
    <div class="Loader" />
  </div>
</template>

<script>
export default {
  name: 'Loader',
  data: function () {
    return {}
  },
  mounted () {},
  computed: {},
  methods: {}
}
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .Loader {
    border: 50px solid #f3f3f3; /* Light grey */
    border-top: 50px solid rgba(0, 0, 0, 0); /* Blue */
    border-radius: 50%;
    width: 220px;
    height: 220px;
    animation: spin 0.8s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
