import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/Login/LoginPage'
import HomePage from '../components/Home/HomePage'
import ManagePage from '../components/Manage/ManagePage'
import AnnouncementPage from '../components/Announcement/AnnouncementPage'
import ImageIdentify from '../components/ImageIdentify'

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
    },
    {
      path: '/manage',
      name: 'ManagePage',
      component: ManagePage
    },
    {
      path: '/announcement',
      name: 'AnnouncementPage',
      component: AnnouncementPage
    },
    {
      path: '/imageidentify',
      name: 'ImageIdentify',
      component: ImageIdentify
    }
  ]
})
