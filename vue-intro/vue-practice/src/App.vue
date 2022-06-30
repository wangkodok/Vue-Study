<template>
  <div>
    <h1>Watchers</h1>
    <h2>current money :: {{ money }}</h2>
    <div>
      <button @click="money = money + 100">earn money</button>
      <button @click="money = money - 100">spend money</button>
    </div>
    <h2>{{ receit }}</h2>
    <button @click="receit.food = receit.food + 500">buy food</button>
    <hr />
    <input type="text" v-model="userName" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "scalper",
      money: 0,
      receit: {
        food: 3000,
        fee: 2000,
        fare: 10000,
      },
    };
  },
  computed: {},
  watch: {
    userName: {
      handler(newValue) {
        console.log(newValue, "newValue");
      },
      immediate: true,
    },
    // receit(newValue, oldValue) {
    //   console.log("영수증에 값 변화가 있음", newValue, oldValue);
    // },
    receit: {
      handler(newValue) {
        console.log("영수증에 값 변화", newValue);
      },
      deep: true,
    },
    money(newValue, oldValue) {
      if (newValue > 2000 && newValue > oldValue) {
        console.log("mission complete", oldValue);
      }
      if (oldValue < 1500 && newValue < oldValue) {
        console.log("save money!!");
      }
    },
  },
  directives: {},
  methods: {},
};
</script>

<style></style>
