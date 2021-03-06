import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Index from './views/Index.vue'
import Register from './views/Register'
import Login from './views/Login'

Vue.use(Router)


export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index,
			children:[
				{path:'/general', },
				{path:'/tomorrow', },
			]
		},
		{
			path:'/user/register',
			component:Register
		},
		{
			path:'/user/login',
			component:Login
		}
		// {
		//   path: '/',
		//   name: 'home',
		//   component: Home
		// },
		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (about.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: function () { 
		//     return import(/* webpackChunkName: "about" */ './views/About.vue')
		//   }
		// }
	]
})
