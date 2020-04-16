<template>
  <div class="all">
   <div class="all-wrapper" v-for="item in allcityList" :key="item.id">
    <div class="letter">{{item.letter}}</div>
    <div class="city">{{item.city}}</div>
   </div>
  </div>
</template>

<script>
export default{
  name:'CityAll',
  data(){
    return{
      allcityList:[{
        id:"0001",
        letter:'A',
        city:'澳门'
      },{
        id:"0002",
        letter:'A',
        city:'澳门'
      },{
        id:"0003",
        letter:'A',
        city:'澳门'
      }]
    }
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
