<template>
  <!-- <h2>{{ state.username }}</h2> -->
  <!-- <h2>{{ state.age }}</h2> -->

  <!-- <h2>{{ username }}</h2> -->
  <!-- <h2>{{ age }}</h2> -->

  <h2>{{ isHandsome }}</h2>
  <h2>handsome? {{ isNotUgly }}</h2>

  <h2>handsome? {{ isHandsome }}</h2>
  <!-- <h3>{{ state.name }}</h3> -->
  <h3>{{ name }}</h3>
</template>

<script>
// import { reactive, toRefs } from "vue";
import { ref, reactive, toRefs } from "vue";
export default {
  name: "TestComponent",
  setup() {
    let isHandsome = ref(false);
    const state = reactive({
      name: "scalper",
      age: 50,
      job: "dev",
    });
    // let isNotUgly = isHandsome;
    // isHandsome.value = true;
    // console.log(isNotUgly);
    return {
      isHandsome,
      ...toRefs(state),
      // state,
      // isNotUgly,
    };
    // const state = reactive({
    //   username: "Scalper",
    //   age: 50,
    // });
    // return toRefs(state);

    // return {
    //   // state,
    //   username: state.username,
    //   age: state.age,
    // };
    // const username = "scalper";
    // const username = "scalper";
    // return {
    //   username,
    // };
  },
  // data() {
  //   return {
  //     username: "Scalper",
  //   };
  // },
};
</script>

<style></style>
