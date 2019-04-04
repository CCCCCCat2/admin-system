<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted () {
    document.getElementsByTagName('title')[0].innerHTML = '北京邮电大学科研资源管理系统'
    if (!this.isLogin) {
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin: () => sessionStorage.getItem('isLogin') === 'true'
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
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
