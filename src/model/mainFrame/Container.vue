<template>
  <el-row class="page-padding">
    <el-col>
      <transition>
        <router-view></router-view>
      </transition>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .page-padding {
    padding: 0 3%;
  }

  @media (max-width: 992px) {
    .page-padding {
      padding: 0 0;
    }
  }
</style>
