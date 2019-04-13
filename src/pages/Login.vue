<template>
  <div class="index">
    <div>
      <img src="https://www.bupt.edu.cn/img/logo.gif" alt="logo" class="logo">
    </div>
    <h1 style="margin: 20px auto; color: #fff; letter-spacing:0.05em;">科研资源管理系统</h1>
    <Card class="login-form-wrap">
      <Form ref="formCustom" :model="formCustom" :label-width="80">
        <FormItem label="账户" prop="account">
          <Input type="email" v-model="formCustom.account"/>
        </FormItem>
        <FormItem label="密码" prop="passwd">
          <Input type="password" v-model="formCustom.passwd"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit()">确定</Button>
          <Button @click="handleReset('formCustom')" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Form>
    </Card>
    <div class="login-register-wrap">
      <p class="to-register" @click="toRegister">没有账号？快点击此处去注册</p>
    </div>
    <div class="spin-loading-wrap" :class="{ 'logining': isLoading }" v-if="isLoading">
      <div class="spin-loading">
        <Spin size="large" style="width:300%;height:300%;"></Spin>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../bus.js'
import auth from '../service/login.js'

export default {
  name: 'Login',
  data() {
    return {
      formCustom: {
        account: '',
        passwd: ''
      },
      isLoading: false
      // ruleCustom: {
      //   account: [{
      //     validator: validatePass,
      //     trigger: 'blur'
      //   }],
      //   passwd: [{
      //     validator: validatePassCheck,
      //     trigger: 'blur'
      //   }]
      // }
    }
  },
  methods: {
    handleSubmit() {
      this.isLoading = true
      auth
        .login(this.formCustom.account, this.formCustom.passwd, 1)
        .then(res => {
          if (res.success) {
            this.isLoading = false
            bus.$emit('login')
            sessionStorage.setItem('isLogin', 'true')
            sessionStorage.setItem('sid', account)
            this.$router.push('/')
          } else {
            alert('账号或密码错误')
          }
        })
        .catch(err => {
          alert('服务器繁忙')
          this.isLoading = false
          return
        })

      // setTimeout(() => {
      //   this.isLoading = false
      //   bus.$emit('login')
      //   sessionStorage.setItem('isLogin', 'true')
      //   this.$router.push('/')
      // }, 3000)
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    },
    toRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.index {
  background: linear-gradient(#04a0f1, #04a0f1, #5cc0f2);
  height: 100%;
}
.logo {
  width: 371px;
  height: 123px;
  margin: 100px auto 10px auto;
}
.logining {
  background: rgba(0, 0, 0, 0.3);
}
.login-form-wrap {
  width: 350px;
  margin: 0 auto;
}
.spin-loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.spin-loading-wrap .spin-loading {
  width: 35px;
  margin: 250px auto;
}
.login-register-wrap {
  width: 100%;
  margin: 15px auto;
}
.to-register {
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}
</style>
