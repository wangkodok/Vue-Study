<template>
  <h2>component 3</h2>
  <h3>passed Data from App = {{ name }}</h3>
</template>

<script>
export default {
  // name: "comp3",
  inject: ["name"],
};
</script>

<style></style>
