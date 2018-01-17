<template>
  <el-dialog title="注册" :visible.sync="isVisible">
    <el-form>
      <el-form-item label="用户头像">
        <input type="file" @change="getFile(e)"/>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
  import {initRegisterParam} from './register'
  export default {
    props: ['isVisible'],
    components: {},
    data() {
      return {
        registerParam: initRegisterParam()
      }
    },
    methods: {
      getFile(e) {
        this.registerParam.file = e.target.files[0]
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
