<template>
<el-dialog title="登录" :visible.sync="loginObj.isVisible" width="30%">
  <el-form v-model="loginParam">
    <el-form-item label="用户名">
      <el-input v-model="loginParam.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="loginParam.passWord"></el-input>
    </el-form-item>
  </el-form>
  <div class="text-right">
    <el-button @click="submitMethod()" type="primary">确定</el-button>
    <el-button @click="loginObj.isVisible = false">取消</el-button>
  </div>
</el-dialog>
</template>
<script>
  import {initLoginParam} from './login'
  import {userLogin} from '../../../../http/requestApi'
  export default {
    components: {},
    props: ['loginObj'],
    data() {
      return {
        loginParam: initLoginParam()
      }
    },
    methods: {
      submitMethod() {
        this.$http.post(userLogin, this.loginParam).then(rep => {
          console.log(rep)
        })
      }
    }
  }
</script>
