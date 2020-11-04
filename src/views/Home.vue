<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="logOut">LogOut</button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Home',
  components: {
  
  },
    methods: {
      logOut() {
        firebase
          .auth()
          .signOut()
            .then( () => {
              this.$router.replace('/')
            })
      }
    }
}
</script>
