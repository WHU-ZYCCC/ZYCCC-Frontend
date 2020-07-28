<template>
    <div class="TopBar">
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          <span class="demonstration"></span>
          <el-image>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
      </el-image>
      <h>ZYCCC实验室管理系统</h>
      <el-divider></el-divider>
    </div>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
      src: 'https://avatars2.githubusercontent.com/u/68144027?s=400&u=85dadb63a5003fd26f97f3197529dc2357c89522&v=4'
    }
  }
}

</script>

<style scoped>
.TopBar{
  text-align: center;
}
h{
  position: relative;
  margin-left: 20px;
  font-family: 黑体;
  font-size: 25px;
}
.el-image{
  width: 5%;
}
</style>
