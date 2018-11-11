import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/Views/MainView'
import NewProfile from '@/Views/NewProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/new',
      name: 'NewProfile',
      component: NewProfile
    }
  ]
})
