<template>
  <div class="add-admin-wrap" v-if="isShow">
    <div class="add-admin-ctn">
      <Icon type="ios-close-circle-outline" class="close-btn" @click="closeBox" size="20"/>
      <p class="add-admin-title">选择值日生</p>
      <div class="add-admin-checkbox-group">
        <!-- <CheckboxGroup v-model="studentsSelected">
          <CheckBox :label="item.sid" v-for="item in studentsList" :key="item.sid">{{item.name}}</CheckBox>
        </CheckboxGroup>-->
        <select v-model="studentsSelected">
          <option :value="item.name" v-for="item in studentsList" :key="item.name">{{item.name}}</option>
        </select>
      </div>
      <ButtonGroup>
        <Button type="primary" @click="submitSelected">确定</Button>
        <Button type="error" @click="clearSelected">清空</Button>
      </ButtonGroup>
    </div>
  </div>
</template>
<script>
import contactApi from '../../service/contact.js'
import bus from '../../bus.js'

export default {
  name: 'SelectStudent',
  props: {
    isShow: Boolean,
    studentsList: Array
  },
  data() {
    return {
      studentsSelected: ''
    }
  },
  methods: {
    submitSelected: function() {
      console.log(this.studentsSelected)
      bus.$emit('setDuty', this.studentsSelected)
      bus.$emit('closeSelectStudent')
    },
    clearSelected: function() {
      this.studentsSelected = []
    },
    closeBox: function() {
      bus.$emit('closeSelectStudent')
    }
  },
  components: {},
  mounted() {}
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