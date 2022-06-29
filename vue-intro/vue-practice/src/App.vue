<template>
  <div>
    <h1>Hello Vue!</h1>
    <h2>5년 후 {{ add(5) }}</h2>
    <h2>10년 후 {{ add(10) }}</h2>
    <h2>15년 후 {{ add(15) }}</h2>
    <h2>20년 후 {{ add(20) }}</h2>
    <h2>25년 후 {{ add(25) }}</h2>
    <h2>동갑의 10명이 있다면 나의 총 합은 {{ multiply(age, 20) }}</h2>
    <h2>{{ getTotalScore(100) }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      age: 30,
      job: "front-end",
    };
  },
  methods: {
    add(num) {
      console.log(this);
      console.log(num);
      return this.age + num; // age 접근하려면 this 사용
    },
    multiply(num1, num2 = 10) {
      return num1 * num2;
    },
    getTotalScore(num) {
      console.log(this.job + "입니다.");
      return this.multiply(num, num);
    },
    // add: (num) => {
    //   console.log(this);
    //   return this.age + num; // lexical scope 함수에 선언에 따라 스코프가 결정
    // },
  },
};
</script>

<style></style>
