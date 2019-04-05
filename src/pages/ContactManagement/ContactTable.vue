<template>
  <div>
    <Table></Table>
  </div>
</template>

<script>
import contactApi from '../../service/contact.js'
export default {
  name: 'ConcactTable',
  methods: {
    insertContactItem: function() {
      contactApi.test()
    }
  },
  data() {
    return {}
  }
}
</script>
