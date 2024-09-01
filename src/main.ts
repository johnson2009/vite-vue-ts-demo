import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/less/reset.less"
import router from './router'; //导入路由器
//手工导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createPinia} from 'pinia'

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router).mount('#app')

//createApp(App).use(router).mount('#app')

//手工导入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }