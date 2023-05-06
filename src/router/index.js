/*
  vue3安装vue-router
  npm install vue-router@4
  vue-router4以下版本无法在vue3使用
*/
// createRouter 创建一个可以被 Vue 应用程序使用的路由实例
// createWebHashHistory 创建一个 hash 历史记录
// createWebHistory 创建历史路由
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";

const redirect = {
  path: "/",
  redirect: "/home",
};

const router = createRouter({
  history: createWebHistory(),
  routes: [redirect, ...routes],
});

// 模拟鉴权登陆
const isLogin = true;

// 注意死循环
router.beforeEach((to, from, next) => {
  if (!isLogin && to.name !== "home") {
    next({ name: "home" });
  }

  if (isLogin) {
    next();
    return;
  }

  next();
});

export default router;
