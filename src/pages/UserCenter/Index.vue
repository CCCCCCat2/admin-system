<template>
  <div class="user-center-wrap">
    <div class="user-center-header-wrap">
      <base-title title="个人信息" icon="ios-person"></base-title>
      <Card>
        <div class="user-center-header">
          <Avatar style="background-color: #87d068" icon="ios-person"/>
          <div class="user-person-info">
            <p>学生</p>
            <p>
              <span>账号</span>
              <span>年级</span>
            </p>
          </div>
        </div>
      </Card>
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
          title: '这事第一条消息',
          content:
            '哈哈哈哈这是消息详细内容哈哈哈哈这是消息详细内容哈哈哈哈这是消息详细内容'
        },
        {
          title: '您有1条消息',
          content: '哈哈哈哈这是消息详细内容哎呀妈呀'
        },
        {
          title: '您有1条消息',
          content: '哈哈哈哈这是消息详细内容真是酷炫！！！！！！！！'
        }
      ],
      clickPosition: 0
    }
  },
  methods: {
    setClickPosition: function(index) {
      this.isShowDetail = true
      this.clickPosition = index
    },
    closeBox: function() {
      this.isShowDetail = false
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
</style>