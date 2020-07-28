<template>
  <div>
    <TopBar></TopBar>
    <div id="app">
      <router-view/>
    </div>
    <el-divider></el-divider>
    <BottomAbout></BottomAbout>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import BottomAbout from './components/BottomAbout'
export default {
  name: 'App',
  components: {BottomAbout, TopBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
