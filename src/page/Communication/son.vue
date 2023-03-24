<template>
  <div>
    <h2>这是子组件</h2>
    <h3>这是来自父组件的数据：{{ count }}</h3>
    <button @click="handleAdd">点击+1</button>
    <h2>父组件的count+1={{ CountAdd }}</h2>
  </div>
</template>

<script>
import { computed, watch, getCurrentInstance, onMounted } from "vue";

export default {
  props: ["count"],
  emits: ["handle-add"],
  /* 
    context中有emit 同vue2 $emit
  */
  setup(props) {
    //获取当前组件的实例
    const current = getCurrentInstance();
    const { proxy } = getCurrentInstance();

    const CountAdd = computed(() => {
      return props.count + 1;
    });

    watch(
      // () => props.count,
      props,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
        console.log("count变化了");
      }
    );

    const handleAdd = () => {
      console.log(props, "props");
      //context.emit("handleAdd");
      proxy.$emit("handleAdd");
    };

    onMounted(() => {
      console.log(proxy, "proxy");
      console.log(current, "current");
    });

    return {
      handleAdd,
      CountAdd,
    };
  },
};
</script>
<style lang="scss" scoped></style>
