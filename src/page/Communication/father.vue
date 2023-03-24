<template>
<div>
  <h1>这是父组件</h1>
  <Son :count='count' @handleAdd='handleAdd'/>
</div>
</template>

<script>
import {ref} from 'vue'
import Son from './son.vue'

export default {
  components:{
    Son
  },
  setup() {
    const count = ref(0)
    const handleAdd = () => {
       count.value += 1
    }
    return {
      count,
      handleAdd,
    }
  }
}
</script>
<style lang='scss' scoped>
</style>