<template>
  <div class="myOrder">
    <el-table
      :data="tableData"
      style="width: 100%">
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
</template>

<script type="text/ecmascript-6">
export default {
  name:'myOrder',
  data() {
    return {
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
  components: {

  }
}
</script>

<style lang="scss">
.myOrder{

}

</style>
