<template>
  <div class="login">
    <form @submit.prevent="logIn">
      <label for="">
        <input type="text" v-model="email">
      </label>
      <label for="">
        <input type="password" v-model="password">
      </label>
      <input type="submit" value="Login">
    </form>
<h2>Usuario:yoyo@yo.com</h2>
<h2>Clave:1234567</h2>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";

export default {
  name: 'Login',
  components: {
  },
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    logIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
          .then( () =>  {
            this.$router.replace('home')
          })
          .catch(function(error) {
            console.log(error.message)
            alert(error.message)
          });
    }
  }
}
</script>