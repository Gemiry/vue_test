// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import setWechatTitle from '../static/setWechatTitle.js'

Vue.config.productionTip = false
Vue.use(require('vue-wechat-title'))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      titleMsg: '12333'
    }
  },
  router,
  template: '<App/>',
  components: { App }
});
// Vue.directive('title', {
//   inserted: function (el, binding) {
//     document.title = binding.value
//   }
// });
// router.afterEach((transition) => {
// 	console.log(transition);
//   let title = transition.name;
//   console.log(title)
//   setWechatTitle(title)
// })
