import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/init.css'

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

Vue.use(elementUI)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
