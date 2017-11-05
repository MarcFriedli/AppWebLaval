<template>
  <div id="home">
    <geolocal></geolocal>
    <weather></weather>
  </div>

</template>

<script>
  import Geolocal from './Geolocal';
  import Weather from './Weather';

  export default {
    name : 'Home',
    components: {
      Geolocal,
      Weather
    }
  }
</script>

<style>

</style>
