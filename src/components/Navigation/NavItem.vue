<template>
    <RouterLink :to="to" class="navItem">
        <slot />
    </RouterLink>
</template>

<script setup lang="ts">
defineProps<{ to: string }>()
</script>

<style scoped>
.navItem {
   margin: 5px; 
}
</style>