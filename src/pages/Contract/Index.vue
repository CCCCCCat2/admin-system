<template>
  <div>
    <base-title title="合同协议" icon="md-document"></base-title>
    <sub-title subTitle="合同列表"></sub-title>
    <contract-item :contractList="contractList"></contract-item>
    <sub-title subTitle="合同操作"></sub-title>
    <Upload multiple type="drag" :action="contractList">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>点击或拖曳合同文件到此处上传</p>
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
  name: 'Contract',
  props: {},
  data() {
    return {
      contractList: [
        {
          cid: '1001111',
          name: '合同A',
          head: '王老师',
          email: 'wanglaoshi@bupt.edu.cn'
        },
        {
          cid: '1002222',
          name: '合同B',
          head: '李老师',
          email: 'lilaoshi@bupt.edu.cn'
        },
        {
          cid: '1003333',
          name: '合同C',
          head: '赵老师',
          email: 'zhaolaoshi@bupt.edu.cn'
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