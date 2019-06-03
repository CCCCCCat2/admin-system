<template>
  <div class="user-center-wrap">
    <div class="user-center-header-wrap">
      <base-title title="个人信息" icon="ios-person"></base-title>
      <Card>
        <div class="user-center-header">
          <Avatar style="background-color: #87d068" icon="ios-person"/>
          <div class="user-person-info">
            <p>姓名：陈老师</p>
            <p>
              <span>账号：2019211309</span>
            </p>
            <p v-if="!isTeacher">
              <span>年级：</span>
            </p>
            <p>
              <span>个人权限：系统管理员</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
    <div class="user-center-message-box-wrap">
      <sub-title subTitle="我的消息"></sub-title>
      <div class="user-center-message-box">
        <div
          class="user-center-message"
          v-for="(item,index) in messageDetail"
          :key="index"
          @click="setClickPosition(index)"
        >
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
    <div class="user-center-book-list-wrap">
      <sub-title subTitle="我的借书清单"></sub-title>
      <Table :columns="bookColumn" :data="bookList"></Table>
    </div>
    <div class="user-center-message-detail-wrap" v-if="isShowDetail">
      <div class="user-center-message-detail">
        <div class="user-center-message-close-btn">
          <Icon type="ios-close-circle-outline" class="close-btn" size="20" @click="closeBox"/>
          <div class="user-center-message-detail-ctn">
            <p>{{messageDetail[this.clickPosition].content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaseTitle from '../../components/BaseTitle'
import SubTitle from '../../components/sub-title'
export default {
  name: 'UserCenter',
  props: {},
  data() {
    return {
      isShowDetail: false,
      messageDetail: [
        {
          title: '您有1条消息',
          content: '您有一本图书将在三天后到期，请注意还书'
        },
        {
          title: '您有1条消息',
          content: '本周三下午三点有关于下学期课题的选题会议，请按时参与'
        },
        {
          title: '您有1条消息',
          content:
            '暑假留校相关通知已在教务网站发布，请尽早阅读公告，办理留校手续'
        }
      ],
      bookColumn: [
        {
          title: '编号',
          key: 'bid'
        },
        {
          title: '书名',
          key: 'name'
        },
        {
          title: '借书时间',
          key: 'borrowTime'
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
                      this.returnBook()
                    }
                  }
                },
                '还书'
              )
            ])
          }
        }
      ],
      bookList: [
        {
          name: '计算机组成原理',
          bid: '30012121',
          borrowTime: '2019-03-06'
        },
        {
          name: '计算机网络',
          bid: '40012384',
          borrowTime: '2019-01-08'
        }
      ],
      clickPosition: 0,
      clickPositionForBook: 0,
      isTeacher: true
    }
  },
  methods: {
    setClickPosition: function(index) {
      this.isShowDetail = true
      this.clickPosition = index
    },
    setClickPositionForBook: function(index) {
      this.clickPositionForBook = index
    },
    closeBox: function() {
      this.isShowDetail = false
    },
    returnBook: function() {
      setTimeout(() => {
        alert('还书成功')
      }, 500)
    }
  },
  components: {
    BaseTitle,
    SubTitle
  }
}
</script>
<style scoped>
.user-center-wrap {
  background-color: #f5f6f8;
  padding: 20px;
  height: 100%;
}
.user-center-header-wrap {
  width: 80%;
}
.user-center-header {
  text-align: left;
  display: flex;
}
.user-person-info {
  padding-left: 20px;
}
.user-center-message-box-wrap {
  margin: 10px auto;
  width: 100%;
}
.user-center-message {
  padding: 10px 20px;
  background-color: #ffffff;
  width: 100%;
  text-align: left;
  border: 1px solid #cccccc;
  cursor: pointer;
}
.user-center-message-detail-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.user-center-message-detail {
  margin: 20% auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  width: 300px;
  min-height: 300px;
  max-height: 600px;
  overflow: auto;
}
.close-btn {
  position: absolute;
  right: 0;
  cursor: pointer;
  text-align: center;
}
.user-center-message-close-btn {
  width: 100%;
  position: relative;
}
.user-center-message-detail-ctn {
  padding-top: 25px;
  font-size: 14px;
}
.user-center-book-list-wrap {
  margin: 10px auto;
  width: 100%;
}
.user-center-book-list-box {
}
.user-center-book {
  padding: 10px 20px;
  background-color: #ffffff;
  width: 100%;
  text-align: left;
  border: 1px solid #cccccc;
  cursor: pointer;
}
</style>