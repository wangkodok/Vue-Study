<template>
  <div>
    <!-- <GreetingUser username="scalper" /> -->
    <GreetingUser :username="username" />
    <GreetingUser username="dooli" />
    <GreetingUser username="pororo" />
    <GreetingUser username="monkey" />
    <GreetingUser />
    <button @click="changeName()">change</button>
  </div>
</template>

<script>
import GreetingUser from "./components/GreetingUser.vue";
export default {
  name: "App",
  components: {
    GreetingUser: GreetingUser,
  },
  data() {
    return {
      username: "scalper",
    };
  },
  methods: {
    changeName() {
      this.username = "DDoch";
    },
  },
};
</script>

<style></style>
