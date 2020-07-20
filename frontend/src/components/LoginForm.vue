<template>
    <div class="MainDiv">
      <form class="loginForm">
        <el-row></el-row>
        <el-row><h2>登录</h2></el-row>
        <el-row><p>使用学号与密码</p></el-row>
        <el-row></el-row>
        <el-row>
          <el-col :span="4"><div>&nbsp;</div></el-col>
          <el-col :span="16"><el-input placeholder="请输入学号"></el-input></el-col>
          <el-col :span="4"></el-col>
        </el-row>
        <el-row></el-row>
        <el-row></el-row>
        <el-row>
          <el-col :span="4"><div>&nbsp;</div></el-col>
          <el-col :span="16"><el-input placeholder="请输入密码" show-password></el-input></el-col>
          <el-col :span="4"></el-col>
          </el-row>
        <el-row></el-row>
        <el-row><el-button type="primary">登录</el-button></el-row>
        <el-row></el-row>
        <el-row><el-button>游客登录</el-button></el-row>
      </form>
    </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
.loginForm{
  width: 400px;
  height: 400px;
  float: right;
  border: grey solid;
  border-radius: 20px;
  box-shadow: black;
}
.el-row {
  margin-bottom: 10px;
}
</style>
