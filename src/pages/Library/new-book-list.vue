<template>
  <div class="book-list-wrap">
    <Table :columns="bookListColumn" :data="bookList" @on-row-click="rowClick"></Table>
  </div>
</template>
<script>
export default {
  name: 'NewBookList',
  props: {
    bookList: Array
  },
  data() {
    return {
      bookListColumn: [
        {
          title: '编号',
          key: 'bid'
        },
        {
          title: '书名',
          key: 'name'
        },
        {
          title: '数量',
          key: 'number'
        },
        {
          title: '操作',
          key: 'operation',
          width: 120,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.borrowBook()
                    }
                  }
                },
                '借书'
              )
            ])
          }
        }
      ],
      rowIndex: 0,
      bookMessage: {}
    }
  },
  methods: {
    borrowBook: function() {},
    rowClick: function() {
      this.rowIndex = index
      this.bookMessage = this.bookList[index]
    }
  },
  components: {}
}
</script>
<style scoped>
</style>