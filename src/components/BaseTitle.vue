<template>
  <div class="title-wrap">
    <Icon :type="icon" class="title-icon" size="30"></Icon>
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
  margin-bottom: 15px;
}
.title-icon {
  position: absolute;
  left: 0;
  padding-right: 5px;
  padding-top: 5px;
}
.title-ctn {
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  padding-left: 33px;
  padding-top: 4px;
  color: #333333;
}
</style>
