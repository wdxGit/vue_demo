<template>
<div class="Take">
  <ul class="take_input">
    <li>
      <span>发货地址：</span>
      <el-input v-model="ship" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="centerDialogVisible = true">常用地址</el-button>
    </li>
    <li>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;门牌号:&nbsp;&nbsp;</span>
      <el-input v-model="house" placeholder="请输入内容"></el-input>
      <p>{{houseTip}}</p>
    </li>
    <li>
      <span style="margin-left:-10px;">发货人姓名:&nbsp;</span>
      <el-input v-model="shopName" placeholder="请输入内容"></el-input>
      <p>{{shopTip}}</p>
    </li>
    <li>
      <span style="margin-left:-10px;">发货人电话:&nbsp;</span>
      <el-input v-model="shopPhone" placeholder="请输入内容"></el-input>
      <p>{{shopPhoneTip}}</p>
    </li>
    <li>
      <div>
        <span v-if="shopIsActive" @click="shopIsActive = !shopIsActive" :class="{shopIsActive : shopIsActive === shopIsActive}">
          <img src="../assets/images/shopIsActive.png" alt="">
        </span>
        <span v-else @click="shopIsActive = !shopIsActive">
          <p></p>
        </span>
        <i :class="{shopIsActive : shopIsActive}" @click="shopIsActive = !shopIsActive">保存为常用发货地址</i>
      </div>
    </li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Take",
  data() {
    return {
      centerDialogVisible: false,
      shipIsActive: true,
      ship: '默认地址', //发货地址
      house: '默认门牌号', //门牌号
      houseTip: '', //门牌验证
      shopName: '发货人姓名',
      shopTip: '', //发货人验证
      shopPhone: '发货人电话',
      shopPhoneTip: '', //发货人电话
      shopIsActive: false, //判断是否选中
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.Take {
  width: 1408px;
  height: 350px;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 30px;
  padding-left: 192px;
  margin-top: 30px;
  .take_input li {
    width: 635px;
    height: 48px;
    line-height: 42px;
    margin-bottom: 28px;
    display: flex;
    flex-direction: row;
    .el-button {
      height: 40px;
      span {
        margin-right: 0;
      }
    }
    .el-input {
      width: 360px;
      height: 48px;
      margin-right: 13px;
    }
    span {
      margin-right: 30px;
      font-size: 16px;
    }
    p {
      color: #ff1c1c;
    }
    i {
      font-size: 12px;
    }
  }
  .take_input li:last-of-type {
    display: flex;
    margin-top: -28px;
    margin-left: 110px;
    margin-bottom: 0;
    span {
      display: block;
      width: 10px;
      height: 10px;
      border: 1px solid #ff6119;
      float: left;
      margin-top: 14px;
    }
    .shopIsActive{
      width: 12px;
      height: 12px;
      margin-top: 1px;
      border:none;
    }
    i {
      margin-left: -20px;
    }
  }
}
</style>
