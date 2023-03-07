<template>
    {{ data }}
</template>

<script setup lang="ts">
import { useRequest } from 'vue-hooks-plus';
import { SArticleGetRandom } from './services';

const { data } = useRequest(SArticleGetRandom)
</script>

<style scoped></style>