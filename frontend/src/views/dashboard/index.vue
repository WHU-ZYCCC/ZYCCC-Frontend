<template>
  <div class="dashboard-container">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'Dashboard',
  data() {
    return {
      resres: 'no data'
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    TestClick() {
      var that = this
      axios.post('http://localhost:3000/users/register', {
        username: 'dzy',
        password: 'dzydzy',
        userMail: 'dzy@dzy.dzy',
        userPhone: '123456'
      }).then(function(response) {
        that.resres = response
      })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
