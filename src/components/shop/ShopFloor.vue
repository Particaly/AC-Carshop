<template>
<div class="container">
	<div class="body">
		<transition  name='fade'>
			<div class="left-nav-body" :class="{'hideit':!navOpacity}" @mouseleave="isMouseOnFloor=false">
				<div class="floor-nav" :class="{'floor-nav-on':isMouseOnFloor===key}" @mouseover="mouseOnFloor(key)"
				 v-for="(val,key) in floorName" @click="goAnchor('#floor'+key)">
					{{(isMouseOnFloor===key)?(val):(key+1+"F")}}
				</div>
			</div>
		</transition>
		
		<div class="floor-container">
			<shopfloordetail :id='"floor"+key' v-for="(val,key) in floorName" :name='{"name":val,"key":key}' :key="floorName.key"></shopfloordetail>
		</div>
		
	</div>
	<!--foot-->
	<footers></footers>
</div>
</template>

<script>
	export default {
		'name':'shopfloor',
		components:{
			shopfloordetail:require('./ShopFloorDetail.vue').default,
			footers :require('../Footer.vue').default,
		},
		data:function(){
			return {
				floorName:[],
				isMouseOnFloor:false,
				navOpacity:false
			}
		},
		created(){
			this.getFloorName()
			window.addEventListener('scroll', this.handleScroll, true); 
		},
		methods:{
			handleScroll(){
	            // 页面滚动距顶部距离
	            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	         	var x = document.querySelectorAll(".floor-container>div")[0].getBoundingClientRect().top
	         	if(x>160){
	         		this.navOpacity=false;
	         		this.isMouseOnFloor=false;
	         	}else{
	         		this.navOpacity=true;
	         		this.isMouseOnFloor=parseInt(((-x+160)/530),10)
	         	}
	        },
			getFloorName(){
				var that = this;
				that.__proto__.__proto__.axios.post("/getShopFloors",{'请求数据':'商城floor数据'}).then(function(res){
					if(typeof(res.data)=='object'&&res.status==200){
						that.floorName=res.data;
					}
				}).catch(function(err){
					that.floorName=['电子电器','美容养护','内外饰品','安全出行','改装维修','发动机件','车身车架','底盘传动'];
				})
			},
			mouseOnFloor(num){
				this.isMouseOnFloor=num
			},
			goAnchor(selector) {
	             let anchor = this.$el.querySelector(selector);
	             //document.documentElement.scrollTop = anchor.offsetTop;
	             let total = anchor.offsetTop+document.documentElement.clientHeight||document.body.offsetHeight;
	             // 平滑滚动，时长500ms，每10ms一跳，共50跳
	             // 获取当前滚动条与窗体顶部的距离
	             let distance = document.documentElement.scrollTop || document.body.scrollTop;
	             // 计算每一小段的距离
	             let step = (total-distance)/50;
	             (function smoothDown () {
	                 if (Math.abs(distance - total)>20) {
	                     distance += step
	                 　　// 移动一小段
	                     document.body.scrollTop = distance
	                     document.documentElement.scrollTop = distance
	                 　　// 设定每一次跳动的时间间隔为10ms
	                     setTimeout(smoothDown, 10)
	                 } else {
	                 　　// 限制滚动停止时的距离
	                     document.body.scrollTop = total
	                     document.documentElement.scrollTop = total
	                 }
	             })()
         	}
		}
	}
</script>

<style scoped="scoped" lang="scss">
.container{
	width: 100%;height: 500px;
	.body{
		width: 1200px;margin: 0 auto;position: relative;
		.left-nav-body{
			width:80px;position: fixed;left: 50%;margin-left: -700px;top: 160px;display: flex;flex-wrap: wrap;background: #f3f2f2;
			.floor-nav{
				width: 80px;height: 32px;line-height: 32px;box-sizing: border-box;border: 1px solid #FAFAFA;
				a{
					text-decoration: none;color: #616161;
				}
			}
			.floor-nav-on{
				color: #E12937;
			}
		}
	}
	.hideit{display: none!important;}
}
html,body{transition: all 2s;}
.fade-enter{
	opacity: 0;
}
.fade-enter-active{
	transition: opacity .3s;
}
.fade-leave-to{
	opacity: 0;
}
.fade-leave-active{
	transition: opacity .3s;
}
</style>