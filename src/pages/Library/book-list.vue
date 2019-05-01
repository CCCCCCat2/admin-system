<template>
  <div class="book-list-wrap">
    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>
    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>
    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>
    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>
    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>

    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>
    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>
    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>
    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>
    <div class="boook-list-item">
      <book-item name="悲惨世界"></book-item>
    </div>
  </div>
</template>

<script>
import bookItem from '../../components/book-item'
export default {
  name: 'book-list',
  data() {
    return {}
  },
  methods: {},
  components: {
    bookItem
  }
}
</script>

<style scoped>
.book-list-wrap {
  display: flex;
  flex-wrap: wrap;
}
.book-list-item {
  flex: 1;
}
</style>

