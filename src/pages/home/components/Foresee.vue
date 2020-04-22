<template>
   <div class="foresee">
    <div class="foresee-wrapper border-bottom" v-for="item in dateList" :key="item.index">
      <div class="foresee-left">{{item.date}}</div>
      <div class="foressee-center"><img :src="imgUrl">/<img :src="imgUrl1"></div>
      <div class="foresee-right">{{item.tmp_max}}/{{item.tmp_min}}</div>
    </div>
   </div>
</template>

<script>
export default{
  name:'HomeForesee',
  props:{
    dateList:Array
  },
  computed:{
    imgUrl:function(){
      return '../../static/cond-icon-heweather/'+this.dateList[0].cond_code_d+'.png'
    },
    imgUrl1:function(){
      return '../../static/cond-icon-heweather/'+this.dateList[0].cond_code_n+'.png'
    }
  }
}
</script>

<style scoped>
  .foresee{
    width:98%;
    height:5.6rem;
    margin:0 auto;
    margin-bottom: .4rem;
    margin-top:.4rem;
  }
  .foresee-wrapper{
    font-size: 18px;
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
  img{
    width:.7rem;
    height:.7rem;
  }
</style>
