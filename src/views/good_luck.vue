<template>
  <div class="sport_active" ref="sport_active">
    <div class="bg_container">
      <div class="bg_main">
        <div class="top_bg">
          <img src="../assets/img/bg1.jpg" class="bg1">
          <img src="../assets/img/bg2.png" class="bg2">
          <div>
            <img src="../assets/img/bg3.png" class="bg3">
            <img src="../assets/img/bg3.png" class="bg3">
          </div>
        </div>
        <div class="bottom_bg">
          <img src="../assets/img/track.jpg" class="track_img">
        </div>
      </div>
      <div class="bg_main">
        <div class="top_bg">
          <img src="../assets/img/bg1.jpg" class="bg1">
          <img src="../assets/img/bg2.png" class="bg2">
          <div>
            <img src="../assets/img/bg3.png" class="bg3">
            <img src="../assets/img/bg3.png" class="bg3">
          </div>
        </div>
        <div class="bottom_bg">
          <img src="../assets/img/track.jpg" class="track_img">
        </div>
      </div>
    </div>
    <div class="people_contanner">
      <div class="people">
        <div class="man_img" v-for="(item,index) in runData" :key="index" :style="'transform: translateX('+item+'px)'">
          <div class="content">
            <div class="top">
              <div class="name">{{index+1}}号选手</div>
              <img src="../assets/img/userDefault.png" alt="" class="user_img">
            </div>
            <img src="../assets/img/man.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="flower">
      <div class="content">
        <div class="item">
          <img src="../assets/img/bg4.png" class="bg4">
          <img src="../assets/img/bg4.png" class="bg4">
        </div>
        <div class="item">
          <img src="../assets/img/bg4.png" class="bg4">
          <img src="../assets/img/bg4.png" class="bg4">
        </div>
      </div>
    </div>
    <div class="weight_number" v-if="start&&list.length==0">
      <div class="content" :class="{scale_time:time_total!=0&&list.length==0}">{{time_total==0?'预备':time_total}}</div>
    </div>
    <div class="btns">
      <div class="item" @click="reset" v-if="list.length!=0">重置</div>
      <div class="item" @click="startRun" v-if="!go">{{start?'开始':'准备'}}</div>
    </div>
    <div class="list" v-if="list.length!=0">
      <div class="item" v-for="(item,index) in list" :key="index">
        <img src="../assets/img/userDefault.png" alt="" class="user_img">{{item.index+1}}号选手---第{{index+1}}名
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      windowWidth:0,
      runData:[],
      man_img_width:152,
      interval:'',
      start:false,
      time:300,
      min:50,
      max:300,
      go:false,
      real_time:0,
      time_total:0,
      list:[],
    }
  },
  components: {
    
  },
  mounted(){
    this.runData = new Array(10).fill(-152);
    this.windowWidth = this.$refs.sport_active.clientWidth;
    document.onkeydown = (e)=>{
      if(e.keyCode==32&&this.time_total!=0){
        this.$set(this.runData,0,this.runData[0]+20);
      }
    }
  },
  methods:{
    reset(){
      clearInterval(this.interval);
      window.location.reload();
    },
    startRun(){
      if(this.start){
        this.runLoop();
      }else{
        this.runData = new Array(10).fill(0);
        this.start = true;
      }
    },
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    runLoop(){
      this.go = true;
      this.interval = setInterval(()=>{
        if(this.real_time==1){
          clearInterval(this.interval);
          this.time = 1000;
          // this.min = this.man_img_width*2;
          // this.max = this.windowWidth-this.man_img_width*2;
          this.min = 320;
          this.max = 1280;
          this.real_time++;
          this.runLoop();
        }else{
          this.real_time++;
          this.time_total++;
          // let run_idx = Math.floor(Math.random()*this.runData.length);
          for(let i = 0; i<this.runData.length; i++){
            let run_item = this.random(this.min,this.max);
            // let run_item = this.runData[i];
              if(this.time_total==10){
                clearInterval(this.interval);
                setTimeout(()=>{
                  this.list = JSON.parse(JSON.stringify(this.runData.map((item,index)=>{
                    return {
                      item:item,
                      index:index,
                    }
                  }))).sort((a,b)=>{ return b.item-a.item });
                  this.runData = new Array(10).fill(this.windowWidth);
                },500);
                break;
              }else{
                this.$set(this.runData,i,run_item);
              }
          }
        }
      },this.time)
    }
  }
}
</script>
<style lang="scss" scoped>
  @keyframes left_to_right { 
      100%{ 
        transform: translateX(-100%);
      } 
  }
  @keyframes scale_time{
      0%{
      transform: scale(1);  /*开始为原始大小*/
      }
      100%{
          transform: scale(1.6);
      }
  }
  @keyframes turn{
    0%{transform:rotateY(0deg);}
    25%{transform:rotateY(90deg);}
    50%{transform:rotateY(180deg);}
    75%{transform:rotateY(270deg);}
    100%{transform:rotateY(360deg);}
  }
  .sport_active{
    overflow: hidden;
    position: relative;
    height: 100vh;
    .bg_container{
      position: relative;
      width: 100%;
      height: 100%;
      .bg_main{
        width: 100%;
        height: 100%;
        position: absolute;
        animation: left_to_right 7s infinite linear;
        &:nth-child(1){
          left: 0;
        }
        &:nth-child(2){
          left: 100%;
        } 
      }
    }
    .top_bg{
      position: relative;
      height: 330px;
      .bg1{
        z-index: 1;
        width: 100%;
        position: absolute;
        height: 100%;
      }
      .bg2{
        z-index: 2;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: auto;
      }
      .bg3{
        z-index: 3;
        position: absolute;
        bottom: 0;
        width: 50%;
        height: auto;
        &:nth-child(1){
          left: 0;
        }
        &:nth-child(2){
          left: 50%;
        }
      }
    }
    .bottom_bg{
      position: relative;
      height: calc(100vh - 330px );
      .track_img{
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .people_contanner{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: calc(100vh - 330px );
      .people{
        position: relative;
        height: 100%;
        .man_img{
          z-index: 4;
          position: absolute;
          transition:all 0.5s ease;
          .content{
            position: relative;
            .top{
              width: 100%;
              text-align: right;
              position: absolute;
              top: -70px;
              .name{
                margin-right: 30px;
                margin-bottom: 10px;
                color: #fff;
              }
              .user_img{
                margin-right: 30px;
                width: 50px;
                height: auto;
                animation:turn 1s linear infinite;
              }
            }
          }
          &:nth-child(1){
            top: -15%;
          }
          &:nth-child(2){
            top: -7%;
          }
          &:nth-child(3){
            top: 2%;
          }
          &:nth-child(4){
            top: 11%;
          }
          &:nth-child(5){
            top: 19%;
          }
          &:nth-child(6){
            top: 28%;
          }
          &:nth-child(7){
            top: 36%;
          }
          &:nth-child(8){
            top: 44%;
          }
          &:nth-child(9){
            top: 53%;
          }
          &:nth-child(10){
            top: 65%;
          }
        }
      }
    }
    .flower{
      position: absolute;
      z-index: 5;
      bottom: 0;
      width: 100%;
      height: 100px;
      .content{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .item{
          position: absolute;
          width: 100%;
          height: 100%;
          animation: left_to_right 7s infinite linear;
          &:nth-child(1){
            left: 0;
          }
          &:nth-child(2){
            left: 100%;
          }
          .bg4{
            z-index: 5;
            position: absolute;
            bottom: 0;
            width: 50%;
            height: 100%;
            &:nth-child(1){
              left: 0;
            }
            &:nth-child(2){
              left: 50%;
            }
          }
        }
      }
    }
    .weight_number{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      z-index: 20;
      .content{
        position: relative;
        background-color: rgba($color: #000, $alpha: 0.3);
        width: 300px;
        height: 300px;
        color: #fff;
        font-size: 120px;
        text-align: center;
        line-height: 300px;
        border-radius: 50%;
      }
      .scale_time{
        animation:scale_time 1s infinite;
      }
    }
    .btns{
      position: absolute;
      bottom: 50px;
      right: 50px;
      display: flex;
      .item{
        background-color: rgba($color: #000000, $alpha: 0.5);
        color: #fff;
        z-index: 10;
        width: 80px;
        height: 80px;
        border-radius: 5px;
        text-align: center;
        line-height: 80px;
        font-size: 22px;
        cursor: pointer;
        margin-left: 15px;
      }
    }
    .list{
      position: absolute;
      background-color: rgba($color: #000, $alpha: 0.5);
      z-index: 30;
      border-radius: 20px;
      width: 500px;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%,-50%,0);
      padding: 20px;
      color: #fff;
      .item{
        border-bottom: 1px solid #fff;
        padding: 5px 0;
        display: flex;
        align-items: center;
        .user_img{
          margin-right: 15px;
          width: 40px;
          height: auto;
        }
        &:last-child{
          border-bottom: 0;
        }
      }
    }
  }
</style>