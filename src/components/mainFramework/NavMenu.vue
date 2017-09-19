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
      <el-button>登录</el-button>
      <el-button>注册</el-button>
    </div>
    <div ></div>
  </header>
</template>
<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    data () {
      return {}
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
