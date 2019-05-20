<template>
  <div class="quickOrder">
    <!-- 侧边栏 -->
    <myAside :isActive="'/home/quickOrder'" :openeds="['/home/myOrder']"/>

    <!-- 操作详情 -->
  </div>
</template>

<script type="text/ecmascript-6">
import myAside from '@/components/myAside'
export default {
  name:"quickOrder",
  data() {
    return {

    }
  },
  components: {
    myAside
  }
}
</script>

<style scoped>
</style>
