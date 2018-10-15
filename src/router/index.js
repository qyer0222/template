import Vue from 'vue'
import Router from 'vue-router'
// 模块化构建
const Login = r => require.ensure([], () => r(require('../view/login/login')), 'login') // 登陆页面
const Home = r => require.ensure([], () => r(require('../view/home/home')), 'home')
const homePage1 = r => require.ensure([], () => r(require('../view/home/home-page1/home-page1')), 'homePage1')
const Page1 = r => require.ensure([], () => r(require('../view/page1/page1')), 'homePage1')
const homePage2 = r => require.ensure([], () => r(require('../view/home/home-page2/home-page2')), 'homePage2')
const homePage2Active2 = r => require.ensure([], () => r(require('../view/home/home-page2/home-page2-active2/home-page2-active2')), 'homePage2')
const homePage2Active1 = r => require.ensure([], () => r(require('../view/home/home-page2/home-page2-active1/home-page2-active1')), 'homePage2')
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
      meta: {
        index: 1,
        login: true
      },
      children: [
        {
          path: '',
          component: homePage1,
          meta: {
            index: 1,
            login: true
          },
          name: 'homePage1'
        },
        {
          path: '/homePage2',
          component: homePage2,
          children: [
            {
              path: '',
              component: homePage2Active1,
              name: 'homePage2',
              meta: {
                index: 2,
                login: true
              }
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
      meta: {
        index: 3,
        login: false
      },
      component: Page1
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      // 重定向到/页面
      path: '*',
      redirect: '/'
    }
  ]
})
