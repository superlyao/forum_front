<template>
  <header class="header">
    <div class="nav-left" >
      <router-link to="/">
        <img class="nav-img" src="../../assets/logo.png">
      </router-link>
    </div>
    <div style="margin: 15px 0 10px 20px;">
      <el-input size="small" placeholder="请输入内容" >
        <el-button  slot="append" icon="search"></el-button>
      </el-input>
    </div>
    <div style="margin: 15px 0 15px 650px;">
      <el-button @click="signInMethod">登录</el-button>
      <el-button @mouseenter="buttonHover">注册</el-button>
    </div>
    <SignIn :signInDialog="signInDialog"></SignIn>
  </header>
</template>
<script>
  import SignIn from '../common/signIn/SignIn.vue'
  let initSignInDialog = {
    isVisible: false
  }
  export default {
    components: {SignIn},
    data () {
      return {
        signInDialog: Object.assign({}, initSignInDialog)
      }
    },
    methods: {
      signInMethod () {
        this.signInDialog.isVisible = true
      },
      buttonHover () {
        console.log('1')
      }
    }
  }
</script>
<style scoped>
  .header {
    padding: 0;
    background-color: burlywood;
    display: flex;
    flex-wrap: wrap;
  }
  .nav-img {
    margin: 10px 0 0 220px;
    width: 40px;
    height: 40px;
  }
</style>
