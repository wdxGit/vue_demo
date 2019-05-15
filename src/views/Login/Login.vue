<template>
<div class="login">
  <div class="main">
    <img src="./images/login_bg.png" alt="">
    <div class="login_box">
      <div class="login_inner">
        <p>闪优急送商户平台登录</p>
        <span>{{follow}}</span>
        <input type="text" v-model="username" placeholder="请输入手机号" @change="changeUser">
        <input type="password" v-model="password" placeholder="请输入密码">
        <slide ref="childrenSlide" />
        <input type="radio" name="radio" checked>&nbsp;&nbsp;<i>记住密码</i>
        <button @click="submit">立即登录</button>
        <div>
          <span>
            <router-link to="/register" class="color">注册用户，免费入驻</router-link>
          </span>
          <span class='fr'>
            <router-link to="/forget" class="color">忘记密码</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import slide from '@/components/slide.vue'
export default {
  name: 'login',
  data() {
    return {
      follow: '', //手机号密码判断结果
      slideEnd: false,
      username: '',
      password: ''
    }
  },
  methods: {
    changeUser() {
      if (!(/^1[34578]\d{9}$/.test(this.username))) {
        this.follow = "手机号码格式不正确";
        return false;
      } else {
        this.follow = ""
      }
    },
    submit() {
      if (this.follow === "" && this.$refs.childrenSlide.slideEnd) {
        this.$router.push({
          name: 'home',
          params: {
            username: this.username
          }
        })
      }
    }
  },
  components: {
    slide
  }
}
</script>

<style scoped lang="scss">
$color:#ff6119;
.login .main {
  width: 1122px;
  height: 506px;
  margin: 0 auto;
  margin-top: 230px;
  .login_box {
    width: 420px;
    height: 460px;
    float: right;
    box-shadow: 0 0 5px $color;
    .login_inner {
      width: 330px;
      margin: 0 auto;
      margin-top: 40px;
      p {
        font-size: 26px;
        text-align: center;
      }
      &>span {
        display: block;
        height: 24px;
        color: $color;
      }
      input {
        margin-bottom: 18px;
      }
      input[type=text],
      input[type=password] {
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
      input[type="radio"]:checked {
        background: $color;
      }
      i {
        font-size: 12px;
        color: #828282;
        line-height: 13px;
      }
      button {
        display: block;
        width: 100%;
        height: 50px;
        border: none;
        color: #ffffff;
        border-radius: 5px;
        background-color: #fd7522;
      }
      div {
        margin-top: 10px;
        font-size: 14px;
      }
    }
  }
}
</style>
