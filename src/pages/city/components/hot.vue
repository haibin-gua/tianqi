<template>
  <div calss="hot">
    <div class="hotcity">热门城市</div>
      <div class="hotcityList">
        <div class="hotcityList-wrapper" v-for="item in hotList" :key="item.cid" @click="cityclick(item.location)">
          <div class="button">{{item.location}}</div>
        </div>
      </div>
  </div>
</template>

<script>
export default{
  name:'CityHot',
  props:{
    hotList:Array
  },
  methods:{
    cityclick(city){   //获取到了所点击的城市
      this.$store.commit('changecity',city)       //会将city传递给vuex的actions里面的changecity方法
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .hotcity{
    background-color: #CACACA;
    line-height: .6rem;
    padding-left:.2rem;
  }
  .hotcityList{
    padding:.1rem;
    overflow: hidden;
  }
  .hotcityList-wrapper{
    float:left;
    width:25%;
  }
  .button{
    margin:.1rem .1rem;
    padding:.1rem 0;
    text-align: center;
    border: .02rem solid #ccc;
    border-radius: .2rem;
  }
</style>
