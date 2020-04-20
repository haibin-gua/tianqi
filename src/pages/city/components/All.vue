<template>
    <div class="all" ref="wrapper">
      <div>
     <div class="area" v-for="(item,key) in citiesList" :key="key" :ref="key">
       <div class="title border-bottom">{{key}}</div>
       <div class="item-list">
         <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
       </div>
     </div>
     </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
  name:'CityAll',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  props:{
    citiesList:Object,
    letter:String
  },
  watch:{
    letter(){        //监听letter的变化
      if(this.letter){
        const element = this.$refs[this.letter][0] //通过$refs获取dom元素,即每个点击的字母
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped>
  .all{
    overflow: hidden;
    position: absolute;
    top:7rem;
    left:0;
    right:0;
    bottom:0;
  }
.title{
  line-height: .3rem;
  padding:.2rem;
  background-color: #CACACA;
}
.item{
  line-height: .5rem;
  padding:.2rem;
}
</style>
