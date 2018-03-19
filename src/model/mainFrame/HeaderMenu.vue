<template>
  <header class="header">
    <img src="../../assets/logo.png"/>
    <el-input placeholder="请输入内容" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <div class="header_button">
      <el-button type="primary" size="medium"  @click="login" round>登录</el-button>
      <el-button size="medium" @click="register" round>注册</el-button>
    </div>
    <register :registerObj="registerObj"></register>
    <Login :loginObj="loginObj"></Login>
  </header>
</template>
<script>
  import Register from '../view/user/register/Register.vue'
  import Login  from  '../view/user/login/Login.vue'
  export default {
    components: {Register, Login},
    data() {
      return {
        registerObj: {
          isVisible: false
        },
        loginObj: {
          isVisible: false
        }
      }
    },
    methods: {
      register () {
        this.registerObj.isVisible = true
      },
      login() {
        this.loginObj.isVisible = true
      }
    }
  }
</script>

<style scoped>
  .header {
    background-color: burlywood;
    height: 60px;
    display: flex;
    flex-wrap: wrap;
  }
  img {
    height: 50px;
    width: 50px;
    margin-left: 100px;
  }
  .header_button {
    margin: 10px 0 0 720px;
  }
  .el-input {
    width: 200px;
    margin: 10px 0 0 10px;
  }
</style>
