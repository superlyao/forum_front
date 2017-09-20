<template>
  <el-dialog v-model="" size="small">
    <el-form v-model="signInParam">
      <el-form-item label="用户名">
        <el-input v-model="signInParam.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="signInParam.passWord"  placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <div class="text-right">
      <el-button>确定</el-button>
      <el-button>取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import { initSigninParam } from './signIn'
  export default {
    prop: ['signInDialog'],
    components: {},
    data () {
      return {
        signInParam: Object.assign({}, initSigninParam)
      }
    }
  }
</script>
