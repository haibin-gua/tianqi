<template>
   <div class="foresee">
    <div class="foresee-wrapper" v-for="(item,index) in foreseeList" :key="item.id">
      <div class="foresee-left">{{item.time}}</div>
      <div class="iconfont" v-html="item.icon"></div>
      <div class="foresee-right">{{item.wendu}}</div>
    </div>
   </div>
</template>

<script>
export default{
  name:'HomeForesee',
  data(){
    return{
      foreseeList:[{
        id:'0001',
        time:'4月16日',
        icon:'&#xe656',
        wendu:'28℃/16℃'
      },{
        id:'0002',
        time:'4月16日',
        icon:'&#xe656',
        wendu:'28℃/16℃'
      },{
        id:'0003',
        time:'4月16日',
        icon:'&#xe656',
        wendu:'28℃/16℃'
      },{
        id:'0004',
        time:'4月16日',
        icon:'&#xe656',
        wendu:'28℃/16℃'
      },{
        id:'0005',
        time:'4月16日',
        icon:'&#xe656',
        wendu:'28℃/16℃'
      },{
        id:'0006',
        time:'4月16日',
        icon:'&#xe656',
        wendu:'28℃/16℃'
      }]
    }
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
</style>
