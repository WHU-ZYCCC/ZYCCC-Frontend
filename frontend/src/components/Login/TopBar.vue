<template>
    <div>
      <el-page-header @back="goBack" content="登录"></el-page-header>
    </div>
</template>

<script>
export default {
  name: 'TopBar',
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}

</script>

<style scoped>

</style>
