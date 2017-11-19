import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Userprofile from '@/components/Userprofile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: Login
    },
    {
      path: '/userprofile',
      name: 'Userprofile',
      component: Userprofile
    }
  ]
})
