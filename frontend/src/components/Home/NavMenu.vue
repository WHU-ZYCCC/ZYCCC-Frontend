<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">公告</el-menu-item>
      <el-menu-item index="2" @click="GotoLoginPage()">
        <template slot="title"><router-link to="/login">我的实验室</router-link></template>
      </el-menu-item>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">实验室管理</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    GotoLoginPage () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
