<template>
  <header class="header">
    <div class="nav-left">
      <router-link to="/">
        <img class="nav-img" src="../../assets/logo.png">
      </router-link>
    </div>
  </header>
</template>
<script>
  export default {
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
    width: 20px;
    height: 20px;
  }
</style>
