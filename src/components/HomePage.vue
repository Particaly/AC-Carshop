<template>
	<div class="v-body">
		<banner></banner>
		<div class="bd-container">
			<!--卡片-->
			<div class="card-info">
				<div class="card-main">
					<div class="main-holder" @mouseenter="mainenter(1)" @mouseleave="mainleave(1)">
						<div class="main-pt" :class="{'main-hover':ismainhover==1}">
							<div class="main-ex">十年老店，实力雄厚</div>
							<div class="main-tit">专业专注</div>
						</div>
					</div>
					<div class="main-holder" @mouseenter="mainenter(2)" @mouseleave="mainleave(2)">
						<div class="main-cp" :class="{'main-hover':ismainhover==2}">
							<div class="main-ex">限量好货，越买越省</div>
							<div class="main-tit">全心全意</div>
						</div>
					</div>
					<div class="main-holder" @mouseenter="mainenter(3)" @mouseleave="mainleave(3)">
						<div class="main-sf" :class="{'main-hover':ismainhover==3}">
							<div class="main-ex">全部正品，利益保障</div>
							<div class="main-tit">质量保证</div>
						</div>
					</div>
					<div class="main-holder" @mouseenter="mainenter(4)" @mouseleave="mainleave(4)">
						<div class="main-jz" :class="{'main-hover':ismainhover==4}">
							<div class="main-ex">创造价值，携手成长</div>
							<div class="main-tit">携手成长</div>
						</div>
					</div>
				</div>
			</div>
			<!--正文-->
			<footers></footers>
		</div>
	</div>
</template>

<script>
export default {
	name : 'Home',
	data:function(){
		return{
			ismainhover:0
		}
	},
	components : {
		banner :require('./Banner.vue').default,
		footers :require('./Footer.vue').default,
	},
	methods:{
		mainenter(num){
			this.ismainhover=num;
		},
		mainleave(num){
			this.ismainhover=0;
		}
	}
}
</script>

<style lang="scss">
.bd-container{width: 100%;background: url(../assets/part-two-bg.jpg) no-repeat;background-size: 100% 100%;padding-top: 30px;}
.card-main{width: 100%;height: 200px;display: flex;flex-wrap: nowrap;align-items:center;justify-content: center;}
.main-holder{width: 25%;height: 180px;box-sizing: border-box;border-right: 1px solid #e5e5e5;}
.main-holder:last-child{border-right: none;}
.card-info{width: 1200px;margin: 0 auto;background: #fff;padding: 30px;box-sizing: border-box;}
.main-pt,.main-cp,.main-sf,.main-jz{width: 62px;height: 62px;margin: 0 auto;background: url(../assets/bg.png) no-repeat;
	background-position: 0 0;margin-top: 31.5px;transition: all .4s;position: relative;}
.main-cp{background-position: -186px 0}
.main-sf{background-position: -62px 0}
.main-jz{background-position: -124px 0;}
.main-hover{background-position-y: -75px;}
.main-ex{padding-bottom: 5px;color: #666;font-size: 14px;text-align: center;position: absolute;width: 200px;top: 65px;left: 50%;margin-left: -100px;}
.main-tit{padding-bottom: 5px;color: #333;font-size: 20px;text-align: center;font-weight: 700;position: absolute;width: 200px;top: 95px;left: 50%;margin-left: -100px;}

</style>