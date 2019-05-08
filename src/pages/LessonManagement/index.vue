<template>
  <div>
    <base-title title="课表管理" icon="ios-school"></base-title>
    <add-admin :isShow="true"></add-admin>
    <div class="search-input-wrap">
      <Input
        search
        enter-button
        placeholder="输入学生姓名"
        v-model="searchValue"
        @on-search="searchLessonsBySid"
      />
    </div>
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
  </div>
</template>

<script>
// import CourseItem from '../../components/CourseItem'
import LessonTable from './lesson-table'
import BaseTitle from '../../components/BaseTitle'
import {courseService} from '../../service/course.js'
import AddAdmin from '../../components/add-admin'
import bus from '../../bus.js'

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
      isShowTable: false
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
    searchLessonsBySid: function() {}
  },
  components: {
    LessonTable,
    BaseTitle,
    AddAdmin
  },
  mounted() {
    bus.$emit('showLoading')
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
</style>
