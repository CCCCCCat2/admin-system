<template>
  <div>
    <div class="chatting-input-wrap">
      <ChatBubble v-for="item in message" :content="item" :key="item"></ChatBubble>
    </div>
    <div class="editor-wrap">
      <div ref="editor"></div>
      <div class="send-btn-wrap">
        <Button type="success" class="send-btn" @click="sendMessage">发送</Button>
      </div>
      <!-- <Button @click="sendMessage">发送</Button> -->
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'
import { wsUrl } from '../../service/config.js'
import ChatBubble from '../../components/ChatBubble'

export default {
  name: 'ChattingRoom',
  data() {
    return {
      inputValue: '',
      initConf: {
        max_height: 200,
        min_height: 200
      },
      message: []
    }
  },
  methods: {
    sendMessage: function() {
      console.log('ok')
      console.log(this.inputValue)
      // websocketService.send(this.message)
      this.message.push(this.inputValue)
      this.inputValue = ''
    }
  },
  mounted() {
    const editor = new E(this.$refs.editor)
    editor.customConfig.menus = [
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ]
    editor.customConfig.zIndex = 100
    /* 监听输入框内容变化 */
    editor.customConfig.onchange = html => {
      this.inputValue = html
    }
    editor.create()
    const editorTxtContainer = document.querySelector('.w-e-text-container')
    editorTxtContainer.style.height = '160px'
    editorTxtContainer.style.paddingBottom = '50px'
    editorTxtContainer.style.overflow = 'auto'
    editorTxtContainer.style.textAlign = 'left'
  },
  components: {
    ChatBubble
  }
}
</script>

<style>
.chatting-input-wrap {
  margin: 20px auto 0 auto;
  border: 1px solid #cccccc;
  width: 100%;
  height: 350px;
  overflow: scroll;
}
.chatting-input {
}
.editor-wrap {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.send-btn-wrap {
  position: relative;
  top: -40px;
}
.send-btn {
  position: absolute;
  right: 20px;
  /* z-index必须大于editor的100，防止事件冒泡被上层元素阻止 */
  z-index: 200;
}
.send-btn :hover {
  cursor: pointer;
}
</style>
