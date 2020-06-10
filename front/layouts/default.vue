<template lang='pug'>
  div
    nav-bar
    Message
    .container
      nuxt
</template>

<script lang='ts'>
import NavBar from '../components/NavBar.vue'
import Message from '../components/Message.vue'
export default {
  components: {
    NavBar,
    Message
  }
}
</script>