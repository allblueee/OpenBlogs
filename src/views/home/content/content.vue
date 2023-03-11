<template>
    <div>
        <ContentCard v-for="item in data" :title="item.title" :abstact="item.content" :updateTime="item.updatedAt" />
    </div>
</template>

<script setup lang="ts">
import { useRequest } from 'vue-hooks-plus';
import { SArticleGetRandom } from '../services';
import ContentCard from './contentCard.vue';

const { data } = useRequest(SArticleGetRandom)
</script>

<style scoped></style>