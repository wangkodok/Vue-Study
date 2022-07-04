<template>
  <h2>Parent Component</h2>
  <ChildComp v-if="showChild" />
  <button @click="showChild = false">unmount child</button>
</template>

<script>
import ChildComp from "./ChildComp.vue";
export default {
  name: "Parent-Comp",
  data() {
    return {
      showChild: true,
    };
  },
  components: {
    ChildComp,
  },
  beforeCreate() {
    console.log("child beforeCreate");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child beforeMount");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUpdate() {
    console.log("child beforeUpdate");
  },
  undated() {
    console.log("child undated");
  },
  beforeUnmount() {
    console.log("child beforeUnmount");
  },
  unmounted() {
    console.log("child unmounted");
  },
};
</script>

<style></style>
