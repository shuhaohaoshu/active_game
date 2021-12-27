<template>
  <div class="koi_lucky">
      <div class="fish">
          <div class="left"></div>
          <div class="right"></div>
      </div>
      <div class="people">
          <div class="content">
              <div class="item" v-for="(item,index) in users" :key="index" :style="'transform:rotateY('+item.deg+'deg) translate3d('+item.x+'px,'+item.y+'px,'+item.z+'px)'">
                <div class="name">用户{{index+1}}</div>
                <img src="../assets/img/def-headImg.png" alt="" class="img">
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'koi_lucky',
    data(){
        return {
            users:[],
        }
    },
    created(){
        for(let i = 0; i<90; i++){
            this.users.push({
                deg:i*12,
                x:0,
                y:parseInt(i/30)*125,
                z:670,
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes rotate {
    0% {
        transform: rotateY(0) rotateZ(0deg);
    }

    25% {
        transform: rotateY(180deg) rotateZ(0deg);
    }

    50% {
        transform: rotateY(360deg) rotateZ(0deg);
    }

    75% {
        transform: rotateY(540deg) rotateZ(0deg);
    }

    100% {
        transform: rotateY(720deg) rotateZ(0deg);
    }
}
@keyframes fish_move{
    0.1%{background-position:-1px -1px}
    8.33%{background-position:-2711px -1px}
    16.66%{background-position:-3253px -1px}
    24.99%{background-position:-1px -603px}
    33.32%{background-position:-543px -603px}
    41.65%{background-position:-1085px -603px}
    49.98%{background-position:-1627px -603px}
    58.31%{background-position:-2169px -603px}
    66.64%{background-position:-2711px -603px}
    74.97%{background-position:-543px -1px}
    83.30%{background-position:-1085px -1px}
    91.63%{background-position:-1627px -1px}
    100%{background-position:-2169px -1px}
}
.koi_lucky{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #e1744a;
            transform-style: preserve-3d;
            perspective:100vw;
    .fish{
        display: flex;
        width: 1080px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-50%,0);
        .left,.right{
            flex: 1;
            height: 670px;
            background-image: url('../assets/img/role.png');
            background-repeat: no-repeat;
            transform: scale(0.9,0.9);
            animation-name:fish_move;
            animation-duration:1s;
            animation-timing-function:steps(1,start);
            animation-iteration-count:infinite;
            animation-fill-mode:forwards;
        }
        .right{
            transform: rotateY(180deg) scale(0.9,0.9);
        }
    }
    .people{
        width: 1080px;
        height: 670px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-50%,0);
        .content{
            position: relative;
            width: 100%;
            height: 100%;
            // transform:rotateY(2deg);
            transform-style: preserve-3d;
            perspective:3000px;
            // animation: rotate 20s linear infinite;
            .item{
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100px;
                text-align: center;
                .name{
                    color: #fff;
                }
                .img{
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}
</style>