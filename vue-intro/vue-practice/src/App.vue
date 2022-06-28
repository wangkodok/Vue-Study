<template>
  <div>
    <h1>Hello {{ username }} !! 만나서 반갑습니다.</h1>
    <h1 v-text="`${username} 만나서 반갑습니다.`"></h1>
    <p>{{ year }}</p>
    <p>{{ user.name }}</p>
    <p>직업은 {{ user.job }} 입니다.</p>
    <p>{{ user.age }}</p>
    <p v-html="button"></p>
    <p v-html="button2"></p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "scalper!!!",
      year: 2022,
      user: {
        name: "scalper",
        job: "programmer",
        age: 30,
      },
      button: "<button>click!</button>",
      button2: `<button onclick="alert('ok')">click!</button>`,
      // button2: `<button onclick='document.body.style="background-color: red; transform: rotate(180deg);"''>click!</button>`,
    };
  },
};
</script>

<style></style>
