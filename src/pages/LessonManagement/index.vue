<template>
  <div>
    <div class="lesson-table-wrap">
      <div class="lesson-table-row" v-for="item in courseData">
        <CourseItem :course="{item}" @click="editUpdate"></CourseItem>
      </div>
      <Button type="primary" long shape="circle" icon="md-add" size="large" @click="addNewItem">新增课程</Button>
      <Modal v-model="showCourseInsert" title="编辑课程信息" @on-ok="submitInsertCourse">
        <Form :model="courseEditData">
          <FormItem label="课程名称">
            <Input v-model="courseEditData.cname" :placeholder="'填写课程名'"/>
          </FormItem>
          <FormItem label="日期">
            <Input v-model="courseEditData.week" :placeholder="'填写上课具体周几，如 4'"/>
          </FormItem>
          <FormItem label="节次">
            <Input v-model="courseEditData.orders" :placeholder="'填写节次，如 2'"/>
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
      <!-- <LessonTableWeek></LessonTableWeek>
      <LessonRow :lessonRowList="courseData"></LessonRow>-->
    </div>
  </div>
</template>

<script>
// import LessonRow from '../../components/LessonRow'
// import LessonTableWeek from '../../components/LessonTableWeek'
import CourseItem from '../../components/CourseItem'
import { courseService } from '../../service/course.js'

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
      // courseData: [
      //   {
      //     cname: '计算机网络',
      //     teach: '大佬1',
      //     classroom: '教三-333',
      //     week: '周四',
      //     orders: 1,
      //     sid: '0413001'
      //   },
      //   {
      //     cname: '计算机网络',
      //     teach: '大佬1',
      //     classroom: '教三-333',
      //     week: '周四',
      //     orders: 1
      //   },
      //   {
      //     cname: '计算机网络',
      //     teach: '大佬1',
      //     classroom: '教三-333',
      //     week: '周四',
      //     orders: 1
      //   },
      //   {
      //     cname: '计算机网络',
      //     teach: '大佬1',
      //     classroom: '教三-333',
      //     week: '周四',
      //     orders: 1
      //   },
      //   {
      //     cname: '计算机网络',
      //     teach: '大佬1',
      //     classroom: '教三-333',
      //     week: '周四',
      //     orders: 1
      //   },
      //   {
      //     cname: '计算机网络',
      //     teach: '大佬1',
      //     classroom: '教三-333',
      //     week: '周四',
      //     orders: 1
      //   },
      //   {
      //     cname: '计算机网络',
      //     teach: '大佬1',
      //     classroom: '教三-333',
      //     week: '周四',
      //     orders: 1
      //   }
      // ]
      courseData: []
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
    CourseItem
    // LessonRow,
    // LessonTableWeek
  },
  mounted() {
    courseService.getCourseList(sessionStorage.getItem('sid')).then(res => {
      if (res.success) {
        // !!!此处需要和后端对下数据是否存在data字段里
        this.courseData = res.message
      } else {
        // this.$Message.error('暂无课程信息')
        alert('暂无课程信息')
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
</style>
