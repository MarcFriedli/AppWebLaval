<template>
  <div class="geolocal">
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
  .geolocal {
    background-color: #15c7ff;
    width: 100%;
    height: 300px;
    padding: 3em;
    margin: 1em;
  }

  h1 {
    color: white;
  }
</style>
