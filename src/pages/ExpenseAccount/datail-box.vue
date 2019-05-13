<template>
  <div class="add-admin-wrap" v-if="isShow">
    <div class="add-admin-ctn">
      <Icon type="ios-close-circle-outline" class="close-btn" @click="closeBox" size="20"/>
      <p class="add-admin-title">报销单详情</p>
      <div class="add-admin-info">
        <div>
          <span>报销内容：</span>
          <span>{{detail.content}}</span>
        </div>
        <div>
          <span>提交者：</span>
          <span>{{detail.submitter}}</span>
        </div>
        <div>
          <span>报销金额</span>
          <span>{{detail.price}}</span>
        </div>
        <div>
          <span>提交时间：</span>
          <span>{{detail.time}}</span>
        </div>
        <div>
          <span>报销类型：</span>
          <span>{{detail.type}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bus from '../../bus.js'
export default {
  name: 'DetailBox',
  props: {
    isShow: Boolean,
    detail: Object
  },
  data() {
    return {}
  },
  methods: {
    closeBox: function() {
      bus.$emit('closeDetailBox')
    }
  },
  components: {}
}
</script>
<style scoped>
.add-admin-wrap {
  position: fixed;
  top: 40%;
  left: 40%;
  width: 200px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
}
.add-admin-ctn {
  padding: 20px 10px;
}
.add-admin-title {
  font-size: 14px;
  line-height: 1em;
}
.add-admin-info {
  padding: 10px 0;
  text-align: left;
}
.close-btn {
  position: absolute;
  right: 10px;
  cursor: pointer;
  text-align: center;
}
.content {
}
</style>