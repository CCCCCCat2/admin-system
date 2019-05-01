<template>
  <div>
    <div class="subtitle-wrap">
      <p class="title-ctn">{{subTitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    subTitle: String,
    icon: String
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.subtitle-wrap {
  width: 100%;
  position: relative;
  margin-left: 0;
  height: 30px;
  margin-bottom: 15px;
  background-color: rgba(57, 198, 253, 0.1);
  border-left: 5px solid rgba(19, 182, 247, 1);
}
.title-ctn {
  padding-left: 3px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  padding-top: 4px;
  color: #333333;
}
</style>

