
<template>
  <div>
    <el-container class="LoginContiner">
      <el-header>
        <TopBar></TopBar>
      </el-header>
      <el-main>
        <LoginForm></LoginForm>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TopBar from './TopBar'
import LoginForm from './LoginForm'
import BottomAbout from './BottomAbout'
export default {
  name: 'LoginPage',
  components: {TopBar, BottomAbout, LoginForm}
}
</script>

<style scoped>
  .el-container{height:100%;padding:0;margin:0;width:100%;}
  #app>div[data-v-23246054]{width:100%;}
</style>
