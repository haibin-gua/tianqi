<template>
  <div class="nav">
    <h2>21℃</h2>
    <h5>24℃/11℃</h5>
   <h5>小雨</h5>
   <h5>空气优</h5>
  </div>
</template>

<script>
export default{
  name:'HomeNav'
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
</style>
