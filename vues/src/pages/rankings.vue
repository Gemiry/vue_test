<template lang="html">
<div class="content" id="home">
	<div  class="flex">
		测试2<span v-text="titleMsg"></span>
	</div>
</div>
</template>

<script>
	export default{
		data(){
			return {
				titleMsg:'12333'
			}
		},
		mounted(){
			this.Fun1();
		},
		methods:{
			Fun1(){
				console.log(this.$root._data);
			}
		}
	}
</script>

<style lang="css" scoped type="text/css">
	.flex{
		display: flex;
		justify-content:center;
		align-items:center;
		font-size: .5rem;
	}
</style>
