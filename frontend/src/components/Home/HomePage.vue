<template>
  <div>
    <el-container class="HomeContiner">
      <el-header>
        <HomeTopBar></HomeTopBar>
      </el-header>
      <el-main>
        <el-aside><NavMenu></NavMenu></el-aside>
      </el-main>
      <el-footer>
        <el-divider></el-divider>
        <bottom-about></bottom-about>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './NavMenu'
import BottomAbout from '../Login/BottomAbout'
import HomeTopBar from './HomeTopBar'
export default {
  name: 'HomePage',
  components: {HomeTopBar, BottomAbout, NavMenu}
}
</script>

<style scoped>
  .el-container{height:100%;padding:0;margin:0;width:100%;}
  .el-main{height:100%;padding:0;margin:0;width:100%;}
  #app>div[data-v-23246054]{width:100%;}

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
