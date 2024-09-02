import { createRouter, createWebHistory} from "vue-router";
import Main from '@/views/Main.vue'
import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import IconDemo from '@/views/IconDemo.vue'
import Home from '@/views/Home.vue'
import { componentSizeMap } from "element-plus";

const router = createRouter({
    //设置路由的模式
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'main',
            component: Main,
            redirect:'/home',
            children:[
                {
                    path:'home',
                    name:'home',
                    component: Home
                }
            ]
        },
        {
            path:'/login', 
            name:'login',
            component: Login
        },
        {
            path:'/index',
            name:'index',
            component: Index
        },
        {
            path:'/icondemo',
            name:'icondemo',
            component: IconDemo
        }
    ]
});

export default router;