//============导入JS文件=============
import Vue from 'vue'
import VueResource from 'vue-resource'
import 'mod/jquery'
import 'pagepiling.js'

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
}).$mount('#app');


//百度统计代码，勿删
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?7708f6fa6ea985db4bdcde4c64a22161";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();