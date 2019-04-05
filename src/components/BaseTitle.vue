<template>
  <div class>
    <Icon :type="icon" class="title-icon"></Icon>
    <span class="title-ctn">{{title}}</span>
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
  left: 0;
}
.title-icon {
  display: inline;
  padding: 3px;
}
.title-ctn {
  font-size: 15px;
  font-weight: bold;
  color: #333333;
}
</style>
