<template>
	<div class="footer">
		<ul>
			<li><router-link to="/"> 1</router-link></li>
			<li><router-link to="/detail"> 2</router-link></li>
			<li><router-link to="/home"> 3</router-link></li>
			<li><router-link to="/me"> 4</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default{
	}
</script>

<style type="text/css" lang="css">
	.footer{
		height: .9rem;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1px solid #eee;
		background: #fff;
	}
	.footer ul li{
		float:left;
		width:25%;
		height:.9rem;
		line-height:.9rem;
		font-size:.3rem;
		text-align:center;
		color:#ff8000;
		list-style: none;
	}
	.footer ul li:active{
		background-color:#ccc;
	}
	a{
		display: inline-block;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: #333;
	}
</style>