<template>
  <h2>Child Component</h2>
  <input type="text" v-model="username" />
</template>

<script>
export default {
  name: "Child-Comp",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    sayHello() {
      console.log("say Hello");
    },
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
