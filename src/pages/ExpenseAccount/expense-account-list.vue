<template>
  <div class="expense-account-list-wrap">
    <Table :columns="listColumn" :data="listData" @on-row-click="setClickPosition"></Table>
    <detail-box :isShow="isShowDetailBox" :detail="selectedDetail"></detail-box>
  </div>
</template>
<script>
import DetailBox from './datail-box'
import bus from '../../bus.js'

export default {
  name: 'ExpenseAccountList',
  props: {
    listData: Array,
    listDetail: Array
  },
  data() {
    return {
      listColumn: [
        {
          title: '单号',
          key: 'eid'
        },
        {
          title: '类型',
          key: 'type'
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
                    type: 'success',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.openDetailBox()
                    }
                  }
                },
                '查看详情'
              )
            ])
          }
        }
      ],
      isShowDetailBox: false,
      rowIndex: 0,
      selectedDetail: {}
    }
  },
  methods: {
    closeDetailBox: function() {
      this.isShowDetailBox = false
    },
    openDetailBox: function() {
      this.isShowDetailBox = true
    },
    setClickPosition: function(data, index) {
      this.rowIndex = index
      this.selectedDetail = this.listDetail[index]
    }
  },
  components: {
    DetailBox
  },
  mounted() {
    bus.$on('closeDetailBox', this.closeDetailBox)
  }
}
</script>
<style scoped>
</style>