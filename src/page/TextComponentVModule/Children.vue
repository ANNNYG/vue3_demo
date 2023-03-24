<template>
  <button @click="handleClick">{{ value }}</button>
</template>

<script>
import { getCurrentInstance } from "vue";

export default {
  props: ["value"],
  emits: ["update:value"],

  setup(props) {
    const { proxy } = getCurrentInstance();

    const handleClick = () => {
      proxy.$emit("update:value", props.value + 1);
    };
    return {
      handleClick,
    };
  },
};
</script>
<style lang="scss" scoped></style>
