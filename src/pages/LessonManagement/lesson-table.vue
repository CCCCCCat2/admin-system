<template>
  <div class="lesson-table-wrap">
    <div class="lesson-table-export-file">
      <Button
        type="success"
        shape="circle"
        icon="md-arrow-round-down"
        size="large"
        style="display: flex;"
        @click="exportLessonTable"
      >导出课表</Button>
    </div>
    <div class="lesson-table">
      <div class="lesson-table-row">
        <div class="lesson-table-item-time blank"></div>
        <div class="lesson-table-item week" v-for="item in week" :key="item">{{item}}</div>
      </div>
      <!-- 第一次v-for的index是行的序号，内层的childIndex是列的序号 -->
      <div class="lesson-table-row" v-for="(row,index) in lessons" :key="index">
        <div class="lesson-table-item-time">
          <p>第{{index+1}}节</p>
        </div>
        <div
          class="lesson-table-item"
          v-for="(item, childIndex) in row"
          :key="childIndex+100"
          @click="editLesson(item, index, childIndex)"
        >
          <div v-for="lessons in item" :key="lessons.name">
            <p>
              <span v-if="JSON.stringify(lessons) !== '{}'">周次：</span>
              {{lessons.cname}}
            </p>
            <p>
              <span v-if="JSON.stringify(lessons) !== '{}'">教师：</span>
              {{lessons.teach}}
            </p>
            <p>
              <span v-if="JSON.stringify(lessons) !== '{}'">教室：</span>
              {{lessons.classroom}}
            </p>
            <p>
              <span v-if="JSON.stringify(lessons) !== '{}'">周次：</span>
              {{lessons.week}}
            </p>
            <p>
              <span v-if="JSON.stringify(lessons) !== '{}'">节次：</span>
              {{lessons.orders}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="edit-ask-wrap" v-if="showEditAsk">
      <div class="edit-ask-box">
        <!-- <div class="close-btn" @click="closeEditAsk">x</div> -->
        <Icon type="ios-close-circle-outline" class="close-btn" @click="closeEditAsk" size="20"/>
        <div class="edit-ask-ctn">
          <p>请选择您需要进行的具体操作</p>
        </div>
        <div class="edit-btn-group">
          <ButtonGroup>
            <Button type="primary" @click="openEditBox">编辑</Button>
            <Button type="error" @click="deleteItem()">删除</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
    <div class="edit-ask-wrap" v-if="showEditBox">
      <div class="edit-message-box">
        <!-- <div class="close-btn" @click="closeEditBox">x</div> -->
        <Icon type="ios-close-circle-outline" class="close-btn" @click="closeEditBox" size="20"/>
        <Form :model="editValue" class="edit-form">
          <FormItem label="课程名称">
            <Input v-model="editValue.cname" :placeholder="'填写课程名'"/>
          </FormItem>
          <FormItem label="日期">
            <select v-model="editValue.week" class="select-box">
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
            <select v-model="editValue.orders" class="select-box">
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
            <RadioGroup v-model="editValue.signalordouble">
              <Radio label="single">单周</Radio>
              <Radio label="double">双周</Radio>
              <Radio label="both">单双周</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem label="教师">
            <Input v-model="editValue.teach" :placeholder="'填写教师姓名'"/>
          </FormItem>
          <FormItem label="教室">
            <Input v-model="editValue.classroom" :placeholder="'填写教室，如 教三-333 '"/>
          </FormItem>
          <div class="edit-class">
            <ButtonGroup>
              <Button type="primary" @click="submitEdit">确定</Button>
              <Button type="error" @click="closeEditBox">取消</Button>
            </ButtonGroup>
          </div>
        </Form>
      </div>
    </div>
    <!-- <Modal v-modal="showEditBox" title="编辑课程信息"> -->

    <!-- </Modal> -->
  </div>
</template>
<script>
import {transferLessons} from '../../utils/common.js'
import {courseService} from '../../service/course.js'
import bus from '../../bus.js'
import XLSX from 'xlsx'
export default {
  name: 'LessonTable',
  props: {
    lessonData: {
      first: Array,
      second: Array,
      third: Array,
      fourth: Array,
      fifth: Array,
      sixth: Array,
      seventh: Array,
      eighth: Array
    }
  },
  data() {
    return {
      week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      lessons: [],
      showEditAsk: false,
      showEditBox: false,
      editValue: {},
      rowIndex: 0,
      columnIndex: 0
    }
  },
  methods: {
    editLesson: function(item, index, childIndex) {
      // 将点击项的内容、行位置、列位置都存到data对象中
      this.editValue = item
      this.rowIndex = index
      this.columnIndex = childIndex
      this.showEditAsk = true
    },
    // 关闭“下一步操作”的对话框
    closeEditAsk: function() {
      this.showEditAsk = false
    },
    // 关闭“编辑课程”的对话框
    closeEditBox: function() {
      this.showEditBox = false
    },
    openEditBox: function() {
      this.showEditAsk = false
      this.showEditBox = true
    },
    deleteItem: function() {
      bus.$emit('showLoading')
      courseService.deleteCourse(this.editValue).then(res => {
        if (res.success === true) {
          this.lessons[this.rowIndex][this.columnIndex] = {}
        } else {
          alert('删除课程失败！')
        }
        bus.$emit('closeLoading')
        this.showEditAsk = false
      })
    },
    exportLessonTable: function() {
      const exportFile = XLSX.utils.aoa_to_sheet(this.lessons)
      window.open('http://www.wiihame.cn/static-resource/test.xlsx')
    },
    rewriteTable: function() {
      courseService.multiSearchCourse().then(res => {
        if (res.success) {
          this.lessons = res.message
        }
      })
    },
    submitEdit: function() {
      this.showEditBox = false
      alert('编辑成功')
    }
  },
  mounted() {
    console.log(this.lessonData)
    bus.$on('setCourseSearchResult', lessons => {
      this.lessons = transferLessons(lessons)
    })
    this.lessons = transferLessons(this.lessonData.courseData)
  }
}
</script>
<style scoped>
.lesson-table-wrap {
  width: 100%;
  margin: 0px auto;
  overflow: auto;
}

.lesson-table {
  /* width: 100%; */
  min-width: 1024px;
  border: 1px solid #cccccc;
}
.lesson-table-item {
  flex: 1;
  border: 1px solid #dddddd;
  /* height: 120px; */
  width: 120px;
  text-align: left;
  padding: 10px;
}
.lesson-table-item-time {
  border: 1px solid #dddddd;
  width: 60px;
  align-items: center;
  padding: 10px;
}
.week {
  height: 30px;
  text-align: center;
  background-color: #e8eaec;
}
.blank {
  height: 30px;
}
.lesson-table-row {
  display: flex;
}
/* 这两处z-index是因为侧边栏的z-index设置是900，必须比900大才能覆盖住 */
.edit-ask-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 990;
}
.edit-ask-box {
  z-index: 999;
  position: fixed;
  top: 200px;
  left: 50%;
  width: 300px;
  height: 120px;
  background: #ffffff;
  padding: 10px 20px;
  border: 1px solid #cccccc;
}
.edit-ask-ctn {
  margin-top: 15px;
}
.edit-btn-group {
  margin-top: 10px;
}
.close-btn {
  position: absolute;
  right: 10px;
  cursor: pointer;
  text-align: center;
}
.edit-message-box {
  width: 400px;
  position: fixed;
  left: 45%;
  top: 50px;
  padding: 10px 20px;
  border: #cccccc 1px solid;
  background-color: #ffffff;
}
.select-box {
  padding: 3px 8px;
}
.edit-form {
  padding-top: 20px;
}
.lesson-table-export-file {
  margin-bottom: 10px;
  width: 100%;
  position: relative;
}
</style>