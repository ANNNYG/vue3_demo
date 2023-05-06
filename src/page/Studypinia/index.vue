<template>
  <div>
    <h5>study-pinia</h5>
    <div>{{ count }}</div>
    <button @click="store.increment">+1</button>
    <button @click="store.decrement">-1</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCountStore } from "./store";

const store = useCountStore();
const { count } = storeToRefs(store);
</script>
