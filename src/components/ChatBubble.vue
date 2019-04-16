<template>
  <div class="chat-ctn-wrap">
    <div class="chat-header">
      <div class="chat-header-ctn">
        <Icon type="ios-person" size="40"></Icon>
      </div>
    </div>
    <div class="chat-ctn" v-html="content"></div>
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
  display: flex;
  padding: 10px 20px;
}
.chat-header {
  flex: 1;
  width: 50px;
  height: 30px;
  margin-right: 10px;
}
.chat-header-ctn {
  background-color: #cccccc;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 30px;
  font-size: 14px;
  padding: 5px;
}
.chat-ctn {
  flex: 6;
  background-color: #cccccc;
  border-radius: 4px;
  width: 60%;
  margin: 5px auto;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
}
</style>

