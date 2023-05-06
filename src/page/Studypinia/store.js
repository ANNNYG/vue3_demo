import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountStore = defineStore("count", () => {
  const count = ref(3);

  const increment = () => count.value++;

  const decrement = () => count.value--;

  return {
    count,
    decrement,
    increment,
  };
});
