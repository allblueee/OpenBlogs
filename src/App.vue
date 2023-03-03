<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavHeader from "./components/Navigation/NavHeader.vue";
</script>

<template>
  <el-affix :offset="0" style="background-color: white;box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%); border-bottom: 1px solid #f1f1f1;">
    <NavHeader />
  </el-affix>
  <RouterView style="height:100%;" />
</template>

<style scoped></style>
