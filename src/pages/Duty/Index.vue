<template>
  <div class="duty-wrap">
    <base-title title="值日管理" icon="md-clipboard"></base-title>
    <Table :columns="dutyColumn" :data="dutyList" @on-row-click="setClickPosition"></Table>
    <select-student :isShow="isShowSelectStudent" :studentsList="studentsList"></select-student>
  </div>
</template>
<script>
import BaseTitle from '../../components/BaseTitle'
import SelectStudent from './select-student'
import contactApi from '../../service/contact.js'
import bus from '../../bus.js'

export default {
  name: 'Duty',
  props: {},
  data() {
    return {
      isShowSelectStudent: false,
      dutyColumn: [
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '现有值日生',
          key: 'attendant'
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
                      this.openSelectStudent()
                    }
                  }
                },
                '选择值日生'
              )
            ])
          }
        }
      ],
      dutyList: [
        {
          date: '星期一',
          attendant: ''
        },
        {
          date: '星期二',
          attendant: ''
        },
        {
          date: '星期三',
          attendant: ''
        },
        {
          date: '星期四',
          attendant: ''
        },
        {
          date: '星期五',
          attendant: ''
        },
        {
          date: '星期六',
          attendant: ''
        },
        {
          date: '星期日',
          attendant: ''
        }
      ],
      studentsList: [],
      rowIndex: 0
    }
  },
  methods: {
    setClickPosition: function(data, index) {
      this.rowIndex = index
    },
    openSelectStudent: function() {
      this.isShowSelectStudent = true
    },
    closeSelectStudent: function() {
      this.isShowSelectStudent = false
    },
    insertToList: function(data) {
      this.dutyList[this.rowIndex]['attendant'] = data
    }
  },
  components: {
    BaseTitle,
    SelectStudent
  },
  mounted() {
    bus.$on('closeSelectStudent', this.closeSelectStudent)
    bus.$on('setDuty', this.insertToList)
    contactApi
      .getList()
      .then(res => {
        console.log(res)
        if (res.success) {
          this.studentsList = res.message
        }
      })
      .catch(err => console.log(err))
  }
}
</script>
<style scoped>
</style>