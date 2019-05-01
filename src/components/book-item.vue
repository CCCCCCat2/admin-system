<template>
  <div class="book-item-wrap">
    <div class="book-wrap">
      <div class="book-name">{{name}}</div>
    </div>
    <div class="book-mark"></div>
    <div class="book-mark-2"></div>
    <div class="operate-button-group">
      <Button type="primary" class="operate-btn-left">借书</Button>
      <Button type="info" class="operate-btn-right">还书</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookitem',
  props: {
    name: String
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.book-item-wrap {
  padding: 10px 30px 10px 0;
}
.book-wrap {
  width: 120px;
  height: 160px;
  padding: 10px;
  background: linear-gradient(to left, #b7894d, #7a4a12);
  border-radius: 5px;
}
.book-title-img {
  width: 100px;
  height: 40px;
  margin: 10px auto;
  background-color: #ffffff;
}
.book-mark {
  width: 0;
  height: 0;
  border-right: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid red;
  box-sizing: border-box;
  position: relative;
  left: 120px;
  top: -40px;
}
.book-mark-2 {
  width: 0;
  height: 0;
  border-right: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 15px solid red;
  box-sizing: border-box;
  position: relative;
  left: 120px;
  top: -55px;
}
.book-name {
  margin: 20px auto;
  color: #ffffff;
  font-size: 16px;
  width: 80%;
}
.operate-btn-group {
  margin-top: 10px;
  margin-bottom: 10px;
}
.operate-btn-left {
  margin-right: 5px;
}
.operate-btn-right {
  margin-left: 5px;
}
</style>

