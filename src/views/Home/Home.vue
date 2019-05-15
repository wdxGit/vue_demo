<template>
<div class="home">
  <el-container>
    <el-header height="100px">
      <img src="../../assets/images/logo_2.png" alt="">
      <span>商户后台</span>
    </el-header>
    <el-container>
      <el-aside width="260px">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#3e4358"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router=true>
              <el-menu-item index="/home/charts" :class="{isActive : isActive}">
                <i class="iconfont icon-shouye"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-submenu index="/home">
                <template slot="title">
                  <i class="iconfont icon-icon"></i>
                  <span slot="title">订单管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="/home">选项1</el-menu-item>
                  <el-menu-item index="/home">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="/home">钱包</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="/home">
                  <template slot="title">选项4</template>
                  <el-menu-item index="/home">选项1</el-menu-item>
                </el-submenu>
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
      </el-aside>
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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.isActive = key;
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
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
.el-aside {
  background-color: #3e4358;
  display: block;
  position: absolute;
  left: 0;
  top: 100px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: hidden;
}

.el-main {
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
.isActive i{
  color:$color;
}
</style>
