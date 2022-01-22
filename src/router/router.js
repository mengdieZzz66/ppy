// 第一步，npm安装路由插件npm install vue-router@next --save
// 2、引入vue-router里面的函数
import { createWebHistory, createRouter } from "vue-router";
// 4、引入路由 red 和 yellow
import red from '../components/red.vue'
import yellow from '../components/yellow.vue'


// 3、创建路由表
const routes = [
        { path: '/red', name: 'red', component: red },
        { path: '/yellow', name: 'yellow', component: yellow }
    ]
    // 5、创建路由器，并暴露
export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})