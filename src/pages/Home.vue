<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="toNewPage">
          <div class="layout-logo">ADMIN</div>
          <div class="layout-nav">
            <MenuItem name="1" v-if="!isLogin">
              <Icon type="ios-navigate"></Icon>登录
            </MenuItem>
            <MenuItem name="2" v-if="!isLogin">
              <Icon type="ios-keypad"></Icon>注册
            </MenuItem>
            <MenuItem name="3" v-if="isLogin">
              <Icon type="ios-analytics"></Icon>退出登录
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
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
              <MenuItem name="1-2">考勤管理</MenuItem>
              <MenuItem name="1-3">值日管理</MenuItem>
              <MenuItem name="1-4">课表管理</MenuItem>
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
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>项目管理
              </template>
              <MenuItem name="4-1">项目组</MenuItem>
              <MenuItem name="4-2">交流平台</MenuItem>
              <MenuItem name="4-3">成员信息</MenuItem>
              <MenuItem name="4-4">组内例会</MenuItem>
              <MenuItem name="4-4">资料归档</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content
            :style="{padding: '24px', minHeight: '580px', background: '#fff'}"
            style="overflow: hidden"
          >
            <ContactManagement v-if="contentId === '1-1'"></ContactManagement>
            <LessonManagement v-if="contentId === '1-4'"></LessonManagement>
            <ChattingRoom v-if="contentId === '4-2'"></ChattingRoom>
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

export default {
  name: 'Home',
  components: {
    ContactManagement,
    LessonManagement,
    ChattingRoom
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
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 0;
}
</style>
