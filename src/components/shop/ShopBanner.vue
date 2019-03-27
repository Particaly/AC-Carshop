<template>
	<div class="container">
		<div class="body">
			<div class="fl-all">全部商品分类</div>
			<div class="tag" v-for="(value,key) in tags"><router-link :to='tags[key].target'>{{tags[key].name}}</router-link></div>
		</div>
		<div class="navs">
			<carousel style="height: 500px;width: 100%;position: absolute;border-top: 2px solid #E12937;box-sizing: border-box;" :src='src'></carousel>
			<div class="nav-holder">
				<div class="class-one">
					<div class="one" :class="{'one-on':hoverClassNum===key}" v-for="(val,key) in fl" @mouseover="hoverClass(key)" @mouseleave="leaveClass()" >{{fl[key].name}}</div>
				</div>
				<transition name='fade'>
					<div class="table" v-show="isClassOneHover" @mouseover="hoverClass()" @mouseleave="leaveClass()">
						<div class="two" v-for="(val,key) of fl[hoverClassNum||0].secondfl">
							<div class="two-left">{{val.name}}</div>
							<div class="two-right">
								<div class="three" v-for="(elem,keyis) in fl[hoverClassNum||0].secondfl[key].thirdfl">{{elem.name}}</div>
							</div>
						</div>
					</div>
				</transition>
			</div>
		</div>
	
	</div>
</template>

<script>
	export default {
		name:'shopbanner',
		components:{
			Carousel:require('../Carousel.vue').default
		},
		data:function(){
			return {
				tags:[{'name':'首页','target':'/'},{'name':'品牌','target':'/'},{'name':'打折促销','target':'/'},{'name':'积分兑换','target':'/'}],
				src:[],
				fl:[{"name":"电子电器","img":"","secondfl":[{"name":"行车导航","thirdfl":[{"name":"便携GPS导航"}]}]}],
				hoverClassNum:false,
				isClassOneHover:false,
				lastHoverClassNum:false
			}
		},
		created () {
	        this.getImgSrc();
	        this.getFLdata()
	    },
		methods:{
			hoverClass(num){
				this.isClassOneHover=true;
				if(num!=undefined){
					this.hoverClassNum=num;
				}else{
					this.hoverClassNum=this.lastHoverClassNum;
				}
			},
			leaveClass(){
				this.lastHoverClassNum=this.hoverClassNum;
				this.isClassOneHover=false;
				this.hoverClassNum=false;
			},
			getImgSrc(){
				var x = this;
				x.__proto__.__proto__.axios.post("/getShopTitleImgSrc",{'请求文件':'商店页面banner图'}).then(function(res){
					if(typeof(res.data)=='object'&&res.status==200){
						x.src=res.data;
					}
				}).catch(function(err){
					x.src=['https://s2.ax1x.com/2019/03/22/A3RXF0.jpg',
							'https://s2.ax1x.com/2019/03/22/A3RLoq.jpg',
							'https://s2.ax1x.com/2019/03/22/A3Rqwn.jpg'];
				})
			},
			getFLdata(){
				var x = this;
				x.__proto__.__proto__.axios.post("/getFLdata",{'请求数据':'商店页面推荐栏数据'}).then(function(res){
					if(typeof(res.data)=='object'&&res.status==200){
						x.fl=res.data;
					}
				}).catch(function(err){
					x.fl=[{"name":"电子电器","img":"","secondfl":[{"name":"行车导航","thirdfl":[{"name":"便携GPS导航"},{"name":"嵌入式导航"},{"name":"后视镜导航"}]},{"name":"安全预警","thirdfl":[{"name":"GPS定位"},{"name":"OBD检测仪"},{"name":"安全预警仪"},{"name":"HUD抬头显示"},{"name":"行车记录仪"},{"name":"跟踪防盗器"},{"name":"后视系统"},{"name":"方向盘锁"},{"name":"后视镜"},{"name":"车锁"},{"name":"倒车雷达"},{"name":"胎压监测仪"}]},{"name":"车载电器","thirdfl":[{"name":"车载电源"},{"name":"车载蓝牙"},{"name":"车载净化器"},{"name":"车载冰箱"},{"name":"车载吸尘器"},{"name":"充气泵"},{"name":"车载生活电器"}]},{"name":"影音娱乐","thirdfl":[{"name":"车载影音"},{"name":"车载MP3"},{"name":"汽车音响"}]},{"name":"汽车通讯","thirdfl":[{"name":"车载免提"},{"name":"车载电脑"},{"name":"车载电话"},{"name":"车载对讲机"}]},{"name":"智能车机","thirdfl":[{"name":"大众"},{"name":"丰田"},{"name":"福特"},{"name":"现代"},{"name":"起亚"},{"name":"雪铁龙"},{"name":"奥迪"},{"name":"宝马"},{"name":"雪佛兰"},{"name":"别克"}]}]},{"name":"美容养护","img":"","secondfl":[{"name":"系统养护","thirdfl":[{"name":"机油"},{"name":"添加剂"},{"name":"防冻冷却液"},{"name":"附属油"},{"name":"底盘装甲"},{"name":"制动液"},{"name":"护理用品"},{"name":"汽车漆"},{"name":"原子灰"},{"name":"养护用品"},{"name":"清洁剂"},{"name":"空调清洗剂"},{"name":"金属养护"}]},{"name":"汽车美容","thirdfl":[{"name":"漆面美容"},{"name":"漆面修复"},{"name":"内饰清洁"},{"name":"玻璃美容"},{"name":"补漆笔"},{"name":"轮胎轮毂清洗"},{"name":"洗车机"},{"name":"洗车水枪"},{"name":"洗车配件"},{"name":"洗车液"},{"name":"清洗剂"},{"name":"车掸"},{"name":"擦车巾/海绵"},{"name":"车蜡"},{"name":"镀晶"}]}]},{"name":"内外饰品","img":"","secondfl":[{"name":"座垫脚垫","thirdfl":[{"name":"凉垫"},{"name":"四季垫"},{"name":"毛垫"},{"name":"专车专用座垫"},{"name":"专车专用座套"},{"name":"通用座套"},{"name":"多功能垫"},{"name":"专车专用脚垫"},{"name":"通用脚垫"},{"name":"后备箱垫"}]},{"name":"内饰精品","thirdfl":[{"name":"车用香水"},{"name":"车用炭包"},{"name":"空气净化"},{"name":"颈枕/腰靠"},{"name":"方向盘套"},{"name":"挂件"},{"name":"布艺软饰"},{"name":"功能用品"},{"name":"整理收纳"},{"name":"小摆饰"},{"name":"方向盘助力球"},{"name":"纸巾盒"},{"name":"CD夹"}]},{"name":"外饰用品","thirdfl":[{"name":"汽车贴膜"},{"name":"防爆膜"},{"name":"晴雨挡"},{"name":"备胎罩"},{"name":"油箱盖"},{"name":"冷光片"},{"name":"防撞胶"}]}]},{"name":"安全出行","img":"","secondfl":[{"name":"自驾装备","thirdfl":[{"name":"儿童安全座椅"},{"name":"应急救援"},{"name":"汽修工具"},{"name":"自驾野营"},{"name":"自驾照明"},{"name":"保温箱"},{"name":"置物箱"},{"name":"车衣"},{"name":"遮阳挡雪挡"},{"name":"车锁地锁"}]}]},{"name":"改装维修","img":"","secondfl":[{"name":"轮毂改装","thirdfl":[{"name":"锻造轮毂"},{"name":"铸造轮毂"},{"name":"旋压轮毂"},{"name":"轻量化轮毂"},{"name":"越野轮毂"}]},{"name":"动力改装","thirdfl":[{"name":"涡轮"},{"name":"大流量空滤"},{"name":"竞技火花塞"},{"name":"外挂电脑"},{"name":"排气改装"},{"name":"进气风箱"}]},{"name":"超控改装","thirdfl":[{"name":"短弹簧"},{"name":"避震"},{"name":"绞牙"},{"name":"车身强化"},{"name":"刹车卡钳"}]},{"name":"外观改装","thirdfl":[{"name":"装饰条"},{"name":"贴纸"},{"name":"中网"},{"name":"车顶架"},{"name":"脚踏板"},{"name":"车载旅行架"},{"name":"大包围"},{"name":"保险杠"},{"name":"定风翼"},{"name":"排气管"},{"name":"隔音材料"},{"name":"汽车缓冲器"},{"name":"装饰灯"},{"name":"疝气灯"}]},{"name":"汽车贴膜","thirdfl":[{"name":"打蜡机"},{"name":"平衡机"},{"name":"电脑洗车机"},{"name":"吸尘机"},{"name":"充电机"},{"name":"空调加注机"},{"name":"吸水机"}]},{"name":"内饰改装","thirdfl":[{"name":"车内贴纸"},{"name":"油门踏板"}]},{"name":"改装配件","thirdfl":[{"name":"雨刷"},{"name":"车灯"},{"name":"轮胎"},{"name":"贴膜"},{"name":"装饰贴"},{"name":"后视镜"},{"name":"机油滤"},{"name":"空气滤"},{"name":"空调滤"},{"name":"燃油滤"},{"name":"火花塞"},{"name":"喇叭"},{"name":"刹车片"},{"name":"刹车盘"},{"name":"减震器"},{"name":"车身装饰"},{"name":"尾喉/排气管"},{"name":"踏板"},{"name":"蓄电池"}]},{"name":"电气仪表","thirdfl":[{"name":"汽车灯具"},{"name":"火花塞"},{"name":"电脑版"},{"name":"分电器"},{"name":"汽车音响"},{"name":"传感器"},{"name":"发电机"},{"name":"电子扇"},{"name":"冲压件"},{"name":"喇叭"}]}]},{"name":"发动机件","img":"","secondfl":[{"name":"发动机配件","thirdfl":[{"name":"滤清器"},{"name":"活塞环"},{"name":"油封"},{"name":"节气门体"},{"name":"密封垫"},{"name":"消声器"},{"name":"皮带"},{"name":"自动波箱"},{"name":"散热器"},{"name":"连杆"},{"name":"发动机总成"},{"name":"电喷"}]}]},{"name":"车身车架","img":"","secondfl":[{"name":"车身附件","thirdfl":[{"name":"安全气囊"},{"name":"雨刮器"},{"name":"安全带"},{"name":"遮阳板"},{"name":"空调"},{"name":"冷凝器"},{"name":"天窗"},{"name":"排气管"},{"name":"叶子板"},{"name":"车牌架"}]},{"name":"横向件及其他","thirdfl":[{"name":"汽车轴承"},{"name":"油管胶管"},{"name":"汽车弹簧"}]}]},{"name":"底盘传动","img":"","secondfl":[{"name":"传动配件","thirdfl":[{"name":"变速器"},{"name":"传动轴"},{"name":"差速器"},{"name":"减速器"},{"name":"离合器"},{"name":"万向节"},{"name":"取力器"},{"name":"变速器轴"}]},{"name":"转向配件","thirdfl":[{"name":"助力器"},{"name":"转向盘"},{"name":"转向节"},{"name":"转向拉杆"},{"name":"球头"},{"name":"转向机总成"}]},{"name":"制动配件","thirdfl":[{"name":"真空助力器"},{"name":"刹车盘，刹车片"},{"name":"刹车蹄"},{"name":"制冷压缩机"}]},{"name":"行走配件","thirdfl":[{"name":"车架总成"},{"name":"钢圈总成"},{"name":"半轴"},{"name":"轮毂"},{"name":"钢板弹簧"},{"name":"悬架系统"},{"name":"前桥"},{"name":"减震器"},{"name":"桥壳"},{"name":"后桥"},{"name":"轮胎"},{"name":"保险杠"},{"name":"平衡块"}]}]},{"name":"修保工具","img":"","secondfl":[{"name":"手动工具","thirdfl":[{"name":"扳手"},{"name":"套筒"},{"name":"接杆"},{"name":"手柄"},{"name":"钳子"},{"name":"工具车"},{"name":"工具架"},{"name":"工具箱"}]},{"name":"电动工具","thirdfl":[{"name":"电锤"},{"name":"磨光机"},{"name":"电钻"},{"name":"电圆锯"},{"name":"电刨"},{"name":"电摩"},{"name":"电冲剪"}]},{"name":"液压工具","thirdfl":[{"name":"千斤顶"},{"name":"空压机"},{"name":"黄油枪"},{"name":"气动工具"}]},{"name":"检测设备","thirdfl":[{"name":"检测仪"},{"name":"四轮定位仪"},{"name":"诊断仪"},{"name":"制动台"},{"name":"内窥镜"}]},{"name":"保养设备","thirdfl":[{"name":"打蜡机"},{"name":"平衡机"},{"name":"电脑洗车机"},{"name":"吸尘机"},{"name":"充电机"},{"name":"空调加注机"},{"name":"吸水机"}]},{"name":"维修设备","thirdfl":[{"name":"举升机"},{"name":"扒胎机"},{"name":"钣金设备"},{"name":"补胎机"}]}]},{"name":"线下服务","img":"","secondfl":[{"name":"清洗美容","thirdfl":[{"name":"洗车"},{"name":"空调清洗"},{"name":"内饰清洗"},{"name":"镀膜"},{"name":"镀晶"},{"name":"打蜡"}]},{"name":"维修服务","thirdfl":[{"name":"车辆改装"},{"name":"更换轮胎"},{"name":"换刹车盘"},{"name":"换刹车片"}]},{"name":"驾驶培训","thirdfl":[]},{"name":"钣金喷漆","thirdfl":[]}]},{"name":"二手市场","img":"","secondfl":[]}];
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
.container{
	width: 100%;
	.body{
		width: 1200px;margin: 0 auto;
		div{float: left;}
		.fl-all{
			height: 40px;line-height: 40px;background: #E12937;color: #fff;font-size: 14px;padding: 0 20px;width: 200px;text-align: left;
			box-sizing: border-box; 
			&:before{
				content: '';display: block;height: 18px;width: 20px;float: left;background: url(../../assets/list.png) no-repeat center;margin-top: 10px;
				margin-right: 10px;
			}
		}
		.tag{
			a{text-decoration: none;color: #2C3E50;height: 40px;line-height: 40px;padding: 0 30px;display: block;}
		}
		&:after{display:block;clear:both;content:"";visibility:hidden;height:0}
		&{zoom:1}
	}
	.navs{
		width: 100%;height: 500px;position: relative;
		.nav-holder{
			width: 1200px;height: 500px;margin: 0 auto;position: relative;z-index: 21;
			.class-one{
				float: left;height: 500px;width: 200px;box-sizing: border-box;display: flex;flex-wrap: wrap;position: relative;z-index: 21;border-top: 2px solid #E12937;
				.one{
					background:#E4393C;;color: #fff;width: 100%;display: flex;justify-content: center;align-items: center;transition: all .2s;
				}
				.one-on{background: #fff;color: #E12937;}
			}
			.table{
				float: left;width: 800px;height: 500px;background: #fff;border: 1px solid #E12937;box-sizing: border-box;border-left: none;
				padding: 10px 30px;
				.two{
					font-size: 14px;width: 100%;box-sizing: border-box;line-height: 40px;display: flex;flex-wrap: nowrap;
					.two-left{
						color: #222222;font-weight: 700;min-height: 40px;float: left;min-width: 80px;
					}
					.two-right{
						color: #666;min-height: 40px;float: left;padding-left: 30px;
						.three{
							float: left;padding: 0 15px;
							&:hover{
								cursor: pointer;text-decoration: underline;color: #E12937;
							}
						}
					}
					&:after{display:block;clear:both;content:"";visibility:hidden;height:0}
					&{zoom:1}
				}
			}
		}
	}
}
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