<template>
  <div>
    <div class="lesson-item-wrap" @click="openEdit">
      <p class="lesson-item-name">{{lessonData.cname}}</p>
      <p class="lesson-item-time">{{lessonData.week}}{{lessonData.orders}}</p>
      <p class="lesson-item-teacher">{{lessonData.teacher}}</p>
      <p class="lesson-item-classroom">{{lessonData.classroom}}</p>
    </div>
    <Modal v-model="show" title="编辑课程信息">
      <Form v-model="lessonEditData">
        <FormItem label="课程名称">
          <Input v-model="lessonEditData.name"/>
        </FormItem>
        <FormItem label="日期">
          <Select v-model="lessonEditData.week">
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
          <Select v-model="lessonEditData.orders.begin">
            <Option value="08:00">08:00</Option>
            <Option value="09:00">09:00</Option>
            <Option value="10:00">10:00</Option>
            <Option value="11:00">11:00</Option>
            <Option value="01:30">01:30</Option>
            <Option value="02:30">02:30</Option>
            <Option value="03:30">03:30</Option>
            <Option value="04:30">04:30</Option>
          </Select>
          <Select v-model="lessonEditData.orders.end">
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
          <Input v-model="lessonEditData.teacher"/>
        </FormItem>
        <FormItem label="教室">
          <Input v-model="lessonEditData.classroom"/>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'LessonItem',
  props: {
    lessonData: {
      cname: String,
      classroom: String,
      teacher: String,
      week: String,
      orders: String
    }
  },
  data() {
    return {
      show: false,
      lessonEditData: {
        cname: '',
        classroom: '',
        teacher: '',
        week: '',
        orders: {
          begin: '',
          end: ''
        }
      }
    }
  },
  methods: {
    openEdit: function() {
      this.show = true
    }
  }
}
</script>

<style scoped>
.lesson-item-wrap {
  width: 120px;
  height: 100px;
  padding: 5px;
  border: 1px solid #cccccc;
}
.lesson-item-name {
  font-size: 16px;
  font-weight: bolder;
  color: #333333;
}
.lesson-item-time .lesson-item-teacher .lesson-item-classroom {
  font-size: 14px;
  color: #333333;
  text-align: left;
}
</style>
