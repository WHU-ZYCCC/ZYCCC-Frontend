import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/Login/LoginPage'
import HomePage from '../components/Home/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})
