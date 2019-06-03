<template>
  <div class="contract-item-wrap">
    <Table :columns="contractListColumn" :data="contractList"></Table>
  </div>
</template>
<script>
export default {
  name: 'ContractItem',
  props: {
    contractList: Array
  },
  data() {
    return {
      contractListColumn: [
        {
          title: '编号',
          key: 'cid'
        },
        {
          title: '文档名',
          key: 'name'
        },
        {
          title: '负责人',
          key: 'head'
        },
        {
          title: '负责人邮箱',
          key: 'email'
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
                      this.downloadContract()
                    }
                  }
                },
                '下载'
              )
            ])
          }
        }
      ]
    }
  },
  methods: {
    downloadContract: function() {}
  },
  components: {}
}
</script>
<style scoped>
.contract-item-wrap {
  margin: 10px auto;
}
</style>