<template>
    <div style="width:100%">
<!--     <div class="ButtomAbout1">-->
<!--       Logo-->
<!--     </div>-->
<!--      <div class="ButtomAbout2">-->
<!--        About-->
<!--      </div>-->
      <el-row>
        <el-col :span="12">
          <div>Logo</div>
        </el-col>
        <el-col :span="12">
          <div>About</div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'BottomAbout'
}
</script>

<style scoped>
  @media screen and (min-width: 900px){
    .ButtomAbout1{
      width: 50%;
      float: left;
    }
    .ButtomAbout2{
      width: 50%;
      float: left;
    }
  }
  @media screen and (max-width: 899px){
    .ButtomAbout1{
      width: 100%;
    }
    .ButtomAbout2{
      width: 100%;
    }
  }
</style>
