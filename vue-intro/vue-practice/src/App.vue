<template>
  <div>
    <h1>Hello Vue!</h1>
    <h2 class="line-through">line-through</h2>
    <h2 v-bind:class="textDecoration" class="text-red">line-through</h2>
    <h2 :class="isDone === true ? 'line-through' : 'highlight'">
      line-through
    </h2>
    <h2
      :class="{
        highlight: isDone === false,
        'text-red': username === 'scalper',
      }"
    >
      Object 형태의 동적 클래스
    </h2>
    <h2
      :class="[
        isDone === true ? 'line-through' : 'highlight',
        username === 'scalper' ? 'text-red' : 'text-green',
      ]"
    >
      Array 형태의 동적 클래스 부여
    </h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "scalper",
      isDone: true,
      textDecoration: "line-through",
    };
  },
};
</script>

<style>
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.highlight {
  font-weight: bold;
  background-color: pink;
}
.line-through {
  text-decoration: line-through;
}
</style>
