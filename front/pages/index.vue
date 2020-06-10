<template lang='pug'>
  section.hero.is-fullheight
    .hero-body
      .container
        h1.title
          | Fullheight title
        h2.subtitle
          | Fullheight subtitle
        button.button.is-primary(@click="googleLogin()")
          span.icon
            i.fab.fa-google
          span Login with Google
        button.button.is-danger(@click="setError()")
          span setError

</template>

<script lang="ts">
import { fireBase } from '../plugins/firebase'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    googleLogin() {
      var provider = new fireBase.auth.GoogleAuthProvider();
      var self = this;
      fireBase.auth().signInWithPopup(provider).then(function(result) {
        self.$axios.post(
          '/api/users', { 
            name: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL,
            uid: result.user.uid,
          }
        ).then((res) => {
          console.log(res);
          let userObj = {
            name: res.data.name,
            image: res.data.image,
          }
          self.$store.dispatch('user/setUser', userObj)
        })
      }).catch(function(error) {
        // Handle Errors here.
        self.$store.dispatch('error/setMessage', error.message)
      });
    },
    setError() {  
      this.$store.dispatch('error/setMessage', 'error!!!')
    }
  }
}
</script>

<style>
</style>
