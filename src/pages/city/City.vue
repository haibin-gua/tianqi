<template>
  <div>
    <city-header></city-header>
    <city-hot></city-hot>
    <city-sort></city-sort>
    <city-all></city-all>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CityHot from './components/hot.vue'
import CitySort from './components/Sort.vue'
import CityAll from './components/All.vue'
export default{
  name:'City',
  components:{
    CityHeader,
    CityHot,
    CitySort,
    CityAll
  }
}
</script>

<style scoped>
</style>
