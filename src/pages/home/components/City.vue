<template>
  <div class="city">
  <p>{{this.city}}市<span class="iconfont">&#xe656;</span></p>
  </div>
</template>

<script>
export default{
  name:'HomeCity',
  props:{
    city:String
  }
}
</script>

<style scoped>
  .city{
    width:100%;
    height:.7rem;
    text-align: center;
  }
  .city p{
    font-size: 30px;
  }
  .city p>span{
    font-size: 30px;
  }
</style>
