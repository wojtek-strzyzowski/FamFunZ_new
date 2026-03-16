<script setup>
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
</script>

<template>

    <div class="d-flex justify-space-between align-center mb-4 mx-6">
      <h3 class="mb-0">Latest Adventures</h3>

      <div class="d-flex align-center" style="cursor: pointer;">
        <h3 class="text-body-2 ">See All</h3>
        <v-icon size="18">mdi-chevron-right</v-icon>
      </div>
    </div>


  <v-card
    class="mx-auto"
    max-width="350"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Number 10
    </v-card-subtitle>

    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions class="justify-space-between">
      <div class="justify-self-start">
        <v-btn color="orange" text="Share"></v-btn>
        <v-btn color="orange" text="Explore"></v-btn>
      </div>
      
       <div class="justify-self-end">
            <v-icon class="me-1" icon="mdi-heart" color="red" ></v-icon>
            <span class="subheading me-2">256</span>
            <span class="me-1"></span>
            <v-icon class="me-1" icon="mdi-share-variant"></v-icon><span class="subheading">45</span>
      </div>
    </v-card-actions>
    
    
  </v-card>
</template>

<style scoped>

    
</style>