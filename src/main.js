import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import VueCookie from 'vue-cookie'
import { userInfo } from './api'
import ElementUI from 'element-ui'
import lqbUI from '../lib/lgbui.min'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(lqbUI)
Vue.use(infiniteScroll)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/load.gif'
  // attempt: 1
})
Vue.config.productionTip = false
const whiteList = ['/home', '/goods', '/login', '/goodsDetails', '/register'] // 不需要登陆的页面
router.beforeEach(function (to, from, next) {
  userInfo().then(res => {
    if (res.status === '1') { // 没登录
      if (whiteList.indexOf(to.path) !== -1||(to.path.indexOf("/search/")>-1||to.path.indexOf("/category/")>-1)) { // 白名单
        next()
      } else {
        next('/login')
      }
    } else {
      store.commit('RECORD_USERINFO', {info: res.result})
      if (to.path === '/login') { //  跳转到
        next({path: '/'})
      }
      next()
    }
  })
})

router.afterEach(function (to, from, next) {
  document.documentElement.scrollTop=0;
})

/* eslint-disable no-new */
let map = {};
window.onhashchange=function(){
  setTimeout(function(){
    document.documentElement.scrollTop= map[location.hash];
  },240);
}
window.onscroll = function() {
  map[location.hash] = document.documentElement.scrollTop;
}

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
