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
      window.history.go(-1)
    }
  }
}

</script>

<style scoped>

</style>
