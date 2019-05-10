<template>
  <div class="chatting-room-wrap">
    <base-title title="交流平台" icon="ios-chatbubbles-outline"></base-title>
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
    <div class="chatting-room-members-lists">
      <member-list-item :sid="item.sid" v-for="item in memberList" :key="item.sid"></member-list-item>
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'
import ChatBubble from '../../components/ChatBubble'
import BaseTitle from '../../components/BaseTitle'
import memberListItem from './member-list-item'

export default {
  name: 'ChattingRoom',
  data() {
    return {
      inputValue: '',
      initConf: {
        max_height: 200,
        min_height: 200
      },
      message: [],
      memberList: [
        {
          sid: '1929901'
        },
        {
          sid: '234567'
        },
        {
          sid: '456789'
        }
      ]
    }
  },
  methods: {
    sendMessage: function() {
      this.message.push(this.inputValue)
      this.inputValue = ''
      document.querySelector('.w-e-text').innerHTML = ''
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
    ChatBubble,
    BaseTitle,
    memberListItem
  }
}
</script>

<style>
.chatting-room-wrap {
  min-width: 750px;
  overflow: auto;
  padding: 20px;
}
.chatting-input-wrap {
  margin-top: 20px;
  border: 1px solid #cccccc;
  width: 70%;
  height: 350px;
  overflow: scroll;
}
.chatting-input {
}
.editor-wrap {
  width: 70%;
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
.chatting-room-members-lists {
  width: 30%;
  height: 540px;
  border: 1px solid #cccccc;
  border-left: 0;
  position: absolute;
  top: 70px;
  left: 69%;
}
</style>
