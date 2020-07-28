<template>
  <div>
    <el-row>
      <el-col :sm="4" :xs="0">&nbsp;</el-col>
      <el-col :sm="16" :xs="20">
        <el-form :model="LoginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="userName">
            <el-input v-model="LoginForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="LoginForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('LoginForm')">提交</el-button>
            <el-button @click="resetForm('LoginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :sm="4" :xs="0">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.LoginForm.pass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        callback()
      }, 1000)
    }
    return {
      LoginForm: {
        userName: '',
        pass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        userName: [
          { validator: validateUserName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  /*.el-container{height:100%;padding:0;margin:0;width:100%;}*/
  /*#app>div[data-v-23246054]{width:100%;}*/
  .el-form{
    /*border: grey solid;*/
    /*border-radius: 20px;*/
    /*box-shadow: black;*/
  }
</style>
