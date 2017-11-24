<template lang="html">
<div class="content" id="home">
	<div  class="flex">
		测试24
	</div>
	<common-footer></common-footer>
</div>
</template>

<script>
	import CommonFooter from '../components/commomFooter.vue'
	export default {
	  components:{
	  	CommonFooter
	  }
	}

</script>

<style lang="css"  type="text/css">
	.flex{
		display: flex;
		justify-content:center;
		align-items:center;
		font-size: .24rem;
	}
</style>
