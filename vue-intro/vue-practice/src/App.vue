<template>
  <div>
    <h2>Hello Teleport</h2>
    <teleport to="#extra-modal" :disabled="isTeleport">
      <div class="modal">
        this is rtreas
        <button @click="isTeleport = !isTeleport">teleport toggle</button>
      </div>
    </teleport>
    <teleport to="#extra-modal">
      <div class="modal2">this is modal2</div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isTeleport: false,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style>
.modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
