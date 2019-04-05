<template>
	<div class="container">
		<div class="head">
			<div class="floor-name">{{name.key+1+"F "+name.name}}</div>
			<div class="floor-navs">
				<div class="floor-nav" :class="{'floor-nav-on':navHover==0}" @mouseenter="onNavHover(0)">商品推荐</div>
				<div class="floor-nav" :class="{'floor-nav-on':navHover==1}" @mouseenter="onNavHover(1)">热销商品</div>
			</div>
		</div>
		<div class="body">
			<div class="bd-left">
				<div class="left-up">
					<img :src="dataBox.img"/>
				</div>
				<div class="left-down">
					<div>大家还喜欢</div>
					<div class="prefer" :class="{'prefer-on':preferHover===key}" @mouseover="onPreferHover(key)" @mouseleave="leavePrefer()" v-for="(val,key) in dataBox.prefer">{{val}}</div>
				</div>
			</div>
			<div class="bd-right">
				<div class="good" v-for="(val,key) in dataBox.shops">
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
		name:'shopfloordetail',
		props:['name'],
		data:function(){
			return {
				dataBox:{},
				navHover:0,
				preferHover:false,
			}
		},
		mounted(){
			this.getFloorData()
		},
		methods:{
			getFloorData(){
				var that = this;
				that.__proto__.__proto__.axios.post("/getFullFloorData",{'请求数据':that.name.name}).then(function(res){
					if(typeof(res.data)=='object'&&res.status==200){
						that.dataBox=res.data;
					}
				}).catch(function(err){
					that.dataBox={"img":'../static/no-goods.png',"prefer":["便携GPS导航","嵌入式导航","后视镜导航","GPS定位","OBD检测仪","安全预警仪","HUD抬头显示","行车记录仪"],"shops":[{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},{"name":'暂无商品','img':'../static/no-goods.png','price':'9999'},]};
				})
			},
			onNavHover(num){
				this.navHover=num
			},
			onPreferHover(num){
				this.preferHover=num
			},
			leavePrefer(){
				this.preferHover=false
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
.container{
	position: relative;width: 100%;height: 500px;margin-top: 30px;
	.head{
		height: 50px;display: flex;flex-wrap: nowrap;
		.floor-name{
			min-width: 220px;height: 50px;line-height: 50px;font-size: 24px;text-align: left;
		}
		.floor-navs{
			width: 100%;height: 50px;display: flex;flex-wrap: nowrap;align-items: center;border-bottom: 2px solid #E12937;box-sizing: border-box;
			.floor-nav{
				width: 200px;height: 50px;display: flex;flex-wrap: nowrap;align-items: center;justify-content: center;
				font-size: 20px;
			}
			.floor-nav-on{
				background: #E12937;color: #fff;
			}
		}
	}
	.body{
		height: 450px;width: 100%;display: flex;flex-wrap: nowrap;
		.bd-left{
			min-width: 220px;max-width: 220px;display: flex;flex-wrap: wrap;
			.left-up{
				height: 220px;width: 220px;
				img{width: 100%;height: 100%;}
			}
			.left-down{
				height: 230px;width: 220px;background: #f5f5f5;
				& div:first-child{
					text-align: left;height: 40px;line-height: 40px;font-size: 18px;text-indent: 10px;color: #666;width: 100%;
				}
				.prefer{
					padding: 3px 10px;background: #fff;border-radius: 20px;float: left;box-sizing: border-box;margin: 7.5px 5px;
					font-size: 14px;height: 30px;line-height: 30px;color: #666;transition: all .4s;
				}
				.prefer-on{
					background: #808080;color: #fff;cursor: pointer;
				}
			}
		}
		.bd-right{
			width: 100%;display: flex;flex-wrap: wrap;
			.good{
				width: 196px;height: 225px;
				img{width: 150px;height: 150px;margin-top: 15px;}
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