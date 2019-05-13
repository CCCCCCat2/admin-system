<template>
  <div>
    <base-title title="课表管理" icon="ios-school"></base-title>
    <div class="add-admin-btn-wrap">
      <Button type="primary" shape="circle" icon="ios-add" @click="showAddAdmin">添加管理员</Button>
    </div>
    <div class="add-admin-btn-wrap">
      <Button type="primary" shape="circle" icon="ios-search" @click="showSelectStudents">搜索课表</Button>
    </div>
    <add-admin :isShow="isShowAddAdmin"></add-admin>
    <select-students :isShow="isShowSelectStudents" :studentsList="studentsList"></select-students>
    <!-- <div class="search-input-wrap">
      <Input
        search
        enter-button
        placeholder="输入学生姓名"
        v-model="searchValue"
        @on-search="searchLessonsBySid"
      />
    </div>-->
    <div class="lesson-table-wrap">
      <div class="lesson-table-row">
        <lesson-table :lessonData="{courseData}" v-if="isShowTable"></lesson-table>
      </div>
      <Modal v-model="showCourseInsert" title="编辑课程信息" @on-ok="submitInsertCourse">
        <Form :model="courseEditData">
          <FormItem label="课程名称">
            <Input v-model="courseEditData.cname" :placeholder="'填写课程名'"/>
          </FormItem>
          <FormItem label="日期">
            <!-- <Input v-model="courseEditData.week" :placeholder="'填写上课具体周几，如 4'"/> -->
            <select v-model="courseEditData.week" class="select-box">
              <option value="周一">周一</option>
              <option value="周二">周二</option>
              <option value="周三">周三</option>
              <option value="周四">周四</option>
              <option value="周五">周五</option>
              <option value="周六">周六</option>
              <option value="周日">周日</option>
            </select>
          </FormItem>
          <FormItem label="节次">
            <!-- <Input v-model="courseEditData.orders" :placeholder="'填写节次，如 2'"/> -->
            <select v-model="courseEditData.orders" class="select-box">
              <option value="1">第一节</option>
              <option value="2">第二节</option>
              <option value="3">第三节</option>
              <option value="4">第四节</option>
              <option value="5">第五节</option>
              <option value="6">第六节</option>
              <option value="7">第七节</option>
              <option value="8">第八节</option>
            </select>
          </FormItem>
          <FormItem label="单/双周">
            <RadioGroup v-model="courseEditData.signalordouble">
              <Radio label="single">单周</Radio>
              <Radio label="double">双周</Radio>
              <Radio label="both">单双周</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="教师">
            <Input v-model="courseEditData.teach" :placeholder="'填写教师姓名'"/>
          </FormItem>
          <FormItem label="教室">
            <Input v-model="courseEditData.classroom" :placeholder="'填写教室，如 教三-333 '"/>
          </FormItem>
        </Form>
      </Modal>
    </div>
    <Button type="primary" long shape="circle" icon="md-add" size="large" @click="addNewItem">新增课程</Button>
    <div class="import-export-lesson-table">
      <div class="upload-input-wrap">
        <input type="file" name accept=".xlsx, .xls" class="upload-input" id="file-input">
        <Button
          type="primary"
          shape="circle"
          icon="md-arrow-round-up"
          size="large"
          style="margin-right: 5px"
          @click="uploadLessonsTable"
        >确定上传</Button>
      </div>
    </div>
  </div>
</template>

<script>
// import CourseItem from '../../components/CourseItem'
import LessonTable from './lesson-table'
import BaseTitle from '../../components/BaseTitle'
import {courseService} from '../../service/course.js'
import contactApi from '../../service/contact.js'
import AddAdmin from '../../components/add-admin'
import selectStudents from './select-students'
import bus from '../../bus.js'
import XLSX from 'xlsx'

export default {
  name: 'LessonManagement',
  data() {
    return {
      showCourseInsert: false,
      editType: '',
      courseEditData: {
        sid: sessionStorage.getItem('sid'),
        cname: '',
        classroom: '',
        teach: '',
        week: '',
        orders: null,
        signalordouble: ''
      },
      courseData: [],
      searchValue: '',
      studentsList: [],
      isShowTable: false,
      isShowAddAdmin: false,
      isShowSelectStudents: false
    }
  },
  methods: {
    addNewItem: function() {
      this.showCourseInsert = true
      this.editType = 'insert'
    },
    submitInsertCourse: function() {
      if (this.editType === 'insert') {
        courseService.insertCourse(this.courseEditData).then(res => {
          if (res.success) {
            this.courseData.push(this.courseEditData)
            alert('新增课程成功！')
            location.reload()
            this.courseEditData = {
              sid: sessionStorage.getItem('sid'),
              cname: '',
              classroom: '',
              teach: '',
              week: '',
              orders: null,
              signalordouble: ''
            }
          }
        })
      } else {
        courseService.updateCourse(this.courseEditData).then(res => {
          res.success && alert('更新课程成功')
        })
      }
    },
    editUpdate: function() {
      this.show = true
      this.editType = 'update'
    },
    searchLessonsBySid: function() {},
    showAddAdmin: function() {
      this.isShowAddAdmin = true
    },
    showSelectStudents: function() {
      this.isShowSelectStudents = true
    },
    closeAddAdmin: function() {
      this.isShowAddAdmin = false
    },
    closeSelectStudents: function() {
      this.isShowSelectStudents = false
    },
    uploadLessonsTable: function() {
      let input = document.querySelector('#file-input')
      const reader = new FileReader()
      reader.onload = function(e) {
        let data = new Uint8Array(e.target.result)
        let workbook = XLSX.read(data, {type: 'array'})
        console.table(workbook.Strings)
        console.log(workbook.Strings[15].h)
        console.log(workbook.Strings[15].r)
        console.log(workbook.Strings[15].t)
        /* DO SOMETHING WITH workbook HERE */
      }
      reader.readAsArrayBuffer(input.files[0])
    },
    exportLessonTable: function() {
      console.log(this.courseData)
      const exportFile = XLSX.utils.aoa_to_sheet(this.courseData)
      console.log(exportFile)
    }
  },
  components: {
    LessonTable,
    BaseTitle,
    AddAdmin,
    selectStudents
  },
  mounted() {
    bus.$emit('showLoading')
    // 这里放了一处bus的监听，是因为子组件无法修改自己被引用时候的props属性。每个使用addAdmin组件的父组件都需要添加这样的监听事件。
    // 因为这些父组件不会被 同时 挂载，所以可以做同名，但是需要在beforeDestory周期的时候做一次off进行销毁
    bus.$on('closeAddAdmin', this.closeAddAdmin)
    bus.$on('closeSelectStudents', this.closeSelectStudents)
    contactApi
      .getList()
      .then(res => {
        console.log(res)
        if (res.success) {
          this.studentsList = res.message
        }
      })
      .catch(err => console.log(err))
    courseService.getCourseList(sessionStorage.getItem('sid')).then(res => {
      if (res.success) {
        // !!!此处需要和后端对下数据是否存在data字段里
        this.courseData = res.message
        this.isShowTable = true
        bus.$emit('closeLoading')
      } else {
        alert('暂无课程信息')
        this.isShowTable = true
        bus.$emit('closeLoading')
      }
    })
  },
  beforeDestroy() {
    bus.$off('closeAddAdmin')
  }
}
</script>

<style scoped>
.lesson-table-wrap {
  width: 100%;
  padding: 10px;
  margin: 0;
}
.lesson-table-row {
}
.spin-loading {
  padding: 20px 0;
  margin: 0 auto;
}
.select-box {
  padding: 3px 8px;
}
.search-input-wrap {
  padding: 5px 20px;
  width: 30%;
}
.add-admin-btn-wrap {
  padding-left: 20px;
  padding-bottom: 10px;
  text-align: left;
}
.import-export-lesson-table {
  margin: 10px auto;
}
.upload-input {
}
</style>
