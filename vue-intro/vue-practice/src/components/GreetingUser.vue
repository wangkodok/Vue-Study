<template>
  <h2>Hello {{ username }}!!</h2>
</template>

<script>
export default {
  // name: "Greeting User",
  props: {
    // username: String,
    username: {
      type: String,
      default: "User!",
    },
  },
};
</script>

<style></style>
