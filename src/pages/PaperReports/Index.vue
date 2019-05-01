<template>
  <div>
    <base-title title="纸质报告" icon="ios-list-box-outline"></base-title>
    <report-template></report-template>
  </div>
</template>

<script>
import ReportTemplate from './report-template'
import BaseTitle from '../../components/BaseTitle'
export default {
  name: 'PaperReport',
  data() {
    return {}
  },
  methods: {},
  components: {
    ReportTemplate,
    BaseTitle
  }
}
</script>

<style scoped>
</style>
