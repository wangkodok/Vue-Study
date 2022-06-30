<template>
  <div>
    <h1>Directives</h1>
    <h2 v-once>유저의 이름은 {{ userName }}</h2>
    <button @click="changeName">change name</button>
    <h2 v-pre>{{ userName }}</h2>
    <input v-focus type="text" />
    highlight<input v-focus type="text" v-highlight />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "scalper",
    };
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    highlight: {
      mounted(el) {
        console.log({ el });
        el.oninput = () => {
          el.style.backgroundColor = "salmon";
          el.style.color = "#fff";
        };
      },
    },
  },
  methods: {
    changeName() {
      console.log("name change!!!");
      this.userName = "code!!!";
    },
  },
};
</script>

<style></style>
