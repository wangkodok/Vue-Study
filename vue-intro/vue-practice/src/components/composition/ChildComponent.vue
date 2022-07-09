<template>
  <hr />
  <h2>{{ fullname }}</h2>
  <button @click="sendParent">child click</button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ChildComponent",
  props: ["firstname", "lastname"],
  // computed: {
  //   fullname() {
  //     return `${this.firstname} ${this.lastname}`;
  //   },
  // },
  setup(props, context) {
    const fullname = computed(() => {
      return `${props.firstname} ${props.lastname}`;
    });
    function sendParent() {
      context.emit("sendParent");
    }

    // onMounted(() => {
    //   inputRef.value.focus();
    //   console.log("onMounted");
    // });

    return {
      fullname,
      sendParent,
    };
  },
};
</script>

<style></style>
