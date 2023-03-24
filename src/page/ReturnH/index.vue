<template>
  <div></div>
</template>

<script>
/* 
  createElment参数（也就是h函数）：
  createElment函数接受三个参数，分别是：
     参数一：tag（标签名）、组件的选项对象、函数（必选）；
     参数二：一个对象，标签的属性对应的数据（可选）；
     参数三：子级虚拟节点，字符串形式或数组形式，子级虚拟节点也需要使用createElement构建。
*/
import { h, ref } from "vue";
import Home from "@/page/Home";

export default {
  setup() {
    console.log(Home,'Home')
     const value = ref("vue3");
     return () => h("div", value.value);
    //return () => h(Home)
  },
};
</script>
<style lang="scss" scoped></style>
