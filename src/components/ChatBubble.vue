<template>
  <div class="chat-ctn-wrap">
    <div class="chat-header">
      <Avatar icon="ios-person" size="large" style="background-color: #87d068"/>
    </div>
    <div class="chat-ctn">
      <div class="ctn" v-html="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBubble',
  props: {
    content: String
  },
  data() {
    return {
      userName: '用户'
    }
  },
  mounted() {}
}
</script>

<style scoped>
.chat-ctn-wrap {
  /* display: flex; */
  padding: 10px 20px;
}
.chat-header {
  /* flex: 1; */
  width: 50px;
  height: 30px;
  margin-right: 5px;
  float: left;
}
.chat-header-ctn {
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border-radius: 15px;
  border: 3px solid #cccccc;
  font-size: 14px;
  padding: 5px;
}
.chat-ctn {
  /* flex: 6; */
  /* background-color: #cccccc; */
  overflow: auto;
  margin-left: 5px;
  font-size: 14px;
  font-weight: bold;
}
.ctn {
  max-width: 800px;
  overflow: scroll;
  float: left;
  border-radius: 4px;
  border: 2px solid #cccccc;
  padding: 10px;
}
</style>

