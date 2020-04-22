<template>
  <div class="realtime">
        <div class="realtime-list-wrapper">
        <div class="realtime-list"  v-for="item in realtimeList" :key="item.time">
          <p>{{$moment(item.time).format('H:mm')}}</p>  <!--moment插件进行时间格式化-->
          <p>{{item.pop}}%</p>
          <p>{{item.cond_txt}}</p>
          <p>{{item.tmp}}℃</p>
        </div>
        </div>
  </div>
</template>

<script>
export default{
  name:'Realtime',
  props:{
    realtimeList:Array
    }
  }
</script>

<style scoped>
  .realtime{
    width:100%;
    height:2rem;
  }
  .realtime-list-wrapper{
      display: flex;
      justify-content: space-between;
  }
  .realtime-list{
    height:100%;
    width:.9rem;
  }
  .realtime-list p{
    font-size:15px;
    text-align: center;
    padding:.1rem;
    color:white;
  }
</style>
