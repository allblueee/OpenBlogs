<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavHeader from "./components/Navigation/NavHeader.vue";
</script>

<template>
  <div class="view-container">

    <NavHeader />
    <RouterView class="main-container" />
  </div>
</template>

<style scoped>
.view-container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
.main-container {
  margin-top: 61px;
}
</style>
