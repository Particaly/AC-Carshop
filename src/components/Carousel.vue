<template>
	<div class="carousel" @mouseover="cleartimer()" @mouseleave="start()" >
		<img onselectstart='return false;' ondragstart="return false;" v-for="(value,key) in src" :class="'img'+(key-hold)" :src="src[key]" :key='src.id' />
		<div class="spots">
			<div>
				<div class="spot-dw">
					<div v-for="(value,key) in src" @mouseover="movetothis(key)" class="spot" :class="{'spot-on':key==hold}" :bs="key"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'Carousel',
	props:['src'],
	data:function(){
		return {
			hold:0,
			mov:{}
		}
	},
	mounted () {
        this.start()
   },
	methods:{
		start(){
			let that=this;
			this.mov = setInterval(function(){
				/*取得当前位置的标识*/
				if(that.hold<that.src.length-1){
					that.hold++
				}else{
					that.hold=0
				}
			},5000)
		},
		cleartimer(){
			clearInterval(this.mov);
		},
		movetothis(res){
			let that = this;
			that.hold = res;
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
.carousel{position: relative;top: 0;left: 0;overflow: hidden;}
.carousel img{object-fit: cover;height: 100%;width: 100%;position: absolute;display: block;}
@for $i from -10 to 10{
	.img#{$i}{left:$i*100%;transition: all 1s;}
}
.spots{width: 100%;height: 40px;position: absolute;bottom: 0;}
.spots>div{float: left;position: relative;left: 50%;}
.spot-dw{position: relative;right: 50%;}
.spot{width: 10px;height: 10px;border-radius: 5px;background: #fff;margin-top: 15px;float: left;margin-left: 7.5px;}
.spot-on{background: green;}
</style>