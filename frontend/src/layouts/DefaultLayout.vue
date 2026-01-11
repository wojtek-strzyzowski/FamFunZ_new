<script setup>
  import AppHeader from '../components/ui/AppHeader.vue';
</script>

<template>
  <div class="default-layout">
    <AppHeader />
    <slot  ></slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.default-layout {
  min-height: 100vh;  /* sorgt dafür, dass Content sichtbar ist */
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
</style>
