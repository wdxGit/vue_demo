<template>
  <div class="quickOrder">
    <!-- 侧边栏 -->
    <myAside :isActive="'/home/quickOrder'" :openeds="['/home/myOrder']"/>

    <!-- 操作详情 -->
    <div class="main">
      <!-- 发货地址 -->
      <Ship/>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import myAside from '@/components/myAside'
import Ship from './Ship/Ship'
export default {
  name:"quickOrder",
  data() {
    return {
      ship:'默认地址', //发货地址
      house:'默认门牌号', //门牌号
      houseTip:'', //门牌验证
      shopName:'发货人姓名',
      shopTip:'', //发货人验证
      shopPhone:'发货人电话',
      shopPhoneTip: '', //发货人电话
      shopIsActive: true, //判断是否选中
    }
  },
  components: {
    myAside,
    Ship
  }
}
</script>

<style scoped lang="scss">
.quickOrder{
  .main{
    width: 1600px;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
