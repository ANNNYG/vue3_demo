<template>
  <div>
    <Children v-model:value="value" />
  </div>
</template>

<script>
import { ref } from "vue";
import Children from "./Children.vue";

export default {
  components: { Children },
  setup() {
    const value = ref(1);

    return {
      value,
    };
  },
};
</script>
<style lang="scss" scoped></style>
