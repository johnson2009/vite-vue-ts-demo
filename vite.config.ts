import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

//手工引入Element plus
//import ElementPlus from 'unplugin-element-plus/vite'

//auto import Element-Plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    vue(),
    //ElementPlus(),
    // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
    AutoImport({
     imports:['vue'],
      resolvers: [
        ElementPlusResolver(),
      ],
      dts: "./auto-imports.d.dt",
    }),

    Components({
      dts: "./components.d.ts",
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        // IconsResolver({
        //   //prefix 默认i
        //   prefix: false,
        //   enabledCollections: ['ep'],
        //   // alias:{
        //   //   'icon': "ep"
        //   // }
        // })
      ],
    }),
    // Icons({
    //   autoInstall: true,
    // }),
  ],
  //这个resolve是添加的别名
  resolve:{
    alias:[
      {
        find:"@", replacement:"/src",
      }
    ]
  },

  
})
