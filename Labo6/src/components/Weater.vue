<template>
  <div class="weater">{{myTest}}</div>
</template>

<script>
  import {getWeather} from '../weather'

  export default {
    name : 'Weater',
    data: ()=> ({
      prevision: [],
      myTest : 'This is a test'
    }),
    mounted() {
      getWeather().then(response => console.log(response));
    }
  }

</script>

<style>

</style>
