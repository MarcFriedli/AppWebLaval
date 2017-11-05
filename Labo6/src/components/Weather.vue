<template>

  <div class="weather">
    <div class="prevision" v-for="p in prevision">
      <div class="">
        <img :src="p.icon_url">
        <p>{{p.date.weekday}}</p>
        <p>{{p.high.celsius}}/{{p.low.celsius}}</p>
      </div>
      <!--{{p}}-->

    </div>
  </div>
</template>

<script>
  import {getWeather} from '../weather'

  export default {
    name : 'Weater',
    data: ()=> ({
      prevision: []
    }),
    mounted() {
      getWeather().then(response => {
        this.prevision = response.forecast.simpleforecast.forecastday;
      })
    }
  }
</script>
<style>
  .prevision {
    display: inline-block;
    margin: 2em;
  }
</style>
