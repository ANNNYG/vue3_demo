// defineAsyncComponent异步注入
import { defineAsyncComponent } from "vue";

import InputComponents from "@/page/InputComponent";

const HomeAsync = defineAsyncComponent(() => import("@/page/Home"));
const TestComponentVModule = defineAsyncComponent(() =>
  import("@/page/TextComponentVModule")
);
const UseHook = defineAsyncComponent(() => import("@/page/UseHook"));

const Commun = () => require("@/page/Communication/father.vue");
const ReturnH = () => require("@/page/ReturnH");

//路由配置还是和vue2一样
export default [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: HomeAsync },
  { path: "/usehook", name: "usehook", component: UseHook },
  { path: "/commun", name: "Commun", component: Commun },
  { path: "/returnh", name: "ReturnH", component: ReturnH },
  { path: "/input", name: "InputComponents", component: InputComponents },
  {
    path: "/testComponentVModule",
    name: "InputComponents",
    component: TestComponentVModule,
  },
];
