<template>
  <div class="course-item-wrap">
    <div @click="openEdit">
      <Card class="course-item-card">
        <p>课程：{{course.item.cname}}</p>
        <p>教师：{{course.item.teach}}</p>
        <p>教室：{{course.item.classroom}}</p>
        <p>时间：{{course.item.week}}{{course.item.orders}}</p>
      </Card>
    </div>
    <Modal v-model="showItem" title="编辑课程信息" @on-ok="submitEdit">
      <Form v-model="courseEditData">
        <FormItem label="课程名称">
          <Input v-model="courseEditData.cname"/>
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
          <Select v-model="courseEditData.orders">
            <Option value="1">08:00</Option>
            <Option value="2">09:00</Option>
            <Option value="3">10:00</Option>
            <Option value="4">11:00</Option>
            <Option value="5">01:30</Option>
            <Option value="6">02:30</Option>
            <Option value="7">03:30</Option>
            <Option value="8">04:30</Option>
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
  </div>
</template>

<script>
import { courseService } from '../service/course.js'

export default {
  name: 'CourseItem',
  props: {
    course: {
      sid: String,
      cname: String,
      teach: String,
      classroom: String,
      week: String,
      orders: Number
    }
  },
  data() {
    return {
      showItem: false,
      courseEditData: {
        sid: '0413001',
        cname: '',
        classroom: '',
        teacher: '',
        week: '2',
        orders: 1
      }
    }
  },
  methods: {
    openEdit: function() {
      this.showItem = true
      this.courseEditData.cname = this.course.item.cname
      this.courseEditData.classroom = this.course.item.classroom
      this.courseEditData.teacher = this.course.item.teach
    },
    submitEdit: function() {
      courseService.insertCourse(this.courseEditData)
    }
  },
  mounted() {}
}
</script>

<style scoped>
.course-item-wrap {
  margin: 10px auto;
}
.course-item-card {
  text-align: left;
}
</style>
