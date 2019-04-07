<template>
	<div class="container">
    <div class="bod">
      <div class="centerbox">
        <transition name="logbox">
          <div class="loginbox" v-if="flagOfRegOrLog=='log'">
            <div class="box-container">
              <div class="box-title">账号登陆</div>
              <el-input v-model="userId" class="inp" placeholder="请输入用户名/手机号/邮箱"></el-input>
              <el-input v-model="userPSW" style="margin-top: 20px" class="inp" placeholder="请输入密码" show-password=""></el-input>
              <el-button type="primary" :loading="isLoginLoading" :disabled="userPSW.length<6" @click="Login" style="width: 100%;height: 60px;margin-top: 20px;font-size: 18px;letter-spacing:2px">立即登录</el-button>
              <div class="otherLoginType">
                <div class="loginByQQ"></div>
                <div class="loginByWX"></div>
                <div class="loginByWB"></div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="regbox">
          <div class="registerbox" v-if="flagOfRegOrLog=='reg'">
            <div class="box-container">
              <div class="box-title">快速注册</div>
              <el-input v-model="userIdReg" class="inp" placeholder="请输入手机号"></el-input>
              <el-input v-model="userPSWReg" style="margin-top: 20px" class="inp" placeholder="请输入密码" show-password=""></el-input>
              <el-button @click="Register" :loading="isRegisterLoading" :disabled="userPSWReg.length<6" type="primary" style="width: 100%;height: 60px;margin-top: 20px;font-size: 18px;letter-spacing:2px">立即注册</el-button>
              <div class="otherLoginType">
                <div class="loginByQQ"></div>
                <div class="loginByWX"></div>
                <div class="loginByWB"></div>
              </div>
            </div>
          </div>
        </transition>

        <div class="mask" :class="{register:flagOfRegOrLog=='reg',login:flagOfRegOrLog=='log'}">
          <div class="changetypebtn" @click="toggleType">{{btnData}}</div>
        </div>
        <transition name="fade-left">
          <div class="left-word" v-if="flagOfRegOrLog=='log'">
            <p>欢迎来到爱车快修在线商城</p>
            <p>专业的服务、一站式购齐</p>
            <p>你想要的，我都有</p>
            <p>快来注册吧</p>
          </div>
        </transition>
        <transition name="fade-right">
          <div class="right-word" v-if="flagOfRegOrLog=='reg'">
            <p>欢迎回来，最近过得还好吗？</p>
            <p>爱车快修汽配商城上新啦！</p>
            <p>你想要的，我都有</p>
            <p>快来登陆吧</p>
          </div>
        </transition>
              </div>
    </div>
  </div>
</template>

<script>
	export default{
		name:"logandreg",
    data:function () {
      return{
        btnData:"还没有账号？去注册！",//按钮内容
        flagOfRegOrLog:'log',//页面flag
        userId:'',//用户名
        userPSW:'',//密码
        userIdReg:'',//注册用户名
        userPSWReg:'',//注册密码
        isLoginLoading:false,//登陆等待
        isRegisterLoading:false//注册等待
      }
    },
    mounted(){
      if(this.$route.fullPath.indexOf("reg")!=-1){
        this.flagOfRegOrLog='reg'
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => vm.setRoute(from))
    },
    methods:{
      setRoute (route) {
        this.lastRoute=route;
      },
      Register(){
        let that = this;
        that.isRegisterLoading=true;
        //确认id不为空
        if(!that.userIdReg){
          that.$message({
            'type':'error',
            'message':'请输入账号',
            'duration':'5000',
            'customClass':'tips'
          });
          that.isRegisterLoading=false;
          return
        }
        that.__proto__.__proto__.axios.post("/Register",{'请求操作':'注册','userid':that.userIdReg,'userpsw':that.userPSWReg}).then(function(res){
          if(res.status==200){
            //确认成功注册，保存内容到本地
            that.isRegisterLoading=false;
            let storage=window.localStorage;
            storage.setItem('username',res.data);
            that.$store.commit('login');
            that.$router.push({path:that.lastRoute.path});
          }else{
            //其他意外情况，输出提示信息
            that.$message({
              'type':'error',
              'message':res.data,
              'duration':'5000',
              'customClass':'tips'
            });
            that.isRegisterLoading=false;
          }
        }).catch(function(err){
          //网络错误
          that.$message({
            'type':'error',
            'message':err,
            'duration':'5000',
            'customClass':'tips'
          });
          that.isRegisterLoading=false;
        })
      },
		  Login(){
		    let that = this;
		    that.isLoginLoading=true;
		    if(!that.userId){
		      that.$message({
            'type':'error',
            'message':'请输入账号',
            'duration':'5000',
            'customClass':'tips'
          });
          that.isLoginLoading=false;
		      return
		    }
        that.__proto__.__proto__.axios.post("/Login",{'请求操作':'登陆','userid':that.userId,'userpsw':that.userPSW}).then(function(res){
          if(res.status==200){
            that.isLoginLoading=false;
            let storage=window.localStorage;
            storage.setItem('username',res.data);
            that.$store.commit('login');
            that.$router.push({path:that.lastRoute.path});
          }else{
            that.$message({
              'type':'error',
              'message':res.data,
              'duration':'5000',
              'customClass':'tips'
            });
            that.isRegisterLoading=false;
          }
        }).catch(function(err){
          that.$message({
            'type':'error',
            'message':err,
            'duration':'5000',
            'customClass':'tips'
          });
          that.isLoginLoading=false;
        })
      },
      toggleType(){
        let that = this;
        this.btnData='';
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
  /deep/ .inp input{
    height: 50px!important;
    font-size: 18px;
    letter-spacing:2px
  }

  .otherLoginType{
    width: 100%;
    height: 60px;
    margin-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    .loginByQQ,.loginByWB,.loginByWX{
      min-width: 60px;
      height: 60px;
    }
    .loginByQQ{
      background: url("../../assets/QQ.png") no-repeat center;
      background-size: contain;
    }
    .loginByWX{
      background: url("../../assets/微信.png") no-repeat center;
      background-size: 90% 90%;
    }
    .loginByWB{
      background: url("../../assets/微博.png") no-repeat center;
      background-size: 90% 90%;
    }
  }
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
        width: 35%;
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
          &:hover{
            background: rgba(255,255,255,0.2);
          }
        }
      }
      .loginbox{
        width: 65%;
        height: 100%;
        right: 0;
        position: absolute;
        display: flex;
        align-content: center;
        .box-container{
          width: 60%;
          margin: 0 auto;
        }

        .box-title{
          height: 50px;
          line-height: 50px;
          font-size: 24px;
          margin-top: 25%;
          text-align: left;
          margin-bottom: 20px;
        }
      }
      .registerbox{
        width: 65%;
        height: 100%;
        left: 0;
        position: absolute;
        display: flex;
        align-content: center;
        .box-container{
          width: 60%;
          margin: 0 auto;
        }

        .box-title{
          height: 50px;
          line-height: 50px;
          font-size: 24px;
          margin-top: 25%;
          text-align: left;
          margin-bottom: 20px;
        }
      }
      .left-word{
        width: 35%;
        position: absolute;
        left: 0;
        font-size: 18px;
        color: #fff;
        top: 30%;
        & p:first-child{
          font-weight: bold;
          font-size: 22px;
        }
      }
      .right-word{
        width: 35%;
        position: absolute;
        left: 65.1%;
        font-size: 18px;
        color: #fff;
        top: 30%;
        & p:first-child{
          font-weight: bold;
          font-size: 22px;
        }
      }
      .register{
        left: 65.1%;
        animation: ani-mask 1s ease-in-out;
      }
      .login{
        left: 0;
        animation: ani-mask-back 1s ease-in-out;
      }
    }
  }
}
@keyframes ani-mask {
  0%{width: 35%;left: 0;}
  50%{width: 50%}
  100%{width: 35%;left: 65.1%;}
}
@keyframes ani-mask-back {
  0%{width: 35%;left: 65.1%;}
  50%{width: 50%}
  100%{width: 35%;left: 0;}
}

  .fade-left-enter,.fade-left-leave-to{
    opacity: 0;
    margin-left:-5%;
  }
  .fade-left-enter-to,.fade-left-leave{
    opacity: 1;
    margin-left: 0;
  }
  .fade-left-enter-active{
    transition: all 1s;
    transition-delay: .6s;
  }
  .fade-left-leave-active,.fade-right-leave-active{
    transition: all .5s;
  }
  .fade-right-enter,.fade-right-leave-to{
    opacity: 0;
    margin-left: 5%;
  }
  .fade-right-enter-to,.fade-right-leave{
    opacity: 1;
    margin-left: 0;
  }
  .fade-right-enter-active{
    transition: all 1s;
    transition-delay: .6s;
  }
  .logbox-enter,.logbox-leave-to{
    margin-right: 35%;
    opacity: 0;
  }
  .logbox-enter-to,.logbox-leave{
    margin-right:0;
    opacity: 1;
  }
  .logbox-enter-active,.logbox-leave-active,.regbox-enter-active,.regbox-leave-active{
    transition: all .8s;
  }
  .regbox-enter,.regbox-leave-to{
    margin-left: 35%;
    opacity: 0;
  }
  .regbox-enter-to,.regbox-leave{
    margin-left: 0;
    opacity: 1;
  }
</style>
