<template>
  <v-container fluid class="hero-section">
    <!-- Hero Top: Avatar + Text + Search -->
    <v-row align="center" justify="center" class="mb-12">
      <!-- Avatar oben zentriert -->
      <v-col cols="12" class="d-flex justify-center">
        <v-avatar size="80" color="lightblue">
          <span>👪</span>
        </v-avatar>
      </v-col>

      <!-- Headline + Subline + Search -->
      <v-col cols="12" md="8" class="text-center">
        <h1 class="hero-title">From parents, for parents</h1>
        <p class="hero-subtitle">
          Family-friendly adventures in Zurich and surroundings, shared by real parents who've been there
        </p>

        <!-- Suchleiste -->
        <v-text-field
          label="Search activities, places, or tips..."
          outlined
          dense
          hide-details
          class="hero-search mt-4"
          append-inner-icon="mdi-magnify"
        />
      </v-col>
    </v-row>

    <!-- Stats Cards -->
    <v-row justify="center" align="stretch" class="stats-row" dense>
      <v-col cols="12" md="3" class="mb-4">
        <v-card class="pa-6 text-center">
          <div class="text-h5 font-weight-bold">150+</div>
          <div>Family Adventures</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" class="mb-4">
        <v-card class="pa-6 text-center">
          <div class="text-h5 font-weight-bold">89</div>
          <div>Active Families</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" class="mb-4">
        <v-card class="pa-6 text-center">
          <div class="text-h5 font-weight-bold">25+</div>
          <div>Locations Covered</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.hero-search {
  max-width: 500px;
  margin: 0 auto;
}

.stats-row .v-card {
  background-color: #f5f7ff;
  border-radius: 16px;
}
</style>
