<template>
  <div>
      <el-container class="HomeContiner">
        <el-header>
          <HomeTopBar></HomeTopBar>
        </el-header>
        <el-main>
          <NavMenu></NavMenu>
          <HomeMain></HomeMain>
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
import HomeMain from './HomeMain'
export default {
  name: 'HomePage',
  components: {HomeMain, HomeTopBar, BottomAbout, NavMenu}
}
</script>

<style scoped>
  .el-container{height:100%;padding:0;margin:0;width:100%;}
  .el-aside{margin: 0px}
  .el-main{height:100%;padding:0;margin:0;width:100%;}
  #app>div[data-v-23246054]{width:100%;}

</style>
