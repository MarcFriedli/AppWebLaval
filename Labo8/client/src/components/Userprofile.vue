<template>
  <div>
    Welcome {{username}}
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
      getUserprofile(token).then(resp => {
        this.username = resp.user;
        console.log(this.username);
      });
      if (this.username === '' || this.username === undefined) {
        // TODO
      }
    }
  }
</script>
