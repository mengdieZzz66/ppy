import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/router'
// 每个页面组件要挂载到app根组件，然后app跟组件要挂载到#app容器上（#app容器是public下index.html里面的一个div盒子）
const app = createApp(App)
    // 使用路由器
app.use(router)

app.mount('#app')