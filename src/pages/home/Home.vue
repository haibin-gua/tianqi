<template>
  <div>
    <img src="../../assets/images/bj.jpg">
    <home-header></home-header>
    <home-Nav></home-Nav>
    <home-city></home-city>
    <home-realtime></home-realtime>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeNav from './components/Nav.vue'
import HomeCity from './components/City.vue'
import HomeRealtime from './components/Realtime.vue'
export default{
  name:'Home',
  components:{
    HomeHeader,
    HomeNav,
    HomeCity,
    HomeRealtime
  }
}
</script>

<style scoped>
  img{
    position: absolute;
    z-index:-1;
    width:7.5rem;
    height:13.34rem;
  }
</style>
