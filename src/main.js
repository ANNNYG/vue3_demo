//vue2 import Vue from 'vue
import { createApp } from "vue";
// element-ui
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// pinia
import { createPinia } from "pinia";

import router from "./router";
import App from "./App.vue";

/* 
vue2写法
new Vue({
  render: h => h(App),
}).$mount('#app') 
*/

//在 Vue 3 中，改变全局 Vue 行为的 API 现在被移动到了由新的 createApp 方法所创建的应用实例上,类似vue2中的vm
//vue3 createApp(App).mount('#app')
const app = createApp(App);

const pinia = createPinia();

//使用插件
app.use(router);
app.use(ElementPlus);
app.use(pinia);

app.mount("#app");
