<template>
  <div class="index">
    <div class="index-ctn">
      <h1 style="margin: 20px auto; color: #000; letter-spacing:0.05em;">北京邮电大学科研资源管理系统</h1>
      <Card class="register-form-wrap">
        <p slot="title">
          <Icon type="ios-body"></Icon>注册账号
        </p>
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
      <div class="spin-loading-wrap" :class="{ 'logining': isLoading }" v-if="isLoading">
        <div class="spin-loading">
          <Spin size="large" style="width:300%;height:300%;"></Spin>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../../bus.js'
import auth from '../../service/login.js'

export default {
  name: 'Register',
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
        .register(this.formCustom.account, this.formCustom.passwd, 1)
        .then(res => {
          if (res.success) {
            this.isLoading = false
            bus.$emit('login')
            sessionStorage.setItem('isLogin', 'true')
            this.$router.push('/')
          } else {
            alert('账号已被注册或填写账号密码格式有误')
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
    }
  }
}
</script>

<style>
.index {
  width: 100%;
  background: url('../../../public/img/bupt-bg.jpg');
  background-size: 100% 100%;
  height: 100%;
}
.index-ctn {
  padding-top: 150px;
}
.logining {
  background: rgba(0, 0, 0, 0.3);
}
.register-form-wrap {
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
</style>
