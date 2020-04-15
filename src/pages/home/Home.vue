<template>
  <div>
    <img src="../../assets/images/bj.jpg">
    <home-header></home-header>
    <home-Nav></home-Nav>
    <home-city></home-city>
    <home-realtime></home-realtime>
    <home-foresee></home-foresee>
    <home-air></home-air>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeNav from './components/Nav.vue'
import HomeCity from './components/City.vue'
import HomeRealtime from './components/Realtime.vue'
import HomeForesee from './components/Foresee.vue'
import HomeAir from './components/Air.vue'
import HomeFooter from './components/Footer.vue'
export default{
  name:'Home',
  components:{
    HomeHeader,
    HomeNav,
    HomeCity,
    HomeRealtime,
    HomeForesee,
    HomeAir,
    HomeFooter
  }
}
</script>

<style scoped>
  img{
    width:7.5rem;
    height:13.34rem;
    position: fixed;
    z-index: -1;
  }
</style>
