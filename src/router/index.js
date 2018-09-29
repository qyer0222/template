import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home/home'
// import clHeader from '@/components/cl-header/cl-header'
import homePage1 from '../view/home/home-page1/home-page1'
import Page1 from '../view/page1/page1'
import homePage2 from '../view/home/home-page2/home-page2'
import homePage2Active2 from '../view/home/home-page2/home-page2-active2/home-page2-active2'
import homePage2Active1 from '../view/home/home-page2/home-page2-active1/home-page2-active1'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          component: homePage1,
          name: 'homePage1'
        },
        {
          path: '/homePage2/:id',
          component: homePage2,
          name: 'homePage2',
          children: [
            {
              path: '/homePage2/active1',
              component: homePage2Active1,
              name: 'homePage2Active1'
            },
            {
              path: '/homePage2/active2',
              component: homePage2Active2,
              name: 'homePage2Active2'
            }]
        }]
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1
    }
  ]
})
