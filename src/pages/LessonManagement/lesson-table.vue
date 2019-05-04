<template>
  <div class="lesson-table-wrap">
    <div class="lesson-table">
      <div class="lesson-table-row">
        <div class="lesson-table-item-time blank"></div>
        <div class="lesson-table-item week" v-for="item in week" :key="item">{{item}}</div>
      </div>
      <div class="lesson-table-row" v-for="(row,index) in lessons" :key="index">
        <div class="lesson-table-item-time">
          <p>第{{index+1}}节</p>
        </div>
        <div
          class="lesson-table-item"
          v-for="item in row"
          :key="item.cname"
          @click="editLesson(item)"
        >
          <p>
            <span v-if="JSON.stringify(item) !== '{}'">周次：</span>
            {{item.cname}}
          </p>
          <p>
            <span v-if="JSON.stringify(item) !== '{}'">教师：</span>
            {{item.teach}}
          </p>
          <p>
            <span v-if="JSON.stringify(item) !== '{}'">教室：</span>
            {{item.classroom}}
          </p>
          <p>
            <span v-if="JSON.stringify(item) !== '{}'">周次：</span>
            {{item.week}}
          </p>
          <p>
            <span v-if="JSON.stringify(item) !== '{}'">节次：</span>
            {{item.orders}}
          </p>
        </div>
      </div>
    </div>
    <Modal
      v-model="showEditAsk"
      title="修改课程"
      ok-text="编辑"
      cancel-text="删除"
      @on-ok="openEditBox"
      @on-cancel="deleteItem"
    >
      <p>请选择对该课程的操作</p>
    </Modal>
  </div>
</template>
<script>
import {transferLessons} from '../../utils/common.js'
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
      editValue: {}
    }
  },
  methods: {
    editLesson: function(item) {
      console.log(item)
      this.showEditAsk = true
    },
    openEditBox: function() {
      // this.
    },
    deleteItem: function() {}
  },
  mounted() {
    console.log(this.lessonData)
    this.lessons = transferLessons(this.lessonData.courseData)
  }
}
</script>
<style scoped>
.lesson-table-wrap {
  width: 100%;
  margin: 10px auto;
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
</style>