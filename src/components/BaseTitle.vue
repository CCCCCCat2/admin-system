<template>
  <div class="title-wrap">
    <Icon :type="icon" class="title-icon"></Icon>
    <p class="title-ctn">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    title: String,
    icon: String
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.title-wrap {
  position: relative;
  margin-left: 0;
  height: 30px;
}
.title-icon {
  position: absolute;
  left: 0;
  padding: 3px;
}
.title-ctn {
  position: absolute;
  left: 20px;
  font-size: 15px;
  font-weight: bold;
  color: #333333;
}
</style>
