<template>
  <div class="wrapper">
    <div class="container">
      <h2>Detail Page</h2>
      <button @click="closeDetail">close</button>
      <input type="text" v-model="username" />
      <button @click="sendData">sendData</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "displayPage",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    closeDetail() {
      this.$emit("closeDetail");
    },
    sendData() {
      this.$emit("sendData", this.username);
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  background-color: #fff;
  width: 60%;
}
</style>
