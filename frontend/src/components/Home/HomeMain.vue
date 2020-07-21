<template>
  <div class="block">
    <el-row v-for="item in items" :key="item.message">{{item.message}}</el-row>
  </div>
</template>

<script>
export default {
  name: 'HomeMain',
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      items: [
        { message: '1' },
        { message: '2' },
        { message: '3' },
        { message: '4' },
        { message: '5' },
        { message: '6' },
        { message: '7' },
        { message: '8' }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  }
}
</script>
<style scoped>

</style>
