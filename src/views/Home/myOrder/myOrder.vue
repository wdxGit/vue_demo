<template>
  <div class="myOrder">
    <!-- 侧边导航 -->
    <myAside ref="myAside" :openeds="['/home/myOrder']" :isActive="'/home/myOrder'"/>
    <!-- 表格 -->
    <div class="table">
      <div class="title">
        <p class="fl">我的订单</p>
      </div>
      <div class="table_header">
        <div class="tab">
          <!-- 分类 -->
          <ul>
            <li :class="{active : active === index}" v-for="(item, index) in tabList" :key="index" @click="tab(index)">{{item}}</li>
          </ul>
          <!-- 日期选择 -->
          <ul>
            <li>今日</li>
            <li>昨日</li>
            <li>近7日</li>
            <li>本月</li>
            <li>上月</li>
            <li>
              <div class="block data">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="timestamp">
                </el-date-picker>
                <el-date-picker
                  v-model="value2"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="timestamp">
                </el-date-picker>
                <button>查询</button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 表格展示 -->
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
      value1: '', //时间1
      value2: '', //时间2
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
        margin: 0 auto;
        line-height: 47px;
        li{
          float: left;
          text-align: center;
        }
      }
      .tab ul:first-of-type{
        border-bottom: 1px solid #cccccc;
        li{
          width: 88px;
          color: #474747;
        }
        li.active{
          color: $color;
          border-bottom: 1px solid $color;
        }
      }
      .tab ul:last-of-type{
        min-width: 100%;
        margin-top: 40px;
        margin-left: 30px;
        li{
          width: 103px;
          height: 46px;
          color: $color;
          border: 1px solid $color;
          border-radius: 5px;
          margin-right: 30px;
        }
        li:last-of-type{
          width: 531px;
          border: none;
          .el-date-editor{
            width: 180px;
            height: 46px;
          }
          .active{
            border: #fd7e23;
          }
          
        }
      }
    }
  }
  .el-date-table td.available:hover{
    color:$color;
  }
  .el-date-table td.current:not(.disabled) span{
    background-color: #fd7e23;
  }
}

</style>
