<template>
  <div class="project-item-wrap">
    <div class="project-item" @click="toChattingRoom()">
      <Card>
        <p slot="title">{{title}}</p>
        <Avatar v-for="item in members" :key="item.sid">{{item.sid}}</Avatar>
      </Card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectItem',
  props: {
    title: String,
    projId: String,
    members: Array
  },
  data() {
    return {}
  },
  methods: {
    toChattingRoom: function() {
      console.log('push')
      this.$router.push(`/chatting-room/${this.projId}`)
    }
  },
  components: {}
}
</script>
<style scoped>
.project-item-wrap {
  padding: 10px;
}
.project-item {
}
</style>