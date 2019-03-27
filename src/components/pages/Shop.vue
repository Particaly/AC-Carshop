<template>
	<div class="v-body">
		<!--商城首页的头部-->
		<shoptitle></shoptitle>
		<!--商城首页的搜索框-->
		<shopsearch></shopsearch>
		<!--商城首页的分类栏和banner图-->
		<shopbanner></shopbanner>
		<!--推荐栏商品-->
		<shoprecommend></shoprecommend>
		<!--正文-->
		<shopfloor></shopfloor>
	</div>
</template>

<script>
	export default {
		name:'shop',
		components:{
			shopbanner:require('../shop/ShopBanner.vue').default,
			shopsearch:require('../shop/ShopSearch.vue').default,
			shoptitle:require('../shop/ShopTitle.vue').default,
			shoprecommend:require('../shop/ShopRecommend.vue').default,
			shopfloor:require('../shop/ShopFloor.vue').default,
		}
	}
</script>

<style scoped="scoped" lang="scss">
.v-body{width: 100%;}
</style>