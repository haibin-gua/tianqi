<template>
  <div class="header">
    <router-link to="/">
    <div class="iconfont header-left">&#xe608;</div>
    </router-link>
    <div class="header-input">
      <input type="text" placeholder="请搜索城市">
    </div>
    <div class="iconfont header-right">&#xe782;</div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
  .header{
    width:100%;
    height:1rem;
    background-color: aquamarine;
  }
  .header-left{
    float:left;
    font-size:30px;
    line-height: 1rem;
    margin-left:.2rem;
  }
  .header-input{
    float:left;
    width:5.5rem;
    height:100%;
    line-height:1rem;
    margin-left:.4rem;

  }
 .header-input input{
   width:5rem;
   height:.7rem;
   border-radius: 6px;
 }
 .header-right{
   float:right;
   line-height:1rem;
   margin-right:.2rem;
   font-size: 30px;
 }
</style>
