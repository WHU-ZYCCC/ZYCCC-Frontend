
<template>
  <div>
    <LogoBar></LogoBar>
    <LoginForm></LoginForm>
    <BottomAbout></BottomAbout>
  </div>
</template>

<script>
import LogoBar from './LogoBar'
import LoginForm from './LoginForm'
import BottomAbout from './BottomAbout'
export default {
  name: 'LoginPage',
  components: {BottomAbout, LoginForm, LogoBar}
}
</script>

<style scoped>

</style>
