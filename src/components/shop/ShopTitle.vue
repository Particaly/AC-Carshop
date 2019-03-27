<template>
	<div class="container">
		<div class="body">
			<div class="left">
				<div>服务热线：<strong>150-2685-6512</strong></div>
				<div class="phone">手机逛商城</div>
			</div>
			<div class="right">
				<div class="welcome" v-if="islogin">欢迎您，</div>
				<div class="hello" v-else="islogin">您好，<router-link to='/login'>请登录</router-link> <router-link to='/register'>注册</router-link></div>
				<div class="club"><router-link to='club'>我的商城</router-link></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'shoptitle',
		mounted (){
			
		},
		data:function(){
			return {
			}
		},
		computed : {
			islogin:function(){
				return this.$store.state.isLogin
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
.container{
	width: 100%;height: 40px;background: #FAFAFA;
	.body{
		width: 1200px;height: 40px;margin: 0 auto;line-height:40px;
		.left{
			float: left;height: 40px;font-size: 15px;
			div{
				float: left;color: rgb(119, 119, 119);border-right: 1px solid #ccc;height: 20px;line-height: 20px;padding:0 10px;margin: 10px 0;
			}
			.phone{
				color: #000000;font-size: 13px;
				&:before{content: '';display: block;width: 20px;height: 20px;float: left;background: url(../../assets/33hao_ico_ntrance.png) -6px -295px;;}			
			}
			
		}
		.right{
			float:right;height: 40px;font-size: 14px;
			div{float: left;height: 20px;line-height: 20px;padding: 0 10px;margin: 10px 0;border-right: 1px solid #ccc;}
			.welcome{
				
			}
			.hello{
				
				a{font-style: normal;color: #E12937;text-decoration: none;
					&:last-child{color: #2c3e50;}
					&:hover{text-decoration: underline;color: #E12937;}
				}
				
			}
			.club{
				a{font-style: normal;color: #E12937;text-decoration: none;
					&:last-child{color: #2c3e50;}
					&:hover{text-decoration: underline;color: #E12937;}
				}
			}
		}
	}
}
</style>