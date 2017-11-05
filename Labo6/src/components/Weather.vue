<template>

  <div class="weather">
    <div class="error" v-if="gotError">{{errorMsg}}</div>
    <div class="prevision" v-for="p in prevision">
      <div class="toto">
        <img :src="p.icon_url">
        <p>{{p.date.weekday}}</p>
        <p>{{p.high.celsius}}/{{p.low.celsius}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {getWeather} from '../weather'

  export default {
    name : 'Weater',
    data: ()=> ({
      prevision: [],
      errorMsg: '',
      gotError: false
    }),
    mounted() {
      getWeather().then(response => {
        this.prevision = response.forecast.simpleforecast.forecastday;
      }).catch(e => {
        gotError = true;
        this.errorMsg = 'Oops, an error append, please refresh in a few minutes';
      });
    }
  }
</script>
<style>
  .weather {
    display: flex;
    justify-content: space-evenly;
  }
</style>
