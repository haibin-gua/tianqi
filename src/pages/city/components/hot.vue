<template>
  <div calss="hot">
    <div class="hotcity">热门城市</div>
    <div class="hotcity-list-wrapper">
      <div class="hotcity-list">
        北京
      </div>
      <div class="hotcity-list">
        北京
      </div>
      <div class="hotcity-list">
        北京
      </div>
      <div class="hotcity-list">
        北京
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'CityHot'
}
</script>

<style scoped>
  .hotcity{
    width:100%;
    height:.6rem;
    background-color: #CACACA;
    line-height: .6rem;
    padding-left:.2rem;
  }
  .hotcity-list-wrapper{
    width:100%;
    height:3rem;
    background-color: pink;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
  .hotcity-list{
    width:2.4rem;
    height:1rem;
    font-size: 20px;
    background-color: green;
  }
</style>
