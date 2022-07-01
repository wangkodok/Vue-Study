<template>
  <div>
    <h2>Hello Slots</h2>
    <CardView>
      <template v-slot:head>
        <h3>Random Image</h3>
      </template>
      <template v-slot:default>
        <img src="https://placeimg.com/100/50/ang" alt="random" />
      </template>
      <template v-slot:foot> <small>thank you</small> </template>
    </CardView>
    <!-- <CardView>
      <img src="https://placeimg.com/100/50/ang" alt="random" />
    </CardView>
    <CardView>
      <ul>
        <li>짬뽕</li>
        <li>짜장</li>
      </ul>
    </CardView>
    <card-view> </card-view> -->
  </div>
</template>

<script>
import CardView from "./components/slot/CardView.vue";
export default {
  name: "App",
  components: {
    CardView,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
