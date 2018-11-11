// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueTouch from 'vue-touch';
import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'
Vue.config.productionTip = false
Vue.use(VueTouch);
Vue.use(Vue2TouchEvents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)

})
