<template>
  <div id="home">
    <geolocal></geolocal>
    <weater></weater>
  </div>

</template>

<script>
  import Geolocal from './Geolocal';
  import Weater from './Weater';

  export default {
    name : 'Home',
    components: {
      Geolocal,
      Weater
    }
  }
</script>

<style>

</style>
