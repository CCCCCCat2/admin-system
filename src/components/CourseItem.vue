<template>
  <div class="course-item-wrap" v-if="isShowCourse">
    <div>
      <Row>
        <Col span="20">
          <div @click="openEdit">
            <Card class="course-item-card">
              <p>课程：{{course.item.cname}}</p>
              <p>教师：{{course.item.teach}}</p>
              <p>教室：{{course.item.classroom}}</p>
              <p>时间：{{course.item.week}}{{course.item.orders}}</p>
            </Card>
          </div>
        </Col>
        <Col span="4">
          <Button type="danger" @click="deleteCourse">删除</Button>
        </Col>
      </Row>
    </div>
    <Modal v-model="showItem" title="编辑课程信息" @on-ok="submitUp">
      <Form :model="courseUpdateData">
        <FormItem label="课程名称">
          <Input v-model="courseUpdateData.cname" :placeholder="'填写课程名'"/>
        </FormItem>
        <FormItem label="日期">
          <Input v-model="courseUpdateData.week" :placeholder="'填写上课具体周几，如 4'"/>
        </FormItem>
        <FormItem label="节次">
          <Input v-model="courseUpdateData.orders" :placeholder="'填写节次，如 2'"/>
        </FormItem>
        <FormItem label="教师">
          <Input v-model="courseUpdateData.teach" :placeholder="'填写教师姓名'"/>
        </FormItem>
        <FormItem label="教室">
          <Input v-model="courseUpdateData.classroom" :placeholder="'填写教室，如 教三-333 '"/>
        </FormItem>
      </Form>
    </Modal>
    <Modal v-model="deleteCourseAlert" title="删除联系人" @on-ok="submitDeleteCourse">
      <p>该操作将删除一名联系人，确定删除吗？</p>
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
      editType: 'insert',
      deleteCourseAlert: false,
      isShowCourse: true,
      courseUpdateData: {
        sid: '0413001',
        cname: '',
        classroom: '',
        teach: '',
        week: '2',
        orders: 1
      }
    }
  },
  methods: {
    openEdit: function() {
      this.showItem = true
      this.editType = 'update'
      this.courseUpdateData.cname = this.course.item.cname
      this.courseUpdateData.teach = this.course.item.teach
      this.courseUpdateData.classroom = this.course.item.classroom
      this.courseUpdateData.week = this.course.item.week
      this.courseUpdateData.orders = this.course.item.orders
    },
    submitUp: function() {
      courseService
        .updateCourse(this.courseUpdateData)
        .then(res => {
          if (res.success) {
            this.course.item.cname = this.courseUpdateData.cname
            this.course.item.classroom = this.courseUpdateData.classroom
            this.course.item.week = this.courseUpdateData.week
            this.course.item.teach = this.courseUpdateData.teach
            this.course.item.orders = this.courseUpdateData.orders
            alert('更新课程信息成功！')
          } else {
            alert('更新课程信息失败！')
          }
        })
        .catch(err => alert('请求出错，请检查'))
    },
    deleteCourse: function() {
      this.deleteCourseAlert = true
      this.showItem = false
    },
    submitDeleteCourse: function() {
      courseService
        .deleteCourse(this.courseUpdateData)
        .then(res => {
          if (res.success) {
            this.isShowCourse = false
            alert('删除课程成功')
          } else {
            alert('删除课程失败')
          }
        })
        .catch(err => alert('请求出错，请检查'))
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
