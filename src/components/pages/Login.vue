<template>
	<div class="container">
    <div class="bod">
      <div class="centerbox">
        <div class="mask" :class="{register:flagOfRegOrLog=='reg',login:flagOfRegOrLog=='log'}">
          <div class="changetypebtn" @click="toggleType">{{btnData}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default{
		name:"login",
    data:function () {
      return{
        btnData:"欢迎回来，立刻登录",
        flagOfRegOrLog:'log',
      }
    },
    mounted(){

    },
    methods:{
      toggleType(){
        let that = this
        this.btnData=''
        if(this.flagOfRegOrLog=='log'){
          this.flagOfRegOrLog='reg';
          setTimeout(function () {
            that.btnData="欢迎回来，立刻登陆！";
          },800)
        }else{
          this.flagOfRegOrLog='log';
          setTimeout(function () {
            that.btnData="还没有账号？去注册！";
          },800)
        }
      }
    }
	}
</script>

<style scoped="scoped" lang="scss">
.container{
  width: 100%;
  height: calc(100% - 80px);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: linear-gradient(135deg,#EA5C54 0%,#bb6dec 100%);
  .bod{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-content: center;
    box-sizing: border-box;
    .centerbox{
      min-width: 80%;
      min-height: 50%;
      margin: 12.5% 10%;
      box-sizing: border-box;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      .mask{
        width: 30%;
        height: 100%;
        background: linear-gradient(135deg,#bb6dec 0%,#EA5C54 100%);
        position: absolute;
        transition: all 1s;
        .changetypebtn{
          width: 60%;
          height: 50px;
          line-height: 50px;
          padding: 0 20px;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.7);
          border-radius: 30px;
          position: absolute;
          left: calc(40% - 80px);
          bottom: 50px;
        }
      }
      .register{
        left: 70.1%;
        animation: ani-mask 1s ease-in-out;
      }
      .login{
        left: 0%;
        animation: ani-mask-back 1s ease-in-out;
      }
    }
  }
}
@keyframes ani-mask {
  0%{width: 30%;left: 0;}
  50%{width: 50%}
  100%{width: 30%;left: 70.1%;}
}
@keyframes ani-mask-back {
  0%{width: 30%;left: 70.1%;}
  50%{width: 50%}
  100%{width: 30%;left: 0;}
}
</style>
