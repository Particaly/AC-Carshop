<template>
	<div class="footer">
		<div class="ft-cont">
			<div class="ft-line1">
				<div class="ft-dt">关于爱车快修</div>
				<div class="ft-dt">知识产权</div>
				<div class="ft-dt">免责声明</div>
				<div class="ft-dt">汽修联盟</div>
				<div class="ft-dt">平台协议</div>
				<div class="ft-dt">隐私政策</div>
				<div class="ft-dt">联系客服</div>
				<div class="ft-dt">营业执照</div>
			</div>
			<div class="ft-line2">
				<div class="ft-dt">Copyright © 2019-2019 爱车快修 版权所有</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'footers'
	}
</script>

<style scoped="scoped" lang="scss">
.footer{height: 100px;width: 100%;background: #323232;margin-top: 30px;}
.ft-cont{width: 1200px;height: 100%;position: relative;margin: 0 auto;}
.ft-line1,.ft-line2{width: 100%;height: 50px;line-height: 50px;display: flex;flex-wrap: nowrap;justify-content: center;align-items: center;}
.ft-dt{font-size: 14px;text-align: center;color: #b3b5ba!important;padding: 0 15px;border-right: 1px solid #B3B5BA;height: 14px;line-height: 14px;}
.ft-dt:last-child{border-right: none;}
</style>