<template>
  <div class="air">
    <div class="air-quality-wrapper">
      <div class="air-quality">空气质量</div>
      <div class="air-quality-bottom">{{this.Qlty1}}</div>
    </div>
    <div class="air-quality-right" style="border-left: 2px solid gray;">
      <ul>
        <li>PM10:<span> {{this.Pm10}}</span></li>
        <li>PM2.5:<span> {{this.Pm25}}</span></li>
        <li>NO2:<span> {{this.No2}}</span></li>
      </ul>
    </div>
    <div class="air-quality-right">
      <ul>
        <li>SO2:<span> {{this.So2}}</span></li>
        <li>O3:<span> {{this.O3}}</span></li>
        <li>CO:<span> {{this.Co}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  name:'HomeAir',
  props:{
    Qlty1:String,
    Pm10:String,
    Pm25:String,
    No2:String,
    So2:String,
    Co:String,
    O3:String
  }
}
</script>

<style scoped>
  .air{
    width:98%;
    height:2rem;
    margin: 0 auto;
  }
  .air-quality{
    margin-top:.1rem;
    margin-left:.1rem;
    font-size: 18px;
    color: white;
  }
  .air-quality-wrapper{
    float:left;
  }
  .air-quality-bottom{
    margin-top:.4rem;
    margin-left:.3rem;
    font-size:40px;
    color:white;
  }
  .air-quality-right{
    float: right;
    margin-top:.1rem;
  }
  .air-quality-right ul li{
    font-size: 17px;
    padding:.1rem;
    color: antiquewhite;
  }
  .air-quality-right ul li span{
    color:lightgray;
  }
</style>
