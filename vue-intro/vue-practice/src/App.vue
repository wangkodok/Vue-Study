<template>
  <div>
    <h2>Hello Mixins</h2>
    <ProductStatus />
    <FeeStatus />
    <SavingStatus />
  </div>
</template>

<script>
import ProductStatus from "./components/mixin/ProductStatus.vue";
import FeeStatus from "./components/mixin/FeeStatus.vue";
import SavingStatus from "./components/mixin/SavingStatus.vue";
export default {
  name: "App",
  components: {
    ProductStatus,
    FeeStatus,
    SavingStatus,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
