<template>
  <div class="Header">
    <router-link to="/city">
      <div class="Header-left">
        <span class="iconfont">&#xe76a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default{
  name:'HomeHeader'
}
</script>

<style scoped>
  .Header{
    width:7.5rem;
    height:1rem;
  }
  .Header-left{
    float:left;
    line-height: 1rem;
    margin-left:10px;
    color:white;
  }
  .iconfont{
    font-size:40px;
  }
</style>
