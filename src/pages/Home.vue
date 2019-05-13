<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="toNewPage">
          <div class="layout-logo-wrap">
            <Icon type="md-planet" class="layout-logo" size="40"></Icon>
            <span class="layout-logo-title">北京邮电大学科研资源管理系统</span>
          </div>
          <div class="layout-nav">
            <MenuItem name="1" v-if="!isLogin">
              <Icon type="ios-log-in"></Icon>登录
            </MenuItem>
            <MenuItem name="2" v-if="!isLogin">
              <Icon type="ios-keypad"></Icon>注册
            </MenuItem>
            <MenuItem name="3" v-if="isLogin">
              <Icon type="ios-person"></Icon>个人中心
            </MenuItem>
            <MenuItem name="4" v-if="isLogin">
              <Icon type="ios-log-out"></Icon>退出登录
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider collapsible :collapsed-with="78" hide-trigger :style="{background: '#fff'}">
          <Menu
            active-name="1-1"
            theme="light"
            width="auto"
            :open-names="['1']"
            @on-select="redirectContent"
          >
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>人员管理
              </template>
              <MenuItem name="1-1">通讯录管理</MenuItem>
              <MenuItem name="1-2">值日管理</MenuItem>
              <MenuItem name="1-3">课表管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>日常业务
              </template>
              <MenuItem name="2-1">图书文献</MenuItem>
              <MenuItem name="2-2">纸质报告</MenuItem>
              <MenuItem name="2-3">合同协议</MenuItem>
              <MenuItem name="2-4">报销单</MenuItem>
              <MenuItem name="2-5">报箱续订</MenuItem>
              <MenuItem name="2-6">门禁系统管理</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>硬件设备管理
              </template>
              <MenuItem name="3-1">信息登记</MenuItem>
            </Submenu>
            <MenuItem name="4">
              <Icon type="ios-chatbubbles"></Icon>交流平台
            </MenuItem>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content
            :style="{padding: '24px', minHeight: '580px', background: '#fff'}"
            style="overflow: hidden"
          >
            <ContactManagement v-if="contentId === '1-1'"></ContactManagement>
            <Duty v-if="contentId === '1-2'"></Duty>
            <LessonManagement v-if="contentId === '1-3'"></LessonManagement>
            <Library v-if="contentId === '2-1'"></Library>
            <paper-reports v-if="contentId === '2-2'"></paper-reports>
            <Contract v-if="contentId === '2-3'"></Contract>
            <expense-account v-if="contentId === '2-4'"></expense-account>
            <project-management v-if="contentId === '4'"></project-management>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import ContactManagement from './ContactManagement/Index.vue'
import LessonManagement from './LessonManagement/Index.vue'
import ChattingRoom from './ChattingRoom/Index.vue'
import Library from './Library/Index.vue'
import PaperReports from './PaperReports/Index.vue'
import ProjectManagement from './ProjectManagement/Index'
import Contract from './Contract/Index'
import ExpenseAccount from './ExpenseAccount/Index'
import Duty from './Duty/Index'

export default {
  name: 'Home',
  components: {
    ContactManagement,
    LessonManagement,
    ChattingRoom,
    Library,
    PaperReports,
    ProjectManagement,
    Contract,
    ExpenseAccount,
    Duty
  },
  data() {
    return {
      contentId: '1-1'
    }
  },
  methods: {
    redirectContent: function(name) {
      this.contentId = name
    },
    toNewPage: function(name) {
      switch (name) {
        case '1':
          this.$router.push('/login')
          break
        case '2':
          this.$router.push('/register')
          break
        case '3':
          this.$router.push('/user-center')
          break
        case '4':
          sessionStorage.removeItem('isLogin')
          sessionStorage.removeItem('sid')
          location.reload()
        default:
          break
      }
    }
  },
  computed: {
    isLogin: () => !!sessionStorage.getItem('isLogin')
  }
}
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  /* overflow: hidden; */
}

.layout-logo-wrap {
  width: 330px;
  height: 40px;
  background: #ffffff;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 10px;
  left: 0px;
}
.layout-logo {
  position: absolute;
  top: 0;
  left: 0;
}
.layout-logo-title {
  font-size: 20px;
  font-weight: bolder;
  position: absolute;
  top: 0;
  left: 44px;
  line-height: 40px;
}

.layout-nav {
  margin: 0 auto;
  margin-right: 0;
  position: absolute;
  right: 0;
}
</style>
