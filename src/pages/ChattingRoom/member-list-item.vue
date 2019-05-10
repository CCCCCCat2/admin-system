<template>
  <div class="member-list-item-wrap">
    <Avatar shape="square" icon="ios-person" size="small"/>
    <span>{{sid}}</span>
  </div>
</template>
<script>
export default {
  name: 'MemberListItem',
  props: {
    name: String,
    sid: String
  },
  data() {
    return {}
  },
  methods: {},
  components: {}
}
</script>
<style scoped>
.member-list-item-wrap {
  padding: 5px 20px;
}
</style>
