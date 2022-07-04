<template>
  <div>
    <h2>Hello LifeCycle</h2>
    <ParentComp />
  </div>
</template>

<script>
import ParentComp from "./components/lifecycle/ParentComp.vue";
export default {
  name: "App",
  components: {
    ParentComp,
  },
  beforeCreate() {
    console.log("parent beforeCreate");
  },
  created() {
    console.log("parent created");
  },
  beforeMount() {
    console.log("parent beforeMount");
  },
  mounted() {
    console.log("parent mounted");
  },
  beforeUpdate() {
    console.log("parent beforeUpdate");
  },
  undated() {
    console.log("parent undated");
  },
  beforeUnmount() {
    console.log("parent beforeUnmount");
  },
  unmounted() {
    console.log("parent unmounted");
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
