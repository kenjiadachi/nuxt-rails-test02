<template lang='pug'>

article.message.is-danger(v-show="existsMessage")
  .message-header
    p {{ getMessage }}
    button.delete(aria-label="delete", @click="clearMessage")
</template>

<script lang='ts'>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
    }
  },
  methods: {
    // ...mapGetters('error', ['getMessage', 'existsMessage']),
    ...mapActions('error', ['clearMessage']),
  },
  computed: {
    ...mapGetters('error', ['getMessage', 'existsMessage']),
  },
  watch: {
    
  },
}
</script>