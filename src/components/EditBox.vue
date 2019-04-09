<template></template>

<script>
import bus from '../bus'
export default {
  name: 'EditBox',
  data() {
    return {
      show: false
    }
  },
  methods: {
    cancel: function name() {
      this.show = false
    },
    submitMessage: function() {}
  },
  mounted() {
    bus.$on('open-contact-edit', function(val) {
      this.show = val
    })
  }
}
</script>

