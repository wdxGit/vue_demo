<template>
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#3e4358"
              text-color="#fff"
              :default-openeds="openeds"
              :router=true>
              <el-menu-item index="/home/charts" :class="{isActive : isActive === '/home/charts'}">
                <i class="iconfont icon-shouye"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-submenu index="/home/myOrder">
                <template slot="title">
                  <i class="iconfont icon-icon"></i>
                  <span slot="title">订单管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/home/myOrder" :class="{isActive : isActive === '/home/myOrder'}"><i>我的订单</i></el-menu-item>
                  <el-menu-item index="/home"><i>快速下单</i></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/home">
                <template slot="title">
                  <i class="iconfont icon-qianbao"></i>
                  <span slot="title">钱包</span>
                </template>
              </el-submenu>
              <el-submenu index="/home">
                <template slot="title">
                  <i class="iconfont icon-shanghuduantongji"></i>
                  <span slot="title">商户中心</span>
                </template>
              </el-submenu>
              <el-submenu index="/home">
                <template slot="title">
                  <i class="iconfont icon-shezhi"></i>
                  <span slot="title">设置</span>
                </template>
              </el-submenu>
            </el-menu>
        </el-col>
      </el-row>
</template>

<script type="text/ecmascript-6">
export default {
  name:'myAside',
  data() {
    return {

    }
  },
  props:{
    openeds:{
      type:Array,
      default:function () {
        return []
      }
    },
    isActive:{
      default:'/home/charts'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {

  }
}
</script>

<style lang="scss">
$color:#fd7522;
.tac{
  min-height: 100%;
}
  .el-aside {
    background-color: #3e4358;
    display: block;
    position: absolute;
    left: 0;
    top: 100px;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    .el-col{
      width: 260px;
      text-align: start;
    }
    .iconfont{
      margin:0 20px;
      width: 24px;
      height: 18px;
    }
    .isActive>i{
      color:$color;
    }
  }
.tac{
  background-color: #3e4358;
    position: absolute;
    left: 0;
    top: 100px;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    .el-col{
      width: 260px;
      text-align: start;
    }
    .el-menu{
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
}
</style>
