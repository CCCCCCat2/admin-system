<template>
  <div>
    <Table border :columns="columnTitle" :data="contactData" @on-row-click="rowclick"></Table>
    <div class="add-item-wrap">
      <Button
        type="primary"
        long
        shape="circle"
        icon="md-add"
        size="large"
        @click="addNewItem"
      >新增通讯录条目</Button>
    </div>
    <Modal v-model="show" title="编辑通信信息" @on-ok="submitAdd">
      <Form v-model="contactMessage">
        <FormItem label="学号">
          <Input v-model="contactMessage.sid"/>
        </FormItem>
        <FormItem label="姓名">
          <Input v-model="contactMessage.name"/>
        </FormItem>
        <FormItem label="年龄">
          <Input v-model="contactMessage.age"/>
        </FormItem>

        <FormItem label="性别">
          <RadioGroup v-model="contactMessage.sex">
            <Radio label="男">男</Radio>
            <Radio label="女">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="年级">
          <!-- <Select v-model="grade">
            <Option v-for="item in gradeList" :value="item.value" :key="item.value">{{item.label}}</Option>
          </Select>-->
          <Input v-model="contactMessage.grade"/>
        </FormItem>
        <FormItem label="电话">
          <Input v-model="contactMessage.tel"/>
        </FormItem>
        <FormItem label="邮箱">
          <Input v-model="contactMessage.email"/>
        </FormItem>
        <FormItem label="QQ">
          <Input v-model="contactMessage.qq"/>
        </FormItem>
        <FormItem label="出生年月">
          <Input v-model="contactMessage.year" type="date"/>
        </FormItem>
        <FormItem label="身份证">
          <Input v-model="contactMessage.cardid"/>
        </FormItem>
        <FormItem label="银行卡号">
          <Input v-model="contactMessage.bankcard"/>
        </FormItem>
      </Form>
    </Modal>
    <Modal v-model="alert" title="删除联系人" @on-ok="submitDelete">
      <p>该操作将删除一名联系人，确定删除吗？</p>
    </Modal>
  </div>
</template>

<script>
import contactApi from '../../service/contact.js'
import bus from '../../bus.js'
export default {
  name: 'ConcactTable',
  methods: {
    openEdit: function() {
      this.show = true
      this.editType = 'update'
    },
    addNewItem: function() {
      this.show = true
      this.editType = 'insert'
      this.contactMessage = {
        sid: sessionStorage.getItem('sid'),
        name: '',
        age: 18,
        sex: '男',
        tel: '',
        email: '',
        qq: 10000,
        year: '',
        cardid: '',
        bankcard: ''
      }
    },
    submitAdd: function() {
      if (this.editType === 'insert') {
        contactApi
          .insert(Object.assign(this.contactMessage, { kind: 1 }))
          .then(res => {
            if (res.success) {
              this.contactData.push(this.contactMessage)
              alert('新增联系方式成功！')
            } else {
              alert('新增联系方式出错，请检查填写内容')
            }
          })
      } else {
        contactApi
          .update(Object.assign(this.contactData[this.rowIndex], { kind: 1 }))
          .then(res => {
            if (res.success) {
              this.contactData[this.rowIndex] = this.contactData
              alert('更新联系方式成功！')
            } else {
              alert('更新联系方式失败，请检查填写内容')
            }
          })
      }
    },
    delete: function() {
      this.alert = true
    },
    submitDelete: function() {
      contactApi
        .delete(Object.assign(this.contactData, { kind: 1 }))
        .then(res => {
          if (res.success) {
            this.contactData.splice(this.rowIndex, 1)
            alert('删除联系人信息成功！')
          } else {
            alert('删除联系人信息失败！')
          }
        })
    },
    rowclick: function(data, index) {
      this.rowIndex = index
      this.contactMessage = this.contactData[index]
    },
    updateGrade: function(d) {
      console.log('change')
      this.contactData.grade = d
      console.log(this.contactData)
    }
  },
  data() {
    return {
      show: false,
      alert: false,
      editType: 'add',
      rowIndex: 0,
      columnTitle: [
        {
          title: '学号',
          key: 'sid'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '性别',
          key: 'sex'
        },
        {
          title: '电话',
          key: 'tel'
        },
        {
          title: '年级',
          key: 'grade'
        },
        {
          title: '邮箱',
          key: 'email'
        },
        {
          title: 'QQ',
          key: 'qq'
        },
        {
          title: '出生年月',
          key: 'year'
        },
        {
          title: '身份证',
          key: 'cardid'
        },
        {
          title: '银行卡卡号',
          key: 'bankcard'
        },
        {
          title: '操作',
          key: 'operation',
          width: 130,
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
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.openEdit()
                    }
                  }
                },
                '编辑'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.delete()
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ],
      contactData: [
        {
          sid: '0413001',
          name: '陈xx',
          age: 18,
          sex: '男',
          tel: 10086,
          grade: '本科一年级',
          email: 'chenxx@outlook.com',
          qq: 1001010,
          year: '2011-01-01',
          cardid: '1234567890',
          bankcard: '1234567890'
        },
        {
          sid: '0413002',
          name: '陈oo',
          age: 18,
          sex: '女',
          tel: 10086,
          grade: '本科一年级',
          email: 'chenxx@outlook.com',
          qq: 1001010,
          year: '2011-01-01',
          cardid: '1234567890',
          bankcard: '1234567890'
        }
      ],
      contactMessage: {
        sid: '',
        name: '',
        age: 0,
        sex: '女',
        tel: '',
        grade: '本科三年级',
        email: '',
        qq: 1000000,
        year: '',
        cardid: '',
        bankcard: ''
      },
      gradeList: [
        {
          value: '本科生一年级',
          label: '本科生一年级'
        },
        {
          value: '本科生二年级',
          label: '本科生二年级'
        },
        {
          value: '本科生三年级',
          label: '本科生三年级'
        },
        {
          value: '本科生四年级',
          label: '本科生四年级'
        },
        {
          value: '研究生一年级',
          label: '研究生一年级'
        },
        {
          value: '研究生二年级',
          label: '研究生二年级'
        }
      ],
      grade: ''
    }
  },
  components: {}
}
</script>

<style scoped>
.add-item-wrap {
  padding: 40px 180px;
  width: 100%;
}
.add-item {
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #666666;
}
</style>
