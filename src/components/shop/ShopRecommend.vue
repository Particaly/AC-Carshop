<template>
	<div class="container">
		<div class="v-body">
			<div class="head">
				<div class="nav" :class="{'nav-on':navOnNum==key}" v-for="(val,key) in navList" @click="changeNav(key)">{{val.name}}</div>
			</div>
			<div class="goods">
				<div class="good" v-for="(val,key) in goods">
					<img :src="val.img"/>
					<div class="good-name">{{val.name}}</div>
					<div class="good-price">商城报价：<em>￥{{val.price}}</em></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'shoprecommend',
		data:function(){
			return{
				navOnNum:0,
				navList:[{'name':"新品上架"},{'name':"猜你喜欢"},{'name':"商品推荐"}],
				goods:[]
			}
		},
		created(){
			this.getGoods()
		},
		methods:{
			changeNav(num){
				this.navOnNum=num
			},
			getGoods(){
				var x = this;
				x.__proto__.__proto__.axios.post("/getRecommendGoods",{'xixi':'123'}).then(function(res){
					if(typeof(res.data)=='object'&&res.status==200){
						x.goods=res.data;
					}
				}).catch(function(err){
					x.goods=[{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'}];
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
.container{
	width: 100%;height: 300px;box-sizing: border-box;margin: 30px auto;
	.v-body{
		height: 300px;width: 1200px;margin: 0 auto;border: 1px solid #f0f0f0;
		.head{
			height: 50px;line-height: 50px;background: #f7f7f7;display: flex;
			.nav{
				width: 200px;border-right: 1px solid #e8e8e8;border-top: 2px solid #fff;
			}
			.nav-on{
				background: #fff;color: #E12937;border-top: 2px solid #E12937;transition: all .2s;
			}
		}
		.goods{
			height: 250px;box-sizing: border-box;display: flex;
			.good{
				width: 200px;height: 250px;
				img{width: 150px;height: 150px;margin-top: 30px;}
				.good-name{
					max-height: 40px;line-height: 20px;text-align: left;font-size: 14px;padding: 0 25px;box-sizing: border-box;
				}
				.good-price{
					height: 20px;line-height: 20px;text-align: left;font-size: 12px;padding: 0 25px;box-sizing: border-box;
					em{color: #E12937;font-style: normal;}
				}
			}
		}
	}
}
</style>