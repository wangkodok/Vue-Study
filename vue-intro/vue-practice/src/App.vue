<template>
  <div>
    <h2>Hello Component</h2>
    <!-- <CompLevel1 :username="username" /> -->
    <button @click="activeTab = 'MenuCount1'">Menu 1</button>
    <button @click="activeTab = 'MenuCount2'">Menu 2</button>
    <button @click="activeTab = 'MenuCount3'">Menu 3</button>
    <!-- <MenuCount1 v-if="activeTab === 'MenuCount1'" /> -->
    <!-- <MenuCount2 v-if="activeTab === 'MenuCount2'" /> -->
    <!-- <MenuCount3 v-if="activeTab === 'MenuCount3'" /> -->
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
  </div>
</template>

<script>
// import CompLevel1 from "./components/provide-inject/CompLevel1.vue";
import MenuCount1 from "./components/tabItems/MenuCount1.vue";
import MenuCount2 from "./components/tabItems/MenuCount2.vue";
import MenuCount3 from "./components/tabItems/MenuCount3.vue";
export default {
  name: "App",
  components: {
    // CompLevel1,
    MenuCount1,
    MenuCount2,
    MenuCount3,
  },
  data() {
    return {
      username: "scalper",
      activeTab: "MenuCount1",
    };
  },
  provide() {
    return {
      name: this.username,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
