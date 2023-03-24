/*
  vue3安装vue-router
  npm install vue-router@4
  vue-router4以下版本无法在vue3使用
*/
//createRouter创建一个可以被 Vue 应用程序使用的路由实例
//createWebHashHistory创建一个 hash 历史记录
import { createRouter, createWebHashHistory } from "vue-router";
import routes from './router'

 const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router