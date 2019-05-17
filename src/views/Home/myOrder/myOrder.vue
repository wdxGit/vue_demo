<template>
  <div class="myOrder">
    <myAside ref="myAside" :openeds="['/home/myOrder']" :isActive="'/home/myOrder'"/>
    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <p class="fl">我的订单</p>
      </div>
      <div class="table_header">
        <div class="tab">
          <ul>
            <li :class="{active : active === index}" v-for="(item, index) in tabList" :key="index" @click="tab(index)">{{item}}</li>
          </ul>
        </div>
      </div>
      <el-table
        :data="tableData"
        style="width: 1600px; height:100%; margin: 0 auto;"
        :header-cell-style="{background:'#f2f2f2'}">
        <el-table-column
          prop="date"
          label="订单号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="下单时间"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="发货人/收货人">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import myAside from '@/components/myAside.vue'
export default {
  name:'myOrder',
  data() {
    return {
      tabList:['全部订单','待支付','待接单','待取货','配送中','已完成','已取消'],
      active:0,
      activeName: 'second',
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  methods: {
    tab(index){
      this.active = index;
    }
  },
  components: {
    myAside
  }
}
</script>

<style lang="scss">
$color:#fd7e23;
.myOrder{
  .table{
    .title{
      width: 1600px;
      height: 82px;
      background-color: #ffffff;
      border-radius: 10px;
      line-height: 82px;
      font-size: 19px;
      margin: 0 auto;
      margin-bottom: 30px;
      p{
        margin-left: 30px;
      }
    }
    .table_header{
      width: 1600px;
      height: 186px;
      border-radius: 10px 10px 0 0 ;
      background-color: #ffffff;
      margin: 0 auto;
      .tab ul{
        width: 1528px;
        height: 47px;
        border-bottom: 1px solid #cccccc;
        margin: 0 auto;
        line-height: 47px;
        li{
          width: 88px;
          text-align: center;
          color: #474747;
          float: left;
          
        }
        li.active{
          color: $color;
          border-bottom: 1px solid $color;
        }
      }
    }
  }
}

</style>
