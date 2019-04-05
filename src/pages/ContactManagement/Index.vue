<template>
  <div>
    <BaseTitle title="通讯录管理" icon="md-clipboard"></BaseTitle>
    <ContactTable></ContactTable>
  </div>
</template>

<script>
import ContactTable from './ContactTable.vue'
import BaseTitle from '../../components/BaseTitle.vue'
export default {
  name: 'ContactManagement',
  components: {
    ContactTable,
    BaseTitle
  }
}
</script>
