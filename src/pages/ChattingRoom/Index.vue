<template>
  <div>
    <div class="chatting-input-wrap">
      <ChatBubble v-html="message"></ChatBubble>
    </div>
    <div class="editor-wrap">
      <Row>
        <Col span="21">
          <editor :init="initConf" v-model="inputValue"></editor>
        </Col>
        <Col span="3">
          <div class="send-btn" @click="sendMessage">发送消息</div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { wsUrl } from '../../service/config.js'
import ChatBubble from '../../components/ChatBubble'

// function getWebsocket() {
//   const websocketService = new WebSocket(`${wsUrl}chat`)
//   websocketService.onmessage = function(event) {
//     console.log(event.data)
//   }
//   websocketService.onerror = function(event) {
//     console.log('websocket异常')
//   }
//   return websocketService
// }

export default {
  name: 'ChattingRoom',
  data() {
    return {
      inputValue: '',
      initConf: {
        max_height: 200,
        min_height: 200
      },
      message: ''
    }
  },
  mounted() {
    // const websocketService = getWebsocket()
  },
  components: {
    Editor,
    ChatBubble
  },
  methods: {
    sendMessage: function() {
      console.log(this.websocketService)
      // websocketService.send(this.message)
      this.message = this.inputValue
    }
  }
}
</script>

<style>
.chatting-input-wrap {
  margin: 20px auto 0 auto;
  border: 1px solid #cccccc;
  width: 90%;
  height: 350px;
  overflow: scroll;
}
.chatting-input {
}
.editor-wrap {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  height: 200px;
}
.send-btn {
  background-color: #2d8cf0;
  color: #fff;
  padding: 80px 40px;
  font-size: 16px;
  cursor: pointer;
}
</style>
