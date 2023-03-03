<template>
    <el-card shadow="hover" class="article-list">
        <div class="title"><span>{{ title }}</span>
            <div><el-button @click="handleEdit">
                    编辑</el-button>
                <el-button @click="handleDelete">删除</el-button>
            </div>

        </div>
        <div class="info"><span>{{ updateTime }}</span></div>

    </el-card>
</template>

<script setup lang="ts">
import { SArticleDelete } from '@/views/editor/services';
import { useRequest } from 'vue-hooks-plus';

const props = defineProps({
    articleId: Number,
    title: String,
    updateTime: String,
})
const emits = defineEmits(['delete'])
const href = "/editor/drafts/" + props.articleId
const { runAsync: runAsyncDelete } = useRequest(SArticleDelete, { manual: true })

const handleDelete = () => {
    runAsyncDelete(String(props.articleId)).then(res => { emits('delete') }).catch(err => { console.error(err) })
}
const handleEdit = () => {
    window.open(href, '_blank')
}
</script>

<style scoped>
.link {
    text-decoration: none
}

.article-list {
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid #e5e6eb;
}

.title {
    position: relative;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
}

.info {
    font-weight: 400;
    font-size: 14px;
    height: 22px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #86909c;
}
</style>