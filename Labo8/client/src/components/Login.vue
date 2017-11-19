<template>
  <div>
    <div class="task-error" v-if="errorMessage.length">
      <span>{{errorMessage}}</span>
    </div>
    Username : <input type="text" v-model="username">
    Password : <input type="password" v-model="psw">
    <input type="button" value="Login" v-on:click ="handleLogin()">
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
  import {checkLogin} from '../serverCall'
  export default {
    name : 'Login',
    data: () =>({
      username : '',
      psw : '',
      errorMessage: ''

    }),
    methods: {
      reset(){
        this.errorMessage = '';
      },
      onError(cause) {
        this.errorMessage = 'Can\'t reply your request cause of ' + cause;
      },
      handleLogin(){
        this.reset();
        if (this.userName === '' || this.psw === '') {
          this.errorMessage = 'Username or password empty... I can\'t do my job T_T';
          return;
        }
        let token;
        checkLogin(this.username, this.psw).then(r => {
          token = r;
          console.log("Le token vaut : " + token);
          if (token === undefined) {
            this.errorMessage = 'Wrong password or username';
            return;
          }
          let inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000); //Found https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions
          Cookie.set('token', token, {expires: inFifteenMinutes});
          location.href = '#/Userprofile';
        });
      }
    },
    created() {
      let token = Cookie.get('token');
      if (token !== undefined) {
        location.href = '#/Userprofile';
      }
    }
  }
</script>
