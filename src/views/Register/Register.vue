<template>
<div class="register">
  <header>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="">
      <span>商户后台</span>
    </div>
  </header>
  <main>
      <p>注册为闪优急送用户</p>
      <select name="" id="">
          <option value="北京">北京</option>
        </select>
      <input type="text" placeholder="请输入11位手机号">
      <input type="password" placeholder="设置6-12密码，包含数字和字母">
      <input type="text" placeholder="短信验证码" class="note"> <button>获取验证码</button>
      <slide/>
      <button>同意条框并注册</button>
      <div>
        <input type="radio" checked><router-link to="/" class="color">闪优急送商户服务协议</router-link>
      </div>
  </main>
</div>
</template>

<script type="text/ecmascript-6">
import slide from '@/components/slide.vue'
export default {
  name: 'register',
  data() {
    return {

    }
  },
  components: {
    slide
  }
}
</script>

<style scoped lang='scss'>
$color:#ff6119;
header {
  width: 100%;
  height: 128px;
  border-bottom: 1px solid $color;
  .logo {
    width: 50%;
    height: 68px;
    margin: 0 auto;
    margin-top: 30px;
    span {
      display: block;
      font-size: 33px;
      font-size: bold;
      color: #474747;
      margin-top: -64px;
      margin-left: 88px;
    }
  }
}

main {
  width: 340px;
  margin: 0 auto;
  margin-top: 40px;
  p {
    font-size: 26px;
    text-align: center;
    margin-bottom: 40px;
  }
  select, option,
  input[type="text"],
  input[type="password"] {
    width: 100%;
    height: 49px;
    outline: none;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 16px;
    padding-left: 6px;
  }
  input[type=text]:focus,
  input[type=password]:focus {
    border: 1px solid $color;
  }
  select, input {
        margin-bottom: 18px;
      }
  .note{
    width: 186px !important;
    margin-right: 24px;
  }
  button{
    width: 119px;
    height: 48px;
    border: none;
    border-radius: 5px;
    background-color: $color;
    color:#fff;
  }
  button:last-of-type{
    width: 100%;
    height: 46px;
    background-color: $color;
    text-align: center;
    line-height: 46px;
    color:#fff;
    font-size: 16px;
    border-radius: 5px;
  }
  div{
    width: 142px;
    height: 12px;
    margin: 0 auto;
    font-size: 12px;
    margin-top: 8px;
    a{
      margin-left: 8px;
    }
  }
}
</style>
