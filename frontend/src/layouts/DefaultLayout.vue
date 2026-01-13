<script setup>
import AppHeader from '../components/ui/AppHeader.vue'
</script>

<template>
  <AppHeader />

  <v-main>
    <slot>  

    </slot>
  </v-main>
</template>

<style scoped>
/* Optional: minimal, Vuetify übernimmt fast alles */
</style>
