<template>
	<div class="container">
		<div class="body">
			<div class="search-box">
				<input type="text" name="search" id="search" placeholder="爱车快修，搜尽汽配" />
				<div>搜索</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'shopsearch',
		
	}
</script>

<style lang="scss" scoped="scoped">
.container{
	width: 100%;height: 120px;position: relative;box-sizing: border-box;
	.body{
		width: 1200px;display: flex;flex-wrap: nowrap;justify-content: center;align-items: center;position:relative;margin: 0 auto;height:120px;
		.search-box{
			display: flex;flex-wrap: nowrap;
			input{
				display: block;width: 800px;height: 50px;line-height: 50px;border:2px solid #E12937;font-size: 16px;
				border-bottom-left-radius: 10px;border-top-left-radius: 10px;text-indent: 36px;outline: none;box-sizing: border-box;
				&:hover{cursor: text;}
			}
			div{
				height: 50px;line-height: 50px;background: #E12937;color: #fff;font-size: 20px;outline: none;box-sizing: border-box;padding: 0 20px;
				cursor: pointer;border-bottom-right-radius: 10px;border-top-right-radius: 10px;
			}
		}
		
	}
	
}
</style>