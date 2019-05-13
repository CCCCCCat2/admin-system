<template>
  <div class="book-list-wrap" v-if="bookList.length !== 0">
    <div v-for="item in bookList" :key="item.bid">
      <book-item :name="item.name"></book-item>
    </div>
  </div>
</template>

<script>
import bookItem from '../../components/book-item'
import {bookService} from '../../service/book.js'
export default {
  name: 'book-list',
  data() {
    return {
      bookList: []
    }
  },
  methods: {},
  mounted() {
    bookService.getBookList(sessionStorage.getItem('sid') || '').then(res => {
      if (res.success && res.message.length !== 0) {
        this.bookList = res.message
      }
    })
  },
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
</style>
