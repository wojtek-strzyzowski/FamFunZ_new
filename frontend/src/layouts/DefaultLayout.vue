<script setup>
import AppHeader from '../components/ui/AppHeader.vue'
import AppFooter from '../components/ui/footer.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content mit Abstand oben und unten -->
    <v-main class="flex-grow-1 pt-6 pb-6">
      <slot></slot>
    </v-main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style scoped>
/* pt-6 = padding-top, pb-6 = padding-bottom */
</style>