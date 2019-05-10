<template>
  <div class="report-tpl-wrap">
    <sub-title subTitle="主要模板示例"></sub-title>
    <div class="report-tpl-ctn">
      <iframe
        src="https://view.officeapps.live.com/op/view.aspx?src=http%3A%2F%2Fwww.wiihame.cn%2Fstatic-resource%2Fword-template.docx"
        frameborder="0"
        class="file-preview"
      ></iframe>
    </div>
    <div class="report-tpl-list">
      <div class="word-files-list">
        <sub-title subTitle="其他纸质报告模板"></sub-title>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from '../../components/sub-title'
export default {
  name: 'ReportTemplate',
  props: {},
  data() {
    return {}
  },
  methods: {},
  components: {
    SubTitle
  }
}
</script>

<style scoped>
.report-tpl-wrap {
  width: 100%;
}
.report-tpl-ctn {
  width: 100%;
  margin: 0 auto 10px auto;
  border: 2px solid #cccccc;
  background-color: #ffffff;
}
.report-tpl-list {
  width: 100%;
  margin: 0 auto;
}
.file-preview {
  width: 100%;
  min-height: 600px;
}
.word-files-list {
  padding-top: 10px;
}
</style>
