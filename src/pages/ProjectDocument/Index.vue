<template>
  <div>
    <base-title title="项目文档" icon="md-document"></base-title>
    <sub-title subTitle="文档列表"></sub-title>
    <contract-item :contractList="contractList"></contract-item>
    <sub-title subTitle="文档操作"></sub-title>
    <Upload multiple type="drag" :action="contractList">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>点击或拖曳项目文档文件到此处上传</p>
      </div>
    </Upload>
  </div>
</template>
<script>
import BaseTitle from '../../components/BaseTitle'
import SubTitle from '../../components/sub-title'
import ContractItem from './contract-item'
import {baseUrl} from '../../service/config.js'

export default {
  name: 'ProjectDocument',
  props: {},
  data() {
    return {
      contractList: [
        {
          cid: '5001111',
          name: '管理平台前端文档',
          head: '陈老师',
          email: 'chenlaoshi@bupt.edu.cn'
        },
        {
          cid: '50012222',
          name: '管理平台安卓端文档',
          head: '陈老师',
          email: 'chenlaoshi@bupt.edu.cn'
        }
      ],
      uploadUrl: `${baseUrl}upload`
    }
  },
  methods: {},
  components: {
    BaseTitle,
    ContractItem,
    SubTitle
  }
}
</script>
<style scoped>
</style>