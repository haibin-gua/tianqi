<template>
   <div class="foresee">
    <div class="foresee-wrapper" v-for="item in dateList" :key="item.index">
      <div class="foresee-left">{{item.date}}</div>
      <div class="foressee-center">{{item.cond_txt_d}}/{{item.cond_txt_n}}</div>
      <div class="foresee-right">{{item.tmp_max}}/{{item.tmp_min}}</div>
    </div>
   </div>
</template>

<script>
export default{
  name:'HomeForesee',
  props:{
    dateList:Array
  }
}
</script>

<style scoped>
  .foresee{
    width:98%;
    height:4.8rem;
    margin:0 auto;
  }
  .foresee-wrapper{
    font-size: 18px;
    border-top:1px solid #CACACA;
    line-height: .8rem;
    display: flex;
    justify-content:space-between;
  }
  .foresee-left{
    width:2.1rem;
  }
  .foressee-center{
    width:1.6rem;
  }
  .foresee-right{
    width:1rem;
  }
</style>
