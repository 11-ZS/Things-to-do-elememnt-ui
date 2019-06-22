import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/init.css'

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import userRequest from './process/UserRequest.js'

 
Vue.prototype.$userRequest = userRequest;
 
Vue.config.productionTip = false

Vue.use(elementUI)

new Vue({
	router,
	store,
	render: function (h) { return h(App) }
}).$mount('#app')

