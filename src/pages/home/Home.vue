<template>
  <div>
    <img src="../../assets/images/bj.jpg">
    <home-header></home-header>
    <home-Nav :tmp="tmp" :tmpMax="tmpMax" :tmpMin="tmpMin" :condCode="condCode" :Qlty="Qlty"></home-Nav>
    <home-city></home-city>
    <home-realtime :realtimeList="realtimeList"></home-realtime>
    <home-foresee :dateList="dateList"></home-foresee>
    <home-air :Qlty1="Qlty1" :Pm10="Pm10" :Pm25="Pm25" :No2="No2" :So2="So2" :Co="Co" :O3="O3"></home-air>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeNav from './components/Nav.vue'
import HomeCity from './components/City.vue'
import HomeRealtime from './components/Realtime.vue'
import HomeForesee from './components/Foresee.vue'
import HomeAir from './components/Air.vue'
import HomeFooter from './components/Footer.vue'
import axios from 'axios'
export default{
  name:'Home',
  components:{
    HomeHeader,
    HomeNav,
    HomeCity,
    HomeRealtime,
    HomeForesee,
    HomeAir,
    HomeFooter
  },
  data(){
    return{
      lastcity:'',
      tmp:'',
      tmpMax:'',
      tmpMin:'',
      condCode:'',
      Qlty:'',
      dateList:[],
      Qlty1:'',
      Pm10:'',
      Pm25:'',
      No2:'',
      So2:'',
      Co:'',
      O3:'',
      realtimeList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('https://free-api.heweather.net/s6/weather/now?key=fb3c34c934c646cab19756e14b2ef479&location='+this.$store.state.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
        this.tmp = res.data.HeWeather6['0'].now.tmp
        this.condCode = '../../static/cond-icon-heweather/'+res.data.HeWeather6['0'].now.cond_code+'.png'
    },
    getHomeInfo1(){
      axios.get('https://free-api.heweather.net/s6/weather/forecast?key=fb3c34c934c646cab19756e14b2ef479&location='+this.$store.state.city)
        .then(this.getHomeInfo1Succ)
    },
    getHomeInfo1Succ(res){
        this.tmpMax = res.data.HeWeather6['0'].daily_forecast['0'].tmp_max
        this.tmpMin = res.data.HeWeather6['0'].daily_forecast['0'].tmp_min
        this.dateList = res.data.HeWeather6['0'].daily_forecast
    },
    getHomeInfo2(){
      axios.get('https://free-api.heweather.net/s6/air/now?key=fb3c34c934c646cab19756e14b2ef479&location='+this.$store.state.city)
        .then(this.getHomeInfo2Succ)
    },
    getHomeInfo2Succ(res){
      this.Qlty = res.data.HeWeather6['0'].air_now_city.qlty
    },
    getHomeInfo3(){
      axios.get('https://free-api.heweather.net/s6/air/now?key=fb3c34c934c646cab19756e14b2ef479&location='+this.$store.state.city)
        .then(this.getHomeInfo3Succ)
    },
    getHomeInfo3Succ(res){
      this.Qlty1 = res.data.HeWeather6['0'].air_now_city.qlty
      this.Pm10 = res.data.HeWeather6['0'].air_now_city.pm10
      this.Pm25 = res.data.HeWeather6['0'].air_now_city.pm25
      this.No2 = res.data.HeWeather6['0'].air_now_city.no2
      this.So2 = res.data.HeWeather6['0'].air_now_city.so2
      this.Co = res.data.HeWeather6['0'].air_now_city.co
      this.O3 = res.data.HeWeather6['0'].air_now_city.o3
    },
    getHomeInfo4(){
      axios.get('https://free-api.heweather.net/s6/weather/hourly?key=fb3c34c934c646cab19756e14b2ef479&location='+this.$store.state.city)
          .then(this.getHomeInfo4Succ)
    },
    getHomeInfo4Succ(res){
      this.realtimeList = res.data.HeWeather6['0'].hourly
    }
  },
  mounted(){
    this.lastcity = this.$store.state.city
    this.getHomeInfo()
    this.getHomeInfo1()
    this.getHomeInfo2()
    this.getHomeInfo3()
    this.getHomeInfo4()
  },
  activated(){
    if(this.lastcity !== this.$store.state.city){   //重新挂载后city如果不等于所选城市
      this.lastcity = this.$store.state.city       //让lastcity等于所选城市
      this.getHomeInfo()                        //将所有ajax请求重新请求一遍
      this.getHomeInfo1()
      this.getHomeInfo2()
      this.getHomeInfo3()
      this.getHomeInfo4()
    }
  }
}
</script>

<style scoped>
  img{
    width:100%;
    height:13.34rem;
    position: fixed;
    z-index: -1;
  }
</style>
