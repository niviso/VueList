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
      meta: {title: 'Home'},
      component: MainView
    },
    {
      path: '/new',
      name: 'NewProfile',
      meta: {title: 'Home'},
      component: NewProfile
    }
  ]
})
