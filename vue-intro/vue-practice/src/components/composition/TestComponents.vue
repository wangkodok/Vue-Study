<template>
  <h2>Hello LifeCycle</h2>
  <!-- <input type="text" v-model="username" ref="inputRef" /> -->

  <ChildComponent
    firstname="Code"
    lastname="Scalper"
    @sendParent="sendParent"
  />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  name: "TestComponent",
  components: {
    ChildComponent,
  },
  methods: {
    sendParent() {
      console.log("클릭하면 나와라!!!");
    },
  },
};
</script>

<style></style>
