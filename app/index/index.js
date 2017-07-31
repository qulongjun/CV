//============导入JS文件=============
import Vue from 'vue'
import VueResource from 'vue-resource'
import 'mod/jquery'
import 'pagepiling.js'
import './js/index'
import router from './router/router'

//===========导入Vue组件==============
import App from './app.vue'
import Container from './components/container.vue'


//==========导入CSS文件===============
import './style/index.css'
import './style/font.css'
import 'pagepiling.js/dist/jquery.pagepiling.min.css'

Vue.config.debug = true;//开启错误提示
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

Vue.component('my-component', Container);
new Vue({
    render: h => h(App),
    router,
}).$mount('#app');

