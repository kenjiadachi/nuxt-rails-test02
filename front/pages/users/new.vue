<template>
  <section>
    <div>
      <h1>New user</h1>
      <form @submit.prevent="post">
        <label for="name">Name: </label>
        <input id="name" v-model="name" type="text" name="name" />
        <button type="submit">submit</button>
      </form>

      <button @click="googleLogin()">submit</button>
    </div>
  </section>
</template>

<script lang="ts">
import { fireBase } from '../../plugins/firebase'
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    post() {
      this.$axios.post(
        '/api/users',
        {
          name: this.name
        }
      ).then((res) => {
        this.$router.push(`${res.data.id}`)
      })
    },
    googleLogin() {
      var provider = new fireBase.auth.GoogleAuthProvider();
      fireBase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(token, user)
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