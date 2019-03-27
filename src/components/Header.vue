<template>
	<div vname='head'>
		<div class="header" :class="{'header-hidden':show}">
			<div class="head-nav">
				<router-link to='/'><div class="logo href"></div></router-link>
				<div class="headnavs">
					<router-link :class="{'nav-on':navposition==navdata[key].href}" v-for="(item,key) in navdata" :key='item.id' :to='navdata[key].href'><div class="h-nav href">{{navdata[key].name}}</div></router-link>
				</div>
			</div>
		</div>
		<div style="height: 80px;width: 100%;"></div>
	</div>
</template>

<script>
	export default {
		name:'Header',
		mounted () {
            window.addEventListener('scroll', this.handleScroll, true); 
            this.changeNav();
             // 监听（绑定）滚轮 滚动事件
        },
        data:function(){
        	return {
        		show:false,
        		navposition:'/home',
        		navdata:[{'name':'首页','href':'/'},{'name':'配件商城','href':'/shop'},{'name':'预约修理','href':'/fix'},{'name':'成为会员','href':'/vip'}
        		,{'name':'公司简介','href':'/info'}]
        	}
        },
        methods:{
	        handleScroll(){
	            // 页面滚动距顶部距离
	            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
	                      document.body.scrollTop
	            var scroll = scrollTop - this.i;
	            this.i = scrollTop;
	            if(scroll<0){
	                this.show=false;
	            }else{
	            	this.show=true;
	            }
	        },
	        changeNav(to,from){
	        	if(this.$route.name=='/'){this.navposition='/'}else{this.navposition='/'+this.$route.name}
	        }
         },
         watch:{
         	'$route'(to,from){
         		this.changeNav()
         	}
         }
	}
</script>

<style lang="scss">
	.header {
		cursor: default;
		width: 100%;
		height: 80px;
		background: #fff;
		border-bottom: 1px solid #ccc;
		position: fixed;
		top: 0;
		transition: all .7s;
		z-index: 33;
		.head-nav {
			width: 1200px;
			height: 80px;
			margin: 0 auto;
			line-height: 80px;
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			.logo{
				width: 240px;
				height: 80px;
				background: url(../assets/logo.png) no-repeat center;
			}
			.headnavs{
				width: 600px;
				font-size: 18px;
				display: flex;
				flex-wrap: nowrap;
				align-items:center;
				float: right;
				a{
					display: block;
					text-decoration: none;
					height: 80px;
					line-height: 80px;
					width: 120px;
					color: #2c3e50;
				}
				.nav-on{
					background: #fafafa;
				}
			}
		}
	}
	.header-hidden{
		top:-80px;
		transition: all .7s;
	}
</style>