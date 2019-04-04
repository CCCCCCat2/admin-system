<template>
  <div class="chatting-room-wrap">
    <div class="chatting-input-wrap">
      <Row>
        <Col span="21">
          <Input placeholder="输入想说的话吧~" type="textarea" :autosize="{minRows: 2,maxRows: 5}" v-model="inputValue" class="chatting-input" />
        </Col>
        <Col span="3">
          <!-- <div class="submit-btn">发送消息</div> -->
          <Button type="primary" size="large" @click="sendMessage">发送</Button>
        </Col>
    </Row>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'

let socket = io()

export default {
  name: 'ChatRoom',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    sendMessage: function() {
      let message = this.inputValue
      if (this.inputValue === '') {
        return false
      }
      socket.emit('message', {
        id: userId,
        name: nickName,
        text: message
      })
      messageBox.push({
        name: nickName,
        text: message
      })

      this.inputValue = ''
      
    }
  },
  mounted() {

  }
}
</script>

<style>
.chatting-room-wrap {
  width: 80%;
  height: 90%;
  margin: 50px auto;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 3px 3px #cccccc;
}
.chatting-input-wrap {
  position: absolute;
  width: 80%;
  bottom: 38px;
  margin-left: 5px;
}
.chatting-input {
  width: 60%;
}

</style>
