<template>
  <div class="header">
    <router-link to="/">
    <div class="iconfont header-left">&#xe608;</div>
    </router-link>
    <div class="header-input">
      <input v-model="keyword" type="text" placeholder="请搜索城市">
    </div>
    <div class="search" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="cityclick(item.name)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
  name:'CityHeader',
  props:{
    citiesList:Object           //接受父组件传过来的值，即城市
  },
  data () {
    return{
      keyword:''  ,//用v-model与搜索框做一个双向绑定
      list:[],
      timer:null
    }
  },
  watch:{
    keyword () {       //监听keyword的改变
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(!this.keyword){
        this.list = []
        return
      }
      this.timer = setTimeout(()=>{
        const result =[]
        for(let i in this.citiesList){
          this.citiesList[i].forEach((value)=>{
            if(value.spell.indexOf(this.keyword)>-1||value.name.indexOf(this.keyword)>-1){
              result.push(value)
            }
          })
        }
        this.list = result
      },100)
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.search,{
      click:true
    })
  },
  methods:{
    cityclick(city){   //获取到了所点击的城市
      this.$store.commit('changecity',city)       //会将city传递给vuex的actions里面的changecity方法
      this.$router.push('/')
    }
  },
}
</script>

<style scoped>
  .header{
    width:100%;
    height:1rem;
    background-color: aquamarine;
  }
  .header-left{
    float:left;
    font-size:30px;
    line-height: 1rem;
    margin-left:.2rem;
  }
  .header-input{
    float:left;
    width:5.5rem;
    height:100%;
    line-height:1rem;
    margin-left:.4rem;

  }
 .header-input input{
   width:5rem;
   height:.7rem;
   border-radius: 6px;
 }
 .header-right{
   float:right;
   line-height:1rem;
   margin-right:.2rem;
   font-size: 30px;
 }
 .search{
   z-index: 1;
   overflow: hidden;
   position: absolute;
   background-color: #eee;
   top:1rem;
   left:0;
   right:0;
   bottom:0
 }
 .search-item{
   line-height: .6rem;
   padding-left:.2rem;
   color:#666;
   background-color: #fff;
 }
</style>
