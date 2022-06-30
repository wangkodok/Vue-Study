<template>
  <div>
    <!-- <ul>
      <li v-for="prduct in products" :key="prduct.id">{{ prduct }}</li>
    </ul> -->

    <!-- <ProductList :products="products" /> -->
    <GreetingUser id="greeting" />
  </div>
</template>

<script>
// import ProductList from "./components/ProductList.vue";
import GreetingUser from "./components/GreetingUser.vue";
export default {
  name: "App",
  components: {
    // ProductList,
    GreetingUser,
  },
  data() {
    return {
      // products: [
      //   { id: 0, name: "tv", price: 500000, company: "lg" },
      //   { id: 1, name: "전자렌지", price: 200000, company: "삼성" },
      //   { id: 2, name: "가스오븐", price: 300000, company: "한화" },
      //   { id: 3, name: "냉장고", price: 500000, company: "대우" },
      //   { id: 4, name: "에어컨", price: 1000000, company: "해태" },
      // ],
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
