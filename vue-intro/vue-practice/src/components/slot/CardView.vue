<template>
  <div class="card">
    <div class="card-head">
      <slot name="head"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-foot">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 1rem;
  margin-bottom: 1rem;
  width: 200px;
}
.card-head {
  color: red;
}
.card-body {
  color: green;
}
.card-foot {
  color: pink;
}
</style>
