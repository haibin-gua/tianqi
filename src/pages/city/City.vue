<template>
  <div>
    <city-header></city-header>
    <city-hot></city-hot>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CityHot from './components/hot.vue'
export default{
  name:'City',
  components:{
    CityHeader,
    CityHot
  }
}
</script>

<style scoped>
</style>
