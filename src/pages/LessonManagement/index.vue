<template>
  <div>
    <base-title title="课表管理" icon="ios-school"></base-title>
    <div class="lesson-table-wrap">
      <div class="lesson-table-row">
        <div class="spin-loading" v-if="isLoading">
          <Spin size="large" style="width:300%;height:300%;"></Spin>
        </div>
        <lesson-table :lessonData="{courseData}" v-else></lesson-table>
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
            </select>
          </FormItem>
          <FormItem label="节次">
            <!-- <Input v-model="courseEditData.orders" :placeholder="'填写节次，如 2'"/> -->
            <select v-model="courseEditData.orders" class="select-box">
              <option value="1">第一节</option>
              <option value="2">第二节</option>
              <option value="3">第三节</option>
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
      isLoading: true
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
    }
  },
  components: {
    LessonTable,
    BaseTitle
  },
  mounted() {
    courseService.getCourseList(sessionStorage.getItem('sid')).then(res => {
      if (res.success) {
        // !!!此处需要和后端对下数据是否存在data字段里
        this.courseData = res.message
        console.table(this.courseData)
        this.isLoading = false
      } else {
        // this.$Message.error('暂无课程信息')
        alert('暂无课程信息')
        this.isLoading = false
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
</style>
