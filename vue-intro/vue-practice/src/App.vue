<template>
  <div>
    <h2>Hello Composition API</h2>
    <TestComponents />
  </div>
</template>

<script>
import TestComponents from "./components/composition/TestComponents.vue";
export default {
  name: "App",
  components: {
    TestComponents,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
