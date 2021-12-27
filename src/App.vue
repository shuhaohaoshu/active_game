<template>
  <div id="app">
    <div class="app_tab">
      <router-link to="/good_luck">吉祥如意</router-link>
      <router-link to="/koi_lucky_draw">锦鲤抽奖</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
.app_tab{
  position: fixed;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 999;
  display: flex;
  left: 50px;
  top: 50px;
  a{
    color: #fff;
    text-decoration: none;
    padding: 20px;
  }
  .router-link-active{
    background-color: rgba($color: #ef7430, $alpha: 0.5);
  }
}
</style>