<template>
  <div id="app">
    <router-view class="main"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
     beforeCreate(){
       var head = document.getElementsByTagName('HEAD').item(0);
        var style = document.createElement('link');
        style.href = 'https://at.alicdn.com/t/font_500879_eeiqaxqijagzxgvi.css';
        style.rel = 'stylesheet';
        style.type = 'text/css';
        head.appendChild(style);
     } 
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "assets/style/index.scss";

  #app {
    height: 100%;
  }

  .main {
    background: #ededed;;
  }
</style>
