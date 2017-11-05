<template>
  <div class="geolocal">
    {{position}}
  </div>
</template>

<script>
  import {getLocalisation} from '../weather';

  export default {
    name : 'Home',
    data: ()=> ({
      position: ''
    }),
    mounted() {
      console.log(getLocalisation());
    }
  }
</script>

<style>

</style>
