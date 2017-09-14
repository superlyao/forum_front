<template>
  <header class="header">
    <div class="nav-left" >
      <router-link to="/">
        <img class="nav-img" src="../../assets/logo.png">
      </router-link>
    </div>
    <el-input class="el-input" size="small" placeholder="请输入内容" >
      <el-button  slot="append" icon="search"></el-button>
    </el-input>
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
    height: 50px;
  }
  .nav-img {
    margin: 5px 0 0 220px;
    width: 40px;
    height: 40px;
  }
  /*.nav-left{*/
    /*display: inline;*/
  /*}*/
  /*.el-input{*/
    /*width: 200px;*/
    /*display: inline;*/
  /*}*/
</style>
