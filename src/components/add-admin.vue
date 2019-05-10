<template>
  <div class="add-admin-wrap" v-if="isShow">
    <div class="add-admin-ctn">
      <Icon type="ios-close-circle-outline" class="close-btn" @click="closeBox" size="20"/>
      <p class="add-admin-title">添加管理员</p>
      <div class="add-admin-checkbox-group">
        <CheckboxGroup v-model="studentsSelected">
          <CheckBox :label="item.sid" v-for="item in studentsList" :key="item.sid">{{item.name}}</CheckBox>
        </CheckboxGroup>
      </div>
      <ButtonGroup>
        <Button type="primary" @click="submitSelected">确定</Button>
        <Button type="error" @click="clearSelected">清空</Button>
      </ButtonGroup>
    </div>
  </div>
</template>
<script>
import bus from '../bus.js'
export default {
  name: 'AddAdmin',
  props: {
    isShow: Boolean
  },
  data() {
    return {
      studentsList: [
        {
          sid: '10001',
          name: '小李'
        },
        {
          sid: '10002',
          name: '小白'
        },
        {
          sid: '10003',
          name: '小陈'
        },
        {
          sid: '10004',
          name: '小高'
        },
        {
          sid: '10005',
          name: '小王'
        },
        {
          sid: '10006',
          name: '小刘'
        }
      ],
      studentsSelected: []
    }
  },
  methods: {
    submitSelected: function() {
      bus.$emit('closeAddAdmin')
    },
    clearSelected: function() {
      this.studentsSelected = []
    },
    closeBox: function() {
      bus.$emit('closeAddAdmin')
    }
  },
  components: {}
}
</script>
<style scoped>
.add-admin-wrap {
  position: fixed;
  top: 40%;
  left: 40%;
  width: 200px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
}
.add-admin-ctn {
  padding: 20px 10px;
}
.add-admin-title {
  font-size: 14px;
  line-height: 1em;
}
.add-admin-checkbox-group {
  padding: 10px 0;
}
.close-btn {
  position: absolute;
  right: 10px;
  cursor: pointer;
  text-align: center;
}
</style>