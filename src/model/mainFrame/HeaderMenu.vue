<template>
  <header class="header">
    <img src="../../assets/logo.png"/>
    <el-input placeholder="请输入内容" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <div class="header_button">
      <el-button type="primary" size="medium" round>登录</el-button>
      <el-button size="medium" @click="register" round>注册</el-button>
    </div>
    <register v-if="isVisible" :isVisible="isVisible"></register>
  </header>
</template>
<script>
  import Register from '../view/user/Register.vue'
  export default {
    components: {Register},
    data() {
      return {
        isVisible: false
      }
    },
    methods: {
      register () {
        this.isVisible = true
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
