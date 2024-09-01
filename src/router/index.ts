import { createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    //设置路由的模式
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'main',
            component:()=>import('@/views/Main.vue')
        },
        {
            path:'/login', 
            name:'login',
            component:()=>import('@/views/Login.vue')
        },
        {
            path:'/index',
            name:'index',
            component:()=>import('@/views/Index.vue')
        },
        {
            path:'/icondemo',
            name:'icondemo',
            component: () => import(('@/views/IconDemo.vue'))
        }
    ]
});

export default router;