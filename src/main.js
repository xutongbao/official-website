// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import zhCN from '@/i18n/zh-CN.js'

/* 路由 */
import router from './router'

/* axios */
import axios from './api'
import api from './api/api'
Vue.prototype.http = axios;
Vue.prototype.api = api;

/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'

 
/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    if(to.meta.title){
      document.title = to.meta.title
    }
    next();
});

Vue.use(VueI18n)


const messages = {
  'zh-CN': {...zhCN},
}

let currentLocale = localStorage.getItem('language_type') || 'zh-CN'

const i18n = new VueI18n({
  locale: currentLocale, // 设置地区
  messages, // 设置地区信息
})



new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
