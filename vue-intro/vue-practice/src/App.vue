<template>
  <div>
    <h2>Hello HTTP Request</h2>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/http/TodoList.vue";
export default {
  name: "App",
  components: {
    TodoList,
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
