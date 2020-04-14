<template>
  <div class="realtime">
    <swiper>
       <swiper-slide v-for="(page,index) in pages" :key="page">
        <div class="realtime-list-wrapper">
        <div class="realtime-list" v-for="item in page" :key="item.id">
          <p>{{item.time}}</p>
          <p>{{item.sl}}</p>
          <p><span class="iconfont" v-html="item.gl"></span></p>
          <p>{{item.wendu}}</p>
        </div>
        </div>
       </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default{
  name:'Realtime',
  data(){
    return{
      RealtimeList:[{
        id:'0001',
        time:'8:00',
        sl:'100%',
        gl:'&#xe656',
        wendu:'19℃'
      },{
        id:'0002',
        time:'8:00',
        sl:'100%',
        gl:'&#xe656',
        wendu:'19℃'
      },{
        id:'0003',
        time:'8:00',
        sl:'100%',
        gl:'&#xe656',
        wendu:'19℃'
      },{
        id:'0004',
        time:'8:00',
        sl:'100%',
        gl:'&#xe656',
        wendu:'19℃'
      },{
        id:'0005',
        time:'8:00',
        sl:'100%',
        gl:'&#xe656',
        wendu:'19℃'
      },{
        id:'0006',
        time:'8:00',
        sl:'100%',
        gl:'&#xe656',
        wendu:'19℃'
      },{
        id:'0007',
        time:'8:00',
        sl:'100%',
        gl:'&#xe656',
        wendu:'19℃'
      },{
        id:'0008',
        time:'8:00',
        sl:'100%',
        gl:'&#xe656',
        wendu:'19℃'
      },{
        id:'0009',
        time:'8:00',
        sl:'100%',
        gl:'&#xe656',
        wendu:'19℃'
      }]
    }
  },
  computed:{
    pages(){
      const pages = []
      this.RealtimeList.forEach((item,index)=>{
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
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
