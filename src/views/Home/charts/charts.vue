<template>
  <div class="charts">
    <myAside/>
    <div class="chartBox">
      <div class="title">
        <div class="today_amount">
          <p>今日商户交易金额</p>
          <p>&yen;200.00</p>
        </div>
        <div class="today_order">
          <p>今日订单</p>
          <p>&yen;200.00</p>
        </div>
        <div class="accout">
          <p>账户余额</p>
          <p>&yen;200.00</p>
        </div>
        <router-link to="/home/myOrder">快速下单</router-link>
      </div>

      <div class="chart">
        <div class="chart_btn">
          <button :class="{isActive : isActive===1}">营业额</button>
          <button :class="{isActive : isActive===2}">订单数量</button>
        </div>
        <div ref="main" id="annual" style="width: 100%;height:600px;"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts'
import myAside from '@/components/myAside'
export default {
  name: 'charts',
  data() {
    return {
      isActive : 1
    }
  },
  mounted() {
    var myChart = echarts.init(this.$refs.main);
    let option = {
        title: {
            text: '营业额统计',
            textStyle:{
              color:'#7f7f7f'
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '18%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                smooth:true,
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart.setOption(option);
  },
  components: {
    myAside
  }
}
</script>

<style scoped lang="scss">
$color:#fd7e23;
.charts{
  height: 100%;
  text-align: center;
}
.chartBox{
  .title{
    width: 1600px;
    height: 215px;
    background-color: #ffffff;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    div{
      width: 313px;
      height: 170px;
      margin: 20px 21px 0 29px;
      color: #ffffff;
      font-size: 18px;
    }
    div p:first-of-type{
      margin-top:56px;
    }
    .today_amount{
      background-image: url('./images/today_amount.png') ;
    }
    .today_order{
      background-image: url('./images/today_order.png')
    }
    .accout{
      background-image: url('./images/accout.png')
    }
    a{
      display: block;
      width: 270px;
      height: 94px;
      color: #ffffff;
      line-height: 94px;
      text-align: center;
      border-radius: 5px;
      font-size: 26px;
      margin-top: 60px;
      margin-left: 90px;
      box-shadow: 0 5px 10px 0 #fedac0;
      background-color: $color;
    }
  }
  .chart{
    width: 1600px;
    height: 100%;
    margin: 0 auto;
    background-color: #ffffff;
    margin-top: 30px;
    border-radius: 10px;
    padding: 20px 0 0 30px;
    button{
      width: 130px;
      height: 46px;
      color: #fd7e23;
      font-size: 18px;
      line-height: 46px;
      text-align: center;
      border: none;
      border: 1px solid $color;
      border-radius: 20px;
      float: left;
      background-color: #ffffff;
      margin-left: 40px;
      margin-bottom: 29px;
    }
    button.isActive{
      color: #ffffff;
      background-color: #fd7e23;
    }
  }
}
</style>
