<template>
  <div>
      <el-container class="HomeContiner">
        <el-main>
          <el-row>
            <el-col ><NavMenu></NavMenu></el-col>
          </el-row>
          <el-row><HomeMain></HomeMain></el-row>
        </el-main>
      </el-container>
  </div>
</template>

<script>
import NavMenu from './NavMenu'
import HomeMain from './HomeMain'
export default {
  name: 'HomePage',
  components: {HomeMain, NavMenu}
}
</script>

<style scoped>
  .el-container{height:100%;padding:0;margin:0;width:100%;}
  .el-aside{margin: 0px}
  .el-main{height:100%;padding:0;margin:0;width:100%;}
  #app>div[data-v-23246054]{width:100%;}

</style>
