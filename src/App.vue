<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
	margin:0;
	padding:0;
}
    html, body {
      position: relative;
      /*height: 100%;*/
    }
    body {
      /*background: #000;*/
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 475px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
    }
   /* .gallery-top {
      height: 80%;
      width: 100%;
    }*/
    .gallery-thumbs {
      height: 114px;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-thumb-active {
      opacity: 1;
    }
      .gallery-thumbs .swiper-slide-thumb-active .yuan{
      background-color: #2283e2;
      color:#fff;
    }
      .gallery-thumbs .swiper-slide-thumb-active .zhuangtai{
      color:#2283e2;
    }
</style>
