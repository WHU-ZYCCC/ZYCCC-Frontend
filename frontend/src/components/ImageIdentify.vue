<template>
  <div style="width: 100%">
    <el-container>
      <el-header>
        识别器材
      </el-header>
      <el-body>
        <el-row>
          <el-col class="hidden-xs-only" span="6">&nbsp;</el-col>
          <el-col span="12">
            <div class="IdentifyForm">
              <el-row>&nbsp;</el-row>
              <el-row>
                <el-steps :active="active" finish-status="success" style="top:10%">
                <el-step title="拍照上传"></el-step>
                <el-step title="等待结果"></el-step>
                <el-step title="选择器材"></el-step>
              </el-steps>
              </el-row>
              <div class="Content">
              </div>
              <el-button @click="next">下一步</el-button>
            </div>
          </el-col>
          <el-col class="hidden-xs-only" span="6" >&nbsp;</el-col>
        </el-row>
      </el-body>
      <el-footer>
        <BottomAbout></BottomAbout>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import BottomAbout from './Login/BottomAbout'
export default {
  name: 'ImageIdentify',
  components: {BottomAbout},
  data () {
    return {
      active: 0
    }
  },

  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }

}
</script>

<style scoped>
  @media screen and (min-width: 768px) {
    .IdentifyForm{
      width: 100%;
      height: 400px;
      border: grey solid;
      border-radius: 20px;
      box-shadow: black;
    }
  }
  @media screen and (max-width: 767px) {
    .IdentifyForm{
      width: 200%;
      height: 400px;
      border: grey solid;
      border-radius: 20px;
      box-shadow: black;
    }
  }
</style>
