<template>
  <div ref="div">
    <h2>鼠标位置：{{ x }}--{{ y }}</h2>
    <button @click="getDiv">获取div</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMousePosition } from "./hook/UseMousePosition";

export default {
  setup() {

    const { x, y } = useMousePosition();
    //ref定义的名字要和dom上ref的名字相同 ref还需要return出去 不然拿到的是null
    const div = ref(null);

    const getDiv = () => {
      //$refs["div"]报错
      console.log(div.value);
      console.log(div);
    };
    return { x, y, getDiv ,div};
  },
};
</script>
<style lang="scss" scoped></style>
