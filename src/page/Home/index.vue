<template>
  <div>
    <h1>Home</h1>
    <h2>name:{{ name }}</h2>
    <button @click="handleChangeName">改变name</button>
    <h2>age:{{ age }}</h2>
    <button @click="hanldleChangeAge">改变age</button>
    <h2>地址:{{ information.address }}</h2>
    <button @click="handleChangeAddress">改变地址</button>
    <h2>电话：{{ refInf.tel }}</h2>
    <button @click="handleChangeTel">ref和reactive的不同</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  //注意：setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。
  setup() {
    //这个值不是相应式的
    let name = "Tom";

    //ref函数定义一个响应式的数据 返回一个RefImpl对象，需要修改里面的value值
    const age = ref(18);

    //reactive作用: 定义一个对象类型的响应式数据（基本类型不要用它，要用re函数）
    const information = reactive({ tel: "18888888888", address: "广东" });

    //基本类型的数据：响应式依然是靠Object.defineProperty()的get与set完成的。
    //对象类型的数据：内部使用了Vue3.0中的一个新函数——reactive函数。
    const refInf = ref({ tel: "18888888888", address: "广东" });

    const handleChangeName = () => {
      console.log(name, "name");
      name = "Jony";
      console.log(name, "name非响应式数据");
    };

    const hanldleChangeAge = () => {
      console.log(age, "age ref函数定义的响应式数据");
      age.value += 1;
    };

    const handleChangeAddress = () => {
      console.log(information, "information reactive函数定义的响应式数据");
      information.address = "深圳";
    };

    const handleChangeTel = () => {
      console.log(refInf, "ref");
      console.log(information, "reactive");
      refInf.value.tel = "19999999999";
    };
    return {
      name,
      handleChangeName,
      age,
      hanldleChangeAge,
      information,
      handleChangeAddress,
      refInf,
      handleChangeTel,
    };
  },
};
</script>
<style lang="scss" scoped></style>
