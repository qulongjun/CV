import en from '../components/en.vue'
import cn from '../components/cn.vue'
//路由映射
var routes = [
    {
        path: "/en",
        name: "/en",
        component: en
    },
    {
        path: "/cn",
        name: "/cn",
        component: cn
    }
];

module.exports = routes;