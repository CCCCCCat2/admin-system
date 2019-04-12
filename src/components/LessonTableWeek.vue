<template>
  <div class="lesson-table-week-wrap">
    <div class="lesson-table-week">
      <p>周一</p>
    </div>
    <div class="lesson-table-week">
      <p>周二</p>
    </div>
    <div class="lesson-table-week">
      <p>周三</p>
    </div>
    <div class="lesson-table-week">
      <p>周四</p>
    </div>
    <div class="lesson-table-week">
      <p>周五</p>
    </div>
    <div class="lesson-table-week">
      <p>周六</p>
    </div>
    <div class="lesson-table-week">
      <p>周日</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LessonTableWeek',
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped>
.lesson-table-week-wrap {
  padding: 0 10px;
  display: flex;
  flex: 1;
}
.lesson-table-week {
  width: 120px;
  height: 30px;
  padding: 5px;
  border: 1px solid #cccccc;
  text-align: center;
}
</style>
