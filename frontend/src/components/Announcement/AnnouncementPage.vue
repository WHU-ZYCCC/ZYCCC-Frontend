<template>
<div>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="40">
  </el-pagination>
</div>
</template>

<script>
export default {
  name: 'AnnoncementPage'
}
</script>

<style scoped>
  @media screen and (min-width: 900px){
    .el-pagination{
      width: 100%;
    }
  }
  @media screen and (max-width: 899px){
    .el-pagination{
      width: 50%;
    }
  }
</style>
