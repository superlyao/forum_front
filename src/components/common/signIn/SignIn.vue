<template>
  <el-dialog v-model="signInDialog.isVisible" size="tiny">
    <el-form v-model="signInParam">
      <el-form-item label="用户名">
        <el-input size="small" v-model="signInParam.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input size="small" type="password" v-model="signInParam.passWord"  placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <div class="text-right">
      <el-button @click="signInDialog.isVisible = false">取消</el-button>
      <el-button type="primary" @click="signIn">确定</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import { initSigninParam } from './signIn'
  export default {
    props: ['signInDialog'],
    components: {},
    data () {
      return {
        signInParam: Object.assign({}, initSigninParam)
      }
    },
    methods: {
      signIn () {
        console.log(this.signInParam)
      }
    }
  }
</script>
<style scoped>
</style>
