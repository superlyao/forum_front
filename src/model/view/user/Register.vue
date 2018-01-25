<template>
  <el-dialog title="注册" :visible.sync="registerFrom.isVisible">
    <el-form label-width="80px" v-model="registerParam">
      <el-form-item label="用户头像">
        <input type="file" name="file" @change="getFile($event)"/>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="registerParam.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="registerParam.passWord"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="registerParam.email"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="registerParam.sex">
          <el-radio label="0">男</el-radio>
          <el-radio label="1">女</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="text-right">
      <el-button @click="submitMethod()" type="primary">确定</el-button>
      <el-button @click="registerFrom.isVisible = false">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import {initRegisterParam} from './register'
  import {registerUser} from '../../../http/requestApi'
  export default {
    props: ['registerFrom'],
    components: {},
    data() {
      return {
        registerParam: initRegisterParam(),
        formData: new FormData()
      }
    },
    methods: {
      getFile(e) {
        console.log(e)
        this.registerParam.file = e.target.files[0]
        this.formData.append("file", this.registerParam.file)
      },
      submitMethod() {
        console.log(this.registerParam)
        this.formData.append("userName", this.registerParam.userName)
        this.formData.append("passWord", this.registerParam.passWord)
        this.formData.append("email", this.registerParam.email)
        this.formData.append("sex", this.registerParam.sex)
        console.log(this.formData)
        this.sendHttp()
      },
      sendHttp() {
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        }
        console.log(this.registerParam)

        this.$http.post(registerUser, this.formData, config).then(res => {
          let result = res.data
          this.registerFrom.isVisible = false
        })
      }
    }
  }
</script>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
