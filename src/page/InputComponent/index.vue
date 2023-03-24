<template>
  <input @input="inputChange" :value="inputValue" />
  <button @click="handleClick">btn</button>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const inputValue = ref("");

    const inputChange = (e) => {
      const { value } = e.target;
      if (value.length > 5) {
        return;
      }
      inputValue.value = value;
    };

    const handleClick = () => {
      console.log(inputValue);
    };

    watch(inputValue, (value, preValue) => {
      console.log(value, preValue);
    });

    return {
      inputValue,
      inputChange,
      handleClick,
    };
  },
};
</script>
<style lang="scss" scoped></style>
