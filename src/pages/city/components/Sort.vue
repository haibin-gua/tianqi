<template>
  <div class="sort">
     <div class="sortcity">字母排序</div>
       <el-row :gutter="1" v-for="item in sortcityList" :key="item.id">
         <el-col :span="4"><div class="grid-content bg-purple">{{item.letter[0]}}</div></el-col>
         <el-col :span="4"><div class="grid-content bg-purple">{{item.letter[1]}}</div></el-col>
         <el-col :span="4"><div class="grid-content bg-purple">{{item.letter[2]}}</div></el-col>
         <el-col :span="4"><div class="grid-content bg-purple">{{item.letter[3]}}</div></el-col>
         <el-col :span="4"><div class="grid-content bg-purple">{{item.letter[4]}}</div></el-col>
         <el-col :span="4"><div class="grid-content bg-purple">{{item.letter[5]}}</div></el-col>
       </el-row>
  </div>
</template>

<script>
export default{
  name:'CitySort',
  data(){
    return{
      sortcityList:[{
        id:"0001",
        letter:['A','B','C','D','E','F']
      },{
        id:"0002",
        letter:['G','H','I','J','K','L']
      },{
        id:"0003",
        letter:['M','N','O','P','Q','R']
      },{
        id:"0004",
        letter:['S','T','Y','V','W','X']
      },{
        id:"0005",
        letter:['Y','Z']
      }]
    }
  }
}
</script>

<style scoped>
  .sortcity{
    width:100%;
    height:.6rem;
    background-color: #CACACA;
    line-height: .6rem;
    padding-left:.2rem;
  }
 .el-row {
     margin-bottom: .02rem;
     &:last-child {
       margin-bottom: 0;
     }
   }
   .el-col {
     border-radius: .08rem;
     text-align: center;
     line-height: .72rem;
   }
   .bg-purple-dark {
     background: #99a9bf;
   }
   .bg-purple {
     background: #d3dce6;
   }
   .bg-purple-light {
     background: #e5e9f2;
   }
   .grid-content {
     min-height: .72rem;
     background-color: white;
   }
   .row-bg {
     padding: .2rem 0;
     background-color: #f9fafc;
   }
</style>
