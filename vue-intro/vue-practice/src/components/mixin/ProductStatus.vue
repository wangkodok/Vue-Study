<template>
  <div>
    <h2>전체 금액: {{ totalMoney }}</h2>
    <div>
      <!-- <button @click="totalMoney = totalMoney + 100">100</button> -->
      <button @click="addMoney(100)">100</button>
      <button @click="addMoney(200)">200</button>
      <button @click="addMoney(300)">300</button>
      <button @click="addMoney(400)">400</button>
    </div>
  </div>
</template>

<script>
import useMoney from "@/composables/useMoney";
export default {
  name: "ProductStatus",
  setup() {
    useMoney;
    const { addMoney, totalMoney } = useMoney();

    return {
      addMoney,
      totalMoney,
    };
  },
};
</script>

<style></style>
