<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]

</script>

<template>
  <v-footer class="d-flex flex-column" color="blue"  rounded="lg">
    <div class="d-flex w-100 align-center px-4 py-2">
      <strong>Join the FamFunZ Community</strong>

      <div class="d-flex ga-2 ms-auto">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          size="small"
          variant="plain"
        ></v-btn>
      </div>
    </div>

    <div class="px-4 py-2 bg-surface-variant text-center w-100 rounded-lg">
      <p class="text-body-2 mb-0">Share your own family adventures and connect with other parents in Zrich</p>
    </div>
  </v-footer>
</template>