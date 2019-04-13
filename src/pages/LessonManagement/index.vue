<template>
  <div>
    <div class="lesson-table-wrap">
      <div class="lesson-table-row" v-for="item in courseData">
        <CourseItem :course="{item}"></CourseItem>
      </div>
      <Button type="primary" long shape="circle" icon="md-add" size="large" @click="addNewItem">新增课程</Button>
      <Modal v-model="show" title="编辑课程信息" @on-ok="submitInsert">
        <Form v-model="courseEditData">
          <FormItem label="课程名称">
            <Input v-model="courseEditData.name"/>
          </FormItem>
          <FormItem label="日期">
            <Select v-model="courseEditData.week">
              <Option value="周一">周一</Option>
              <Option value="周二">周二</Option>
              <Option value="周三">周三</Option>
              <Option value="周四">周四</Option>
              <Option value="周五">周五</Option>
              <Option value="周六">周六</Option>
              <Option value="周日">周日</Option>
            </Select>
          </FormItem>
          <FormItem label="节次">
            <Select v-model="courseEditData.orders.begin">
              <Option value="08:00">08:00</Option>
              <Option value="09:00">09:00</Option>
              <Option value="10:00">10:00</Option>
              <Option value="11:00">11:00</Option>
              <Option value="01:30">01:30</Option>
              <Option value="02:30">02:30</Option>
              <Option value="03:30">03:30</Option>
              <Option value="04:30">04:30</Option>
            </Select>
            <Select v-model="courseEditData.orders.end">
              <Option value="09:00">09:00</Option>
              <Option value="10:00">10:00</Option>
              <Option value="11:00">11:00</Option>
              <Option value="01:30">01:30</Option>
              <Option value="02:30">02:30</Option>
              <Option value="03:30">03:30</Option>
              <Option value="04:30">04:30</Option>
              <Option value="05:30">05:30</Option>
            </Select>
          </FormItem>
          <FormItem label="教师">
            <Input v-model="courseEditData.teacher"/>
          </FormItem>
          <FormItem label="教室">
            <Input v-model="courseEditData.classroom"/>
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
import { constants } from 'crypto';
import { lookup } from 'dns';

export default {
  name: 'LessonManagement',
  data() {
    return {
      show: false,
      courseEditData: {
        cname: '',
        classroom: '',
        teacher: '',
        week: '',
        orders: {
          begin: '',
          end: ''
        }
      },
      courseData: [
        {
          cname: '计算机网络',
          teach: '大佬1',
          classroom: '教三-333',
          week: '周四',
          orders: 1,
          sid: '0413001'
        },
        {
          cname: '计算机网络',
          teach: '大佬1',
          classroom: '教三-333',
          week: '周四',
          orders: 1
        },
        {
          cname: '计算机网络',
          teach: '大佬1',
          classroom: '教三-333',
          week: '周四',
          orders: 1
        },
        {
          cname: '计算机网络',
          teach: '大佬1',
          classroom: '教三-333',
          week: '周四',
          orders: 1
        },
        {
          cname: '计算机网络',
          teach: '大佬1',
          classroom: '教三-333',
          week: '周四',
          orders: 1
        },
        {
          cname: '计算机网络',
          teach: '大佬1',
          classroom: '教三-333',
          week: '周四',
          orders: 1
        },
        {
          cname: '计算机网络',
          teach: '大佬1',
          classroom: '教三-333',
          week: '周四',
          orders: 1
        }
      ]
    }
  },
  methods: {
    addNewItem: function() {
      this.show = true
    },
    submitInsert: function() {
      console.log(this.courseEditData)
      courseService.insertCourse(this.courseEditData).then(res => {
        res.success && alert('新增课程成功')
        location.reload()
      })
    }
  },
  components: {
    CourseItem
    // LessonRow,
    // LessonTableWeek
  },
  mounted() {
    // courseService.getCourseList(sessionStorage.getItem('sid'))
    // .then(res => this.courseData = res)
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
