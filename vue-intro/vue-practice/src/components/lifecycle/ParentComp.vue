<template>
  <h2>Parent Component</h2>
  <input v-model="nickname" ref="inputRef" />
  <button @click="consoleRef">consoleRef</button>
  <hr />
  <ChildComp v-if="showChild" ref="childComp" />
  <button @click="showChild = false">unmount child</button>
</template>

<script>
import ChildComp from "./ChildComp.vue";
export default {
  name: "Parent-Comp",
  data() {
    return {
      nickname: "",
      showChild: true,
    };
  },
  methods: {
    consoleRef() {
      // this.$refs.inputRef.focus();
      // this.$refs.inputRef.style.border = "1px solid red";
      console.log(this.$refs.inputRef, this, "inputRef");
      console.log(this.$refs.childComp, this, "childComp");
      this.$refs.childComp.sayHello();
    },
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
    // console.log("child beforeUpdate");
  },
  undated() {
    // console.log("child undated");
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
