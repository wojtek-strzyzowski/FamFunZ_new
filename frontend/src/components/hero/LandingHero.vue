<script setup>
import AdventureCard from '../cards/AdventureCard.vue';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

</script>

<template>
  <v-container fluid class="hero-section">
    <!-- Hero Top: Avatar + Text + Search -->
    <v-row class="d-flex align-center justify-center mb-12">
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
        <div class="hero-search-wrapper mt-8">
          <p class="hero-search-title">
            Where to go with the kids today?
          </p>

          <div class="hero-search-bar">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              placeholder="Search activities..."
              flat
              hide-details
              density="comfortable"
            />
            <v-btn color="primary" class="hero-search-btn">
             Suchen
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Stats Cards -->
        <v-row class="stats-row" dense>
          <v-col cols="4" class="mb-4">
            <v-card class="pa-4 text-center h-100">
              <div class="text-h6 font-weight-bold">150+</div>
              <div class="text-body-2">Family Adventures</div>
            </v-card>
          </v-col>

          <v-col cols="4" class="mb-4">
            <v-card class="pa-4 text-center h-100">
              <div class="text-h6 font-weight-bold">89</div>
              <div class="text-body-2">Active Families</div>
            </v-card>
          </v-col>

          <v-col cols="4" class="mb-4">
            <v-card class="pa-4 text-center h-100">
              <div class="text-h6 font-weight-bold">25+</div>
              <div class="text-body-2">Locations Covered</div>
            </v-card>
          </v-col>
        </v-row>
  </v-container>
<!-- kommen später die 3d cards für turn arounds :D -->

<slot/>
<adventure-card />


</template>



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

.hero-search-wrapper {
  background: white;
  border-radius: 28px;
  padding: 24px 28px;
  max-width: 720px;
  margin: 0 auto;
  box-shadow: 0 25px 60px rgba(90, 100, 160, 0.25);
}

.hero-search-title {
  text-align: center;
  font-weight: 600;
  color: #5b5f97;
  margin-bottom: 16px;
}

.hero-search-bar {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-search-input .v-field__prepend-inner {
  margin-left: 12px;
}

.hero-search-btn {
  border-radius: 50%;
}
</style>
