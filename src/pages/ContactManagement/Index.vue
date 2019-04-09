<template>
  <div>
    <EditBox></EditBox>
    <BaseTitle title="通讯录管理" icon="ios-contact"></BaseTitle>
    <ContactTable></ContactTable>
  </div>
</template>

<script>
import ContactTable from './ContactTable.vue'
import BaseTitle from '../../components/BaseTitle.vue'
import EditBox from '../../components/EditBox'

export default {
  name: 'ContactManagement',
  components: {
    ContactTable,
    BaseTitle,
    EditBox
  }
}
</script>
