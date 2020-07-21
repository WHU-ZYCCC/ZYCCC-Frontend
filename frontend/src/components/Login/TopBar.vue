<template>
    <div>
      <el-page-header @back="goBack" content="登录页面"></el-page-header>
    </div>
</template>

<script>
export default {
  name: 'TopBar',
  methods: {
    goBack () {
      console.log('go back')
    }
  }
}

</script>

<style scoped>

</style>
