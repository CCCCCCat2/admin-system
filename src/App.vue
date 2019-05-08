<template>
  <div id="app">
    <router-view></router-view>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>

<script>
import Loading from './components/loading'
import bus from './bus.js'

export default {
  name: 'app',
  data() {
    return {
      isLoading: false
    }
  },
  mounted() {
    document.getElementsByTagName('title')[0].innerHTML =
      '北京邮电大学科研资源管理系统'
    if (!this.isLogin) {
      this.$router.push('/login')
    }
    bus.$on('showLoading', () => {
      this.isLoading = true
    })
    bus.$on('closeLoading', () => {
      this.isLoading = false
    })
  },
  computed: {
    isLogin: () => sessionStorage.getItem('isLogin') === 'true'
  },
  components: {
    Loading
  }
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  height: 100%;
}
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
