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
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        self.$axios.post(
          '/api/users', { 
            name: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL,
            uid: result.user.uid,
          }
        ).then((res) => {
          console.log(res);
          // this.$router.push(`${res.data.id}`)
        })
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
  }
}
</script>

<style>
</style>
