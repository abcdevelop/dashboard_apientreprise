import Vue from 'vue'
import Router from 'vue-router'
import APIConsole from '@/components/APIConsole'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'APIConsole',
      component: APIConsole
    }
  ]
})
