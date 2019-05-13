<template>
  <div>
    <base-title title="报销单" icon="md-list"></base-title>
    <expense-account-list :listData="listData" :listDetail="listDetail"></expense-account-list>
  </div>
</template>
<script>
import BaseTitle from '../../components/BaseTitle'
import ExpenseAccountList from './expense-account-list'
import bus from '../../bus.js'
export default {
  name: 'ExpenseAccount',
  props: {},
  data() {
    return {
      isShowDetailBox: false,
      listData: [
        {
          eid: '2001234',
          type: '硬件'
        },
        {
          eid: '2003344',
          type: '软件'
        }
      ],
      listDetail: [
        {
          content: '树莓派配件',
          submitter: '陈同学',
          price: 200,
          time: '2019-04-25',
          type: '硬件'
        },
        {
          content: '软件授权购买',
          submitter: '李同学',
          price: 150,
          time: '2019-05-05',
          type: '软件'
        }
      ],
      selectedDetail: {}
    }
  },
  methods: {},
  components: {
    BaseTitle,
    ExpenseAccountList
  },
  mounted() {}
}
</script>
<style scoped>
</style>