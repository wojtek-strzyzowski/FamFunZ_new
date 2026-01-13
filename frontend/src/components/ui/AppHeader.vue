<script setup>
</script>

<template>
  <v-app-bar app flat color="background" height="80">
    <div class="d-flex align-center ms-4">
      <v-avatar size="40" color="primary">
        <span class="text-white text-h6">F</span>
      </v-avatar>

      <div class="ms-3">
        <div class="text-h7 text-blue-darken-2 font-weight-bold">FamFunZ</div>
        <div class="text-caption text-grey-darken-1">Explore. Share. Connect.</div>
      </div>
    </div>

    <v-spacer />

    <v-btn size="small" variant="tonal" class="text-black me-2">Explore</v-btn>
    <v-btn size="small" color="deep-purple-accent-2" variant="flat">Sign In</v-btn>

  </v-app-bar>
</template>

<style scoped>  
/* Optional: minimal, Vuetify übernimmt fast alles */
</style>
