<template>
  <div class="member-list-item-wrap">
    <Avatar shape="square" icon="ios-person" size="small" style="background-color: #87d068"/>
    <span style="margin-left: 5px;">{{sid}}</span>
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
  text-align: left;
}
</style>
