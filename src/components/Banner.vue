<template>
	<div class="banner">
		<div class="bannercontainer">
			<div class="wave-roll-area">
                <ul class="clearfix wave1" style="left: 0;">
                    <li class="wave-box">
                        <div class="wave-bg1"></div>
                        <div class="wave-bg2"></div>
                        <div class="wave-bg3"></div>
                    </li>
                </ul>
            </div>
			<div class="bannerleft">
				<div class="bannerword">Professional.
					<div class="bannersmall">—— 最专业的技术，打造最优秀的服务</div>
				</div>
				<div class="bannermain">
					<div class="bannerinfo">修车咨询热线</div>
					<a href="tel:15026856512">150-2685-6512</a>
				</div>
				<div class="bannernav">
					<div class="bannerline">
						<div class="bannerline1 blue-color">商城新品上新啦</div>
						<router-link to='/shop'><div class="bannerlink href">立即去看 ></div></router-link>
					</div>
					<div class="bannerline">
						<div class="bannerline1 red-color">会员专享特权</div>
						<router-link to='/hub'><div class="bannerlink href">立即去看 ></div></router-link>
					</div>
				</div>
			</div>
			<div class="bannerright">
				<carousel style="height: 360px;width: 830px;" :src='src'></carousel>
				<div class="bannerrightnav">
					<div class="img1"></div>
					<div class="img2"></div>
					<div class="img3"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name : 'banner',
	components:{
		Carousel:require('./Carousel.vue').default
	},
	created () {
        this.getImgSrc()
    },
	methods:{
		getImgSrc(){
			var x = this;
			x.__proto__.__proto__.axios.post("/getImgSrc",{'请求图片':'首页banner图'}).then(function(res){
				if(typeof(res.data)=='object'&&res.status==200){
					x.src=res.data;
				}
			}).catch(function(err){
				x.src=['https://s2.ax1x.com/2019/03/22/A32t4f.jpg',
						'https://s2.ax1x.com/2019/03/22/A32YUP.jpg',
						'https://s2.ax1x.com/2019/03/22/A32JEt.jpg',
						'https://s2.ax1x.com/2019/03/22/A328HI.jpg'];
			})
		}
	},
	data:function(){
		return {
			src:[]
		}
	}
}
</script>

<style lang="scss">
.banner{
	height: 530px;
	width: 100%;
	background: url(../assets/banner-bg.jpg) no-repeat center;
	background-size: 100% 100%;
	position: relative;
	.bannercontainer{
		width: 1200px;
		height: 530px;
		box-sizing: border-box;
		margin: 0 auto;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		.bannerleft{
			width: 360px;
			height: 500px;
			background: url(../assets/user-f-bg-01.jpg);background-size: 100% 100%;
			position: relative;
			top: 30px;
			left: 0px;
			.bannerword{
				height: 200px;
				width: 360px;
				font: italic 2em Georgia, serif;
				line-height: 200px;
				font-size: 48px;
				color: #fff;
				background: rgba(255,100,86,0.9);
				box-shadow: -15px 15px 15px rgba(0,0,0,0.3);
				position: relative;
				left: -15px;
				top: -15px;
				text-shadow: 0 5px 20px rgba(0,0,0,0.7);
				.bannersmall{
					width: 100%;
					height: 14px;
					line-height: 14px;
					position: absolute;
					bottom: 30px;
					font-size: 14px;
					-webkit-font-smoothing:antialiased;
					font-weight: 700;
					text-indent: 72px;
					color: #f5f5f5;
				}
			}
			.bannermain{
				height: 100px;
				box-sizing: border-box;
				width: 300px;
				margin-left: 60px;text-align: left;
				div,a{text-decoration: none;color: #fff;height: 30px;line-height: 30px;border-radius: 5px;}
				div{font-size: 20px;font-weight: 700;}
				a{display: block;font-weight: 700;color: red;border: 1px solid red;width: 120px;text-align: center;padding: 5px 15px;margin-top: 15px;}
			}
			.bannernav{
				height: 160px;
				box-sizing: border-box;
				width: 320px;
				margin-left: 40px;
				padding-left: 20px;
				border-left: 1px solid #434343;
				text-align: left;
				.bannerline{height: 80px;padding-top: 10px;
					.bannerline1{height: 30px;line-height: 30px;font-size: 18px;position: relative;
						&:before{content: '';display: block;height: 5px;width: 5px;border-radius: 5px;background: #434343;position: absolute;
							left: -23px;top: 12px;}
					}
					a{text-decoration: none;color: #fff;height: 30px;line-height: 30px;}
				}
			}
		}
	}
	.bannerright{
		width: 830px;
		height: 500px;
		position: relative;
		top: 30px;
		.bannerrightnav{
			height: 130px;
			width: 830px;
			margin-top: 10px;
			display: flex;
			flex-warp:nowarp;
			div{height: 130px;width: 33.33%;}
			.img1{background: url(../assets/b1.jpg) center;}
			.img2{background: url(../assets/b2.jpg) center;}
			.img3{background: url(../assets/b3.jpg) center;}
		}
	}
}
.wave-roll-area {position: absolute;z-index: 0;bottom: 0;left: 0;width: 100%;height: 120px;overflow: hidden;}
.wave-roll-area ul{position:absolute;left:0;bottom:0;width:6000px;margin: 0;padding: 0;}
.wave-box{width: 100%;height: 120px;}
.wave-bg1,.wave-bg2,.wave-bg3{width:100%;height:120px;position:absolute;bottom:0;z-index:1;background:url(../assets/a1.png);animation-name: transforms;
        animation-timing-function: linear;animation-duration:80s;animation-iteration-count: infinite;}
.wave-bg2{animation-duration:110s;}
.wave-bg3{animation-duration:50s;}
/*banner动画*/
@keyframes transforms{0%{transform:translate(0%,0)}100%{transform:translate(-60%,0%)}}
.blue-color{color: #3282ff;}
.red-color{color: #f52f3e;}
</style>