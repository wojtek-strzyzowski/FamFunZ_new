<template>
  <v-container class="hero-section" fluid>
    <v-row align="center" justify="space-between">
      <v-col cols="12" md="6" class="hero-text">
        <h1>Willkommen bei FamFunZ</h1>
        <p>Entdecke familienfreundliche Orte & Abenteuer in Zürich</p>
        <v-text-field label="Search..." outlined dense hide-details /> <!-- Suchleiste muss noch sichtbar gemacht werden -->
      </v-col>
      <v-col cols="12" md="6" class="hero-image">
        <div style="width:100%;height:200px;background:lightblue;text-align:center;line-height:200px;">Avatar</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  padding: 4rem 2rem;
  background-color: rgba(255, 255, 255, 0.1); /* Test sichtbar */
}
.hero-text h1 {
  font-family: 'Playfair Display', serif;
}
.hero-text p {
  font-family: 'Inter', sans-serif;
}
</style>
