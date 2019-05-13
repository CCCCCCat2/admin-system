<template>
  <div>
    <BaseTitle title="图书文献" icon="ios-book-outline"></BaseTitle>

    <div class="library-block">
      <sub-title subTitle="书籍列表"></sub-title>
      <!-- <book-list></book-list> -->
      <new-book-list :bookList="bookList"></new-book-list>
    </div>
    <div class="library-block">
      <sub-title subTitle="新书登记"></sub-title>
      <Card>
        <p slot="title" class="book-card-title">填写信息</p>
        <Form ref="newBookInfo" :model="newBookInfo" :label-width="80">
          <FormItem label="编号" prop="bid">
            <Input v-model="newBookInfo.bid"/>
          </FormItem>
          <FormItem label="书名" prop="name">
            <Input v-model="newBookInfo.name"/>
          </FormItem>
          <FormItem label="数量" prop="number">
            <Input v-model="newBookInfo.number"/>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit()">确定</Button>
            <Button @click="handleReset(newBookInfo)" style="margin-left: 8px">清除</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
import BaseTitle from '../../components/BaseTitle'
import SubTitle from '../../components/sub-title'
import bookList from './book-list'
import NewBookList from './new-book-list'
import {bookService} from '../../service/book.js'

export default {
  name: 'Library',
  methods: {
    handleReset(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = ''
        }
      }
    },
    handleSubmit() {
      bookService.insertBook(this.newBookInfo)
    }
  },
  data() {
    return {
      newBookInfo: {
        name: '',
        author: ''
      },
      bookList: []
    }
  },
  components: {
    bookList,
    BaseTitle,
    SubTitle,
    NewBookList
  },
  mounted() {
    bookService.getBookList(sessionStorage.getItem('sid') || '').then(res => {
      if (res.success && res.message.length !== 0) {
        this.bookList = res.message
      }
    })
  }
}
</script>

<style scoped>
.library-block {
  padding: 10px 0 20px 0;
}
.book-card-title {
  text-align: left;
}
</style>

