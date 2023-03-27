<template>
  <div>
    <!-- 
        如果发现报错了Syntax Error: TypeError: this.getOptions is not a function,因为包版本过高
        npm install node-sass@4.14.1  --save-dev   //安装node-sass指定版本
        npm install sass-loader@7.3.1  --save-dev  //安装依赖包sass-loader指定版本
        npm install style-loader  --save-dev       //安装style-loader
      -->
    <div
      class="title"
      v-for="router in routers"
      :key="router.title"
      @click="handleClick(router.path)"
    >
      <el-link>{{ router.title }}</el-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import Routers from "@/router/router.js";

export default {
  setup() {
    const $router = useRouter();

    const routers = ref(Routers);

    const handleClick = (path) => {
      $router.push(path);
    };

    return {
      routers,
      handleClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  height: 50px;
  display: flex;
  justify-content: center;
  border-bottom: 1px #ececec solid;
}
</style>
