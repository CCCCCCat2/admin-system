<template>
  <div class="lesson-row-wrap">
    <LessonItem :lessonData="lessonRowList[0]"></LessonItem>
    <LessonItem :lessomData="lessonRowList[1]"></LessonItem>
    <LessonItem :lessonData="lessonRowList[2]"></LessonItem>
    <LessonItem :lessonData="lessonRowList[3]"></LessonItem>
    <LessonItem :lessonData="lessonRowList[4]"></LessonItem>
    <LessonItem :lessonData="lessonRowList[5]"></LessonItem>
    <LessonItem :lessonData="lessonRowList[6]"></LessonItem>
  </div>
</template>

<script>
import LessonItem from './LessonItem'
export default {
  name: 'LessonRow',
  components: {
    LessonItem
  },
  props: {
    lessonRowList: Array
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.lesson-row-wrap {
  display: flex;
  flex: 1;
  padding: 0 10px;
}
</style>
