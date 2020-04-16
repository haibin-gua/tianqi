<template>
  <div calss="hot">
    <div class="hotcity">热门城市</div>
      <el-row :gutter="1" v-for="(item,index) in hotcityList" :key="item.id" style="background: #99A9BF;">
        <el-col :span="8"><div class="grid-content bg-purple">{{item.city[0]}}</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">{{item.city[1]}}</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">{{item.city[2]}}</div></el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default{
  name:'CityHot',
  data(){
    return{
      hotcityList:[{
        id:'0001',
        city:['北京','上海','三亚']
      },{
        id:'0002',
        city:['北京','上海','三亚']
      },{
        id:'0003',
        city:['北京','上海','三亚']
      },{
        id:'0004',
        city:['北京','上海','三亚']
      }]
    }
  }
}
</script>

<style scoped>
  .hotcity{
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
