<template>
  <div class="all">
   <div class="all-wrapper" v-for="(item,key) in citiesList" :key="key">
    <div class="letter">{{key}}</div>
    <div class="city" v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</div>
   </div>
  </div>
</template>

<script>
export default{
  name:'CityAll',
  props:{
    citiesList:Object
  }
}
</script>

<style scoped>
  .letter{
    width:100%;
    height:.6rem;
    background-color: #CACACA;
    line-height: .6rem;
    padding-left:.2rem;
  }
  .city{
    width:100%;
    height:.6rem;
    background-color: white;
    line-height: .6rem;
    padding-left:.2rem;
    font-size: 17px;
    border-bottom: 1px solid #CACACA;
  }
</style>
