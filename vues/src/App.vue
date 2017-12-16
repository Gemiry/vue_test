<template>
  <div id="app">
    </App>
    <common-footer></common-footer>
    <div v-wechat-title="$route.meta.title" img-set="src/assets/logo.png"></div>
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
  import detail from './pages/goodsDetail.vue'
  import CommonFooter from './components/commomFooter.vue'
  export default{

    components:{
      'common-footer':CommonFooter,
    },
    mounted () {
      this.clg();
    },
    methods:{
      clg(){
        
      }
    }

  }

</script>
 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.active{
  background: #1374fb;
  color: #474747;
}
</style>
