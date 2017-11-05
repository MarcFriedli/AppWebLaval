<template>
  <div class="geolocal container">
    <div class="error" v-if="gotError">{{errorMsg}}</div>
    <h1>Weather.js</h1>
    <b>{{city}}, {{state}}</b>
  </div>
</template>

<script>
  import {getLocalisation} from '../weather';

  export default {
    name : 'Home',
    data: ()=> ({
      state: '',
      city: '',
      errorMsg: '',
      gotError: false
    }),
    mounted() {
      getLocalisation().then((localisation) => {
        console.log("LOL", localisation);
        this.state = localisation.state;
        this.city = localisation.city;
      }).catch(e => {
        gotError = true;
        this.errorMsg = 'Oops, an error append, please refresh in a few minutes';
      });
    }
  }
</script>

<style scoped>
  h1 {
    color: white;
  }
  .gotError{
    color: red;
  }
</style>
