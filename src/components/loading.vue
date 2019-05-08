<template>
  <div class="loading-wrap">
    <div>
      <img src="../../public/img/spinner-of-dots.png" class="loading">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {},
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
<style scoped>
.loading-wrap {
  padding: 50px;
  position: fixed;
  top: 45%;
  left: 45%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  z-index: 999;
}
.loading {
  width: 50px;

  animation: circle 5s infinite;
}
.loading-ctn {
  text-align: center;
  position: fixed;
  top: 60%;
  left: 45%;
}
@keyframes circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>