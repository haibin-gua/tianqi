<template>
  <div class="nav">
    <h2>{{this.tmp}}℃</h2>
    <h5>{{this.tmpMax}}℃/{{this.tmpMin}}℃</h5>
    <h5><img :src="condCode"></h5>
   <h5>空气{{this.Qlty}}</h5>
  </div>
</template>

<script>
export default{
  name:'HomeNav',
  props:{
    tmp:String,
    tmpMax:String,
    tmpMin:String,
    condCode:String,
    Qlty:String
    }
  }
</script>

<style scoped>
  .nav{
    width:100%;
    height:3rem;
    margin-top:.2rem;
    text-align: center;
  }
  .nav h2{
    font-size:50px;
    padding-top:.1rem;
  }
  .nav h5{
    font-size: 20px;
    padding-top:.1rem;
  }
  img{
    width:.7rem;
    height:.7rem;
  }
</style>
