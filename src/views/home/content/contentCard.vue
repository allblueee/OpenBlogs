<template>
    <li>
        <div class="entry">
            <div class="meta-container">
                <div> 作者</div>
                <div class="divider"></div>
                <div>日期</div>
            </div>
            <div class="content-wrapper">
                <div class="content-main">
                    <a class="title-row" target="_blank">{{ title }}</a>
                    <a class="abstract" target="_blank">{{ abstact }}</a>
                    <div class="action-list"></div>
                </div>
                <img src="" alt="">
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
// props: 用户名、发布/修改时间、分类、标题、简介、浏览量、点赞数、评论数、图片
defineProps({
    title: String,
    abstact: String,
    updateTime: String,
})
</script>

<style scoped>
.divider {
    width: 1px;
    height: 14px;
    background: #e5e6eb;
    margin: 0 8px;
}

.meta-container {
    display: flex;
    justify-content: start;
    align-items: center;
}

li {
    list-style-type: none;
}

.content-wrapper {
    margin-top: 6px;
    padding-bottom: 12px;
    border: 1px;
    display: flex;
    border-bottom: 1px solid #e5e6eb;
}

.entry {
    position: relative;
    cursor: pointer;
    padding: 12px 20px 0;
}

.content-main {
    flex-grow: 1;
}

.title-row {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    margin-bottom: 8px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.abstract {
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: #86909c;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
</style>