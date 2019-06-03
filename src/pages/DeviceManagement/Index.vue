<template>
  <div class="report-box-wrap">
    <base-title title="设备管理" icon="md-laptop"></base-title>
    <div class="report-box">
      <CheckboxGroup v-model="studentsSelected" class="select-box-wrap">
        <CheckBox :label="item.sid" v-for="item in studentsList" :key="item.sid">{{item.name}}</CheckBox>
      </CheckboxGroup>
      <ButtonGroup>
        <Button type="primary" @click="submitSelected">确定</Button>
        <Button type="error" @click="clearSelected">清空</Button>
      </ButtonGroup>
    </div>
  </div>
</template>
<script>
import BaseTitle from '../../components/BaseTitle'
import contactApi from '../../service/contact.js'

export default {
  name: 'DeviceManagement',
  props: {},
  data() {
    return {
      studentsList: [],
      studentsSelected: []
    }
  },
  methods: {
    submitSelected: function() {
      console.log(this.studentsSelected)
      setTimeout(() => alert('分配管理员成功！'), 1000)
    },
    clearSelected: function() {
      this.studentsSelected = []
    }
  },
  components: {
    BaseTitle
  },
  mounted() {
    contactApi.getList().then(res => {
      if (res.success) {
        this.studentsList = res.message
      }
    })
  }
}
</script>
<style scoped>
.report-box-wrap {
  width: 100%;
  margin: 10px auto;
}
.report-box {
  padding: 20px 0;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #cccccc;
}
.select-box-wrap {
  margin: 20px auto;
}
</style>