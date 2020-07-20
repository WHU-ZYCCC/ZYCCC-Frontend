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
  @media screen and (min-width: 900px) {
    .logo{
      width: 5%;
      float: left;
    }
    .logoBar{

    }
    .logoDense{
      display: flex;
      width: 100%;
      top:0px;
      left: 0px;
      position: fixed;
      background-image: linear-gradient(to right,rgb(31,116,189),rgb(60,189,236));
    }
  }
  @media screen and (max-width: 899px){
    .logo{
      width: 20%;
      float: left;
    }
    .logoBar{

    }
    .logoDense{
      display: flex;
      width: 100%;
      top:0px;
      left: 0px;
      position: fixed;
      background-image: linear-gradient(to right,rgb(31,116,189),rgb(60,189,236));
    }
  }
</style>
