<template>
  <div>
    <base-title title="通讯录管理" icon="ios-contact"></base-title>
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
