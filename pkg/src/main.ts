import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

router.beforeEach((to, _from, next) => {
    if (to.meta&&to.meta.title) {
        document.title = <string>to.meta.title
    }
    next()
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')