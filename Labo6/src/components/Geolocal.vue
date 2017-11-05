<template>
  <div class="geolocal container">
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
      city: ''
    }),
    mounted() {
      getLocalisation().then((localisation) => {
        console.log("LOL", localisation);
        this.state = localisation.state;
        this.city = localisation.city;
      });
    }
  }
</script>

<style scoped>
  h1 {
    color: white;
  }
</style>
