<template>
    <div>
        <div v-for="articleItem in articleList">
            <ArticleItem @delete="handleDelete" :articleId="articleItem.id" :title="articleItem.title"
                :updateTime="articleItem.updatedAt" />
        </div>
        <el-pagination :page-count="total" :current-page="currentPage" @current-change="handleCurrentChange"
            layout="prev, pager, next"></el-pagination>
    </div>
</template>

<script setup lang="ts">
import { useRequest, useToggle } from "vue-hooks-plus";
import ArticleItem from "./articleItem.vue";
import { SArticleGetNumber, SArticleGetPublished } from "./services";
const [ready, { toggle }] = useToggle(true);
const { data: articleList } = useRequest(
    () => SArticleGetPublished(currentPage.value),
    { refreshDeps: true, ready }
);
const { data: total } = useRequest(() => SArticleGetNumber("published"));
let currentPage = ref<number>(1);
const handleCurrentChange = (n: any) => {
    currentPage.value = n;
};
const handleDelete = () => {
    toggle();
    toggle();
}
</script>

<style scoped></style>
