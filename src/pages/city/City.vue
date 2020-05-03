<template>
  <div>
    <city-header :citiesList="citiesList"></city-header>
    <city-hot :hotList="hotList"></city-hot>
    <city-sort @change="letterchange"></city-sort>
    <city-all :citiesList="citiesList" :letter="letter"></city-all>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CityHot from './components/hot.vue'
import CitySort from './components/Sort.vue'
import CityAll from './components/All.vue'
import axios from 'axios'
export default{
  name:'City',
  data(){
    return{
      hotList:[],
      citiesList:{},
      letter:''
    }
  },
  components:{
    CityHeader,
    CityHot,
    CitySort,
    CityAll
  },
  methods:{
    getCityInfo(){
      axios.get('https://search.heweather.net/top?group=cn&number=4&key=fb3c34c934c646cab19756e14b2ef479')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res){
        this.hotList = res.data.HeWeather6['0'].basic
    },
    getCityInfo1(){
      axios.get('static/mock/city.json')
        .then(this.getCityInfo1Succ)
    },
    getCityInfo1Succ(res){
      this.citiesList = res.data.data.cities
    },
    letterchange (letter) {       //接受外部传递过来的内容
      this.letter = letter          //需要传递出去的值为接受到的值
    }
  },
  mounted(){
    this.getCityInfo()
    this.getCityInfo1()
    }
}
</script>

<style scoped>
</style>
