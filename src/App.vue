<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavHeader from "./components/Navigation/NavHeader.vue";
</script>

<template>
  <el-affix :offset="0">
    <NavHeader />
  </el-affix>

  <RouterView />
</template>

<style scoped></style>
