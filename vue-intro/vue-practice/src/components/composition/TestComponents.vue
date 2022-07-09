<template>
  <h2>Hello Reusability</h2>
  <hr />
  <FeeStatus />
  <hr />
  <ProductStatus />
  <hr />
  <SavingStatus />
</template>

<script>
import FeeStatus from "../mixin/FeeStatus.vue";
import ProductStatus from "../mixin/ProductStatus.vue";
import SavingStatus from "../mixin/SavingStatus.vue";
import {} from "vue";
export default {
  name: "TestComponent",
  components: {
    FeeStatus,
    ProductStatus,
    SavingStatus,
  },
};
</script>

<style></style>
