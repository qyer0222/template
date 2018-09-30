import Vue from 'vue'
import Router from 'vue-router'
// 路由懒加载
const Login = () => import('../view/login/login') // 登陆页面
const Home = () => import('../view/home/home') // 主页面
const homePage1 = () => import('../view/home/home-page1/home-page1')
const Page1 = () => import('../view/page1/page1')
const homePage2 = () => import('../view/home/home-page2/home-page2')
const homePage2Active2 = () => import('../view/home/home-page2/home-page2-active2/home-page2-active2')
const homePage2Active1 = () => import('../view/home/home-page2/home-page2-active1/home-page2-active1')

Vue.use(Router)
// 使用的是history模式
// 浏览器默认记住滚动行为
export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: homePage1,
          name: 'homePage1'
        },
        {
          path: '/homePage2',
          component: homePage2,
          children: [
            {
              path: '',
              component: homePage2Active1,
              name: 'homePage2'
            },
            {
              path: 'active2',
              component: homePage2Active2,
              name: 'homePage2Active2'
            }]
        }]
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
