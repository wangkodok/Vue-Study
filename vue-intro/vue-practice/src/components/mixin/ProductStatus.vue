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
import moneyMixins from "../../mixins/moneyMixins.js";
export default {
  name: "ProductStatus",
  mixins: [moneyMixins],
  components: {},
  data() {
    return {
      // totalMoney: 0,
      totalMoney: 3000,
    };
  },
  methods: {
    // addMoney(price) {
    //   this.totalMoney = this.totalMoney + price;
    // },
  },
};
</script>

<style></style>
