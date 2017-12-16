import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../pages/goodsDetail'
import Home from '../pages/home'
import Rankings from '../pages/rankings'
import Me from '../pages/me'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass:'active',
  routes: [
    {
      path: '/detail',
      name: 'detail',
      meta:{
        title:'详情'
      },
      component: Detail
    },
    {
    	path:'/home',
    	name:'Home',
      meta:{
        title:'首页'
      },
    	component: Home
    },
    {
    	path:'/',
    	name:'Rankings',
      meta:{
        title:'排行榜'
      },
    	component: Rankings
    },
    {
    	path:'/me',
    	name:'me',
      meta:{
        title:'个人中心'
      },
    	component: Me
    }
  ]
})
