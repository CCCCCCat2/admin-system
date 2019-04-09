<template>
  <div>
    <Table border :columns="columnTitle" :data="contactData"></Table>
    <div class="add-item-wrap">
      <Button type="primary" long shape="circle" icon="md-add" size="large">新增通讯录条目</Button>
    </div>
    <Modal v-model="show" title="编辑通信信息">
      <Form v-model="contactMessage">
        <FormItem label="姓名">
          <Input v-model="contactMessage.name"/>
        </FormItem>
        <FormItem label="年龄">
          <Input v-model="contactMessage.age"/>
        </FormItem>
        <FormItem label="性别">
          <RadioGroup v-model="contactMessage.sex">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="年级">
          <Select v-model="contactMessage.grade">
            <Option value="本科一年级">本科一年级</Option>
            <Option value="本科二年级">本科二年级</Option>
            <Option value="本科三年级">本科三年级</Option>
            <Option value="本科四年级">本科四年级</Option>
            <Option value="研究生一年级">研究生一年级</Option>
            <Option value="研究生二年级">研究生二年级</Option>
            <Option value="研究生三年级">研究生三年级</Option>
            <Option value="博士生一年级">博士生一年级</Option>
            <Option value="博士生二年级">博士生二年级</Option>
            <Option value="其他">其他</Option>
          </Select>
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
          <Input v-model="contactMessage.bankid"/>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import contactApi from '../../service/contact.js'
import bus from '../../bus.js'
export default {
  name: 'ConcactTable',
  methods: {
    insertContactItem: function() {
      contactApi.test()
    },
    openEdit: function() {
      this.show = true
    }
  },
  data() {
    return {
      show: false,
      columnTitle: [
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
          key: 'bankid'
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
                      this.insertContactItem()
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
          name: '陈xx',
          age: 18,
          sex: '男',
          tel: 10086,
          grade: '本科一年级',
          email: 'chenxx@outlook.com',
          qq: 1001010,
          year: '2011-01-01',
          cardid: '1234567890',
          bankid: '1234567890'
        }
      ],
      contactMessage: {
        sid: '',
        name: '',
        age: 0,
        sex: 'male',
        grade: '',
        email: '',
        qq: 1000000,
        year: '',
        cardid: '',
        bankid: ''
      }
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
