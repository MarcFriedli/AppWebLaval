<template>
  <div>
  </div>
</template>

<script>
  import Cookie from 'js-cookie'
  import {getUserprofile} from '../serverCall'
  export default {
    name: 'Userprofile',
    data: () =>({
      username: ''
    }),
    created() {
      let token = Cookie.get('token');
      getUserprofile(token);
      if (this.username === '' || this.username === undefined) {
        // TODO
      }
    }
  }
</script>
