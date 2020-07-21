<template>
    <div class="MainDiv">
      <el-row>
        <el-col :sm="15" :xs="2"><div>&nbsp;</div></el-col>
        <el-col :sm="6" :xs="21"><form class="loginForm">
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
        </el-col>
        <el-col :sm="3" :xs="1"></el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style scoped>
.loginForm{
  right: 20%;
  width: 350px;
  height: 400px;
  float: right;
  border: grey solid;
  border-radius: 20px;
  box-shadow: black;
}
.el-row {
  margin-bottom: 10px;
}
  @media screen and (max-width:800px){
    .loginForm{
      right: 20%;
      width: 300px;
      height: 400px;
      float: right;
      border: grey solid;
      border-radius: 20px;
      box-shadow: black;
    }
  }
</style>
