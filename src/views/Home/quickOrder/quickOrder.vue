<template>
  <div class="quickOrder">
    <!-- 侧边栏 -->
    <myAside :isActive="'/home/quickOrder'" :openeds="['/home/myOrder']"/>

    <!-- 操作详情 -->
    <div class="main">
      <!-- 发货地址 -->
      <Ship/>

      <!-- 收货地址 -->
      <Take/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import myAside from '@/components/myAside'
import Ship from '@/components/Ship'
import Take from '@/components/Take'
export default {
  name:"quickOrder",
  data() {
    return {

    }
  },
  components: {
    myAside,
    Ship,
    Take
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
