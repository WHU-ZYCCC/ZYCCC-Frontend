<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="GotoAnnouncementPage()">
        公告
      </el-menu-item>
      <el-menu-item index="2" @click="GotoLoginPage()">
        我的实验室
      </el-menu-item>
      <el-menu-item index="3" @click="GotoManagePage()">
        实验室管理
      </el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex: 'null'
    }
  },
  methods: {
    GotoLoginPage () {
      this.$router.push('/login')
    },
    GotoAnnouncementPage () {
      this.$router.push('/announcement')
    },
    GotoManagePage () {
      this.$router.push('/manage')
    }
  }
}
</script>

<style scoped>

</style>
