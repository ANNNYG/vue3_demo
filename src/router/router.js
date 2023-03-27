import { defineAsyncComponent } from "vue";

// defineAsyncComponent异步注入
const HomeAsync = defineAsyncComponent(() => import("@/page/Home"));
const TestComponentVModule = defineAsyncComponent(() =>
  import("@/page/TextComponentVModule")
);

import InputComponents from "@/page/InputComponent";
import Commun from "@/page/Communication/father.vue";
import ReturnH from "@/page/ReturnH";
import UseHook from "@/page/UseHook";
import StudyRef from "@/page/StudyRef";

//路由配置还是和vue2一样
export default [
  { title: "首页导航栏", path: "/home", name: "home", component: HomeAsync },
  {
    title: "学习ref使用",
    path: "/studyref",
    name: "studyref",
    component: StudyRef,
  },
  {
    title: "使用自定义hook",
    path: "/usehook",
    name: "usehook",
    component: UseHook,
  },
  { title: "父子通信", path: "/commun", name: "Commun", component: Commun },
  { title: "返回H函数", path: "/returnh", name: "ReturnH", component: ReturnH },
  {
    title: "vue输入框拦截",
    path: "/input",
    name: "InputComponents",
    component: InputComponents,
  },
  {
    title: "组件的v-module",
    path: "/testComponentVModule",
    name: "InputComponents",
    component: TestComponentVModule,
  },
];
