import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../pages/goodsDetail'
import Home from '../pages/home'
import Rankings from '../pages/rankings'
import Me from '../pages/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
    	path:'/home',
    	name:'Home',
    	component: Home
    },
    {
    	path:'/',
    	name:'rankings',
    	component: Rankings
    },
    {
    	path:'/me',
    	name:'me',
    	component: Me
    }
  ]
})
