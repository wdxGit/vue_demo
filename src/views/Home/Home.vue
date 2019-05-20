<template>
<div class="home">
  <el-container>
    <el-header height="100px">
      <img src="../../assets/images/logo_2.png" alt="">
      <span>商户后台</span>
    </el-header>
    <el-container>
      <el-main width="100%">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'home',
  data() {
    return {
      isActive:'/home/charts'
    }
  },
  methods: {
    
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
$color:#fd7522;
.home{
  height: 100%;
}
.el-container{
  min-height: 100%;
}
section{
  height: 100%;
}
.el-header{
  background-color: $color;
  color: #fff;
  font-size: 23px;
  img{
    margin-top: 20px;
  }
  span{
    display: block;
    margin-top: -50px;
    margin-left: 76px;
  }
}

.el-main {
  min-height: 100%;
  background-color: #edf1f7;
  margin-left: 260px;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center;
}
.el-menu-vertical-demo{
  position: absolute;
  width: 100%;
}
.iconfont{
  margin:0 20px;
  width: 24px;
  height: 18px;
}
.isActive>i{
  color:$color;
}
</style>
