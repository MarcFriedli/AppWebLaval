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
      getLocalisation().then((localisation) => {
        console.log("LOL", localisation);
        this.position = localisation.country_name;
      })
    }
  }
</script>

<style>

</style>
