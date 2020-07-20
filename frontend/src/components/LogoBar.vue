<template>
    <div class="logoBar">
      <md-dense class = "logoDense">
        <img src="https://avatars2.githubusercontent.com/u/68144027?s=400&u=85dadb63a5003fd26f97f3197529dc2357c89522&v=4" class="logo">
      </md-dense>
    </div>
</template>

<script>
export default {
  name: 'LogoBar'
}

</script>

<style scoped>
  @media screen {

  }
.logo{
  width: 5%;
  float: left;
}
.logoBar{

}
.logoDense{
  width: 100%;
  top:0px;
  left: 0px;
  position: fixed;
  background-color: #448aff;
}
</style>
