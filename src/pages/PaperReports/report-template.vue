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
        <Table :columns="reportColumn" :data="reportListData"></Table>
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
    return {
      reportColumn: [
        {
          title: '编号',
          key: 'rid'
        },
        {
          title: '报告名',
          key: 'name'
        },
        {
          title: '上传者',
          key: 'submitter'
        },
        {
          title: '操作',
          key: 'operation',
          width: 120,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'info',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.downloadFile()
                    }
                  }
                },
                '下载'
              )
            ])
          }
        }
      ],
      reportListData: [
        {
          rid: '4001234',
          name: '网络实验报告',
          submitter: '王老师'
        },
        {
          rid: '4005678',
          name: '计算机组成实验报告',
          submitter: '高老师'
        }
      ]
    }
  },
  methods: {
    downloadFile: function() {
      window.open('http://www.wiihame.cn/static-resource/word-template.docx')
    }
  },
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
