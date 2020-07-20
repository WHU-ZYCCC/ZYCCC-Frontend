
<template>
  <div>
    <el-container>
      <el-header>
        <LogoBar></LogoBar>
      </el-header>
      <el-main>
        <LoginForm></LoginForm>
      </el-main>
      <el-footer>
        <BottomAbout></BottomAbout>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import LogoBar from './LogoBar'
import LoginForm from './LoginForm'
import BottomAbout from './BottomAbout'
export default {
  name: 'LoginPage',
  components: {BottomAbout, LoginForm, LogoBar}
}
</script>

<style scoped>

</style>
